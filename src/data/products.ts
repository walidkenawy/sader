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
    description: 'A masterpiece of refined luxury, Feeling Good is crafted for those who seek exclusivity beyond the ordinary.',
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
    description: 'Designed to evoke emotions and create unforgettable personal moments.',
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
    description: 'A bold statement of individuality and refined taste.',
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
    description: 'Reflecting timeless elegance and unmatched distinction.',
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
    description: 'Crafted with rare and premium ingredients for special occasions.',
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
    description: 'Designed for memorable moments with rich, deep, and long-lasting scents.',
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
    description: 'A heavenly scent that brings peace and tranquility.',
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
    description: 'A noble and powerful fragrance for the modern gentleman.',
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
    description: 'Capturing the warmth and mystery of the desert.',
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
    description: 'Perfect for everyday use. Fresh, versatile, and easy to wear.',
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
    description: 'Balances comfort with modern style, suitable for any adventure.',
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
    description: 'A sophisticated and modern fragrance with a metallic edge.',
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
    description: 'A rich and golden fragrance that exudes luxury.',
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
    description: 'A complete set featuring the Nero fragrance and more.',
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
    description: 'A mysterious and alluring set for special occasions.',
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
    description: 'A complete set featuring the Blanco fragrance and more.',
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
    description: 'A light, soft, and refreshing hair and body mist.',
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
    description: 'Adds charm and freshness without being overwhelming.',
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
    description: 'A vibrant and energetic hair and body mist.',
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
    description: 'A sophisticated and feminine hair and body mist.',
    size: '75ml',
    notes: {
      top: ['Pear', 'Bergamot'],
      heart: ['Orange Blossom', 'Jasmine'],
      base: ['Patchouli', 'Amber']
    }
  }
];
