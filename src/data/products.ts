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
    video: '/video_1.mp4',
    description: 'A masterpiece of olfactory confidence, Feeling Good is a regal invitation to the world of Sedra. The fragrance opens with a luminous burst of Bergamot and the rare, spicy brilliance of Saffron, immediately commanding attention. Its heart reveals a majestic union of Oud and Rose, weaving a tapestry of traditional oriental depth. The journey concludes on a sophisticated foundation of rich Leather and warm Amber, leaving a trail of undeniable authority and refined luxury.',
    size: '90ml',
    isNew: true,
    story: 'Born from the desire to capture the feeling of a perfect morning in Kuwait, Feeling Good is more than a scent—it is a state of mind. It was crafted for the individual who walks with purpose and speaks with kindness, blending the ancient mystery of Saffron with the modern vibrancy of Bergamot.',
    mood: ['Confident', 'Regal', 'Sophisticated'],
    notes: {
      top: ['Bergamot', 'Saffron'],
      heart: ['Oud', 'Rose'],
      base: ['Amber', 'Leather']
    },
    olfactoryFamily: 'Oriental Woody'
  },
  {
    id: 'pc2',
    name: 'Flashback',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/574/image_1024',
    video: '/video_2.mp4',
    description: 'A nostalgic odyssey captured in crystal, Flashback is an intimate exploration of memory. The scent begins with the spicy, magnetic allure of Cardamom and Pink Pepper, sparking an immediate sensory awakening. At its core, a delicate and powdery heart of Iris and Jasmine unfolds like a cherished secret. The experience settles into a creamy, long-lasting embrace of Sandalwood and Vanilla, creating a timeless aura that feels both familiar and profoundly elegant.',
    size: '90ml',
    story: 'Flashback is a tribute to the power of memory. A single spray transports you to a sun-drenched courtyard, the air thick with the scent of blooming jasmine and the warmth of shared laughter. It is a fragrance that bridges the gap between who we were and who we are becoming.',
    mood: ['Nostalgic', 'Intimate', 'Timeless'],
    notes: {
      top: ['Cardamom', 'Pink Pepper'],
      heart: ['Iris', 'Jasmine'],
      base: ['Sandalwood', 'Vanilla']
    },
    olfactoryFamily: 'Floral Spicy'
  },
  {
    id: 'pc3',
    name: 'WHY NOT ?',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/575/image_1024',
    video: '/video_3.mp4',
    description: 'A bold, unapologetic manifesto for the modern visionary who dares to challenge the status quo. WHY NOT? ignites the senses with an explosive opening of zesty Grapefruit and sharp Ginger, embodying a spirit of relentless dynamism. The heart transitions into a sophisticated aromatic blend of Sage and Rosemary, reflecting intellectual depth. Grounded in the earthy, powerful sillage of Vetiver and Patchouli, it is a fragrance designed for those who define their own destiny with effortless flair.',
    size: '90ml',
    story: 'WHY NOT? is the olfactory embodiment of a challenge accepted. It was created for the risk-takers and the rule-breakers who see every "no" as an invitation to prove them wrong. The explosive ginger opening is a wake-up call to the senses, a reminder that greatness lies just beyond the comfort zone.',
    mood: ['Bold', 'Visionary', 'Dynamic'],
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    },
    olfactoryFamily: 'Aromatic Citrus'
  },
  {
    id: 'pc4',
    name: 'OLD MONEY',
    price: 45.000,
    currency: 'KWD',
    category: 'Private',
    image: 'https://www.sedraperfumes.com/web/image/product.template/576/image_1024',
    video: '/video_4.mp4',
    description: 'The olfactory embodiment of inherited grace and the quiet confidence of true distinction. OLD MONEY whispers of legacy with a crisp, revitalizing blend of Lemon and Mint, evoking the freshness of a private estate at dawn. A classic heart of Lavender and Geranium provides a bridge to tradition, while the deep, resonant dry down of Cedarwood and Musk ensures a sophisticated foundation that is eternally modern and unmistakably high-born.',
    size: '90ml',
    story: 'Old Money is a fragrance that doesn\'t need to shout to be heard. It represents the quiet confidence of legacy and the effortless grace of true distinction. Inspired by the libraries of grand estates and the crisp air of early morning rides, it is a scent for those who value substance over spectacle.',
    mood: ['Elegant', 'Traditional', 'Distinguished'],
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    },
    olfactoryFamily: 'Classic Fougere'
  },
  // Luxury Collection
  {
    id: 'lc1',
    name: 'Dacova',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/21/image_1024',
    description: 'A decadent floral symphony composed for life’s most luminous stages. Dacova enchants from the first spray with luscious notes of Blackcurrant and Pear, creating a vibrant, fruity prelude. The heart blooms into a rich, opulent tapestry of Tuberose and Orange Blossom, radiating high-end glamour. A gourmand base of Praline and Tonka Bean adds an irresistible depth of sweetness, ensuring every moment feels like a grand celebration of feminine power.',
    size: '120ml',
    story: 'Dacova is the scent of a grand entrance. It was inspired by the high-society galas of the Mediterranean, where the air is heavy with the scent of expensive flowers and the promise of a night to remember. It is a celebration of femininity in its most powerful and glamorous form.',
    mood: ['Glamorous', 'Decadent', 'Powerful'],
    notes: {
      top: ['Blackcurrant', 'Pear'],
      heart: ['Orange Blossom', 'Tuberose'],
      base: ['Tonka Bean', 'Praline']
    },
    olfactoryFamily: 'Floral Gourmand'
  },
  {
    id: 'lc2',
    name: 'Capri',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/20/image_1024',
    description: 'A radiant tribute to the sun-drenched elegance and effortless chic of the Italian coast. Capri opens with a luminous burst of Mandarin and Neroli, capturing the essence of a Mediterranean breeze. An opulent heart of Gardenia and Ylang-Ylang unfolds with a sensual, floral warmth that lingers beautifully. Anchored by a smooth base of White Musk and Benzoin, it is a long-lasting fragrance that embodies the spirit of eternal summer sophistication.',
    size: '120ml',
    notes: {
      top: ['Mandarin', 'Neroli'],
      heart: ['Ylang-Ylang', 'Gardenia'],
      base: ['White Musk', 'Benzoin']
    },
    olfactoryFamily: 'Floral Citrus'
  },
  {
    id: 'lc3',
    name: 'Angelo',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/5/image_1024',
    description: 'A celestial composition that evokes a sense of divine tranquility and inner peace. Angelo masterfully balances the citrus brightness of Bergamot and Lemon with a serene, white floral heart of Jasmine and Lily. This ethereal blend is enveloped in a soft, luminous glow of Vanilla and Musk, creating a fragrance that feels like a gentle, protective embrace—perfect for moments of quiet reflection and spiritual grace.',
    size: '120ml',
    notes: {
      top: ['Bergamot', 'Lemon'],
      heart: ['Jasmine', 'Lily'],
      base: ['Vanilla', 'Musk']
    },
    olfactoryFamily: 'Ethereal Floral'
  },
  {
    id: 'lc4',
    name: 'Baron',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/19/image_1024',
    description: 'A noble and commanding fragrance designed for the modern gentleman who leads with poise and authority. Baron exudes power with a sharp, spicy opening of Grapefruit and Black Pepper, creating an immediate sense of presence. A refined heart of Lavender and Geranium adds a layer of classic sophistication, while the earthy, masculine strength of Patchouli and Vetiver ensures a lasting impression of timeless elegance and unwavering confidence.',
    size: '120ml',
    notes: {
      top: ['Grapefruit', 'Pepper'],
      heart: ['Geranium', 'Lavender'],
      base: ['Patchouli', 'Vetiver']
    },
    olfactoryFamily: 'Woody Aromatic'
  },
  {
    id: 'lc5',
    name: 'Sahara',
    price: 35.000,
    currency: 'KWD',
    category: 'Luxury',
    image: 'https://www.sedraperfumes.com/web/image/product.template/116/image_1024',
    description: 'An evocative journey into the golden mystery and untamed warmth of the desert dunes. Sahara is a rich, multi-layered tapestry of Saffron and Cinnamon, woven with a majestic heart of Oud and Rose. The dry down of Amber and Sandalwood captures the intense heat of the sun on sand, creating a fragrance that is as deep, enigmatic, and boundless as the horizon itself—a true masterpiece of oriental perfumery.',
    size: '120ml',
    notes: {
      top: ['Saffron', 'Cinnamon'],
      heart: ['Oud', 'Rose'],
      base: ['Amber', 'Sandalwood']
    },
    olfactoryFamily: 'Oriental Spicy'
  },
  // Grande Collection
  {
    id: 'gc1',
    name: 'Blanco',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/22/image_1024',
    description: 'The ultimate expression of daily freshness and the art of effortless style. Blanco is a crisp, invigorating blend of Lemon and Mint, perfectly balanced by a clean, aromatic heart of Lavender. Designed for the active and modern individual, it provides a versatile and uplifting aura that transitions seamlessly from the boardroom to evening leisure, ensuring a constant sense of vitality and refinement.',
    size: '200ml',
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    },
    olfactoryFamily: 'Fresh Citrus'
  },
  {
    id: 'gc2',
    name: 'Nero',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/23/image_1024',
    description: 'A dynamic and sophisticated fragrance that masterfully balances urban comfort with a spirit of modern adventure. Nero opens with the vibrant zing of Grapefruit and Ginger, sparking a sense of immediate energy. An aromatic heart of Sage and Rosemary adds a layer of intellectual depth, while the reliable and powerful sillage of Vetiver and Patchouli ensures a modern classic that is perfect for the daily explorer.',
    size: '200ml',
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    },
    olfactoryFamily: 'Aromatic Woody'
  },
  {
    id: 'gc3',
    name: 'Platino',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/111/image_1024',
    description: 'A sleek, avant-garde composition with a distinctive metallic edge that pushes the boundaries of modern perfumery. Platino utilizes Aldehydes and Bergamot to create a shimmering, crystalline opening. A sophisticated heart of Iris and Jasmine adds a layer of refined floral depth, while the base of White Musk and Cedarwood provides a clean, futuristic elegance designed for the true trendsetter.',
    size: '200ml',
    notes: {
      top: ['Aldehydes', 'Bergamot'],
      heart: ['Iris', 'Jasmine'],
      base: ['White Musk', 'Cedarwood']
    },
    olfactoryFamily: 'Futuristic Floral'
  },
  {
    id: 'gc4',
    name: 'Dorado',
    price: 25.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/69/image_1024',
    description: 'A radiant and opulent fragrance that glows with the majestic warmth of liquid gold. Dorado enchants with a vibrant citrus burst of Orange and Mandarin, melting into a sweet, luxurious heart of Honey and Rose. The base of Amber and Vanilla provides a rich, comforting finish that exudes a sense of daily luxury and approachable elegance—a fragrance that illuminates the wearer with a golden aura.',
    size: '200ml',
    notes: {
      top: ['Orange', 'Mandarin'],
      heart: ['Honey', 'Rose'],
      base: ['Amber', 'Vanilla']
    },
    olfactoryFamily: 'Golden Amber'
  },
  {
    id: 'gc5',
    name: 'Nero Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/90/image_1024',
    description: 'The complete Nero experience, meticulously curated for the modern gentleman who demands consistency in his urban lifestyle. This exclusive set features the signature Nero fragrance—a dynamic blend of Grapefruit, Ginger, and Vetiver—accompanied by premium grooming essentials that amplify and prolong the scent, ensuring a lasting impression of sophisticated authority throughout the day.',
    size: 'Set',
    notes: {
      top: ['Grapefruit', 'Ginger'],
      heart: ['Sage', 'Rosemary'],
      base: ['Vetiver', 'Patchouli']
    },
    olfactoryFamily: 'Aromatic Woody'
  },
  {
    id: 'gc6',
    name: 'Scarlet Venom Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/237/image_1024',
    description: 'A mysterious and alluring collection designed for the bold who embrace the power of seduction. Scarlet Venom is a passionate dance of Red Fruits and Pink Pepper, blooming into a heart of Rose and Jasmine that is both romantic and intense. This set is crafted for unforgettable evenings, leaving a trail of Patchouli and Vanilla that is as dangerous as it is divine.',
    size: 'Set',
    notes: {
      top: ['Red Fruits', 'Pink Pepper'],
      heart: ['Rose', 'Jasmine'],
      base: ['Patchouli', 'Vanilla']
    },
    olfactoryFamily: 'Seductive Floral'
  },
  {
    id: 'gc7',
    name: 'Blanco Set Box',
    price: 45.000,
    currency: 'KWD',
    category: 'Grande',
    image: 'https://www.sedraperfumes.com/web/image/product.template/303/image_1024',
    description: 'The ultimate gift of vitality and clean sophistication. This set features the iconic Blanco fragrance—a crisp mix of Lemon, Mint, and Lavender—alongside complementary products designed to enhance and prolong the invigorating scent profile. It is the perfect choice for those who appreciate a clean, energetic start to every day and a consistent aura of freshness.',
    size: 'Set',
    notes: {
      top: ['Lemon', 'Mint'],
      heart: ['Lavender', 'Geranium'],
      base: ['Cedarwood', 'Musk']
    },
    olfactoryFamily: 'Fresh Citrus'
  },
  // Femi Collection
  {
    id: 'fc1',
    name: 'Ivory',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/25/image_1024',
    description: 'A delicate whisper of pure femininity and understated grace. Ivory is a light, refreshing mist that opens with the crisp sweetness of Peach and Apple, creating a soft, inviting prelude. A heart of Peony and Lily of the Valley unfolds with a gentle floral elegance, making it the perfect daily companion for the woman who values subtle, clean, and sophisticated beauty.',
    size: '75ml',
    notes: {
      top: ['Peach', 'Apple'],
      heart: ['Lily of the Valley', 'Peony'],
      base: ['White Woods', 'Soft Musk']
    },
    olfactoryFamily: 'Soft Floral'
  },
  {
    id: 'fc2',
    name: 'Ocean',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/24/image_1024',
    description: 'Capturing the serene and boundless spirit of the azure sea. Ocean is a refreshing mist of Sea Salt and Bergamot, evoking the crisp air of a coastal morning. A tranquil heart of Water Lily and Jasmine leads to a base of Driftwood and Amber, creating a fragrance that is both fresh and deeply sophisticated—an invitation to escape to the infinite horizon.',
    size: '75ml',
    notes: {
      top: ['Sea Salt', 'Bergamot'],
      heart: ['Water Lily', 'Jasmine'],
      base: ['Driftwood', 'Amber']
    },
    olfactoryFamily: 'Marine Fresh'
  },
  {
    id: 'fc3',
    name: 'Magenta',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/113/image_1024',
    description: 'A vibrant and energetic burst of color and olfactory joy. Magenta enchants with a playful, high-spirited blend of Raspberry and Blackcurrant, immediately lifting the mood. A romantic heart of Rose and Violet adds a layer of sophisticated femininity, while the sweet dry down of Vanilla and Musk ensures a joyful and memorable trail of modern elegance.',
    size: '75ml',
    notes: {
      top: ['Raspberry', 'Blackcurrant'],
      heart: ['Rose', 'Violet'],
      base: ['Musk', 'Vanilla']
    },
    olfactoryFamily: 'Fruity Floral'
  },
  {
    id: 'fc4',
    name: 'Vontana',
    price: 18.000,
    currency: 'KWD',
    category: 'Femi',
    image: 'https://www.sedraperfumes.com/web/image/product.template/26/image_1024',
    description: 'The epitome of sophisticated and modern femininity designed for the contemporary woman. Vontana opens with the refined elegance of Pear and Bergamot, leading to an opulent heart of Orange Blossom and Jasmine. Grounded by a warm, sensual base of Patchouli and Amber, this mist is a tribute to strength and grace, ensuring a lasting and powerful impression.',
    size: '75ml',
    notes: {
      top: ['Pear', 'Bergamot'],
      heart: ['Orange Blossom', 'Jasmine'],
      base: ['Patchouli', 'Amber']
    },
    olfactoryFamily: 'Modern Chypre'
  }
];
