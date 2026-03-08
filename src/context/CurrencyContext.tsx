import React, { createContext, useContext, useState, useEffect } from 'react';

interface CurrencyContextType {
  currency: string;
  exchangeRate: number;
  isLoading: boolean;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
  setCurrency: (currency: string) => void;
  supportedCurrencies: string[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const SUPPORTED_CURRENCIES = ['KWD', 'USD', 'EUR', 'GBP', 'SAR', 'AED', 'QAR', 'BHD', 'OMR'];

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState(() => {
    return localStorage.getItem('sedra_currency') || 'KWD';
  });
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRates = async (targetCurrency: string) => {
    try {
      const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/KWD');
      const rateData = await rateRes.json();
      
      if (rateData && rateData.rates && rateData.rates[targetCurrency]) {
        setExchangeRate(rateData.rates[targetCurrency]);
      } else {
        setExchangeRate(1);
      }
    } catch (error) {
      console.error('Error fetching rates:', error);
      setExchangeRate(1);
    }
  };

  useEffect(() => {
    const detectCurrencyAndRates = async () => {
      setIsLoading(true);
      try {
        const savedCurrency = localStorage.getItem('sedra_currency');
        
        if (!savedCurrency) {
          let detectedCurrency = null;
          
          // Try ipapi.co first
          try {
            const geoRes = await fetch('https://ipapi.co/json/');
            const geoData = await geoRes.json();
            detectedCurrency = geoData.currency;
          } catch (e) {
            console.warn('ipapi.co failed, trying fallback...');
            // Fallback to ip-api.com (doesn't provide currency directly in free tier, but we can map country)
            try {
              const geoRes = await fetch('http://ip-api.com/json/');
              const geoData = await geoRes.json();
              // Simple mapping for common countries if currency not provided
              const countryToCurrency: Record<string, string> = {
                'KW': 'KWD', 'US': 'USD', 'GB': 'GBP', 'SA': 'SAR', 
                'AE': 'AED', 'QA': 'QAR', 'BH': 'BHD', 'OM': 'OMR',
                'FR': 'EUR', 'DE': 'EUR', 'IT': 'EUR', 'ES': 'EUR'
              };
              detectedCurrency = countryToCurrency[geoData.countryCode];
            } catch (e2) {
              console.error('All geolocation services failed');
            }
          }
          
          if (detectedCurrency && SUPPORTED_CURRENCIES.includes(detectedCurrency)) {
            setCurrencyState(detectedCurrency);
            localStorage.setItem('sedra_currency', detectedCurrency);
            await fetchRates(detectedCurrency);
          } else {
            await fetchRates(currency);
          }
        } else {
          await fetchRates(savedCurrency);
        }
      } catch (error) {
        console.error('Error detecting currency:', error);
        await fetchRates(currency);
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrencyAndRates();
  }, []);

  const setCurrency = async (newCurrency: string) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('sedra_currency', newCurrency);
    setIsLoading(true);
    await fetchRates(newCurrency);
    setIsLoading(false);
  };

  const convertPrice = (price: number) => {
    return price * exchangeRate;
  };

  const formatPrice = (price: number) => {
    const convertedPrice = convertPrice(price);
    
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: currency === 'KWD' || currency === 'BHD' || currency === 'OMR' ? 3 : 2,
        maximumFractionDigits: currency === 'KWD' || currency === 'BHD' || currency === 'OMR' ? 3 : 2,
      }).format(convertedPrice);
    } catch (e) {
      return `${convertedPrice.toFixed(currency === 'KWD' ? 3 : 2)} ${currency}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      exchangeRate, 
      isLoading, 
      formatPrice, 
      convertPrice, 
      setCurrency,
      supportedCurrencies: SUPPORTED_CURRENCIES
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
