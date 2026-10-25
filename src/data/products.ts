/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * 125+ Authentic Indian Grocery Products with Variants & Tamil Names
 * Sri Maneeshwara Super Market - Annur, Coimbatore
 */

export interface ProductVariant {
  id: string;
  weightLabel: string;
  mrp: number;
  price: number;
  discountPercent: number;
  packName: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  baseName: string;
  tamilName: string;
  brand: string;
  image: string;
  isPopular?: boolean;
  isDeal?: boolean;
  isDairyFresh?: boolean;
  variants: ProductVariant[];
}

export const CATEGORIES = [
  { id: "rice_grains", nameKey: "cat_rice_grains", icon: "🌾", defaultName: "Rice and Grains" },
  { id: "dals_pulses", nameKey: "cat_dals_pulses", icon: "🥣", defaultName: "Dals and Pulses" },
  { id: "flours", nameKey: "cat_flours", icon: "🥖", defaultName: "Flours & Atta" },
  { id: "cooking_oils", nameKey: "cat_cooking_oils", icon: "🫒", defaultName: "Cooking Oils and Ghee" },
  { id: "spices_masalas", nameKey: "cat_spices_masalas", icon: "🌶️", defaultName: "Spices and Masalas" },
  { id: "salt_sugar", nameKey: "cat_salt_sugar", icon: "🧂", defaultName: "Salt and Sugar" },
  { id: "dairy_products", nameKey: "cat_dairy_products", icon: "🥛", defaultName: "Dairy Products" },
  { id: "breakfast_cereals", nameKey: "cat_breakfast_cereals", icon: "🥣", defaultName: "Breakfast & Cereals" },
  { id: "snacks_biscuits", nameKey: "cat_snacks_biscuits", icon: "🍪", defaultName: "Snacks and Biscuits" },
  { id: "beverages", nameKey: "cat_beverages", icon: "☕", defaultName: "Beverages (Tea & Coffee)" },
  { id: "pickles_sauces", nameKey: "cat_pickles_sauces", icon: "🏺", defaultName: "Pickles and Sauces" },
  { id: "dry_fruits_nuts", nameKey: "cat_dry_fruits_nuts", icon: "🥜", defaultName: "Dry Fruits and Nuts" },
  { id: "cleaning_household", nameKey: "cat_cleaning_household", icon: "🧹", defaultName: "Cleaning & Household" },
  { id: "personal_care", nameKey: "cat_personal_care", icon: "🧼", defaultName: "Personal Care" },
  { id: "baby_care", nameKey: "cat_baby_care", icon: "👶", defaultName: "Baby Care" }
];

export const PRODUCTS: Product[] = [
  // ================= 1. RICE AND GRAINS =================
  {
    id: "p1",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Deluxe Ponni Boiled Rice",
    tamilName: "ஸ்ரீ லலிதா பொன்னி புழுங்கல் அரிசி",
    brand: "Sri Lalitha Ponni",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p1-v1", weightLabel: "5 kg", mrp: 340, price: 310, discountPercent: 9, packName: "Sri Lalitha Ponni Boiled Rice 5 kg Bag", inStock: true },
      { id: "p1-v2", weightLabel: "10 kg", mrp: 680, price: 595, discountPercent: 12, packName: "Sri Lalitha Ponni Boiled Rice 10 kg Bag", inStock: true },
      { id: "p1-v3", weightLabel: "25 kg", mrp: 1650, price: 1420, discountPercent: 14, packName: "Sri Lalitha Ponni Boiled Rice 25 kg Bag", inStock: true }
    ]
  },
  {
    id: "p2",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Classic Basmati Rice",
    tamilName: "இந்தியா கேட் கிளாசிக் பாசுமதி அரிசி",
    brand: "India Gate",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p2-v1", weightLabel: "1 kg", mrp: 215, price: 185, discountPercent: 14, packName: "India Gate Classic Basmati Rice 1 kg Pouch", inStock: true },
      { id: "p2-v2", weightLabel: "5 kg", mrp: 1050, price: 890, discountPercent: 15, packName: "India Gate Classic Basmati Rice 5 kg Bag", inStock: true }
    ]
  },
  {
    id: "p3",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Rozana Super Basmati Rice",
    tamilName: "தாவத் ரோசானா பாசுமதி அரிசி",
    brand: "Daawat",
    image: "https://images.unsplash.com/photo-1568651318398-3844a49479ca?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p3-v1", weightLabel: "1 kg", mrp: 140, price: 119, discountPercent: 15, packName: "Daawat Rozana Super Basmati Rice 1 kg Pack", inStock: true },
      { id: "p3-v2", weightLabel: "5 kg", mrp: 675, price: 560, discountPercent: 17, packName: "Daawat Rozana Super Basmati Rice 5 kg Bag", inStock: true }
    ]
  },
  {
    id: "p4",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Authentic Biryani Basmati Rice",
    tamilName: "கோஹினூர் பிரியாணி பாசுமதி அரிசி",
    brand: "Kohinoor",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p4-v1", weightLabel: "1 kg", mrp: 190, price: 158, discountPercent: 17, packName: "Kohinoor Authentic Biryani Basmati Rice 1 kg Pack", inStock: true },
      { id: "p4-v2", weightLabel: "5 kg", mrp: 920, price: 770, discountPercent: 16, packName: "Kohinoor Authentic Biryani Basmati Rice 5 kg Bag", inStock: true }
    ]
  },
  {
    id: "p5",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Bapatla Sona Masoori Raw Rice",
    tamilName: "சோனா மசூரி பச்சரிசி",
    brand: "Sri Lalitha Ponni",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p5-v1", weightLabel: "5 kg", mrp: 350, price: 315, discountPercent: 10, packName: "Sri Lalitha Sona Masoori Rice 5 kg Bag", inStock: true },
      { id: "p5-v2", weightLabel: "25 kg", mrp: 1700, price: 1490, discountPercent: 12, packName: "Sri Lalitha Sona Masoori Rice 25 kg Bag", inStock: true }
    ]
  },
  {
    id: "p6",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Idli Rice (Gundu Arisi)",
    tamilName: "தரமான இட்லி அரிசி (குண்டு அரிசி)",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p6-v1", weightLabel: "5 kg", mrp: 280, price: 245, discountPercent: 12, packName: "Sri Maneeshwara Select Idli Rice 5 kg Bag", inStock: true },
      { id: "p6-v2", weightLabel: "10 kg", mrp: 550, price: 475, discountPercent: 14, packName: "Sri Maneeshwara Select Idli Rice 10 kg Bag", inStock: true }
    ]
  },
  {
    id: "p7",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Organic Foxtail Millet (Thinai)",
    tamilName: "இயற்கை தினை அரிசி",
    brand: "24 Mantra Organic",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p7-v1", weightLabel: "500 g", mrp: 75, price: 65, discountPercent: 13, packName: "24 Mantra Organic Foxtail Millet 500 g Pack", inStock: true },
      { id: "p7-v2", weightLabel: "1 kg", mrp: 145, price: 125, discountPercent: 14, packName: "24 Mantra Organic Foxtail Millet 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p8",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Little Millet (Samai Arisi)",
    tamilName: "சாமை அரிசி",
    brand: "24 Mantra Organic",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p8-v1", weightLabel: "500 g", mrp: 80, price: 69, discountPercent: 14, packName: "24 Mantra Organic Samai Rice 500 g Pack", inStock: true },
      { id: "p8-v2", weightLabel: "1 kg", mrp: 155, price: 132, discountPercent: 15, packName: "24 Mantra Organic Samai Rice 1 kg Pack", inStock: true }
    ]
  },

  // ================= 2. DALS AND PULSES =================
  {
    id: "p9",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Unpolished Toor Dal (Thuvaram Paruppu)",
    tamilName: "டாடா சம்பன் துவரம் பருப்பு",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p9-v1", weightLabel: "500 g", mrp: 110, price: 96, discountPercent: 13, packName: "Tata Sampann Toor Dal 500 g Pouch", inStock: true },
      { id: "p9-v2", weightLabel: "1 kg", mrp: 210, price: 182, discountPercent: 13, packName: "Tata Sampann Toor Dal 1 kg Pouch", inStock: true }
    ]
  },
  {
    id: "p10",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Premium Oorid Gundu (Whole Urad Dal)",
    tamilName: "உளுந்தம் பருப்பு (உருட்டு உளுந்து)",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p10-v1", weightLabel: "500 g", mrp: 85, price: 74, discountPercent: 13, packName: "Sri Maneeshwara Urad Dal Gundu 500 g Pack", inStock: true },
      { id: "p10-v2", weightLabel: "1 kg", mrp: 165, price: 142, discountPercent: 14, packName: "Sri Maneeshwara Urad Dal Gundu 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p11",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Moong Dal (Paasi Paruppu)",
    tamilName: "டாடா சம்பன் பாசிப் பருப்பு",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p11-v1", weightLabel: "500 g", mrp: 88, price: 77, discountPercent: 12, packName: "Tata Sampann Moong Dal 500 g Pack", inStock: true },
      { id: "p11-v2", weightLabel: "1 kg", mrp: 172, price: 149, discountPercent: 13, packName: "Tata Sampann Moong Dal 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p12",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Chana Dal (Kadalai Paruppu)",
    tamilName: "கடலைப் பருப்பு",
    brand: "MTR",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p12-v1", weightLabel: "500 g", mrp: 65, price: 56, discountPercent: 14, packName: "MTR Pure Chana Dal 500 g Pack", inStock: true },
      { id: "p12-v2", weightLabel: "1 kg", mrp: 125, price: 108, discountPercent: 14, packName: "MTR Pure Chana Dal 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p13",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Brown Chickpeas (Karuppu Konda Kadalai)",
    tamilName: "கருப்பு கொண்டைக்கடலை",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p13-v1", weightLabel: "500 g", mrp: 55, price: 47, discountPercent: 15, packName: "Sri Maneeshwara Black Chana 500 g Pack", inStock: true },
      { id: "p13-v2", weightLabel: "1 kg", mrp: 105, price: 89, discountPercent: 15, packName: "Sri Maneeshwara Black Chana 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p14",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "White Kabuli Chana (Vellai Chana)",
    tamilName: "வெள்ளை கொண்டைக்கடலை",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p14-v1", weightLabel: "500 g", mrp: 95, price: 82, discountPercent: 14, packName: "Tata Sampann Kabuli Chana 500 g Pack", inStock: true },
      { id: "p14-v2", weightLabel: "1 kg", mrp: 185, price: 158, discountPercent: 15, packName: "Tata Sampann Kabuli Chana 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p15",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Green Gram Whole (Pachai Payaru)",
    tamilName: "முழு பச்சை பயறு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p15-v1", weightLabel: "500 g", mrp: 72, price: 62, discountPercent: 14, packName: "Sri Maneeshwara Green Gram Whole 500 g Pack", inStock: true },
      { id: "p15-v2", weightLabel: "1 kg", mrp: 140, price: 119, discountPercent: 15, packName: "Sri Maneeshwara Green Gram Whole 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p16",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Roasted Gram (Pottukadalai)",
    tamilName: "பொட்டுக் கடலை",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p16-v1", weightLabel: "250 g", mrp: 40, price: 34, discountPercent: 15, packName: "Sakthi Roasted Gram 250 g Pack", inStock: true },
      { id: "p16-v2", weightLabel: "500 g", mrp: 75, price: 64, discountPercent: 15, packName: "Sakthi Roasted Gram 500 g Pack", inStock: true }
    ]
  },

  // ================= 3. FLOURS & ATTA =================
  {
    id: "p17",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Whole Wheat Sharbati Atta",
    tamilName: "ஆசிர்வாத் கோதுமை மாவு",
    brand: "Aashirvaad",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p17-v1", weightLabel: "1 kg", mrp: 72, price: 63, discountPercent: 12, packName: "Aashirvaad Whole Wheat Atta 1 kg Pack", inStock: true },
      { id: "p17-v2", weightLabel: "5 kg", mrp: 335, price: 285, discountPercent: 15, packName: "Aashirvaad Whole Wheat Atta 5 kg Pack", inStock: true },
      { id: "p17-v3", weightLabel: "10 kg", mrp: 645, price: 545, discountPercent: 16, packName: "Aashirvaad Whole Wheat Atta 10 kg Pack", inStock: true }
    ]
  },
  {
    id: "p18",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Chakki Fresh Atta",
    tamilName: "பில்ஸ்பரி சக்கி ஃப்ரெஷ் கோதுமை மாவு",
    brand: "Pillsbury",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p18-v1", weightLabel: "5 kg", mrp: 320, price: 275, discountPercent: 14, packName: "Pillsbury Chakki Fresh Atta 5 kg Pack", inStock: true },
      { id: "p18-v2", weightLabel: "10 kg", mrp: 620, price: 530, discountPercent: 15, packName: "Pillsbury Chakki Fresh Atta 10 kg Pack", inStock: true }
    ]
  },
  {
    id: "p19",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Farm Fresh Whole Wheat Atta",
    tamilName: "அன்னபூர்ணா கோதுமை மாவு",
    brand: "Annapurna",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p19-v1", weightLabel: "5 kg", mrp: 310, price: 265, discountPercent: 15, packName: "Annapurna Whole Wheat Atta 5 kg Pack", inStock: true },
      { id: "p19-v2", weightLabel: "10 kg", mrp: 600, price: 510, discountPercent: 15, packName: "Annapurna Whole Wheat Atta 10 kg Pack", inStock: true }
    ]
  },
  {
    id: "p20",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Roasted Sooji Rava",
    tamilName: "நாகா வறுத்த ரவை",
    brand: "Naga",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p20-v1", weightLabel: "500 g", mrp: 48, price: 41, discountPercent: 15, packName: "Naga Roasted Sooji Rava 500 g Pack", inStock: true },
      { id: "p20-v2", weightLabel: "1 kg", mrp: 92, price: 79, discountPercent: 14, packName: "Naga Roasted Sooji Rava 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p21",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Premium Maida (Refined Flour)",
    tamilName: "நாகா மைதா மாவு",
    brand: "Naga",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p21-v1", weightLabel: "500 g", mrp: 45, price: 38, discountPercent: 16, packName: "Naga Premium Maida 500 g Pack", inStock: true },
      { id: "p21-v2", weightLabel: "1 kg", mrp: 85, price: 72, discountPercent: 15, packName: "Naga Premium Maida 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p22",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Pure Besan (Gram Flour)",
    tamilName: "டாடா சம்பன் கடலை மாவு",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p22-v1", weightLabel: "500 g", mrp: 68, price: 58, discountPercent: 15, packName: "Tata Sampann 100% Pure Besan 500 g Pack", inStock: true },
      { id: "p22-v2", weightLabel: "1 kg", mrp: 130, price: 112, discountPercent: 14, packName: "Tata Sampann 100% Pure Besan 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p23",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Pure Ragi Flour (Finger Millet)",
    tamilName: "ஆச்சி கேழ்வரகு மாவு",
    brand: "Aachi",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p23-v1", weightLabel: "500 g", mrp: 46, price: 39, discountPercent: 15, packName: "Aachi Pure Ragi Flour 500 g Pack", inStock: true },
      { id: "p23-v2", weightLabel: "1 kg", mrp: 88, price: 74, discountPercent: 16, packName: "Aachi Pure Ragi Flour 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p24",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Idiyappam & Rice Flour",
    tamilName: "நாகா இடியாப்ப மாவு",
    brand: "Naga",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p24-v1", weightLabel: "500 g", mrp: 52, price: 44, discountPercent: 15, packName: "Naga Special Idiyappam Flour 500 g Pack", inStock: true },
      { id: "p24-v2", weightLabel: "1 kg", mrp: 98, price: 84, discountPercent: 14, packName: "Naga Special Idiyappam Flour 1 kg Pack", inStock: true }
    ]
  },

  // ================= 4. COOKING OILS AND GHEE =================
  {
    id: "p25",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Refined Sunflower Oil",
    tamilName: "கோல்ட் வின்னர் சூரியகாந்தி எண்ணெய்",
    brand: "Gold Winner",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p25-v1", weightLabel: "500 ml", mrp: 85, price: 75, discountPercent: 12, packName: "Gold Winner Sunflower Oil 500 ml Pouch", inStock: true },
      { id: "p25-v2", weightLabel: "1 L", mrp: 165, price: 142, discountPercent: 14, packName: "Gold Winner Sunflower Oil 1 Litre Pouch", inStock: true },
      { id: "p25-v3", weightLabel: "5 L", mrp: 820, price: 699, discountPercent: 15, packName: "Gold Winner Sunflower Oil 5 Litre Can", inStock: true }
    ]
  },
  {
    id: "p26",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Sunlite Refined Sunflower Oil",
    tamilName: "பார்ச்சூன் சன்லைட் சமையல் எண்ணெய்",
    brand: "Fortune",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p26-v1", weightLabel: "1 L", mrp: 160, price: 139, discountPercent: 13, packName: "Fortune Sunlite Sunflower Oil 1 Litre Pouch", inStock: true },
      { id: "p26-v2", weightLabel: "5 L", mrp: 790, price: 680, discountPercent: 14, packName: "Fortune Sunlite Sunflower Oil 5 Litre Can", inStock: true }
    ]
  },
  {
    id: "p27",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Pure Sesame Gingelly Oil (Nallennai)",
    tamilName: "இதயம் நல்லெண்ணெய்",
    brand: "Idhayam",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p27-v1", weightLabel: "500 ml", mrp: 210, price: 185, discountPercent: 12, packName: "Idhayam Gingelly Oil 500 ml Bottle", inStock: true },
      { id: "p27-v2", weightLabel: "1 L", mrp: 410, price: 358, discountPercent: 13, packName: "Idhayam Gingelly Oil 1 Litre Pouch", inStock: true }
    ]
  },
  {
    id: "p28",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Pure Coconut Oil (Thengai Ennai)",
    tamilName: "சக்தி தூய தேங்காய் எண்ணெய்",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p28-v1", weightLabel: "500 ml", mrp: 160, price: 139, discountPercent: 13, packName: "Sakthi Pure Coconut Oil 500 ml Bottle", inStock: true },
      { id: "p28-v2", weightLabel: "1 L", mrp: 310, price: 269, discountPercent: 13, packName: "Sakthi Pure Coconut Oil 1 Litre Pouch", inStock: true }
    ]
  },
  {
    id: "p29",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Pure Cow Ghee (Nattu Pasu Nei)",
    tamilName: "ஆவின் பசு நெய்",
    brand: "Aavin",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    isDairyFresh: true,
    variants: [
      { id: "p29-v1", weightLabel: "200 ml", mrp: 155, price: 145, discountPercent: 6, packName: "Aavin Pure Cow Ghee 200 ml Jar", inStock: true },
      { id: "p29-v2", weightLabel: "500 ml", mrp: 375, price: 355, discountPercent: 5, packName: "Aavin Pure Cow Ghee 500 ml Jar", inStock: true },
      { id: "p29-v3", weightLabel: "1 L", mrp: 720, price: 685, discountPercent: 5, packName: "Aavin Pure Cow Ghee 1 Litre Jar", inStock: true }
    ]
  },
  {
    id: "p30",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Pure Ghee (Danedar)",
    tamilName: "அமுல் சுத்தமான நெய்",
    brand: "Amul",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p30-v1", weightLabel: "500 ml", mrp: 385, price: 360, discountPercent: 6, packName: "Amul Pure Ghee 500 ml Tin", inStock: true },
      { id: "p30-v2", weightLabel: "1 L", mrp: 740, price: 695, discountPercent: 6, packName: "Amul Pure Ghee 1 Litre Tin", inStock: true }
    ]
  },
  {
    id: "p31",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Groundnut Cooking Oil (Kadalai Ennai)",
    tamilName: "இதயம் கடலை எண்ணெய்",
    brand: "Idhayam",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p31-v1", weightLabel: "1 L", mrp: 240, price: 215, discountPercent: 10, packName: "Idhayam Mantra Groundnut Oil 1 Litre Pouch", inStock: true },
      { id: "p31-v2", weightLabel: "5 L", mrp: 1180, price: 1040, discountPercent: 12, packName: "Idhayam Mantra Groundnut Oil 5 Litre Can", inStock: true }
    ]
  },
  {
    id: "p32",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Kacchi Ghani Pure Mustard Oil",
    tamilName: "பார்ச்சூன் கடுகு எண்ணெய்",
    brand: "Fortune",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p32-v1", weightLabel: "1 L", mrp: 180, price: 155, discountPercent: 14, packName: "Fortune Kacchi Ghani Mustard Oil 1 Litre Bottle", inStock: true }
    ]
  },

  // ================= 5. SPICES AND MASALAS =================
  {
    id: "p33",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Authentic Sambar Powder",
    tamilName: "சக்தி சாம்பார் தூள்",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p33-v1", weightLabel: "100 g", mrp: 38, price: 32, discountPercent: 16, packName: "Sakthi Sambar Powder 100 g Pack", inStock: true },
      { id: "p33-v2", weightLabel: "200 g", mrp: 74, price: 62, discountPercent: 16, packName: "Sakthi Sambar Powder 200 g Pack", inStock: true },
      { id: "p33-v3", weightLabel: "500 g", mrp: 175, price: 145, discountPercent: 17, packName: "Sakthi Sambar Powder 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p34",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Spicy Kulambu Chilli Powder",
    tamilName: "ஆச்சி குழம்பு மிளகாய்த்தூள்",
    brand: "Aachi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p34-v1", weightLabel: "200 g", mrp: 68, price: 58, discountPercent: 15, packName: "Aachi Kulambu Chilli Powder 200 g Pack", inStock: true },
      { id: "p34-v2", weightLabel: "500 g", mrp: 160, price: 135, discountPercent: 16, packName: "Aachi Kulambu Chilli Powder 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p35",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "South Indian Rasam Powder",
    tamilName: "எம்டிஆர் ரசம் பொடி",
    brand: "MTR",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p35-v1", weightLabel: "100 g", mrp: 45, price: 38, discountPercent: 16, packName: "MTR Rasam Powder 100 g Pouch", inStock: true },
      { id: "p35-v2", weightLabel: "200 g", mrp: 86, price: 72, discountPercent: 16, packName: "MTR Rasam Powder 200 g Pouch", inStock: true }
    ]
  },
  {
    id: "p36",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Royal Garam Masala Powder",
    tamilName: "எவரெஸ்ட் கரம் மசாலா",
    brand: "Everest",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p36-v1", weightLabel: "100 g", mrp: 88, price: 75, discountPercent: 15, packName: "Everest Garam Masala 100 g Carton", inStock: true }
    ]
  },
  {
    id: "p37",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Turmeric Powder (Manjal Thool)",
    tamilName: "சக்தி மஞ்சள் தூள்",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p37-v1", weightLabel: "100 g", mrp: 34, price: 29, discountPercent: 15, packName: "Sakthi Turmeric Powder 100 g Pack", inStock: true },
      { id: "p37-v2", weightLabel: "250 g", mrp: 80, price: 68, discountPercent: 15, packName: "Sakthi Turmeric Powder 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p38",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Red Chilli Powder (Milagai Thool)",
    tamilName: "ஆச்சி தனி மிளகாய்த்தூள்",
    brand: "Aachi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p38-v1", weightLabel: "100 g", mrp: 45, price: 38, discountPercent: 16, packName: "Aachi Pure Chilli Powder 100 g Pack", inStock: true },
      { id: "p38-v2", weightLabel: "250 g", mrp: 110, price: 92, discountPercent: 16, packName: "Aachi Pure Chilli Powder 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p39",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Coriander Powder (Malli Thool)",
    tamilName: "சக்தி மல்லித் தூள்",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p39-v1", weightLabel: "200 g", mrp: 62, price: 52, discountPercent: 16, packName: "Sakthi Coriander Powder 200 g Pack", inStock: true },
      { id: "p39-v2", weightLabel: "500 g", mrp: 145, price: 122, discountPercent: 16, packName: "Sakthi Coriander Powder 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p40",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Chicken Masala Powder",
    tamilName: "சக்தி சிக்கன் மசாலா",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p40-v1", weightLabel: "100 g", mrp: 42, price: 35, discountPercent: 17, packName: "Sakthi Chicken Masala 100 g Pack", inStock: true },
      { id: "p40-v2", weightLabel: "200 g", mrp: 80, price: 67, discountPercent: 16, packName: "Sakthi Chicken Masala 200 g Pack", inStock: true }
    ]
  },

  // ================= 6. SALT AND SUGAR =================
  {
    id: "p41",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Iodized Table Salt",
    tamilName: "டாடா அயோடின் கலந்த உப்பு",
    brand: "Tata Salt",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p41-v1", weightLabel: "1 kg", mrp: 28, price: 25, discountPercent: 11, packName: "Tata Vacuum Evaporated Iodized Salt 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p42",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Natural Crystal Salt (Kal Uppu)",
    tamilName: "தூய கல் உப்பு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p42-v1", weightLabel: "1 kg", mrp: 18, price: 15, discountPercent: 17, packName: "Sri Maneeshwara Crystal Sea Salt 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p43",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Pure Refined White Sugar",
    tamilName: "பாரி சுத்திகரிக்கப்பட்ட சர்க்கரை",
    brand: "Parry's",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p43-v1", weightLabel: "1 kg", mrp: 54, price: 47, discountPercent: 13, packName: "Parry's Pure Refined Sugar 1 kg Pack", inStock: true },
      { id: "p43-v2", weightLabel: "5 kg", mrp: 265, price: 228, discountPercent: 14, packName: "Parry's Pure Refined Sugar 5 kg Pack", inStock: true }
    ]
  },
  {
    id: "p44",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Traditional Country Jaggery (Nattu Sakkarai)",
    tamilName: "இயற்கை நாட்டுச் சர்க்கரை",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p44-v1", weightLabel: "500 g", mrp: 55, price: 47, discountPercent: 15, packName: "Sri Maneeshwara Organic Nattu Sakkarai 500 g Pack", inStock: true },
      { id: "p44-v2", weightLabel: "1 kg", mrp: 105, price: 89, discountPercent: 15, packName: "Sri Maneeshwara Organic Nattu Sakkarai 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p45",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Himalayan Pink Rock Salt",
    tamilName: "டாடா ஹிமாலயன் பிங்க் உப்பு",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p45-v1", weightLabel: "1 kg", mrp: 120, price: 99, discountPercent: 18, packName: "Tata Sampann Himalayan Pink Rock Salt 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p46",
    categoryId: "salt_sugar",
    categoryName: "Salt and Sugar",
    baseName: "Round Jaggery Cubes (Mandai Vellam)",
    tamilName: "உருண்டை மண்டை வெல்லம்",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p46-v1", weightLabel: "1 kg", mrp: 85, price: 72, discountPercent: 15, packName: "Sri Maneeshwara Pure Round Jaggery 1 kg Pack", inStock: true }
    ]
  },

  // ================= 7. DAIRY PRODUCTS =================
  {
    id: "p47",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Full Cream Fresh Milk (Orange)",
    tamilName: "ஆவின் ஆரஞ்சு பசும்பால் பாக்கெட்",
    brand: "Aavin",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    isDairyFresh: true,
    variants: [
      { id: "p47-v1", weightLabel: "500 ml", mrp: 30, price: 30, discountPercent: 0, packName: "Aavin Full Cream Milk 500 ml Packet", inStock: true },
      { id: "p47-v2", weightLabel: "1 L", mrp: 60, price: 60, discountPercent: 0, packName: "Aavin Full Cream Milk 1 Litre Packet", inStock: true }
    ]
  },
  {
    id: "p48",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Standardised Fresh Milk (Green)",
    tamilName: "ஆவின் பச்சை பால் பாக்கெட்",
    brand: "Aavin",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p48-v1", weightLabel: "500 ml", mrp: 24, price: 24, discountPercent: 0, packName: "Aavin Standardised Milk 500 ml Packet", inStock: true }
    ]
  },
  {
    id: "p49",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Special Toned Fresh Milk",
    tamilName: "ஹெரிடேஜ் பால் பாக்கெட்",
    brand: "Heritage",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p49-v1", weightLabel: "500 ml", mrp: 27, price: 27, discountPercent: 0, packName: "Heritage Toned Milk 500 ml Pouch", inStock: true }
    ]
  },
  {
    id: "p50",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Thick Farm Fresh Curd (Dahi)",
    tamilName: "மில்கி மிஸ்ட் கெட்டித் தயிர்",
    brand: "Milky Mist",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    isDairyFresh: true,
    variants: [
      { id: "p50-v1", weightLabel: "500 g", mrp: 45, price: 42, discountPercent: 7, packName: "Milky Mist Farm Fresh Curd 500 g Pouch", inStock: true },
      { id: "p50-v2", weightLabel: "1 kg", mrp: 90, price: 82, discountPercent: 9, packName: "Milky Mist Farm Fresh Curd 1 kg Bucket", inStock: true }
    ]
  },
  {
    id: "p51",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Salted Butter Block",
    tamilName: "அமுல் வெண்ணெய் கட்டி",
    brand: "Amul",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    isDairyFresh: true,
    variants: [
      { id: "p51-v1", weightLabel: "100 g", mrp: 58, price: 54, discountPercent: 7, packName: "Amul Pasteurized Butter 100 g Carton", inStock: true },
      { id: "p51-v2", weightLabel: "500 g", mrp: 285, price: 265, discountPercent: 7, packName: "Amul Pasteurized Butter 500 g Carton", inStock: true }
    ]
  },
  {
    id: "p52",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Fresh Soft Malai Paneer",
    tamilName: "மில்கி மிஸ்ட் மலாய் பனீர்",
    brand: "Milky Mist",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p52-v1", weightLabel: "200 g", mrp: 125, price: 110, discountPercent: 12, packName: "Milky Mist Soft Paneer 200 g Pack", inStock: true }
    ]
  },
  {
    id: "p53",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Processed Cheese Slices",
    tamilName: "அமுல் சீஸ் துண்டுகள்",
    brand: "Amul",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p53-v1", weightLabel: "200 g", mrp: 145, price: 132, discountPercent: 9, packName: "Amul Processed Cheese Slices 200 g (10 Slices)", inStock: true }
    ]
  },
  {
    id: "p54",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Spiced Masala Buttermilk (Mor)",
    tamilName: "ஆவின் மசாலா மோர் பாக்கெட்",
    brand: "Aavin",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p54-v1", weightLabel: "200 ml", mrp: 12, price: 12, discountPercent: 0, packName: "Aavin Masala Mor 200 ml Pouch", inStock: true }
    ]
  },
  {
    id: "p55",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Sweet Mango Lassi",
    tamilName: "அமுல் மாம்பழ லஸ்ஸி",
    brand: "Amul",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p55-v1", weightLabel: "250 ml", mrp: 30, price: 27, discountPercent: 10, packName: "Amul Kool Mango Lassi 250 ml Tetra", inStock: true }
    ]
  },
  {
    id: "p56",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Badam Flavoured Milk",
    tamilName: "ஆவின் பாதாம் பால்",
    brand: "Aavin",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p56-v1", weightLabel: "200 ml", mrp: 35, price: 32, discountPercent: 9, packName: "Aavin Delicious Badam Milk 200 ml Glass/Can", inStock: true }
    ]
  },
  {
    id: "p57",
    categoryId: "dairy_products",
    categoryName: "Dairy Products",
    baseName: "Vanilla Magic Ice Cream Tub",
    tamilName: "அமுல் வெண்ணிலா ஐஸ்கிரீம்",
    brand: "Amul",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p57-v1", weightLabel: "1 L", mrp: 180, price: 162, discountPercent: 10, packName: "Amul Vanilla Magic Ice Cream 1 Litre Tub", inStock: true }
    ]
  },

  // ================= 8. BREAKFAST AND CEREALS =================
  {
    id: "p58",
    categoryId: "breakfast_cereals",
    categoryName: "Breakfast & Cereals",
    baseName: "Original Corn Flakes",
    tamilName: "கெல்லாக்ஸ் கார்ன் ப்ளேக்ஸ்",
    brand: "Kellogg's",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p58-v1", weightLabel: "500 g", mrp: 215, price: 185, discountPercent: 14, packName: "Kellogg's Real Almond Corn Flakes 500 g Carton", inStock: true },
      { id: "p58-v2", weightLabel: "1 kg", mrp: 395, price: 335, discountPercent: 15, packName: "Kellogg's Original Corn Flakes 1 kg Value Pack", inStock: true }
    ]
  },
  {
    id: "p59",
    categoryId: "breakfast_cereals",
    categoryName: "Breakfast & Cereals",
    baseName: "Rolled Wholegrain Oats",
    tamilName: "குவாக்கர் ரோல்டு ஓட்ஸ்",
    brand: "Quaker",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p59-v1", weightLabel: "1 kg", mrp: 195, price: 165, discountPercent: 15, packName: "Quaker Rolled Oats 1 kg Pouch", inStock: true }
    ]
  },
  {
    id: "p60",
    categoryId: "breakfast_cereals",
    categoryName: "Breakfast & Cereals",
    baseName: "Saffola Masala Oats Classic",
    tamilName: "சஃபோலா மசாலா ஓட்ஸ்",
    brand: "Saffola",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p60-v1", weightLabel: "400 g", mrp: 180, price: 149, discountPercent: 17, packName: "Saffola Masala Oats Classic 400 g Pouch", inStock: true }
    ]
  },
  {
    id: "p61",
    categoryId: "breakfast_cereals",
    categoryName: "Breakfast & Cereals",
    baseName: "Health Drink Nutrition Mix",
    tamilName: "மன்னா பாரம்பரிய சத்து மாவு",
    brand: "Manna",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p61-v1", weightLabel: "500 g", mrp: 165, price: 139, discountPercent: 16, packName: "Manna Health Drink Sathu Maavu 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p62",
    categoryId: "breakfast_cereals",
    categoryName: "Breakfast & Cereals",
    baseName: "Instant Rava Idli Mix",
    tamilName: "எம்டிஆர் ரவா இட்லி மிக்ஸ்",
    brand: "MTR",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p62-v1", weightLabel: "500 g", mrp: 135, price: 115, discountPercent: 15, packName: "MTR Ready Rava Idli Mix 500 g Pack", inStock: true }
    ]
  },

  // ================= 9. SNACKS AND BISCUITS =================
  {
    id: "p63",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Good Day Cashew Cookies",
    tamilName: "பிரிட்டானியா குட் டே பிஸ்கட்",
    brand: "Britannia",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p63-v1", weightLabel: "200 g", mrp: 45, price: 38, discountPercent: 16, packName: "Britannia Good Day Butter & Cashew 200 g Pack", inStock: true },
      { id: "p63-v2", weightLabel: "600 g", mrp: 135, price: 110, discountPercent: 19, packName: "Britannia Good Day Cashew 600 g Family Pack", inStock: true }
    ]
  },
  {
    id: "p64",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Original Glucose Biscuits",
    tamilName: "பார்லே-ஜி குளூக்கோஸ் பிஸ்கட்",
    brand: "Parle",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p64-v1", weightLabel: "250 g", mrp: 30, price: 27, discountPercent: 10, packName: "Parle-G Gold Glucose Biscuits 250 g Pack", inStock: true },
      { id: "p64-v2", weightLabel: "800 g", mrp: 95, price: 82, discountPercent: 14, packName: "Parle-G Value Pack 800 g", inStock: true }
    ]
  },
  {
    id: "p65",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Dark Fantasy Choco Fills",
    tamilName: "சன்பீஸ்ட் டார்க் ஃபேண்டஸி",
    brand: "Sunfeast",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p65-v1", weightLabel: "300 g", mrp: 150, price: 120, discountPercent: 20, packName: "Sunfeast Dark Fantasy Choco Fills 300 g Box", inStock: true }
    ]
  },
  {
    id: "p66",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "NutriChoice Digestive High Fibre",
    tamilName: "பிரிட்டானியா டைஜெஸ்டிவ் பிஸ்கட்",
    brand: "Britannia",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p66-v1", weightLabel: "200 g", mrp: 60, price: 49, discountPercent: 18, packName: "Britannia NutriChoice Digestive 200 g Pack", inStock: true }
    ]
  },
  {
    id: "p67",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Marie Gold Tea Time Biscuits",
    tamilName: "பிரிட்டானியா மேரி கோல்ட்",
    brand: "Britannia",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p67-v1", weightLabel: "300 g", mrp: 40, price: 34, discountPercent: 15, packName: "Britannia Marie Gold 300 g Pack", inStock: true }
    ]
  },
  {
    id: "p68",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Coimbatore Special Murukku",
    tamilName: "கோவை பாரம்பரிய முறுக்கு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p68-v1", weightLabel: "250 g", mrp: 65, price: 54, discountPercent: 17, packName: "Sri Maneeshwara Butter Murukku 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p69",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Spicy Madras Mixture",
    tamilName: "கார மிக்சர்",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p69-v1", weightLabel: "250 g", mrp: 70, price: 58, discountPercent: 17, packName: "Sri Maneeshwara Special Mixture 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p70",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Oreo Vanilla Creme Biscuits",
    tamilName: "ஓரியோ கிரீம் பிஸ்கட்",
    brand: "Cadbury",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p70-v1", weightLabel: "300 g", mrp: 100, price: 85, discountPercent: 15, packName: "Cadbury Oreo Vanilla Creme 300 g Family Pack", inStock: true }
    ]
  },

  // ================= 10. BEVERAGES =================
  {
    id: "p71",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Tata Tea Premium",
    tamilName: "டாடா டீ பிரீமியம்",
    brand: "Tata Tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p71-v1", weightLabel: "250 g", mrp: 145, price: 122, discountPercent: 16, packName: "Tata Tea Premium 250 g Pouch", inStock: true },
      { id: "p71-v2", weightLabel: "500 g", mrp: 285, price: 239, discountPercent: 16, packName: "Tata Tea Premium 500 g Pouch", inStock: true },
      { id: "p71-v3", weightLabel: "1 kg", mrp: 560, price: 465, discountPercent: 17, packName: "Tata Tea Premium 1 kg Bag", inStock: true }
    ]
  },
  {
    id: "p72",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Red Label Strong Tea",
    tamilName: "ப்ரூக் பாண்ட் ரெட் லேபிள் டீ",
    brand: "Brooke Bond",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p72-v1", weightLabel: "250 g", mrp: 150, price: 126, discountPercent: 16, packName: "Brooke Bond Red Label Tea 250 g Pack", inStock: true },
      { id: "p72-v2", weightLabel: "500 g", mrp: 295, price: 245, discountPercent: 17, packName: "Brooke Bond Red Label Tea 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p73",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Chakra Gold Strong Dust Tea",
    tamilName: "சக்ரா கோல்ட் டஸ்ட் டீ",
    brand: "Tata Tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p73-v1", weightLabel: "250 g", mrp: 160, price: 135, discountPercent: 16, packName: "Tata Tea Chakra Gold 250 g Pack", inStock: true },
      { id: "p73-v2", weightLabel: "500 g", mrp: 310, price: 258, discountPercent: 17, packName: "Tata Tea Chakra Gold 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p74",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "BRU Instant Coffee Chicory Mix",
    tamilName: "ப்ரூ இன்ஸ்டன்ட் காபி தூள்",
    brand: "Bru",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p74-v1", weightLabel: "100 g", mrp: 195, price: 168, discountPercent: 14, packName: "BRU Instant Coffee 100 g Jar", inStock: true },
      { id: "p74-v2", weightLabel: "200 g", mrp: 375, price: 320, discountPercent: 15, packName: "BRU Instant Coffee 200 g Pouch", inStock: true }
    ]
  },
  {
    id: "p75",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Nescafe Classic Pure Coffee",
    tamilName: "நெஸ்கஃபே கிளாசிக் காபி",
    brand: "Nescafe",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p75-v1", weightLabel: "100 g", mrp: 210, price: 182, discountPercent: 13, packName: "Nescafe Classic 100 g Glass Jar", inStock: true }
    ]
  },
  {
    id: "p76",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Horlicks Health & Nutrition Drink",
    tamilName: "ஹார்லிக்ஸ் ஊட்டச்சத்து பானம்",
    brand: "Horlicks",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p76-v1", weightLabel: "500 g", mrp: 260, price: 228, discountPercent: 12, packName: "Horlicks Classic Malt 500 g Jar", inStock: true }
    ]
  },
  {
    id: "p77",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Boost Energy Drink",
    tamilName: "பூஸ்ட் எனர்ஜி பானம்",
    brand: "Boost",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p77-v1", weightLabel: "500 g", mrp: 275, price: 239, discountPercent: 13, packName: "Boost Malt Drink 500 g Jar", inStock: true }
    ]
  },
  {
    id: "p78",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Real 100% Mixed Fruit Juice",
    tamilName: "ரியல் பழச்சாறு",
    brand: "Real",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p78-v1", weightLabel: "1 L", mrp: 130, price: 110, discountPercent: 15, packName: "Real Mixed Fruit Juice 1 Litre Tetra", inStock: true }
    ]
  },

  // ================= 11. PICKLES AND SAUCES =================
  {
    id: "p79",
    categoryId: "pickles_sauces",
    categoryName: "Pickles and Sauces",
    baseName: "Home-Style Mango Pickle (Manga Oorugai)",
    tamilName: "பிரியா மாங்காய் ஊறுகாய்",
    brand: "Priya",
    image: "https://images.unsplash.com/photo-1589135233689-d56d1a9386d4?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p79-v1", weightLabel: "300 g", mrp: 85, price: 72, discountPercent: 15, packName: "Priya Cut Mango Pickle 300 g Jar", inStock: true },
      { id: "p79-v2", weightLabel: "500 g", mrp: 135, price: 112, discountPercent: 17, packName: "Priya Cut Mango Pickle 500 g Jar", inStock: true }
    ]
  },
  {
    id: "p80",
    categoryId: "pickles_sauces",
    categoryName: "Pickles and Sauces",
    baseName: "Spicy Lime Pickle (Elumichai Oorugai)",
    tamilName: "ஆச்சி எலுமிச்சை ஊறுகாய்",
    brand: "Aachi",
    image: "https://images.unsplash.com/photo-1589135233689-d56d1a9386d4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p80-v1", weightLabel: "300 g", mrp: 80, price: 68, discountPercent: 15, packName: "Aachi Lime Pickle 300 g Jar", inStock: true }
    ]
  },
  {
    id: "p81",
    categoryId: "pickles_sauces",
    categoryName: "Pickles and Sauces",
    baseName: "Gongura Chutney Pickle",
    tamilName: "பிரியா கோங்குரா ஊறுகாய்",
    brand: "Priya",
    image: "https://images.unsplash.com/photo-1589135233689-d56d1a9386d4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p81-v1", weightLabel: "300 g", mrp: 90, price: 76, discountPercent: 16, packName: "Priya Gongura Pickle 300 g Jar", inStock: true }
    ]
  },
  {
    id: "p82",
    categoryId: "pickles_sauces",
    categoryName: "Pickles and Sauces",
    baseName: "Rich Tomato Ketchup Sauce",
    tamilName: "கிசான் தக்காளி சாஸ்",
    brand: "Kissan",
    image: "https://images.unsplash.com/photo-1589135233689-d56d1a9386d4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p82-v1", weightLabel: "500 g", mrp: 120, price: 99, discountPercent: 18, packName: "Kissan Fresh Tomato Ketchup 500 g Squeezy Bottle", inStock: true },
      { id: "p82-v2", weightLabel: "1 kg", mrp: 195, price: 159, discountPercent: 18, packName: "Kissan Fresh Tomato Ketchup 1 kg Bottle", inStock: true }
    ]
  },
  {
    id: "p83",
    categoryId: "pickles_sauces",
    categoryName: "Pickles and Sauces",
    baseName: "Pure Garlic Paste",
    tamilName: "டாபர் ஹோம்மேட் இஞ்சி பூண்டு விழுது",
    brand: "Dabur",
    image: "https://images.unsplash.com/photo-1589135233689-d56d1a9386d4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p83-v1", weightLabel: "200 g", mrp: 65, price: 54, discountPercent: 17, packName: "Dabur Hommade Ginger Garlic Paste 200 g Pouch", inStock: true }
    ]
  },

  // ================= 12. DRY FRUITS AND NUTS =================
  {
    id: "p84",
    categoryId: "dry_fruits_nuts",
    categoryName: "Dry Fruits and Nuts",
    baseName: "Whole Cashew Nuts (W240 Mundhiri)",
    tamilName: "முந்திரிப் பருப்பு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1509912760668-98e3b3979b94?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p84-v1", weightLabel: "250 g", mrp: 260, price: 220, discountPercent: 15, packName: "Sri Maneeshwara Premium Cashew Nuts 250 g Pouch", inStock: true },
      { id: "p84-v2", weightLabel: "500 g", mrp: 510, price: 425, discountPercent: 17, packName: "Sri Maneeshwara Premium Cashew Nuts 500 g Pouch", inStock: true }
    ]
  },
  {
    id: "p85",
    categoryId: "dry_fruits_nuts",
    categoryName: "Dry Fruits and Nuts",
    baseName: "California Badam (Almonds)",
    tamilName: "பாதாம் பருப்பு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p85-v1", weightLabel: "250 g", mrp: 275, price: 235, discountPercent: 15, packName: "Sri Maneeshwara California Almonds 250 g Pouch", inStock: true },
      { id: "p85-v2", weightLabel: "500 g", mrp: 540, price: 450, discountPercent: 17, packName: "Sri Maneeshwara California Almonds 500 g Pouch", inStock: true }
    ]
  },
  {
    id: "p86",
    categoryId: "dry_fruits_nuts",
    categoryName: "Dry Fruits and Nuts",
    baseName: "Golden Raisins (Ular Drakshai)",
    tamilName: "உலர் திராட்சை",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p86-v1", weightLabel: "250 g", mrp: 120, price: 98, discountPercent: 18, packName: "Sri Maneeshwara Indian Golden Raisins 250 g Pouch", inStock: true }
    ]
  },
  {
    id: "p87",
    categoryId: "dry_fruits_nuts",
    categoryName: "Dry Fruits and Nuts",
    baseName: "Natural Arabian Dates (Perichampazham)",
    tamilName: "லயன் அரேபிய பேரீச்சம்பழம்",
    brand: "Lion",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p87-v1", weightLabel: "500 g", mrp: 165, price: 139, discountPercent: 16, packName: "Lion Arabian Seedless Dates 500 g Box", inStock: true }
    ]
  },
  {
    id: "p88",
    categoryId: "dry_fruits_nuts",
    categoryName: "Dry Fruits and Nuts",
    baseName: "Roasted & Salted Pistachios",
    tamilName: "பிஸ்தா பருப்பு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1509912760668-98e3b3979b94?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p88-v1", weightLabel: "250 g", mrp: 340, price: 285, discountPercent: 16, packName: "Sri Maneeshwara Salted Pistachios 250 g Pouch", inStock: true }
    ]
  },

  // ================= 13. CLEANING AND HOUSEHOLD =================
  {
    id: "p89",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Surf Excel Easy Wash Detergent Powder",
    tamilName: "சர்ப் எக்செல் துணி துவைக்கும் பவுடர்",
    brand: "Surf Excel",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p89-v1", weightLabel: "1 kg", mrp: 160, price: 139, discountPercent: 13, packName: "Surf Excel Easy Wash Detergent 1 kg Pack", inStock: true },
      { id: "p89-v2", weightLabel: "3 kg", mrp: 450, price: 385, discountPercent: 14, packName: "Surf Excel Easy Wash Detergent 3 kg Bag", inStock: true }
    ]
  },
  {
    id: "p90",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Ariel Matic Front & Top Load Powder",
    tamilName: "ஏரியல் மேட்டிக் டிடர்ஜென்ட்",
    brand: "Ariel",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p90-v1", weightLabel: "1 kg", mrp: 240, price: 199, discountPercent: 17, packName: "Ariel Matic Powder 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p91",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Vim Lemon Dishwash Gel",
    tamilName: "விம் பாத்திரம் கழுவும் ஜெல்",
    brand: "Vim",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p91-v1", weightLabel: "500 ml", mrp: 130, price: 105, discountPercent: 19, packName: "Vim Lemon Dishwash Gel 500 ml Squeezy Bottle", inStock: true },
      { id: "p91-v2", weightLabel: "750 ml", mrp: 185, price: 149, discountPercent: 19, packName: "Vim Lemon Dishwash Gel 750 ml Refill Pouch", inStock: true }
    ]
  },
  {
    id: "p92",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Vim Dishwash Bar",
    tamilName: "விம் சோப் கட்டி",
    brand: "Vim",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p92-v1", weightLabel: "300 g", mrp: 35, price: 30, discountPercent: 14, packName: "Vim Lemon Dishwash Bar 300 g with scrubber", inStock: true }
    ]
  },
  {
    id: "p93",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Lizol Disinfectant Floor Cleaner",
    tamilName: "லைசால் தரை சுத்திகரிப்பான்",
    brand: "Lizol",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p93-v1", weightLabel: "500 ml", mrp: 110, price: 92, discountPercent: 16, packName: "Lizol Citrus Floral Floor Cleaner 500 ml Bottle", inStock: true },
      { id: "p93-v2", weightLabel: "1 L", mrp: 215, price: 178, discountPercent: 17, packName: "Lizol Citrus Floral Floor Cleaner 1 Litre Bottle", inStock: true }
    ]
  },
  {
    id: "p94",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Harpic Power Plus Toilet Cleaner",
    tamilName: "ஹார்பிக் டாய்லெட் கிளீனர்",
    brand: "Harpic",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p94-v1", weightLabel: "500 ml", mrp: 105, price: 88, discountPercent: 16, packName: "Harpic Original Power Plus 500 ml Bottle", inStock: true },
      { id: "p94-v2", weightLabel: "1 L", mrp: 205, price: 169, discountPercent: 18, packName: "Harpic Original Power Plus 1 Litre Bottle", inStock: true }
    ]
  },
  {
    id: "p95",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Colin Glass & Surface Cleaner Spray",
    tamilName: "கோலின் கண்ணாடி கிளீனர்",
    brand: "Colin",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p95-v1", weightLabel: "500 ml", mrp: 120, price: 99, discountPercent: 18, packName: "Colin Glass Cleaner Trigger Spray 500 ml", inStock: true }
    ]
  },
  {
    id: "p96",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Good Knight Gold Flash Mosquito Refill",
    tamilName: "குட் நைட் கொசு மருந்து லிக்விட்",
    brand: "Good Knight",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p96-v1", weightLabel: "45 ml", mrp: 95, price: 82, discountPercent: 14, packName: "Good Knight Gold Flash Liquid Refill Twin Pack", inStock: true }
    ]
  },

  // ================= 14. PERSONAL CARE =================
  {
    id: "p97",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Lifebuoy Total Germ Protection Soap",
    tamilName: "லைஃப்பாய் சோப் பேக்",
    brand: "Lifebuoy",
    image: "https://images.unsplash.com/photo-1608248597359-216503c156f4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p97-v1", weightLabel: "125 g", mrp: 40, price: 34, discountPercent: 15, packName: "Lifebuoy Total 10 Soap 125 g Bar", inStock: true },
      { id: "p97-v2", weightLabel: "4 x 125 g", mrp: 160, price: 132, discountPercent: 18, packName: "Lifebuoy Total 10 Soap Multi-pack 4 x 125 g", inStock: true }
    ]
  },
  {
    id: "p98",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Dettol Original Bathing Soap",
    tamilName: "டெட்டால் குளியல் சோப்",
    brand: "Dettol",
    image: "https://images.unsplash.com/photo-1608248597359-216503c156f4?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p98-v1", weightLabel: "125 g", mrp: 55, price: 47, discountPercent: 15, packName: "Dettol Original Bath Soap 125 g Bar", inStock: true },
      { id: "p98-v2", weightLabel: "3 x 125 g", mrp: 165, price: 138, discountPercent: 16, packName: "Dettol Original Soap Multi-pack 3 x 125 g", inStock: true }
    ]
  },
  {
    id: "p99",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Hamam Neem Soap",
    tamilName: "ஹமாம் வேப்பிலை சோப்",
    brand: "Hamam",
    image: "https://images.unsplash.com/photo-1608248597359-216503c156f4?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p99-v1", weightLabel: "100 g", mrp: 38, price: 32, discountPercent: 16, packName: "Hamam Neem & Tulsi Soap 100 g Bar", inStock: true },
      { id: "p99-v2", weightLabel: "3 x 100 g", mrp: 114, price: 92, discountPercent: 19, packName: "Hamam Neem Soap Multi-pack 3 x 100 g", inStock: true }
    ]
  },
  {
    id: "p100",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Mysore Sandal Pure Sandalwood Soap",
    tamilName: "மைசூர் சாண்டல் சோப்",
    brand: "Mysore Sandal",
    image: "https://images.unsplash.com/photo-1608248597359-216503c156f4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p100-v1", weightLabel: "75 g", mrp: 48, price: 42, discountPercent: 13, packName: "Mysore Sandal Pure Oil Soap 75 g Bar", inStock: true },
      { id: "p100-v2", weightLabel: "150 g", mrp: 95, price: 82, discountPercent: 14, packName: "Mysore Sandal Pure Oil Soap 150 g Bar", inStock: true }
    ]
  },
  {
    id: "p101",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Colgate Strong Teeth Toothpaste",
    tamilName: "கோல்கேட் ஸ்ட்ராங் டீத் பற்பசை",
    brand: "Colgate",
    image: "https://images.unsplash.com/photo-1559671089-211c47ea4144?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p101-v1", weightLabel: "150 g", mrp: 98, price: 82, discountPercent: 16, packName: "Colgate Strong Teeth Calcium Dental Cream 150 g Tube", inStock: true },
      { id: "p101-v2", weightLabel: "300 g", mrp: 185, price: 149, discountPercent: 19, packName: "Colgate Strong Teeth Saver Twin Pack 300 g", inStock: true }
    ]
  },
  {
    id: "p102",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Clinic Plus Strong & Long Shampoo",
    tamilName: "கிளினிக் பிளஸ் ஷாம்பூ",
    brand: "Clinic Plus",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p102-v1", weightLabel: "175 ml", mrp: 120, price: 99, discountPercent: 18, packName: "Clinic Plus Strong & Long Milk Protein Shampoo 175 ml Bottle", inStock: true },
      { id: "p102-v2", weightLabel: "340 ml", mrp: 235, price: 189, discountPercent: 20, packName: "Clinic Plus Strong & Long Shampoo 340 ml Bottle", inStock: true }
    ]
  },
  {
    id: "p103",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Meera Herbal Hair Wash Powder",
    tamilName: "மீரா சிகைக்காய் பவுடர்",
    brand: "Meera",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p103-v1", weightLabel: "120 g", mrp: 65, price: 54, discountPercent: 17, packName: "Meera Herbal Shikakai Wash Powder 120 g Box", inStock: true }
    ]
  },
  {
    id: "p104",
    categoryId: "personal_care",
    categoryName: "Personal Care",
    baseName: "Parachute 100% Pure Coconut Hair Oil",
    tamilName: "பாரசூட் தேங்காய் கூந்தல் எண்ணெய்",
    brand: "Parachute",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p104-v1", weightLabel: "200 ml", mrp: 95, price: 82, discountPercent: 14, packName: "Parachute Pure Coconut Hair Oil 200 ml Bottle", inStock: true },
      { id: "p104-v2", weightLabel: "500 ml", mrp: 215, price: 185, discountPercent: 14, packName: "Parachute Pure Coconut Hair Oil 500 ml Bottle", inStock: true }
    ]
  },

  // ================= 15. BABY CARE =================
  {
    id: "p105",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Pampers All Round Protection Pants Diapers",
    tamilName: "பாம்பர்ஸ் பேபி டயப்பர் பேண்ட்ஸ்",
    brand: "Pampers",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p105-v1", weightLabel: "M (30 pcs)", mrp: 499, price: 425, discountPercent: 15, packName: "Pampers Diaper Pants Medium Size (30 Pants)", inStock: true },
      { id: "p105-v2", weightLabel: "L (28 pcs)", mrp: 499, price: 425, discountPercent: 15, packName: "Pampers Diaper Pants Large Size (28 Pants)", inStock: true }
    ]
  },
  {
    id: "p106",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Huggies Wonder Pants Diapers",
    tamilName: "ஹக்கீஸ் ஒண்டர் பேண்ட்ஸ்",
    brand: "Huggies",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p106-v1", weightLabel: "M (32 pcs)", mrp: 475, price: 399, discountPercent: 16, packName: "Huggies Wonder Pants Medium (32 Pants)", inStock: true }
    ]
  },
  {
    id: "p107",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Cerelac Fortified Baby Cereal (Wheat Apple)",
    tamilName: "நெஸ்லே செரிலாக் பேபி உணவு",
    brand: "Nestle",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p107-v1", weightLabel: "300 g", mrp: 290, price: 265, discountPercent: 9, packName: "Nestle Cerelac Wheat Apple 300 g Box", inStock: true }
    ]
  },
  {
    id: "p108",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Johnson's Gentle Baby Soap",
    tamilName: "ஜான்சன்ஸ் மென்மையான பேபி சோப்",
    brand: "Johnson's",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p108-v1", weightLabel: "75 g", mrp: 65, price: 55, discountPercent: 15, packName: "Johnson's Baby Bath Soap 75 g Bar", inStock: true },
      { id: "p108-v2", weightLabel: "150 g", mrp: 120, price: 99, discountPercent: 18, packName: "Johnson's Baby Bath Soap 150 g Bar", inStock: true }
    ]
  },
  {
    id: "p109",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Himalaya Herbal Gentle Baby Shampoo",
    tamilName: "இமாலயா பேபி ஷாம்பூ",
    brand: "Himalaya",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p109-v1", weightLabel: "200 ml", mrp: 165, price: 139, discountPercent: 16, packName: "Himalaya Gentle Baby Shampoo Hibiscus & Chickpea 200 ml", inStock: true }
    ]
  },
  {
    id: "p110",
    categoryId: "baby_care",
    categoryName: "Baby Care",
    baseName: "Johnson's Baby Powder Clinically Proven",
    tamilName: "ஜான்சன்ஸ் பேபி பவுடர்",
    brand: "Johnson's",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p110-v1", weightLabel: "200 g", mrp: 145, price: 122, discountPercent: 16, packName: "Johnson's Baby Powder 200 g Bottle", inStock: true }
    ]
  },

  // ================= ADDITIONAL REGIONAL STAPLES & ESSENTIALS (TO TOTAL 125+) =================
  // Rice & Grains additions
  {
    id: "p111",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Seeraga Samba Traditional Biryani Rice",
    tamilName: "சீரக சம்பா வாசனை அரிசி",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p111-v1", weightLabel: "1 kg", mrp: 140, price: 118, discountPercent: 16, packName: "Sri Maneeshwara Seeraga Samba 1 kg Pack", inStock: true },
      { id: "p111-v2", weightLabel: "5 kg", mrp: 680, price: 575, discountPercent: 15, packName: "Sri Maneeshwara Seeraga Samba 5 kg Bag", inStock: true }
    ]
  },
  {
    id: "p112",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Mappillai Samba Red Rice (Traditional)",
    tamilName: "மாப்பிள்ளை சம்பா சிகப்பரிசி",
    brand: "24 Mantra Organic",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p112-v1", weightLabel: "1 kg", mrp: 135, price: 115, discountPercent: 15, packName: "24 Mantra Mappillai Samba 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p113",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Kuthiraivali (Barnyard Millet)",
    tamilName: "குதிரைவாலி அரிசி",
    brand: "24 Mantra Organic",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p113-v1", weightLabel: "500 g", mrp: 78, price: 66, discountPercent: 15, packName: "24 Mantra Organic Barnyard Millet 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p114",
    categoryId: "rice_grains",
    categoryName: "Rice and Grains",
    baseName: "Varagu (Kodo Millet)",
    tamilName: "வரகு அரிசி",
    brand: "24 Mantra Organic",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p114-v1", weightLabel: "500 g", mrp: 78, price: 66, discountPercent: 15, packName: "24 Mantra Organic Kodo Millet 500 g Pack", inStock: true }
    ]
  },
  // Dals additions
  {
    id: "p115",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Split Black Urad Dal (Udaitha Ulundhu)",
    tamilName: "உடைத்த கருப்பு உளுந்து",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p115-v1", weightLabel: "500 g", mrp: 82, price: 70, discountPercent: 15, packName: "Sri Maneeshwara Split Black Urad Dal 500 g Pack", inStock: true },
      { id: "p115-v2", weightLabel: "1 kg", mrp: 160, price: 136, discountPercent: 15, packName: "Sri Maneeshwara Split Black Urad Dal 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p116",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Masoor Dal (Red Lentils)",
    tamilName: "மசூர் பருப்பு",
    brand: "Tata Sampann",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p116-v1", weightLabel: "500 g", mrp: 76, price: 64, discountPercent: 16, packName: "Tata Sampann Masoor Dal 500 g Pack", inStock: true },
      { id: "p116-v2", weightLabel: "1 kg", mrp: 148, price: 125, discountPercent: 16, packName: "Tata Sampann Masoor Dal 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p117",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Horsegram (Kollu Paruppu)",
    tamilName: "நாட்டு கொள்ளு பருப்பு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p117-v1", weightLabel: "500 g", mrp: 58, price: 49, discountPercent: 16, packName: "Sri Maneeshwara Country Horsegram 500 g Pack", inStock: true }
    ]
  },
  {
    id: "p118",
    categoryId: "dals_pulses",
    categoryName: "Dals and Pulses",
    baseName: "Cowpea (Karamani / Thattai Payaru)",
    tamilName: "காராமணி (தட்டை பயறு)",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p118-v1", weightLabel: "500 g", mrp: 65, price: 55, discountPercent: 15, packName: "Sri Maneeshwara Red Karamani 500 g Pack", inStock: true }
    ]
  },
  // Flours additions
  {
    id: "p119",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Puttu Podi (Steamed Rice Flour)",
    tamilName: "கிழக்கு புட்டு பொடி",
    brand: "Eastern",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p119-v1", weightLabel: "1 kg", mrp: 110, price: 92, discountPercent: 16, packName: "Eastern Puttu Podi 1 kg Pack", inStock: true }
    ]
  },
  {
    id: "p120",
    categoryId: "flours",
    categoryName: "Flours & Atta",
    baseName: "Wheat Dalia / Broken Wheat (Samba Rava)",
    tamilName: "சம்பா கோதுமை ரவை",
    brand: "Naga",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p120-v1", weightLabel: "500 g", mrp: 50, price: 42, discountPercent: 16, packName: "Naga Samba Wheat Rava 500 g Pack", inStock: true }
    ]
  },
  // Cooking oils addition
  {
    id: "p121",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Sunpure Refined Sunflower Oil",
    tamilName: "சன்பியூர் சுத்திகரிக்கப்பட்ட எண்ணெய்",
    brand: "Sunpure",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p121-v1", weightLabel: "1 L", mrp: 155, price: 135, discountPercent: 13, packName: "Sunpure Sunflower Oil 1 Litre Pouch", inStock: true }
    ]
  },
  {
    id: "p122",
    categoryId: "cooking_oils",
    categoryName: "Cooking Oils and Ghee",
    baseName: "Milky Mist Pure Desi Ghee",
    tamilName: "மில்கி மிஸ்ட் தூய நெய்",
    brand: "Milky Mist",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
    isDairyFresh: true,
    variants: [
      { id: "p122-v1", weightLabel: "500 ml", mrp: 380, price: 355, discountPercent: 7, packName: "Milky Mist Pure Desi Ghee 500 ml Jar", inStock: true }
    ]
  },
  // Spices additions
  {
    id: "p123",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Mutton Masala Powder",
    tamilName: "ஆச்சி மட்டன் மசாலா",
    brand: "Aachi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p123-v1", weightLabel: "100 g", mrp: 45, price: 38, discountPercent: 16, packName: "Aachi Mutton Masala 100 g Pack", inStock: true },
      { id: "p123-v2", weightLabel: "200 g", mrp: 86, price: 72, discountPercent: 16, packName: "Aachi Mutton Masala 200 g Pack", inStock: true }
    ]
  },
  {
    id: "p124",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Fish Curry Masala Powder",
    tamilName: "சக்தி மீன் குழம்பு மசாலா",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p124-v1", weightLabel: "100 g", mrp: 42, price: 35, discountPercent: 17, packName: "Sakthi Fish Curry Masala 100 g Pack", inStock: true }
    ]
  },
  {
    id: "p125",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Idli Chilli Podi (Milagai Podi with Sesame)",
    tamilName: "சக்தி இட்லி பொடி",
    brand: "Sakthi",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p125-v1", weightLabel: "100 g", mrp: 40, price: 34, discountPercent: 15, packName: "Sakthi Idli Podi with Gingelly 100 g Pack", inStock: true },
      { id: "p125-v2", weightLabel: "200 g", mrp: 78, price: 65, discountPercent: 17, packName: "Sakthi Idli Podi with Gingelly 200 g Pack", inStock: true }
    ]
  },
  {
    id: "p126",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Pure Hing Asafoetida (Perungayam)",
    tamilName: "எல்ஜி பெருங்காயம் கட்டி / தூள்",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p126-v1", weightLabel: "50 g", mrp: 68, price: 59, discountPercent: 13, packName: "LG Compounded Asafoetida Powder 50 g Box", inStock: true }
    ]
  },
  {
    id: "p127",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Whole Black Mustard Seeds (Kadugu)",
    tamilName: "கருப்பு கடுகு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p127-v1", weightLabel: "100 g", mrp: 22, price: 18, discountPercent: 18, packName: "Sri Maneeshwara Black Mustard 100 g Pack", inStock: true },
      { id: "p127-v2", weightLabel: "250 g", mrp: 52, price: 42, discountPercent: 19, packName: "Sri Maneeshwara Black Mustard 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p128",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Cumin Seeds (Jeeragam)",
    tamilName: "சீரகம்",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p128-v1", weightLabel: "100 g", mrp: 55, price: 46, discountPercent: 16, packName: "Sri Maneeshwara Select Jeera 100 g Pack", inStock: true },
      { id: "p128-v2", weightLabel: "250 g", mrp: 130, price: 108, discountPercent: 17, packName: "Sri Maneeshwara Select Jeera 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p129",
    categoryId: "spices_masalas",
    categoryName: "Spices and Masalas",
    baseName: "Black Pepper Whole (Milagu)",
    tamilName: "கருப்பு மிளகு",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p129-v1", weightLabel: "100 g", mrp: 88, price: 74, discountPercent: 16, packName: "Sri Maneeshwara Malabar Black Pepper 100 g Pack", inStock: true }
    ]
  },
  // Beverages additions
  {
    id: "p130",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "3 Roses Natural Care Tea",
    tamilName: "3 ரோசஸ் நேச்சுரல் கேர் டீ",
    brand: "Brooke Bond",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p130-v1", weightLabel: "250 g", mrp: 175, price: 148, discountPercent: 15, packName: "Brooke Bond 3 Roses Natural Care 250 g Pack", inStock: true }
    ]
  },
  {
    id: "p131",
    categoryId: "beverages",
    categoryName: "Beverages (Tea & Coffee)",
    baseName: "Narasu's Udhayam Filter Coffee Powder",
    tamilName: "நரசுஸ் உதயம் பில்டர் காபி",
    brand: "Narasu's",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    variants: [
      { id: "p131-v1", weightLabel: "500 g", mrp: 260, price: 225, discountPercent: 13, packName: "Narasu's Udhayam Filter Coffee Powder 500 g Pack", inStock: true }
    ]
  },
  // Snacks additions
  {
    id: "p132",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Unibic Choco Kiss Cookies",
    tamilName: "யூனிபிக் சாக்கோ கிஸ் குக்கீஸ்",
    brand: "Unibic",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p132-v1", weightLabel: "250 g", mrp: 110, price: 89, discountPercent: 19, packName: "Unibic Choco Kiss Cookies 250 g Box", inStock: true }
    ]
  },
  {
    id: "p133",
    categoryId: "snacks_biscuits",
    categoryName: "Snacks and Biscuits",
    baseName: "Traditional Seedai (Crispy Rice Balls)",
    tamilName: "பாரம்பரிய உப்புக் சீடை",
    brand: "Sri Maneeshwara Select",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p133-v1", weightLabel: "200 g", mrp: 60, price: 49, discountPercent: 18, packName: "Sri Maneeshwara Uppu Seedai 200 g Pack", inStock: true }
    ]
  },
  // Cleaning additions
  {
    id: "p134",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Rin Refresh Detergent Bar",
    tamilName: "ரின் துணி துவைக்கும் பார்",
    brand: "Rin",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p134-v1", weightLabel: "250 g", mrp: 28, price: 24, discountPercent: 14, packName: "Rin Refresh Detergent Bar 250 g", inStock: true },
      { id: "p134-v2", weightLabel: "4 x 250 g", mrp: 112, price: 92, discountPercent: 18, packName: "Rin Refresh Detergent Bar 4-in-1 Multipack", inStock: true }
    ]
  },
  {
    id: "p135",
    categoryId: "cleaning_household",
    categoryName: "Cleaning & Household",
    baseName: "Comfort Morning Fresh Fabric Conditioner",
    tamilName: "கம்ஃபோர்ட் ஆடைகள் மென்மையாக்கி",
    brand: "Comfort",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    variants: [
      { id: "p135-v1", weightLabel: "860 ml", mrp: 235, price: 195, discountPercent: 17, packName: "Comfort After Wash Fabric Conditioner 860 ml Bottle", inStock: true }
    ]
  }
];

export const POPULAR_BRANDS = [
  "Aavin", "Sri Lalitha Ponni", "India Gate", "Daawat", "Gold Winner",
  "Fortune", "Idhayam", "Sakthi", "Aachi", "Tata Sampann", "MTR",
  "Aashirvaad", "Pillsbury", "Naga", "Britannia", "Parle", "Milky Mist",
  "Amul", "Tata Tea", "Bru", "Dettol", "Surf Excel", "Vim", "Pampers"
];
