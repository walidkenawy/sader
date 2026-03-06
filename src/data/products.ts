import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Private Collection
  {
    id: 'pc1',
    name: 'Feeling Good',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/572/image_1024',
    description: 'An olfactory masterpiece that radiates pure confidence. Feeling Good opens with the rare brilliance of Saffron and Bergamot, evolving into a regal heart of Oud and Rose. This fragrance is a celebration of refined luxury, leaving a trail of sophisticated Leather and warm Amber that commands respect and admiration.',
    size: '90ml',
    isNew: true,
    notes: {
      top: ['Bergamot', 'Saffron'],
      heart: ['Oud', 'Rose'],
      base: ['Amber', 'Leather']
    }
  },
  {
    id: 'pc2',
    name: 'Flashback',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/574/image_1024',
    description: 'A nostalgic journey captured in a bottle. Flashback intertwines the spicy allure of Cardamom and Pink Pepper with a delicate heart of Iris and Jasmine. Inspired by cherished memories and unforgettable moments, it settles into a creamy embrace of Sandalwood and Vanilla, creating a scent that is both intimate and timeless.',
    size: '90ml',
    notes: {
      top: ['Cardamom', 'Pink Pepper'],
      heart: ['Iris', 'Jasmine'],
      base: ['Sandalwood', 'Vanilla']
    }
  },
  {
    id: 'pc3',
    name: 'WHY NOT ?',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/575/image_1024',
    description: 'A bold, unapologetic statement for the modern visionary. WHY NOT? challenges the ordinary with an explosive opening of Ginger and Grapefruit, leading to an aromatic heart of Sage and Rosemary. Rooted in the earthy depth of Vetiver and Patchouli, it is a fragrance for those who dare to define their own path with elegance and flair.',
    size: '90ml',
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    }
  },
  {
    id: 'pc4',
    name: 'OLD MONEY',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/576/image_1024',
    description: 'The essence of inherited elegance and quiet luxury. OLD MONEY whispers of tradition and distinction with a crisp blend of Lemon and Mint, softened by a classic heart of Lavender and Geranium. The dry down of Cedarwood and Musk provides a sturdy, sophisticated foundation that feels both established and eternally modern.',
    size: '90ml',
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    }
  },
  // Luxury Collection
  {
    id: 'lc1',
    name: 'Dacova',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/21/image_1024',
    description: 'A decadent floral symphony designed for the grandest occasions. Dacova enchants with luscious Blackcurrant and Pear, blooming into a rich heart of Tuberose and Orange Blossom. The base of Praline and Tonka Bean adds a gourmand touch of irresistible sweetness, making every moment feel like a celebration of high-end glamour.',
    size: '120ml',
    notes: {
      top: ['Blackcurrant', 'Pear'],
      heart: ['Orange Blossom', 'Tuberose'],
      base: ['Tonka Bean', 'Praline']
    }
  },
  {
    id: 'lc2',
    name: 'Capri',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/20/image_1024',
    description: 'Inspired by the sun-drenched elegance of the Italian coast. Capri opens with a radiant burst of Mandarin and Neroli, leading to an opulent floral heart of Gardenia and Ylang-Ylang. This fragrance is a long-lasting tribute to summer sophistication, anchored by a smooth, sensual base of White Musk and Benzoin.',
    size: '120ml',
    notes: {
      top: ['Mandarin', 'Neroli'],
      heart: ['Ylang-Ylang', 'Gardenia'],
      base: ['White Musk', 'Benzoin']
    }
  },
  {
    id: 'lc3',
    name: 'Angelo',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/5/image_1024',
    description: 'A celestial fragrance that brings a sense of divine tranquility. Angelo balances the brightness of Bergamot and Lemon with a serene heart of Jasmine and Lily. The base of Vanilla and Musk provides a soft, ethereal glow, creating a scent that feels like a gentle embrace from the heavens, perfect for moments of quiet reflection.',
    size: '120ml',
    notes: {
      top: ['Bergamot', 'Lemon'],
      heart: ['Jasmine', 'Lily'],
      base: ['Vanilla', 'Musk']
    }
  },
  {
    id: 'lc4',
    name: 'Baron',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/19/image_1024',
    description: 'A noble and commanding fragrance for the modern gentleman. Baron exudes power and poise with a sharp opening of Grapefruit and Pepper, evolving into a refined heart of Lavender and Geranium. The earthy strength of Patchouli and Vetiver in the base ensures a lasting impression of authority and timeless masculine elegance.',
    size: '120ml',
    notes: {
      top: ['Grapefruit', 'Pepper'],
      heart: ['Geranium', 'Lavender'],
      base: ['Patchouli', 'Vetiver']
    }
  },
  {
    id: 'lc5',
    name: 'Sahara',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/116/image_1024',
    description: 'Capturing the golden mystery and untamed warmth of the desert dunes. Sahara is a rich tapestry of Saffron and Cinnamon, woven with a regal heart of Oud and Rose. The dry down of Amber and Sandalwood evokes the heat of the sun on sand, creating a fragrance that is as deep and enigmatic as the horizon itself.',
    size: '120ml',
    notes: {
      top: ['Saffron', 'Cinnamon'],
      heart: ['Oud', 'Rose'],
      base: ['Amber', 'Sandalwood']
    }
  },
  // Grande Collection
  {
    id: 'gc1',
    name: 'Blanco',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/22/image_1024',
    description: 'The ultimate expression of daily freshness and effortless style. Blanco is a crisp, invigorating blend of Lemon and Mint, perfectly balanced by a clean heart of Lavender. Designed for the active, modern individual, it provides a versatile and uplifting aura that transitions seamlessly from morning meetings to evening leisure.',
    size: '200ml',
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    }
  },
  {
    id: 'gc2',
    name: 'Nero',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/23/image_1024',
    description: 'A dynamic fragrance that balances urban comfort with a sense of adventure. Nero opens with the zing of Grapefruit and Ginger, leading to an aromatic heart of Sage and Rosemary. It is a modern classic for the daily explorer, grounded by the reliable and sophisticated depth of Vetiver and Patchouli.',
    size: '200ml',
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    }
  },
  {
    id: 'gc3',
    name: 'Platino',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/111/image_1024',
    description: 'A sleek and avant-garde fragrance with a distinctive metallic edge. Platino uses Aldehydes and Bergamot to create a shimmering opening, followed by a sophisticated heart of Iris and Jasmine. This scent is for the trendsetter, offering a clean, futuristic elegance that is anchored by White Musk and Cedarwood.',
    size: '200ml',
    notes: {
      top: ['Aldehydes', 'Bergamot'],
      heart: ['Iris', 'Jasmine'],
      base: ['White Musk', 'Cedarwood']
    }
  },
  {
    id: 'gc4',
    name: 'Dorado',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/69/image_1024',
    description: 'A radiant and opulent fragrance that glows with the warmth of gold. Dorado enchants with a citrus burst of Orange and Mandarin, melting into a sweet, floral heart of Honey and Rose. The base of Amber and Vanilla provides a rich, comforting finish that exudes a sense of daily luxury and approachable elegance.',
    size: '200ml',
    notes: {
      top: ['Orange', 'Mandarin'],
      heart: ['Honey', 'Rose'],
      base: ['Amber', 'Vanilla']
    }
  },
  {
    id: 'gc5',
    name: 'Nero Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/90/image_1024',
    description: 'The complete Nero experience, curated for the modern gentleman on the move. This exclusive set features the signature Nero fragrance—a dynamic blend of Grapefruit, Ginger, and Vetiver—accompanied by premium grooming essentials to ensure a consistent and lasting impression of urban sophistication.',
    size: 'Set',
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    }
  },
  {
    id: 'gc6',
    name: 'Scarlet Venom Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/237/image_1024',
    description: 'A mysterious and alluring collection for the bold and the beautiful. Scarlet Venom is a seductive dance of Red Fruits and Pink Pepper, blooming into a passionate heart of Rose and Jasmine. This set is designed for unforgettable evenings, leaving a trail of Patchouli and Vanilla that is both dangerous and divine.',
    size: 'Set',
    notes: {
      top: ['Red Fruits', 'Pink Pepper'],
      heart: ['Rose', 'Jasmine'],
      base: ['Patchouli', 'Vanilla']
    }
  },
  {
    id: 'gc7',
    name: 'Blanco Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/303/image_1024',
    description: 'The ultimate gift of freshness and vitality. This set features the iconic Blanco fragrance—a crisp mix of Lemon, Mint, and Lavender—alongside complementary products designed to enhance and prolong the invigorating scent. Perfect for those who appreciate a clean, energetic start to every day.',
    size: 'Set',
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    }
  },
  // Femi Collection
  {
    id: 'fc1',
    name: 'Ivory',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/25/image_1024',
    description: 'A whisper of pure, delicate femininity. Ivory is a light and refreshing mist that opens with the sweetness of Peach and Apple, evolving into a soft floral heart of Peony and Lily of the Valley. It is the perfect daily companion for the woman who appreciates subtle, clean, and understated elegance.',
    size: '75ml',
    notes: {
      top: ['Peach', 'Apple'],
      heart: ['Lily of the Valley', 'Peony'],
      base: ['White Woods', 'Soft Musk']
    }
  },
  {
    id: 'fc2',
    name: 'Ocean',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/24/image_1024',
    description: 'Capturing the serene and boundless spirit of the sea. Ocean is a refreshing mist of Sea Salt and Bergamot, leading to a tranquil heart of Water Lily and Jasmine. This fragrance is an invitation to escape to the coast, anchored by a base of Driftwood and Amber that feels both fresh and sophisticated.',
    size: '75ml',
    notes: {
      top: ['Sea Salt', 'Bergamot'],
      heart: ['Water Lily', 'Jasmine'],
      base: ['Driftwood', 'Amber']
    }
  },
  {
    id: 'fc3',
    name: 'Magenta',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/113/image_1024',
    description: 'A vibrant and energetic burst of color and scent. Magenta enchants with a playful blend of Raspberry and Blackcurrant, blooming into a romantic heart of Rose and Violet. This mist is for the woman who radiates joy and confidence, leaving a sweet, sophisticated trail of Vanilla and Musk.',
    size: '75ml',
    notes: {
      top: ['Raspberry', 'Blackcurrant'],
      heart: ['Rose', 'Violet'],
      base: ['Musk', 'Vanilla']
    }
  },
  {
    id: 'fc4',
    name: 'Vontana',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/26/image_1024',
    description: 'The epitome of sophisticated and modern femininity. Vontana opens with the elegance of Pear and Bergamot, leading to an opulent heart of Orange Blossom and Jasmine. This mist is a tribute to the contemporary woman, grounded by a warm, sensual base of Patchouli and Amber that ensures a lasting impression.',
    size: '75ml',
    notes: {
      top: ['Pear', 'Bergamot'],
      heart: ['Orange Blossom', 'Jasmine'],
      base: ['Patchouli', 'Amber']
    }
  }
];
