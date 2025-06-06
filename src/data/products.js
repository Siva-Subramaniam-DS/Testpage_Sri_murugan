export const categories = [
  {
    id: 'paan-corner',
    name: 'Paan Corner',
    icon: 'coffee',
    description: 'Scented supari, flavored paan, betel leaves, and traditional mouth fresheners',
    image: 'https://images.pexels.com/photos/5623835/pexels-photo-5623835.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'daily-essentials',
    name: 'Daily Essentials',
    icon: 'home',
    description: 'Soaps, combs, mirrors, powders, and everyday personal care items',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'stationery',
    name: 'Stationery',
    icon: 'book',
    description: 'School bags, pens, notebooks, tiffins, and educational supplies',
    image: 'https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'kitchenware',
    name: 'Kitchenware',
    icon: 'utensils',
    description: 'Steel plates, masala boxes, knives, and traditional cooking essentials',
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'decor-gifting',
    name: 'Decor & Gifting',
    icon: 'gift',
    description: 'Puja thalis, photo frames, bangles, and decorative gift items',
    image: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'seasonal-festival',
    name: 'Seasonal & Festival',
    icon: 'sparkles',
    description: 'Diwali diyas, Holi colors, Rakhi threads, and festive decorations',
    image: 'https://images.pexels.com/photos/5760448/pexels-photo-5760448.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const products = [
  // Paan Corner
  {
    id: 1,
    name: 'Premium Scented Supari',
    price: 120,
    image: 'https://images.pexels.com/photos/1633559/pexels-photo-1633559.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'paan-corner',
    featured: true,
    sale: true,
    salePrice: 99
  },
  {
    id: 2,
    name: 'Flavored Paan Packets',
    price: 80,
    image: 'https://images.pexels.com/photos/5623835/pexels-photo-5623835.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'paan-corner'
  },
  {
    id: 3,
    name: 'Fresh Betel Leaves',
    price: 50,
    image: 'https://images.pexels.com/photos/1633559/pexels-photo-1633559.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'paan-corner'
  },

  // Daily Essentials
  {
    id: 4,
    name: 'Herbal Soap Set',
    price: 150,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'daily-essentials',
    featured: true
  },
  {
    id: 5,
    name: 'Wooden Hair Comb',
    price: 75,
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'daily-essentials'
  },
  {
    id: 6,
    name: 'Decorative Hand Mirror',
    price: 199,
    image: 'https://images.pexels.com/photos/3373743/pexels-photo-3373743.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'daily-essentials'
  },
  {
    id: 7,
    name: 'Ayurvedic Face Powder',
    price: 120,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'daily-essentials',
    sale: true,
    salePrice: 89
  },

  // Stationery
  {
    id: 8,
    name: 'Colorful School Backpack',
    price: 699,
    image: 'https://images.pexels.com/photos/3661264/pexels-photo-3661264.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'stationery',
    sale: true,
    salePrice: 549
  },
  {
    id: 9,
    name: 'Premium Pen Set',
    price: 199,
    image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'stationery'
  },
  {
    id: 10,
    name: 'Spiral Notebooks Pack',
    price: 180,
    image: 'https://images.pexels.com/photos/6363428/pexels-photo-6363428.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'stationery',
    featured: true
  },
  {
    id: 11,
    name: 'Steel Tiffin Box',
    price: 299,
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'stationery'
  },

  // Kitchenware
  {
    id: 12,
    name: 'Stainless Steel Plate Set',
    price: 599,
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'kitchenware',
    featured: true
  },
  {
    id: 13,
    name: 'Traditional Masala Box',
    price: 449,
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'kitchenware'
  },
  {
    id: 14,
    name: 'Kitchen Knife Set',
    price: 799,
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'kitchenware',
    sale: true,
    salePrice: 649
  },

  // Decor & Gifting
  {
    id: 15,
    name: 'Brass Puja Thali',
    price: 899,
    image: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'decor-gifting',
    featured: true
  },
  {
    id: 16,
    name: 'Decorative Photo Frame',
    price: 299,
    image: 'https://images.pexels.com/photos/6063851/pexels-photo-6063851.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'decor-gifting'
  },
  {
    id: 17,
    name: 'Traditional Bangles Set',
    price: 249,
    image: 'https://images.pexels.com/photos/12050973/pexels-photo-12050973.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'decor-gifting',
    sale: true,
    salePrice: 199
  },

  // Seasonal & Festival
  {
    id: 18,
    name: 'Diwali Diya Collection',
    price: 299,
    image: 'https://images.pexels.com/photos/5469001/pexels-photo-5469001.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'seasonal-festival',
    featured: true
  },
  {
    id: 19,
    name: 'Holi Color Powder Set',
    price: 199,
    image: 'https://images.pexels.com/photos/3373743/pexels-photo-3373743.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'seasonal-festival'
  },
  {
    id: 20,
    name: 'Rakhi Thread Collection',
    price: 149,
    image: 'https://images.pexels.com/photos/1721175/pexels-photo-1721175.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'seasonal-festival',
    sale: true,
    salePrice: 119
  }
];

export const offers = [
  {
    id: 1,
    title: 'Festive Diwali Sale',
    description: 'Up to 40% off on all festival items',
    discount: '40% OFF',
    image: 'https://images.pexels.com/photos/5760448/pexels-photo-5760448.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'seasonal-festival'
  },
  {
    id: 2,
    title: 'Kitchen Essentials Deal',
    description: 'Buy 2 Get 1 Free on kitchenware',
    discount: 'BUY 2 GET 1',
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'kitchenware'
  },
  {
    id: 3,
    title: 'Back to School Offer',
    description: 'Special prices on all stationery items',
    discount: '25% OFF',
    image: 'https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'stationery'
  }
];