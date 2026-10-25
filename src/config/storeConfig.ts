/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sri Maneeshwara Super Market - Store Configuration
 * Shop owners can modify delivery charges, timings, contact numbers, UPI ID, and thresholds here.
 */

export interface DeliveryAreaConfig {
  id: string;
  name: string;
  tamilName: string;
  deliveryCharge: number;
  freeDeliveryThreshold: number;
  estimatedTime: string;
  pincodes: string[];
  popularLandmarks: string[];
}

export interface StoreConfig {
  storeName: string;
  storeNameTamil: string;
  tagline: string;
  taglineTamil: string;
  phone: string;
  whatsappNumber: string;
  upiId: string;
  upiName: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  openingHours: string;
  freeGiftThreshold: number;
  freeGiftOptions: {
    id: string;
    name: string;
    tamilName: string;
    description: string;
    image: string;
  }[];
  deliveryAreas: Record<string, DeliveryAreaConfig>;
  deliverySlots: {
    id: string;
    label: string;
    time: string;
  }[];
}

export const INITIAL_STORE_CONFIG: StoreConfig = {
  storeName: "Sri Maneeshwara Super Market",
  storeNameTamil: "ஸ்ரீ மனீஷ்வரா சூப்பர் மார்க்கெட்",
  tagline: "Freshness & Quality Delivered to Your Doorstep",
  taglineTamil: "புதிய மளிகைப் பொருட்கள் உங்கள் இல்லம் தேடி",
  phone: "+91 94432 18920",
  whatsappNumber: "919443218920", // 10-12 digits without symbols for wa.me link
  upiId: "srimaneeshwara@okaxis",
  upiName: "Sri Maneeshwara Super Market",
  address: {
    line1: "No. 42/1, Sathy Main Road, Near Bus Stand",
    line2: "Opposite Union Office, Annur",
    city: "Annur",
    district: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641653"
  },
  openingHours: "Open All Days: 6:30 AM – 10:00 PM",
  freeGiftThreshold: 2000, // In Rupees (₹)
  freeGiftOptions: [
    {
      id: "gift-sugar",
      name: "1 kg Premium Crystal Sugar Pack",
      tamilName: "1 கிலோ சர்க்கரை பாக்கெட்",
      description: "Sulphur-free high grade pure crystal sugar",
      image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "gift-oil",
      name: "500 ml Refined Sunflower Oil Pouch",
      tamilName: "500 மி.லி சமையல் எண்ணெய்",
      description: "Light, healthy cooking oil enriched with vitamins A & D",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "gift-steel",
      name: "Stainless Steel Food Container (Set of 2)",
      tamilName: "துருப்பிடிக்காத எஃகு டப்பா செட்",
      description: "Heavy-gauge food grade storage containers with airtight lids",
      image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "gift-jute-bag",
      name: "Eco-Friendly Heavy Canvas Grocery Bag",
      tamilName: "மஞ்சப்பை & கைப்பை",
      description: "Durable reusable shopping tote designed for weekly grocery trips",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80"
    }
  ],
  deliveryAreas: {
    annur: {
      id: "annur",
      name: "Annur",
      tamilName: "அன்னூர்",
      deliveryCharge: 20,
      freeDeliveryThreshold: 500,
      estimatedTime: "30-45 min",
      pincodes: ["641653"],
      popularLandmarks: ["Bus Stand", "Sathy Road", "Mettupalayam Road", "Thennampalayam Road", "Union Office"]
    },
    kumarankundru: {
      id: "kumarankundru",
      name: "Kumarankundru",
      tamilName: "குமரன்குன்று",
      deliveryCharge: 30,
      freeDeliveryThreshold: 500,
      estimatedTime: "45-60 min",
      pincodes: ["641653", "641107"],
      popularLandmarks: ["Murugan Temple Hill", "Kunnathur Road", "Panchayat Office", "School Junction"]
    },
    pogalur: {
      id: "pogalur",
      name: "Pogalur",
      tamilName: "பொகலூர்",
      deliveryCharge: 40,
      freeDeliveryThreshold: 500,
      estimatedTime: "45-60 min",
      pincodes: ["641653", "641697"],
      popularLandmarks: ["Pogalur Center", "Perumal Temple", "Primary Health Centre", "Bhavani Sagar Road"]
    },
    kovilpalayam: {
      id: "kovilpalayam",
      name: "Kovilpalayam",
      tamilName: "கோவில்பாளையம்",
      deliveryCharge: 30,
      freeDeliveryThreshold: 500,
      estimatedTime: "45-60 min",
      pincodes: ["641107", "641110"],
      popularLandmarks: ["Kaalamegaperumal Temple", "Sarkar Samakulam", "KCT Junction", "Sathy National Highway"]
    }
  },
  deliverySlots: [
    { id: "morning", label: "Morning Slot", time: "7:00 AM – 10:00 AM" },
    { id: "afternoon", label: "Afternoon Slot", time: "12:00 PM – 3:00 PM" },
    { id: "evening", label: "Evening Slot", time: "5:00 PM – 8:30 PM" },
    { id: "express", label: "Express Delivery", time: "Fastest Next Slot (30–60 mins)" }
  ]
};

const STORE_CONFIG_STORAGE_KEY = "sms_store_config_v1";

export function getStoredStoreConfig(): StoreConfig {
  try {
    const raw = localStorage.getItem(STORE_CONFIG_STORAGE_KEY);
    if (raw) {
      return { ...INITIAL_STORE_CONFIG, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error("Failed to load store config", e);
  }
  return INITIAL_STORE_CONFIG;
}

export function saveStoreConfig(newConfig: StoreConfig): void {
  try {
    localStorage.setItem(STORE_CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
  } catch (e) {
    console.error("Failed to save store config", e);
  }
}
