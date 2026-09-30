import { Product, Review } from '../types';

import heroBengaliImg from '../assets/images/hero_bengali_blouse_1790772468196.jpg';
import heroFestiveImg from '../assets/images/hero_festive_blouse_1790772482979.jpg';
import productZariImg from '../assets/images/product_zari_blouse_1790772495357.jpg';
import productEmeraldImg from '../assets/images/product_emerald_blouse_1790772506539.jpg';
import productRoyalBlueImg from '../assets/images/product_royal_blue_blouse_1790772518844.jpg';
import blouseBackNeckImg from '../assets/images/blouse_back_neck_1790772540726.jpg';
import blouseCottonKanthaImg from '../assets/images/blouse_cotton_kantha_1790772553951.jpg';
import blouseGoldenTissueImg from '../assets/images/blouse_golden_tissue_1790772567663.jpg';
import blousePinkBridalImg from '../assets/images/blouse_pink_bridal_1790772579782.jpg';

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    image: heroBengaliImg,
    tagline: 'শুদ্ধ আভিজাত্য ও ঐতিহ্যের ছোঁয়া',
    headline: 'Elegance in Every Stitch',
    subheading: 'Beautiful Blouses Made for Every Saree & Every Celebration',
    ctaPrimary: 'Shop Blouses',
    ctaSecondary: 'Explore New Collection',
    categoryTarget: 'designer',
    accentText: 'Durga Puja & Bridal Edition 2026',
  },
  {
    id: 'hero-2',
    image: heroFestiveImg,
    tagline: 'উৎসবের সাজে রাজকীয় রূপ',
    headline: 'Royal Benarasi & Zari Elegance',
    subheading: 'Handcrafted Brocades Designed for Grand Weddings & Festive Evenings',
    ctaPrimary: 'Shop Festive Edit',
    ctaSecondary: 'View Bridal Range',
    categoryTarget: 'festive',
    accentText: 'Special Festive Offer · Up to 30% OFF',
  },
  {
    id: 'hero-3',
    image: blouseGoldenTissueImg,
    tagline: 'অনন্যা রূপের আধুনিক প্রকাশ',
    headline: 'Celebration Tissue & Gota Patti',
    subheading: 'Tailored with 2-inch inside margins for the quintessential comfortable fit',
    ctaPrimary: 'Explore Ready-Made',
    ctaSecondary: 'Custom Stitching',
    categoryTarget: 'party-wear',
    accentText: 'Complimentary Pan-India Express Delivery',
  }
];

export const CATEGORIES = [
  {
    id: 'designer',
    name: 'Designer Blouses',
    bengali: 'ডিজাইনার ব্লাউজ',
    image: productZariImg,
    description: 'Statement necklines & bespoke artisanal cuts',
    itemCount: '24 Designs'
  },
  {
    id: 'ready-made',
    name: 'Ready-Made Blouses',
    bengali: 'রেডি-মেড ব্লাউজ',
    image: blouseGoldenTissueImg,
    description: 'Padded with 2-inch inner comfort margins',
    itemCount: '38 Designs'
  },
  {
    id: 'party-wear',
    name: 'Party Wear Blouses',
    bengali: 'পার্টি ওয়্যার ব্লাউজ',
    image: productRoyalBlueImg,
    description: 'Sequins, brocades & glamorous back designs',
    itemCount: '19 Designs'
  },
  {
    id: 'traditional',
    name: 'Traditional Blouses',
    bengali: 'ঐতিহ্যবাহী ব্লাউজ',
    image: heroBengaliImg,
    description: 'Timeless Bengali weaving & temple borders',
    itemCount: '31 Designs'
  },
  {
    id: 'wedding',
    name: 'Wedding Collection',
    bengali: 'বিয়ের কালেকশন',
    image: blousePinkBridalImg,
    description: 'Heavily embellished bridal zardozi & dabka',
    itemCount: '16 Designs'
  },
  {
    id: 'festive',
    name: 'Festive Collection',
    bengali: 'উৎসব কালেকশন',
    image: heroFestiveImg,
    description: 'Radiant silks designed for Pujas & Diwali',
    itemCount: '27 Designs'
  },
  {
    id: 'cotton',
    name: 'Cotton Blouses',
    bengali: 'সুতি ও কাঁথা ব্লাউজ',
    image: blouseCottonKanthaImg,
    description: 'Breathable handloom, Kantha stitch & Kalamkari',
    itemCount: '22 Designs'
  },
  {
    id: 'silk',
    name: 'Silk Blouses',
    bengali: 'সিল্ক ব্লাউজ',
    image: productEmeraldImg,
    description: 'Pure Tussar, Katan and Raw Silk finishes',
    itemCount: '29 Designs'
  },
  {
    id: 'embroidered',
    name: 'Embroidered Blouses',
    bengali: 'এমব্রয়ডারি ব্লাউজ',
    image: blouseBackNeckImg,
    description: 'Handcrafted aari, pearl and dori craftsmanship',
    itemCount: '25 Designs'
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'sb-001',
    name: 'Designer Embroidered Blouse',
    bengaliName: 'ডিজাইনার এমব্রয়ডারি ব্লাউজ',
    category: 'designer',
    categoryLabel: 'Designer Blouse',
    originalPrice: 1499,
    offerPrice: 1199,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 84,
    availableSizes: ['34', '36', '38', '40', '42'],
    images: {
      front: productZariImg,
      back: blouseBackNeckImg,
      side: heroBengaliImg,
    },
    colors: [
      { name: 'Royal Crimson Maroon', hex: '#681426' },
      { name: 'Antique Gold', hex: '#C89D4C' },
      { name: 'Midnight Black', hex: '#1C1917' }
    ],
    fabric: 'Pure Velvet Silk with Soft Crepe Lining',
    pattern: 'Intricate Floral Zardozi & Antique Dabka',
    sleeveType: 'Elbow Length (11 inches) with Border Work',
    neckDesign: 'Royal Sweetheart Front with Deep Keyhole Back and Latkan Dori',
    careInstructions: 'Dry Clean Only. Steam iron on reverse at low temperature.',
    deliveryInfo: 'Dispatch in 24 hours. Free Delivery across India in 3-5 working days.',
    returnExchangeInfo: '7-Day Easy Size Exchange & Returns guarantee. Doorstep pickup available.',
    description: 'Crafted with royal Bengali heritage aesthetics, this deep maroon velvet blouse showcases heavy antique gold zardozi hand-embroidery. Features comfortable inner padding, breathable premium crepe lining, and 2-inch side margin alterations allowance.',
    isNewArrival: true,
    isBestSeller: true,
    featured: true,
  },
  {
    id: 'sb-002',
    name: 'Traditional Silk Blouse',
    bengaliName: 'ঐতিহ্যবাহী বটল গ্রিন সিল্ক ব্লাউজ',
    category: 'silk',
    categoryLabel: 'Silk Blouse',
    originalPrice: 1299,
    offerPrice: 999,
    discountPercentage: 23,
    rating: 4.8,
    reviewCount: 62,
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    images: {
      front: productEmeraldImg,
      back: blouseBackNeckImg,
      side: heroFestiveImg,
    },
    colors: [
      { name: 'Bottle Emerald Green', hex: '#144633' },
      { name: 'Imperial Maroon', hex: '#681426' },
      { name: 'Mustard Haldi', hex: '#D97706' }
    ],
    fabric: 'Raw Silk with High-Density Zari Weft',
    pattern: 'Traditional Paisley & Temple Motifs',
    sleeveType: 'Elbow Sleeve with Contrast Gold Border',
    neckDesign: 'Classic Round High Neck Front with Teardrop Dori Back',
    careInstructions: 'Dry Clean Recommended. Do not wring or soak.',
    deliveryInfo: 'Free Express Shipping nationwide. Cash on Delivery available.',
    returnExchangeInfo: 'Hassle-free 7-day exchange for perfect fit.',
    description: 'A masterpiece for traditional celebrations and pujas. Woven with rich bottle green raw silk, featuring pure gold threadwork and handcrafted latkan tassels. Tailored with pre-padded cups and an extra 2 inches of seam margin.',
    isNewArrival: false,
    isBestSeller: true,
    featured: true,
  },
  {
    id: 'sb-003',
    name: 'Party Wear Designer Blouse',
    bengaliName: 'পার্টি ওয়্যার রাজকীয় নীল ব্লাউজ',
    category: 'party-wear',
    categoryLabel: 'Party Wear Blouse',
    originalPrice: 1799,
    offerPrice: 1399,
    discountPercentage: 22,
    rating: 5.0,
    reviewCount: 97,
    availableSizes: ['34', '36', '38', '40', '42'],
    images: {
      front: productRoyalBlueImg,
      back: blouseBackNeckImg,
      side: blouseGoldenTissueImg,
    },
    colors: [
      { name: 'Imperial Royal Blue', hex: '#1E3A8A' },
      { name: 'Wine Velvet', hex: '#4A0E1A' },
      { name: 'Gilded Champagne', hex: '#E5C07B' }
    ],
    fabric: 'Benarasi Brocade Jacquard with Pure Cotton Voile Lining',
    pattern: 'All-over Mughal Jaal with Zari Sheen',
    sleeveType: 'Princess Cut Sleeveless with Optional Detachable Sleeves',
    neckDesign: 'Modern V-Plunge Neck with Back Tassel Tie',
    careInstructions: 'Dry Clean Only to preserve brocade lustre.',
    deliveryInfo: 'Ships within 1-2 business days. Express air courier across India.',
    returnExchangeInfo: 'Instant exchange for different bust sizes.',
    description: 'Designed to turn heads at cocktail parties and wedding receptions. The imperial royal blue Benarasi brocade glimmers under festive chandeliers. Features sturdy boning structure and comfortable underarm padding.',
    isNewArrival: true,
    isBestSeller: true,
    featured: true,
  },
  {
    id: 'sb-004',
    name: 'Handloom Cotton Kantha Blouse',
    bengaliName: 'হ্যান্ডলুম কাঁথা স্টিচ সুতি ব্লাউজ',
    category: 'cotton',
    categoryLabel: 'Cotton Blouses',
    originalPrice: 1199,
    offerPrice: 899,
    discountPercentage: 25,
    rating: 4.9,
    reviewCount: 51,
    availableSizes: ['34', '36', '38', '40', '42', '44'],
    images: {
      front: blouseCottonKanthaImg,
      back: blouseBackNeckImg,
      side: productEmeraldImg,
    },
    colors: [
      { name: 'Kolkata Ivory & Indigo', hex: '#E6E6DA' },
      { name: 'Terracotta Rust', hex: '#9C4221' },
      { name: 'Earthy Olive', hex: '#4B5563' }
    ],
    fabric: '100% Breathable Bengal Khadi Handloom Cotton',
    pattern: 'Authentic Bolpur Santiniketan Kantha Embroidery',
    sleeveType: 'Short Sleeve with Fine Running Stitch Hem',
    neckDesign: 'Comfortable Boat Neck with Wooden Button Placket',
    careInstructions: 'Gentle Hand Wash in cold water with mild detergent. Shade dry.',
    deliveryInfo: 'Fast dispatch from Kolkata artisan hub. Free Delivery on orders over ₹999.',
    returnExchangeInfo: '7-day easy exchange. Free return shipping.',
    description: 'Directly from rural Bengal craft clusters, this artisan-stitched Kantha blouse pairs effortlessly with handloom cotton, linen, and Dhakai Jamdani sarees. Soft, non-padded and gentle on sensitive skin.',
    isNewArrival: true,
    isBestSeller: false,
    featured: true,
  },
  {
    id: 'sb-005',
    name: 'Rani Pink Bridal Gota Patti Blouse',
    bengaliName: 'রানি গোলাপি ব্রাইডাল গোটা পট্টি ব্লাউজ',
    category: 'wedding',
    categoryLabel: 'Wedding Collection',
    originalPrice: 2499,
    offerPrice: 1899,
    discountPercentage: 24,
    rating: 5.0,
    reviewCount: 112,
    availableSizes: ['32', '34', '36', '38', '40', '42'],
    images: {
      front: blousePinkBridalImg,
      back: blouseBackNeckImg,
      side: productZariImg,
    },
    colors: [
      { name: 'Rani Bridal Pink', hex: '#BE185D' },
      { name: 'Sindoor Crimson', hex: '#991B1B' },
      { name: 'Emerald Forest', hex: '#065F46' }
    ],
    fabric: 'Heavy Raw Silk with Satin Interfacing & Cotton Lining',
    pattern: 'Handcrafted Gota Patti, Seed Pearl & Kasab Threadwork',
    sleeveType: 'Elbow Sleeve with Regal Kalash Border',
    neckDesign: 'Broad Sweetheart Neck with Signature Cut-Out Back & Heavy Latkans',
    careInstructions: 'Strictly Dry Clean. Wrap in muslin cloth when storing.',
    deliveryInfo: 'Priority Bridal Shipping with tamper-proof luxury gift box.',
    returnExchangeInfo: 'Custom sizing consultation & free alteration support available.',
    description: 'An ode to classic royal Indian brides. Hand-embroidered by Kolkata master artisans with shimmering gota ribbonwork and lustrous pearls. Specially reinforced with non-collapsing bra pads and a 2.5-inch inner seam margin.',
    isNewArrival: false,
    isBestSeller: true,
    featured: true,
  },
  {
    id: 'sb-006',
    name: 'Shimmering Golden Tissue Blouse',
    bengaliName: 'সোনালী টিস্যু সিল্ক ডিজাইনার ব্লাউজ',
    category: 'ready-made',
    categoryLabel: 'Ready-Made Blouse',
    originalPrice: 1599,
    offerPrice: 1249,
    discountPercentage: 22,
    rating: 4.7,
    reviewCount: 43,
    availableSizes: ['34', '36', '38', '40', '42'],
    images: {
      front: blouseGoldenTissueImg,
      back: blouseBackNeckImg,
      side: heroFestiveImg,
    },
    colors: [
      { name: 'Antique Gold Tissue', hex: '#D4AF37' },
      { name: 'Rose Gold Metallic', hex: '#C5A059' },
      { name: 'Silver Starlight', hex: '#CBD5E1' }
    ],
    fabric: 'High-Lustre Tissue Organza with Soft Skin-Friendly Malmal Lining',
    pattern: 'Subtle Crinkle Texture with Gilded Sheen',
    sleeveType: 'Gathered Puff Sleeve with Delicate Wrist Trim',
    neckDesign: 'Princess Cut Sweetheart Neck with Back Hook Closure',
    careInstructions: 'Dry Clean Only. Store flat.',
    deliveryInfo: 'In-stock ready-made blouse. Next-day dispatch guaranteed.',
    returnExchangeInfo: 'Easy 7-day exchange or refund.',
    description: 'A versatile hero blouse that transforms any monochrome, chiffon, or Kanjeevaram saree into high fashion. Feather-light, fully padded with soft cups, and completely non-itchy due to pure malmal lining.',
    isNewArrival: true,
    isBestSeller: false,
    featured: true,
  },
  {
    id: 'sb-007',
    name: 'Heritage Benarasi Brocade Blouse',
    bengaliName: 'ঐতিহ্যবাহী বেনারসি ব্রোকেড ব্লাউজ',
    category: 'festive',
    categoryLabel: 'Festive Collection',
    originalPrice: 1699,
    offerPrice: 1299,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 78,
    availableSizes: ['34', '36', '38', '40', '42', '44'],
    images: {
      front: heroFestiveImg,
      back: blouseBackNeckImg,
      side: productRoyalBlueImg,
    },
    colors: [
      { name: 'Festive Plum Purple', hex: '#581C87' },
      { name: 'Heritage Red', hex: '#991B1B' },
      { name: 'Peacock Teal', hex: '#0F766E' }
    ],
    fabric: 'Katan Silk Jacquard with Antique Gold Zari',
    pattern: 'Bengali Alpona & Floral Arabesque Brocade',
    sleeveType: 'Three-Quarter Sleeve with Heavy Scallop Border',
    neckDesign: 'Square Neck with Embroidered Piping and Deep Back Tie',
    careInstructions: 'Dry Clean Only.',
    deliveryInfo: 'Free delivery with order tracking via SMS and WhatsApp.',
    returnExchangeInfo: '7-day doorstep replacement if sizing differs.',
    description: 'Infused with the joy of Bengal’s biggest celebrations. Features rich purple silk intertwined with antique metallic threads. Perfect for Bijoya Dashami, Diwali nights, and family feasts.',
    isNewArrival: false,
    isBestSeller: true,
    featured: true,
  },
  {
    id: 'sb-008',
    name: 'Artisanal Cut-Out Back Embroidered Blouse',
    bengaliName: 'কারিগর ব্যাক কাট-আউট ব্লাউজ',
    category: 'embroidered',
    categoryLabel: 'Embroidered Blouse',
    originalPrice: 1899,
    offerPrice: 1449,
    discountPercentage: 24,
    rating: 5.0,
    reviewCount: 89,
    availableSizes: ['34', '36', '38', '40', '42'],
    images: {
      front: blouseBackNeckImg,
      back: productZariImg,
      side: heroBengaliImg,
    },
    colors: [
      { name: 'Rich Terracotta Wine', hex: '#5C1D24' },
      { name: 'Forest Green', hex: '#164E63' },
      { name: 'Gold Ochre', hex: '#CA8A04' }
    ],
    fabric: 'Pure Mulberry Silk with Golden Mukaish Work',
    pattern: 'Intricate Geometric Cutwork & Beaded Dori Latkans',
    sleeveType: 'Elbow Sleeve with Filigree Motif',
    neckDesign: 'Signature Designer Teardrop Back Cut-Out with Tie-Up Cord',
    careInstructions: 'Professional Dry Clean Only.',
    deliveryInfo: 'Dispatched within 24 hours. Express courier.',
    returnExchangeInfo: 'Free exchange within 7 days of delivery.',
    description: 'The talk of every celebration. Famous for its showstopper back silhouette, handcrafted bead tassels, and contoured princess seam fit that hugs the torso without slipping from the shoulders.',
    isNewArrival: true,
    isBestSeller: true,
    featured: true,
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Debjani Mukherjee',
    location: 'Kolkata, West Bengal',
    rating: 5,
    date: 'September 2026',
    title: 'The fit for my Benarasi saree was pure perfection!',
    comment: 'I ordered the Designer Embroidered Velvet blouse for Durga Puja Ashtami morning. The embroidery quality is even more stunning in person than in the photos! The 2-inch inside margin gave me peace of mind, but the standard size 38 fit like a glove right out of the box.',
    productName: 'Designer Embroidered Blouse',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    author: 'Priyanka Banerjee',
    location: 'Salt Lake, Kolkata',
    rating: 5,
    date: 'September 2026',
    title: 'No tailor hassles anymore! Sindaram is my go-to boutique.',
    comment: 'Getting a designer blouse stitched in Kolkata takes 3 weeks and multiple fitting trials. Sindaram Blouse arrived in 2 days, padded impeccably, with high-quality lining that doesn’t itch even in warm weather. Truly luxury boutique standard.',
    productName: 'Traditional Silk Blouse',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    author: 'Ananya Sen',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: 'August 2026',
    title: 'Wore it for my cousin’s reception—received so many compliments!',
    comment: 'The Benarasi brocade and back tassel latkans are so regal. It elevated a simple chiffon saree into a high-fashion ensemble. Customer service on WhatsApp was also extremely helpful in confirming my bust measurement.',
    productName: 'Party Wear Designer Blouse',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verifiedBuyer: true
  },
  {
    id: 'rev-4',
    author: 'Dr. Sharmistha Roy',
    location: 'Howrah, West Bengal',
    rating: 5,
    date: 'August 2026',
    title: 'Authentic Santiniketan Kantha craft & pure cotton comfort.',
    comment: 'Being a doctor, I love wearing handloom sarees to conferences. The Kantha blouse is authentic Bengal artistry and feels so soft against the skin. Will definitely order the silk varieties next!',
    productName: 'Handloom Cotton Kantha Blouse',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    verifiedBuyer: true
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Premium Quality',
    bengali: 'প্রিমিয়াম কোয়ালিটি',
    description: 'Pure silks, velvet, and breathable malmal cotton lining with reinforced double-stitch tailoring.'
  },
  {
    title: 'Beautiful Designs',
    bengali: 'নান্দনিক ডিজাইন',
    description: 'Exclusive Bengali heritage cuts, royal zardozi, Santiniketan Kantha, and modern statement necklines.'
  },
  {
    title: 'Comfortable Fit',
    bengali: 'নিখুঁত ও আরামদায়ক ফিটিং',
    description: 'Pre-moulded bra pads, no shoulder-slipping ergonomics, and 2-inch generous alteration margins.'
  },
  {
    title: 'Affordable Prices',
    bengali: 'সুলভ মূল্য',
    description: 'Artisan-direct pricing starting from ₹899 without retail middleman markups.'
  },
  {
    title: 'Secure Payments',
    bengali: 'নিরাপদ লেনদেন',
    description: '100% safe checkout with UPI, Google Pay, NetBanking, Debit/Credit Cards, and Cash on Delivery.'
  },
  {
    title: 'Fast Delivery',
    bengali: 'দ্রুত ডেলিভারি',
    description: 'Express nationwide dispatch within 24-48 hours. Free shipping across India on orders over ₹999.'
  },
  {
    title: 'Easy Exchange',
    bengali: 'সহজ এক্সচেঞ্জ সুবিধা',
    description: 'Hassle-free 7-day doorstep size replacement with our dedicated customer care team.'
  }
];

export const SIZE_CHART = [
  { size: '32', bust: '32"', underbust: '27"', waist: '26"', shoulder: '13.5"', armhole: '14"' },
  { size: '34', bust: '34"', underbust: '29"', waist: '28"', shoulder: '14.0"', armhole: '15"' },
  { size: '36', bust: '36"', underbust: '31"', waist: '30"', shoulder: '14.5"', armhole: '16"' },
  { size: '38', bust: '38"', underbust: '33"', waist: '32"', shoulder: '15.0"', armhole: '17"' },
  { size: '40', bust: '40"', underbust: '35"', waist: '34"', shoulder: '15.5"', armhole: '18"' },
  { size: '42', bust: '42"', underbust: '37"', waist: '36"', shoulder: '16.0"', armhole: '19"' },
  { size: '44', bust: '44"', underbust: '39"', waist: '38"', shoulder: '16.5"', armhole: '20"' },
];
