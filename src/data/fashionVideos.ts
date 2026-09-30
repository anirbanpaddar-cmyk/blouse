import reel01Img from '../assets/images/reel_01_red_black_1790773015909.jpg';
import reel02Img from '../assets/images/reel_02_trad_look_1790773035004.jpg';
import reel03Img from '../assets/images/reel_03_black_gold_1790773048323.jpg';
import reel04Img from '../assets/images/reel_04_pastel_pink_1790773063320.jpg';
import reel05Img from '../assets/images/reel_05_royal_blue_1790773080708.jpg';
import reel06Img from '../assets/images/reel_06_handloom_1790773098008.jpg';
import reel07Img from '../assets/images/reel_07_festive_1790773108588.jpg';
import reel08Img from '../assets/images/reel_08_photoshoot_bts_1790773123367.jpg';
import reel09Img from '../assets/images/reel_09_modern_organza_1790773137360.jpg';
import reel10Img from '../assets/images/reel_10_signature_1790773149568.jpg';

export interface FashionVideo {
  id: string;
  number: string;
  title: string;
  bengaliTitle: string;
  bengaliCaption: string;
  modelDescription: string;
  modelAge: string;
  sareeLook: string;
  blouseDetails: string;
  setting: string;
  duration: number; // in seconds (e.g. 8)
  poster: string;
  relatedProductId: string;
  categoryTarget: string;
  featuredBadges: string[];
}

export const FASHION_VIDEOS: FashionVideo[] = [
  {
    id: 'video-01',
    number: '01',
    title: 'RED & BLACK LOOK',
    bengaliTitle: 'লাল ও কালোর রাজকীয় মেলবন্ধন',
    bengaliCaption: 'উজ্জ্বল লাল শাড়ির সাথে প্রিমিয়াম কালো স্লিভলেস ব্লাউজ — প্রতিটি ভাঁজে নিখুঁত আভিজাত্য।',
    modelDescription: 'Adult Bengali model (24 yrs) wearing vibrant red silk saree with sleek jet black sleeveless velvet blouse.',
    modelAge: '24 Years',
    sareeLook: 'Crimson Red Pure Silk Saree',
    blouseDetails: 'Premium Black Sleeveless Velvet Blouse with Sweetheart Neck',
    setting: 'Luxury Kolkata Fashion Studio',
    duration: 8,
    poster: reel01Img,
    relatedProductId: 'sb-001',
    categoryTarget: 'designer',
    featuredBadges: ['Kolkata Studio', 'Sweetheart Neck', 'Sleeveless'],
  },
  {
    id: 'video-02',
    number: '02',
    title: 'BENGALI TRADITIONAL LOOK',
    bengaliTitle: 'লাল পাড় সাদা শাড়ির ঐতিহ্যবাহী রূপ',
    bengaliCaption: 'ঐতিহ্যবাহী লাল পাড় সাদা গরদ শাড়ির সাথে ডিপ মেরুন স্লিভলেস ব্লাউজের স্নিগ্ধ প্রকাশ।',
    modelDescription: 'Adult Bengali model (26 yrs) in white Garad saree with bold red border & deep maroon sleeveless silk blouse.',
    modelAge: '26 Years',
    sareeLook: 'White Garad Silk with Broad Red Temple Border',
    blouseDetails: 'Deep Maroon Raw Silk Sleeveless Blouse with Gold Piping',
    setting: 'Kolkata Heritage Courtyard & Warm Amber Lighting',
    duration: 9,
    poster: reel02Img,
    relatedProductId: 'sb-002',
    categoryTarget: 'traditional',
    featuredBadges: ['Heritage Bengal', 'Deep Maroon', 'Temple Border'],
  },
  {
    id: 'video-03',
    number: '03',
    title: 'BLACK & GOLD',
    bengaliTitle: 'কালো ও সোনালী সান্ধ্য আভিজাত্য',
    bengaliCaption: 'সন্ধ্যা পার্টির রাজকীয় সাজ — অ্যান্টিক গোল্ড জারদৌসি কাজের স্লিভলেস ডিজাইনার ব্লাউজ।',
    modelDescription: 'Adult Bengali model (25 yrs) in sheer black georgette saree with antique-gold embroidered sleeveless blouse.',
    modelAge: '25 Years',
    sareeLook: 'Midnight Black Georgette with Scallop Trim',
    blouseDetails: 'Antique Gold Zardozi Sleeveless Designer Blouse with Latkan Back',
    setting: 'Low-key Cinematic Evening Studio',
    duration: 8,
    poster: reel03Img,
    relatedProductId: 'sb-006',
    categoryTarget: 'party-wear',
    featuredBadges: ['Evening Campaign', 'Antique Gold', 'Zardozi Work'],
  },
  {
    id: 'video-04',
    number: '04',
    title: 'PASTEL COLLECTION',
    bengaliTitle: 'প্যাস্টেল পিংক ও পিচ রঙের পেলবতা',
    bengaliCaption: 'কোমল প্যাস্টেল শাড়ির সঙ্গে হ্যান্ড-এমব্রয়ডারি করা ডিজাইনার স্লিভলেস ব্লাউজের স্নিগ্ধতা।',
    modelDescription: 'Adult Bengali model (23 yrs) in pastel blush organza saree with delicate embroidered sleeveless blouse.',
    modelAge: '23 Years',
    sareeLook: 'Blush Peach Organza Drape',
    blouseDetails: 'Pearl & Gota Patti Hand-Embroidered Sleeveless Blouse',
    setting: 'Bright Sunlit Kolkata Designer Salon',
    duration: 7,
    poster: reel04Img,
    relatedProductId: 'sb-005',
    categoryTarget: 'designer',
    featuredBadges: ['Daytime Glamour', 'Pearl Work', 'Soft Organza'],
  },
  {
    id: 'video-05',
    number: '05',
    title: 'ROYAL BLUE',
    bengaliTitle: 'রাজকীয় নীল ব্রোকেড মোহিনী রূপ',
    bengaliCaption: 'উজ্জ্বল রয়্যাল ব্লু সিল্কের সাথে কনট্রাস্ট সোনালী স্লিভলেস ব্লাউজ — ক্যামেরায় ধরা নিখুঁত টেক্সচার।',
    modelDescription: 'Adult Bengali model (27 yrs) in royal blue silk saree with contrasting gold woven sleeveless blouse.',
    modelAge: '27 Years',
    sareeLook: 'Imperial Royal Blue Satin Silk',
    blouseDetails: 'Contrasting Gold Benarasi Brocade Sleeveless Silhouette',
    setting: 'Professional Fashion Runway Backdrop',
    duration: 8,
    poster: reel05Img,
    relatedProductId: 'sb-003',
    categoryTarget: 'silk',
    featuredBadges: ['Contrast Styling', 'High Fashion', 'Runway Cut'],
  },
  {
    id: 'video-06',
    number: '06',
    title: 'HANDLOOM BENGAL',
    bengaliTitle: 'বাংলার খাঁটি তাঁতের আধুনিক নান্দনিকতা',
    bengaliCaption: 'শান্তিনিকেতনী কাঁথা ও ঢাকাই জমদানির সঙ্গে কন্টেম্পোরারি স্লিভলেস কটন ব্লাউজ।',
    modelDescription: 'Adult Bengali model (24 yrs) wearing Bengal handloom cotton saree with modern boat neck sleeveless blouse.',
    modelAge: '24 Years',
    sareeLook: 'Bengal Handloom Khadi Cotton',
    blouseDetails: 'Contemporary Sleeveless Cotton Blouse with Wooden Buttons',
    setting: 'North Kolkata Heritage House with Louvered Windows',
    duration: 9,
    poster: reel06Img,
    relatedProductId: 'sb-004',
    categoryTarget: 'cotton',
    featuredBadges: ['Artisanal Bengal', 'Pure Khadi', 'Heritage Window'],
  },
  {
    id: 'video-07',
    number: '07',
    title: 'FESTIVE LOOK',
    bengaliTitle: 'পূজো ও উৎসবের জমকালো সাজ',
    bengaliCaption: 'উৎসবের আলোয় ঝলমলে মেরুন ও গোল্ড জরি কাজের স্লিভলেস উৎসব কালেকশন।',
    modelDescription: 'Adult Bengali model (25 yrs) in rich magenta festive saree with maroon and gold embellished sleeveless blouse.',
    modelAge: '25 Years',
    sareeLook: 'Magenta Katan Silk Festive Saree',
    blouseDetails: 'Rich Maroon & Gold Zari Embroidered Sleeveless Blouse',
    setting: 'Warm Festive Diyas & Traditional Alpona Setting',
    duration: 8,
    poster: reel07Img,
    relatedProductId: 'sb-007',
    categoryTarget: 'festive',
    featuredBadges: ['Durga Puja Edit', 'Festive Glow', 'Zari Border'],
  },
  {
    id: 'video-08',
    number: '08',
    title: 'PHOTOSHOOT BTS',
    bengaliTitle: 'ফটোশুটের পেছনের দৃশ্য (বিহাইন্ড দ্য সিন্স)',
    bengaliCaption: 'ফটোগ্রাফার, সফটবক্স লাইট ও মডেলদের সাথে সিন্দারাম ব্লাউজের পেশাদার ফটোশুট ডায়েরি।',
    modelDescription: 'Multiple adult Bengali models (22-26 yrs) in professional photoshoot with softbox lights and close-up tailoring stitch captures.',
    modelAge: '22–26 Years',
    sareeLook: 'Studio Multi-Saree Ensemble',
    blouseDetails: 'Close-Up Stitching, Inner Lining & Latkan Tassel Assembly',
    setting: 'Sindaram Studio Kolkata Behind-The-Scenes',
    duration: 10,
    poster: reel08Img,
    relatedProductId: 'sb-008',
    categoryTarget: 'embroidered',
    featuredBadges: ['Studio BTS', 'Tailoring Details', 'Live Lighting'],
  },
  {
    id: 'video-09',
    number: '09',
    title: 'MODERN BENGALI LOOK',
    bengaliTitle: 'আধুনিক নারী ও অরগ্যাঞ্জা গ্ল্যামার',
    bengaliCaption: 'হালকা অরগ্যাঞ্জা শাড়ির সঙ্গে আধুনিক মিনিমালিস্ট স্লিভলেস কাট — স্লো-মোশনে মোহময়ী রূপ।',
    modelDescription: 'Adult Bengali model (26 yrs) in ethereal sheer organza with structured modern sleeveless blouse.',
    modelAge: '26 Years',
    sareeLook: 'Monochrome Silver-Grey Sheer Organza',
    blouseDetails: 'Modern Sculptural Sleeveless Blouse with Clean Plunge Seams',
    setting: 'Minimalist Contemporary Luxury Salon',
    duration: 7,
    poster: reel09Img,
    relatedProductId: 'sb-003',
    categoryTarget: 'ready-made',
    featuredBadges: ['Slow-Mo Edit', 'Sculptural Cut', 'Minimalist Glam'],
  },
  {
    id: 'video-10',
    number: '10',
    title: 'SINDARAM SIGNATURE COLLECTION',
    bengaliTitle: 'সিন্দারাম সিগনেচার কালেকশন ফিনালে',
    bengaliCaption: 'একাধিক প্রাপ্তবয়স্ক মডেলের স্লিভলেস ব্লাউজের রাজকীয় প্রদর্শনী — ফিনালে ফ্রেম সিন্দারাম ব্লাউজ।',
    modelDescription: 'Multiple adult Bengali models (20-28 yrs) transitioning through signature sleeveless styles into Sindaram logo frame.',
    modelAge: '20–28 Years',
    sareeLook: 'Grand Benarasi & Brocade Showcase',
    blouseDetails: 'Grand Finale Showcase of Padded Sleeveless Couture',
    setting: 'Regal Gold & Maroon Boutique Grand Hall',
    duration: 10,
    poster: reel10Img,
    relatedProductId: 'sb-001',
    categoryTarget: 'designer',
    featuredBadges: ['Grand Finale', 'Brand Signature', 'Multi-Model'],
  },
];
