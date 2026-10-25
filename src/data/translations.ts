/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Multi-Language Translations for Sri Maneeshwara Super Market
 * Supports: English, Tamil, Hindi, Telugu, Malayalam, Kannada
 */

export type LanguageCode = "en" | "ta" | "hi" | "te" | "ml" | "kn";

export interface LanguageMeta {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు" },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം" },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ" }
];

export interface TranslationDictionary {
  // Header & Nav
  storeSubtitle: string;
  searchPlaceholder: string;
  deliveringTo: string;
  changeLocation: string;
  selectLocation: string;
  cart: string;
  items: string;
  home: string;
  allGroceries: string;
  freshDairy: string;
  todaysDeals: string;
  trackOrder: string;
  aboutUs: string;
  contact: string;
  freeDeliveryOver: string;
  freeGiftOver: string;

  // Category labels
  allCategories: string;
  cat_rice_grains: string;
  cat_dals_pulses: string;
  cat_flours: string;
  cat_cooking_oils: string;
  cat_spices_masalas: string;
  cat_salt_sugar: string;
  cat_dairy_products: string;
  cat_breakfast_cereals: string;
  cat_snacks_biscuits: string;
  cat_beverages: string;
  cat_pickles_sauces: string;
  cat_dry_fruits_nuts: string;
  cat_cleaning_household: string;
  cat_personal_care: string;
  cat_baby_care: string;

  // Filter & Sort
  filters: string;
  sortBy: string;
  priceRange: string;
  allBrands: string;
  inStockOnly: string;
  minDiscount: string;
  resetFilters: string;
  sortPriceAsc: string;
  sortPriceDesc: string;
  sortDiscount: string;
  sortName: string;
  showingProducts: string;
  noProductsFound: string;

  // Product Card
  packSize: string;
  mrp: string;
  ourPrice: string;
  save: string;
  off: string;
  addToCart: string;
  addedToCart: string;
  inStock: string;
  outOfStock: string;
  popularBrands: string;
  viewDetails: string;

  // Cart & Free Gift
  shoppingCart: string;
  emptyCartTitle: string;
  emptyCartDesc: string;
  startShopping: string;
  subtotal: string;
  deliveryCharge: string;
  freeDeliveryApplied: string;
  totalDiscount: string;
  grandTotal: string;
  proceedToCheckout: string;
  freeGiftOffer: string;
  addMoreForFreeGift: string;
  freeGiftUnlocked: string;
  chooseFreeGift: string;
  giftSelected: string;
  addMoreForFreeDelivery: string;
  clearCart: string;

  // Checkout
  checkoutTitle: string;
  contactDetails: string;
  fullName: string;
  phoneNumber: string;
  phoneHelper: string;
  deliveryAddress: string;
  doorStreet: string;
  landmark: string;
  selectArea: string;
  pincode: string;
  deliverySlot: string;
  deliveryNotes: string;
  paymentMethod: string;
  upiPayment: string;
  upiInstruction: string;
  cashOnDelivery: string;
  cardPayment: string;
  netBanking: string;
  placeOrder: string;
  processingOrder: string;

  // Order Confirmation & WhatsApp
  orderSuccessTitle: string;
  orderNumber: string;
  estimatedDelivery: string;
  deliveryTo: string;
  whatsappOrderButton: string;
  downloadInvoice: string;
  printInvoice: string;
  trackThisOrder: string;
  continueShopping: string;

  // Order Tracking
  trackOrderTitle: string;
  trackOrderSubtitle: string;
  enterOrderNumber: string;
  checkStatus: string;
  orderStatus: string;
  statusPlaced: string;
  statusPacked: string;
  statusOutForDelivery: string;
  statusDelivered: string;
  needHelp: string;

  // Location Modal
  locationModalTitle: string;
  locationModalSubtitle: string;
  chooseArea: string;
  enterPincode: string;
  verifyAndContinue: string;
  areaNotServedAlert: string;
  currentlyServing: string;

  // Common & Footer
  shopNow: string;
  quickLinks: string;
  workingHours: string;
  customerSupport: string;
  ownerSettings: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    storeSubtitle: "Serving Annur · Kumarankundru · Pogalur · Kovilpalayam",
    searchPlaceholder: "Search fresh groceries, Aavin milk, Sakthi spices, rice...",
    deliveringTo: "Delivering to",
    changeLocation: "Change",
    selectLocation: "Select Area",
    cart: "Cart",
    items: "items",
    home: "Home",
    allGroceries: "All Groceries",
    freshDairy: "Fresh Dairy",
    todaysDeals: "Today's Deals",
    trackOrder: "Track Order",
    aboutUs: "About Us",
    contact: "Contact",
    freeDeliveryOver: "Free delivery on orders above ₹500",
    freeGiftOver: "Free gift on orders above ₹2000",

    allCategories: "All Categories",
    cat_rice_grains: "Rice and Grains",
    cat_dals_pulses: "Dals and Pulses",
    cat_flours: "Flours & Atta",
    cat_cooking_oils: "Cooking Oils and Ghee",
    cat_spices_masalas: "Spices and Masalas",
    cat_salt_sugar: "Salt and Sugar",
    cat_dairy_products: "Dairy Products",
    cat_breakfast_cereals: "Breakfast & Cereals",
    cat_snacks_biscuits: "Snacks and Biscuits",
    cat_beverages: "Beverages (Tea & Coffee)",
    cat_pickles_sauces: "Pickles and Sauces",
    cat_dry_fruits_nuts: "Dry Fruits and Nuts",
    cat_cleaning_household: "Cleaning & Household",
    cat_personal_care: "Personal Care",
    cat_baby_care: "Baby Care",

    filters: "Filters",
    sortBy: "Sort By",
    priceRange: "Price Range",
    allBrands: "Brands",
    inStockOnly: "In Stock Only",
    minDiscount: "Minimum Discount",
    resetFilters: "Reset Filters",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortDiscount: "Biggest Discount",
    sortName: "Name: A to Z",
    showingProducts: "Showing products",
    noProductsFound: "No products match your search or filter criteria.",

    packSize: "Pack Size",
    mrp: "MRP",
    ourPrice: "Price",
    save: "Save",
    off: "OFF",
    addToCart: "Add to Cart",
    addedToCart: "Added",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    popularBrands: "Popular Brands",
    viewDetails: "View Details",

    shoppingCart: "Your Grocery Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartDesc: "Add fresh groceries and regional staples from Sri Maneeshwara.",
    startShopping: "Explore Products",
    subtotal: "Item Subtotal",
    deliveryCharge: "Delivery Charge",
    freeDeliveryApplied: "FREE (Cart over ₹500)",
    totalDiscount: "You Saved",
    grandTotal: "Total Amount",
    proceedToCheckout: "Proceed to Checkout",
    freeGiftOffer: "Free Gift Offer",
    addMoreForFreeGift: "Add ₹{amount} more to unlock your FREE gift!",
    freeGiftUnlocked: "Congratulations! Free Gift Unlocked (₹0)",
    chooseFreeGift: "Choose your complementary gift:",
    giftSelected: "Free gift added to cart",
    addMoreForFreeDelivery: "Add ₹{amount} more for FREE delivery",
    clearCart: "Empty Cart",

    checkoutTitle: "Secure Grocery Checkout",
    contactDetails: "1. Contact & Recipient Details",
    fullName: "Full Name",
    phoneNumber: "Mobile Phone (10 digits)",
    phoneHelper: "We'll send order confirmation and dispatch updates via SMS / WhatsApp.",
    deliveryAddress: "2. Delivery Location in Coimbatore Zone",
    doorStreet: "Door No, Building & Street Name",
    landmark: "Nearby Landmark",
    selectArea: "Delivery Area",
    pincode: "Pincode (6 digits)",
    deliverySlot: "3. Preferred Delivery Slot",
    deliveryNotes: "Special Delivery Instructions (optional)",
    paymentMethod: "4. Choose Payment Method",
    upiPayment: "UPI Instant Payment (GPay, PhonePe, Paytm)",
    upiInstruction: "Scan QR code or pay to store UPI ID, then submit your order.",
    cashOnDelivery: "Cash on Delivery (Pay cash at your doorstep)",
    cardPayment: "Debit / Credit Card on Delivery (POS Machine)",
    netBanking: "Net Banking",
    placeOrder: "Place Order Now",
    processingOrder: "Confirming order...",

    orderSuccessTitle: "Order Placed Successfully!",
    orderNumber: "Order Number",
    estimatedDelivery: "Estimated Delivery Time",
    deliveryTo: "Delivering To",
    whatsappOrderButton: "Send Order on WhatsApp",
    downloadInvoice: "Download / Print Tax Invoice",
    printInvoice: "Print Invoice",
    trackThisOrder: "Track This Order",
    continueShopping: "Continue Shopping",

    trackOrderTitle: "Track Your Grocery Order",
    trackOrderSubtitle: "Enter your order ID (e.g. SMS-847291) to check live packing & delivery status.",
    enterOrderNumber: "Enter Order Number",
    checkStatus: "Check Status",
    orderStatus: "Current Order Status",
    statusPlaced: "Order Placed & Verified",
    statusPacked: "Packed with Quality Check",
    statusOutForDelivery: "Out for Delivery from Annur Store",
    statusDelivered: "Delivered to Doorstep",
    needHelp: "Need instant assistance? Call store at",

    locationModalTitle: "Welcome to Sri Maneeshwara Super Market",
    locationModalSubtitle: "Please select your locality in Coimbatore district for instant delivery rates and timings.",
    chooseArea: "Select Delivery Locality",
    enterPincode: "Postal Pincode",
    verifyAndContinue: "Confirm Delivery Area",
    areaNotServedAlert: "Sorry, we do not deliver to this area yet. We currently deliver exclusively to Annur, Kumarankundru, Pogalur, and Kovilpalayam.",
    currentlyServing: "Fast doorstep delivery across 4 designated regions:",

    shopNow: "Shop Now",
    quickLinks: "Quick Links",
    workingHours: "Store Timings: 6:30 AM – 10:00 PM (All 7 Days)",
    customerSupport: "Customer Support & Phone Orders",
    ownerSettings: "Store Owner Settings"
  },

  ta: {
    storeSubtitle: "அன்னூர் · குமரன்குன்று · பொகலூர் · கோவில்பாளையம் பகுதிகளுக்கு உடனடி டெலிவரி",
    searchPlaceholder: "மளிகை, ஆவின் பால், சக்தி மசாலா, அரிசி தேடுங்கள்...",
    deliveringTo: "டெலிவரி பகுதி",
    changeLocation: "மாற்று",
    selectLocation: "பகுதி தேர்வு",
    cart: "கூடை",
    items: "பொருட்கள்",
    home: "முகப்பு",
    allGroceries: "அனைத்து மளிகை",
    freshDairy: "பால் & பால் பொருட்கள்",
    todaysDeals: "இன்றைய சலுகைகள்",
    trackOrder: "ஆர்டர் நிலை",
    aboutUs: "எங்களைப் பற்றி",
    contact: "தொடர்பு",
    freeDeliveryOver: "₹500-க்கு மேல் இலவச டெலிவரி",
    freeGiftOver: "₹2000-க்கு மேல் இலவச பரிசு",

    allCategories: "அனைத்து பிரிவுகள்",
    cat_rice_grains: "அரிசி மற்றும் தானியங்கள்",
    cat_dals_pulses: "பருப்பு வகைகள்",
    cat_flours: "மாவு வகைகள்",
    cat_cooking_oils: "சமையல் எண்ணெய் மற்றும் நெய்",
    cat_spices_masalas: "மசாலா மற்றும் பொடிகள்",
    cat_salt_sugar: "உப்பு மற்றும் சர்க்கரை",
    cat_dairy_products: "பால் மற்றும் பால் பொருட்கள்",
    cat_breakfast_cereals: "காலை உணவு & தானியங்கள்",
    cat_snacks_biscuits: "சிற்றுண்டி & பிஸ்கட்",
    cat_beverages: "டீ, காபி மற்றும் பானங்கள்",
    cat_pickles_sauces: "ஊறுகாய் & சாஸ்",
    cat_dry_fruits_nuts: "உலர் பழங்கள் & பருப்புகள்",
    cat_cleaning_household: "வீட்டு பராமரிப்பு பொருட்கள்",
    cat_personal_care: "சுய பாதுகாப்பு",
    cat_baby_care: "குழந்தை பராமரிப்பு",

    filters: "வடிகட்டுதல்",
    sortBy: "வரிசைப்படுத்து",
    priceRange: "விலை வரம்பு",
    allBrands: "பிராண்டுகள்",
    inStockOnly: "இருப்பில் உள்ளவை மட்டும்",
    minDiscount: "குறைந்தபட்ச தள்ளுபடி",
    resetFilters: "வடிகட்டியை மீட்டமைக்க",
    sortPriceAsc: "விலை: குறைவு முதல் அதிகம்",
    sortPriceDesc: "விலை: அதிகம் முதல் குறைவு",
    sortDiscount: "அதிக தள்ளுபடி",
    sortName: "பெயர்: அகரவரிசை",
    showingProducts: "காட்டப்படும் பொருட்கள்",
    noProductsFound: "பொருட்கள் எதுவும் கிடைக்கவில்லை.",

    packSize: "அளவு",
    mrp: "அ.வி (MRP)",
    ourPrice: "நமது விலை",
    save: "சேமிப்பு",
    off: "தள்ளுபடி",
    addToCart: "கூடையில் சேர்க்க",
    addedToCart: "சேர்க்கப்பட்டது",
    inStock: "இருப்பில் உள்ளது",
    outOfStock: "இருப்பு இல்லை",
    popularBrands: "முக்கிய பிராண்டுகள்",
    viewDetails: "விவரம் பார்க்க",

    shoppingCart: "மளிகைக் கூடை",
    emptyCartTitle: "உங்கள் கூடை காலியாக உள்ளது",
    emptyCartDesc: "ஸ்ரீ மனீஷ்வரா சூப்பர் மார்க்கெட்டில் இருந்து தரமான மளிகைப் பொருட்களைச் சேர்க்கவும்.",
    startShopping: "பொருட்களைப் பார்க்க",
    subtotal: "பொருட்களின் தொகை",
    deliveryCharge: "டெலிவரி கட்டணம்",
    freeDeliveryApplied: "இலவசம் (₹500-க்கு மேல்)",
    totalDiscount: "நீங்கள் சேமித்தது",
    grandTotal: "மொத்த தொகை",
    proceedToCheckout: "செக்அவுட் செல்லவும்",
    freeGiftOffer: "இலவச பரிசு சலுகை",
    addMoreForFreeGift: "இலவச பரிசு பெற இன்னும் ₹{amount} சேர்க்கவும்!",
    freeGiftUnlocked: "வாழ்த்துகள்! இலவச பரிசு அன்லாக் செய்யப்பட்டது (₹0)",
    chooseFreeGift: "உங்கள் இலவச பரிசைத் தேர்ந்தெடுக்கவும்:",
    giftSelected: "இலவச பரிசு சேர்க்கப்பட்டது",
    addMoreForFreeDelivery: "இலவச டெலிவரிக்கு இன்னும் ₹{amount} சேர்க்கவும்",
    clearCart: "கூடையை அழிக்க",

    checkoutTitle: "பாதுகாப்பான செக்அவுட்",
    contactDetails: "1. வாடிக்கையாளர் விவரங்கள்",
    fullName: "முழு பெயர்",
    phoneNumber: "மொபைல் எண் (10 இலக்கம்)",
    phoneHelper: "ஆர்டர் உறுதி மற்றும் விவரங்கள் வாட்ஸ்அப் / எஸ்.எம்.எஸ் மூலம் அனுப்பப்படும்.",
    deliveryAddress: "2. டெலிவரி முகவரி (கோயம்புத்தூர் மண்டலம்)",
    doorStreet: "கதவு எண், தெரு பெயர்",
    landmark: "அருகிலுள்ள அடையாளம்",
    selectArea: "டெலிவரி பகுதி",
    pincode: "அஞ்சல் குறியீடு (பின்கோட்)",
    deliverySlot: "3. விரும்பும் டெலிவரி நேரம்",
    deliveryNotes: "டெலிவரி குறிப்புகள் (விருப்பத்தேர்வு)",
    paymentMethod: "4. கட்டண முறை",
    upiPayment: "UPI கட்டணம் (GPay, PhonePe, Paytm)",
    upiInstruction: "QR குறியீட்டை ஸ்கேன் செய்து அல்லது UPI முகவரிக்கு பணம் செலுத்தி ஆர்டரை முடிக்கவும்.",
    cashOnDelivery: "வீட்டில் பணம் செலுத்துதல் (Cash on Delivery)",
    cardPayment: "டெபிட் / கிரெடிட் கார்டு (டெலிவரியின் போது)",
    netBanking: "நெட் பேங்கிங்",
    placeOrder: "ஆர்டர் செய்க",
    processingOrder: "ஆர்டர் செய்யப்படுகிறது...",

    orderSuccessTitle: "ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
    orderNumber: "ஆர்டர் எண்",
    estimatedDelivery: "எதிர்பார்க்கப்படும் நேரம்",
    deliveryTo: "டெலிவரி முகவரி",
    whatsappOrderButton: "வாட்ஸ்அப்பில் ஆர்டரை அனுப்பவும்",
    downloadInvoice: "விலைப்பட்டியலை பதிவிறக்க / அச்சிட",
    printInvoice: "அச்சிடுக",
    trackThisOrder: "ஆர்டரை கண்காணிக்க",
    continueShopping: "தொடர்ந்து ஷாப்பிங் செய்ய",

    trackOrderTitle: "ஆர்டர் நிலையை கண்காணிக்க",
    trackOrderSubtitle: "உங்கள் ஆர்டர் எண்ணை (எ.கா: SMS-847291) பதிவிட்டு தற்போதைய நிலையை அறியவும்.",
    enterOrderNumber: "ஆர்டர் எண்ணை உள்ளிடவும்",
    checkStatus: "நிலையை பார்க்க",
    orderStatus: "தற்போதைய நிலை",
    statusPlaced: "ஆர்டர் பெறப்பட்டது",
    statusPacked: "பொருட்கள் பேக் செய்யப்பட்டது",
    statusOutForDelivery: "டெலிவரிக்கு கிளம்பியது",
    statusDelivered: "வெற்றிகரமாக டெலிவரி செய்யப்பட்டது",
    needHelp: "உடனடி உதவிக்கு கடையை அழைக்கவும்:",

    locationModalTitle: "ஸ்ரீ மனீஷ்வரா சூப்பர் மார்க்கெட் உங்களை வரவேற்கிறது",
    locationModalSubtitle: "துல்லியமான டெலிவரி கட்டணம் மற்றும் நேரத்தை அறிய உங்கள் பகுதியை தேர்ந்தெடுக்கவும்.",
    chooseArea: "டெலிவரி பகுதியை தேர்வு செய்க",
    enterPincode: "பின்கோட்",
    verifyAndContinue: "பகுதியை உறுதிப்படுத்துக",
    areaNotServedAlert: "மன்னிக்கவும், நாங்கள் இன்னும் இந்த பகுதிக்கு டெலிவரி செய்யவில்லை. தற்போது அன்னூர், குமரன்குன்று, பொகலூர், கோவில்பாளையம் ஆகிய இடங்களுக்கு மட்டுமே டெலிவரி செய்கிறோம்.",
    currentlyServing: "விரைவான வீட்டு டெலிவரி பகுதிகள்:",

    shopNow: "வாங்கலாம்",
    quickLinks: "முக்கிய இணைப்புகள்",
    workingHours: "கடை திறக்கும் நேரம்: காலை 6:30 முதல் இரவு 10:00 வரை (அனைத்து நாட்களும்)",
    customerSupport: "வாடிக்கையாளர் சேவை & தொலைபேசி ஆர்டர்கள்",
    ownerSettings: "கடை உரிமையாளர் அமைப்புகள்"
  },

  hi: {
    storeSubtitle: "अन्नूर · कुमारनकुन्द्रु · पोगलूर · कोविलपालयम में तेज़ होम डिलीवरी",
    searchPlaceholder: "किराना सामान, आविन दूध, शक्ति मसाले, चावल खोजें...",
    deliveringTo: "डिलीवरी क्षेत्र",
    changeLocation: "बदलें",
    selectLocation: "क्षेत्र चुनें",
    cart: "कार्ट",
    items: "सामान",
    home: "होम",
    allGroceries: "सभी किराना",
    freshDairy: "ताज़ा डेयरी",
    todaysDeals: "आज के ऑफर्स",
    trackOrder: "ऑर्डर ट्रैक करें",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क",
    freeDeliveryOver: "₹500 से अधिक पर मुफ़्त डिलीवरी",
    freeGiftOver: "₹2000 से अधिक पर मुफ़्त उपहार",

    allCategories: "सभी श्रेणियां",
    cat_rice_grains: "चावल और अनाज",
    cat_dals_pulses: "दालें",
    cat_flours: "आटा और मैदा",
    cat_cooking_oils: "तेल और घी",
    cat_spices_masalas: "मसाले",
    cat_salt_sugar: "नमक और चीनी",
    cat_dairy_products: "डेयरी उत्पाद",
    cat_breakfast_cereals: "नाश्ता और अनाज",
    cat_snacks_biscuits: "स्नैक्स और बिस्कुट",
    cat_beverages: "चाय, कॉफी और पेय",
    cat_pickles_sauces: "अचार और सॉस",
    cat_dry_fruits_nuts: "मेवे और नट्स",
    cat_cleaning_household: "सफाई और घरेलू सामान",
    cat_personal_care: "पर्सनल केयर",
    cat_baby_care: "बेबी केयर",

    filters: "फ़िल्टर",
    sortBy: "क्रमबद्ध करें",
    priceRange: "कीमत सीमा",
    allBrands: "ब्रांड्स",
    inStockOnly: "केवल उपलब्ध सामान",
    minDiscount: "न्यूनतम छूट",
    resetFilters: "फ़िल्टर रीसेट करें",
    sortPriceAsc: "कीमत: कम से ज्यादा",
    sortPriceDesc: "कीमत: ज्यादा से कम",
    sortDiscount: "सबसे बड़ी छूट",
    sortName: "नाम: अ से ज्ञ",
    showingProducts: "दिखाए जा रहे उत्पाद",
    noProductsFound: "कोई उत्पाद नहीं मिला।",

    packSize: "पैक आकार",
    mrp: "एमआरपी",
    ourPrice: "हमारी कीमत",
    save: "बचत",
    off: "छूट",
    addToCart: "कार्ट में जोड़ें",
    addedToCart: "जोड़ा गया",
    inStock: "उपलब्ध है",
    outOfStock: "स्टॉक में नहीं",
    popularBrands: "लोकप्रिय ब्रांड",
    viewDetails: "विवरण देखें",

    shoppingCart: "आपकी खरीदारी कार्ट",
    emptyCartTitle: "आपकी कार्ट खाली है",
    emptyCartDesc: "श्री मनीश्वरा सुपर मार्केट से ताज़ा किराना उत्पाद जोड़ें।",
    startShopping: "सामान देखें",
    subtotal: "सामान की कुल कीमत",
    deliveryCharge: "डिलीवरी शुल्क",
    freeDeliveryApplied: "मुफ़्त (₹500 से ऊपर)",
    totalDiscount: "आपकी बचत",
    grandTotal: "कुल देय राशि",
    proceedToCheckout: "चेकआउट करें",
    freeGiftOffer: "मुफ़्त उपहार ऑफर",
    addMoreForFreeGift: "मुफ़्त उपहार के लिए ₹{amount} और जोड़ें!",
    freeGiftUnlocked: "बधाई हो! मुफ़्त उपहार अनलॉक हुआ (₹0)",
    chooseFreeGift: "अपना मुफ़्त उपहार चुनें:",
    giftSelected: "मुफ़्त उपहार कार्ट में जोड़ा गया",
    addMoreForFreeDelivery: "मुफ़्त डिलीवरी के लिए ₹{amount} और जोड़ें",
    clearCart: "कार्ट खाली करें",

    checkoutTitle: "सुरक्षित चेकआउट",
    contactDetails: "1. ग्राहक संपर्क विवरण",
    fullName: "पूरा नाम",
    phoneNumber: "मोबाइल नंबर (10 अंक)",
    phoneHelper: "ऑर्डर पुष्टि और डिलीवरी अपडेट व्हाट्सएप/एसएमएस द्वारा भेजे जाएंगे।",
    deliveryAddress: "2. डिलीवरी पता (कोयंबटूर क्षेत्र)",
    doorStreet: "मकान नंबर, गली का नाम",
    landmark: "नजदीकी लैंडमार्क",
    selectArea: "डिलीवरी क्षेत्र",
    pincode: "पिनकोड (6 अंक)",
    deliverySlot: "3. डिलीवरी का पसंदीदा समय",
    deliveryNotes: "विशेष निर्देश (वैकल्पिक)",
    paymentMethod: "4. भुगतान का तरीका",
    upiPayment: "UPI भुगतान (GPay, PhonePe, Paytm)",
    upiInstruction: "QR कोड स्कैन करें या स्टोर के UPI आईडी पर भुगतान करें।",
    cashOnDelivery: "कैश ऑन डिलीवरी (डिलीवरी पर नकद)",
    cardPayment: "कार्ड से भुगतान (डिलीवरी पर)",
    netBanking: "नेट बैंकिंग",
    placeOrder: "ऑर्डर सबमिट करें",
    processingOrder: "ऑर्डर प्रोसेस हो रहा है...",

    orderSuccessTitle: "ऑर्डर सफलतापूर्वक दर्ज हुआ!",
    orderNumber: "ऑर्डर संख्या",
    estimatedDelivery: "अनुमानित डिलीवरी समय",
    deliveryTo: "डिलीवरी पता",
    whatsappOrderButton: "व्हाट्सएप पर ऑर्डर भेजें",
    downloadInvoice: "टैक्स इनवॉइस डाउनलोड / प्रिंट करें",
    printInvoice: "प्रिंट करें",
    trackThisOrder: "ऑर्डर ट्रैक करें",
    continueShopping: "खरीदारी जारी रखें",

    trackOrderTitle: "ऑर्डर की स्थिति जांचें",
    trackOrderSubtitle: "लाइव स्थिति देखने के लिए अपना ऑर्डर नंबर दर्ज करें।",
    enterOrderNumber: "ऑर्डर नंबर दर्ज करें",
    checkStatus: "स्थिति देखें",
    orderStatus: "वर्तमान स्थिति",
    statusPlaced: "ऑर्डर प्राप्त हुआ",
    statusPacked: "पैक किया गया",
    statusOutForDelivery: "डिलीवरी के लिए निकला",
    statusDelivered: "सफलतापूर्वक डिलीवर हुआ",
    needHelp: "सहायता के लिए कॉल करें:",

    locationModalTitle: "श्री मनीश्वरा सुपर मार्केट में आपका स्वागत है",
    locationModalSubtitle: "सटीक डिलीवरी समय और शुल्क के लिए अपना क्षेत्र चुनें।",
    chooseArea: "डिलीवरी क्षेत्र चुनें",
    enterPincode: "पिनकोड",
    verifyAndContinue: "पुष्टि करें",
    areaNotServedAlert: "माफ़ करें, हम अभी इस क्षेत्र में डिलीवरी नहीं करते हैं। वर्तमान में हम केवल अन्नूर, कुमारनकुन्द्रु, पोगलूर और कोविलपालयम में सेवा देते हैं।",
    currentlyServing: "हमारे सेवारत क्षेत्र:",

    shopNow: "खरीदें",
    quickLinks: "महत्वपूर्ण लिंक",
    workingHours: "समय: सुबह 6:30 से रात 10:00 तक (प्रतिदिन)",
    customerSupport: "ग्राहक सेवा और फोन ऑर्डर",
    ownerSettings: "स्टोर सेटिंग्स"
  },

  te: {
    storeSubtitle: "అన్నూరు · కుమరన్‌కుండ్రు · పొగలూరు · కోవిల్‌పాళయం ప్రాంతాలకు హోమ్ డెలివరీ",
    searchPlaceholder: "సరుకులు, ఆవిన్ పాలు, శక్తి మసాలా, బియ్యం వెతకండి...",
    deliveringTo: "డెలివరీ ప్రాంతం",
    changeLocation: "మార్చండి",
    selectLocation: "ప్రాంతం ఎంచుకోండి",
    cart: "కార్ట్",
    items: "వస్తువులు",
    home: "హోమ్",
    allGroceries: "అన్ని కిరాణా వస్తువులు",
    freshDairy: "తాజా పాల ఉత్పత్తులు",
    todaysDeals: "నేటి ఆఫర్లు",
    trackOrder: "ఆర్డర్ ట్రాక్",
    aboutUs: "మా గురించి",
    contact: "సంప్రదించండి",
    freeDeliveryOver: "₹500 దాటితే ఉచిత డెలివరీ",
    freeGiftOver: "₹2000 దాటితే ఉచిత బహుమతి",

    allCategories: "అన్ని రకాలు",
    cat_rice_grains: "బియ్యం మరియు ధాన్యాలు",
    cat_dals_pulses: "పప్పు దినుసులు",
    cat_flours: "పిండి రకాలు",
    cat_cooking_oils: "వంట నూనెలు & నెయ్యి",
    cat_spices_masalas: "మసాలాలు",
    cat_salt_sugar: "ఉప్పు & చక్కెర",
    cat_dairy_products: "పాల ఉత్పత్తులు",
    cat_breakfast_cereals: "అల్పాహార ధాన్యాలు",
    cat_snacks_biscuits: "స్నాక్స్ & బిస్కెట్లు",
    cat_beverages: "టీ, కాఫీ & పానీయాలు",
    cat_pickles_sauces: "ఊరగాయలు & సాస్",
    cat_dry_fruits_nuts: "డ్రై ఫ్రూట్స్ & గింజలు",
    cat_cleaning_household: "ఇంటి శుభ్రత వస్తువులు",
    cat_personal_care: "వ్యక్తిగత సంరక్షణ",
    cat_baby_care: "శిశు సంరక్షణ",

    filters: "ఫిల్టర్లు",
    sortBy: "క్రమబద్ధీకరించు",
    priceRange: "ధర పరిధి",
    allBrands: "బ్రాండ్లు",
    inStockOnly: "స్టాక్ ఉన్నవి మాత్రమే",
    minDiscount: "కనిష్ట తగ్గింపు",
    resetFilters: "రీసెట్",
    sortPriceAsc: "ధర: తక్కువ నుండి ఎక్కువ",
    sortPriceDesc: "ధర: ఎక్కువ నుండి తక్కువ",
    sortDiscount: "గొప్ప తగ్గింపు",
    sortName: "పేరు: అ నుండి క్ష",
    showingProducts: "చూపిస్తున్న ఉత్పత్తులు",
    noProductsFound: "ఎటువంటి ఉత్పత్తులు లభించలేదు.",

    packSize: "పరిమాణం",
    mrp: "MRP",
    ourPrice: "మా ధర",
    save: "ఆదా",
    off: "తగ్గింపు",
    addToCart: "కార్ట్‌కు చేర్చు",
    addedToCart: "చేర్చబడింది",
    inStock: "స్టాక్ ఉంది",
    outOfStock: "స్టాక్ లేదు",
    popularBrands: "ప్రముఖ బ్రాండ్లు",
    viewDetails: "వివరాలు",

    shoppingCart: "మీ షాపింగ్ కార్ట్",
    emptyCartTitle: "మీ కార్ట్ ఖాళీగా ఉంది",
    emptyCartDesc: "శ్రీ మనీష్వరా సూపర్ మార్కెట్ నుండి నాణ్యమైన సరుకులు ఎంచుకోండి.",
    startShopping: "షాపింగ్ ప్రారంభించండి",
    subtotal: "మొత్తం ధర",
    deliveryCharge: "డెలివరీ ఛార్జీ",
    freeDeliveryApplied: "ఉచితం (₹500 దాటినందుకు)",
    totalDiscount: "మీరు ఆదా చేసినది",
    grandTotal: "మొత్తం చెల్లించవలసినది",
    proceedToCheckout: "చెక్‌అవుట్ చేయండి",
    freeGiftOffer: "ఉచిత బహుమతి ఆఫర్",
    addMoreForFreeGift: "ఉచిత బహుమతి పొందడానికి ఇంకా ₹{amount} జోడించండి!",
    freeGiftUnlocked: "అభినందనలు! ఉచిత బహుమతి లభించింది (₹0)",
    chooseFreeGift: "మీ ఉచిత బహుమతిని ఎంచుకోండి:",
    giftSelected: "ఉచిత బహుమతి చేర్చబడింది",
    addMoreForFreeDelivery: "ఉచిత డెలివరీ కోసం ఇంకా ₹{amount} జోడించండి",
    clearCart: "కార్ట్ ఖాళీ చేయండి",

    checkoutTitle: "సురక్షిత చెక్‌అవుట్",
    contactDetails: "1. సంప్రదింపు వివరాలు",
    fullName: "పూర్తి పేరు",
    phoneNumber: "మొబైల్ సంఖ్య (10 అంకెలు)",
    phoneHelper: "ఆర్డర్ వివరాలు వాట్సాప్ / ఎస్ఎంఎస్ ద్వారా పంపబడతాయి.",
    deliveryAddress: "2. డెలివరీ చిరునామా (కోయంబత్తూర్ జోన్)",
    doorStreet: "ఇంటి నంబర్, వీధి పేరు",
    landmark: "సమీప ల్యాండ్‌మార్క్",
    selectArea: "డెలివరీ ప్రాంతం",
    pincode: "పిన్‌కోడ్ (6 అంకెలు)",
    deliverySlot: "3. డెలివరీ సమయం",
    deliveryNotes: "డెలివరీ సూచనలు (ఐచ్ఛికం)",
    paymentMethod: "4. చెల్లింపు పద్ధతి",
    upiPayment: "UPI చెల్లింపు (GPay, PhonePe, Paytm)",
    upiInstruction: "QR కోడ్ స్కాన్ చేసి లేదా UPI ఐడీకి చెల్లించండి.",
    cashOnDelivery: "క్యాష్ ఆన్ డెలివరీ (ఇంటి వద్ద నగదు)",
    cardPayment: "కార్డ్ చెల్లింపు (డెలివరీ వద్ద)",
    netBanking: "నెట్ బ్యాంకింగ్",
    placeOrder: "ఆర్డర్ చేయండి",
    processingOrder: "ఆర్డర్ నమోదు అవుతోంది...",

    orderSuccessTitle: "ఆర్డర్ విజయవంతంగా పూర్తయింది!",
    orderNumber: "ఆర్డర్ సంఖ్య",
    estimatedDelivery: "అంచనా డెలివరీ సమయం",
    deliveryTo: "డెలివరీ స్థలం",
    whatsappOrderButton: "వాట్సాప్‌లో ఆర్డర్ పంపండి",
    downloadInvoice: "ఇన్వాయిస్ డౌన్‌లోడ్ / ప్రింట్ చేయండి",
    printInvoice: "ప్రింట్",
    trackThisOrder: "ఆర్డర్ ట్రాక్ చేయండి",
    continueShopping: "షాపింగ్ కొనసాగించండి",

    trackOrderTitle: "ఆర్డర్ ట్రాకింగ్",
    trackOrderSubtitle: "తాజా స్థితి తెలుసుకోవడానికి మీ ఆర్డర్ నంబర్ నమోదు చేయండి.",
    enterOrderNumber: "ఆర్డర్ నంబర్ నమోదు చేయండి",
    checkStatus: "స్థితి చూడండి",
    orderStatus: "ప్రస్తుత స్థితి",
    statusPlaced: "ఆర్డర్ స్వీకరించబడింది",
    statusPacked: "ప్యాక్ చేయబడింది",
    statusOutForDelivery: "డెలివరీకి బయలుదేరింది",
    statusDelivered: "విజయవంతంగా చేరింది",
    needHelp: "సహాయం కోసం సంప్రదించండి:",

    locationModalTitle: "శ్రీ మనీష్వరా సూపర్ మార్కెట్‌కు స్వాగతం",
    locationModalSubtitle: "ఖచ్చితమైన డెలివరీ వివరాల కోసం మీ ప్రాంతాన్ని ఎంచుకోండి.",
    chooseArea: "ప్రాంతాన్ని ఎంచుకోండి",
    enterPincode: "పిన్‌కోడ్",
    verifyAndContinue: "నిర్ధారించండి",
    areaNotServedAlert: "క్షమించండి, మేము ఇంకా ఈ ప్రాంతానికి డెలివరీ అందించడం లేదు. ప్రస్తుతం అన్నూరు, కుమరన్‌కుండ్రు, పొగలూరు మరియు కోవిల్‌పాళయంలకు మాత్రమే సర్వీస్ ఉంది.",
    currentlyServing: "మా డెలివరీ ప్రాంతాలు:",

    shopNow: "కొనుగోలు చేయండి",
    quickLinks: "ముఖ్యమైన లింకులు",
    workingHours: "సమయం: ఉదయం 6:30 నుండి రాత్రి 10:00 వరకు",
    customerSupport: "కస్టమర్ సపోర్ట్",
    ownerSettings: "స్టోర్ సెట్టింగ్స్"
  },

  ml: {
    storeSubtitle: "അന്നൂർ · കുമരൻകുണ്ട്രു · പൊഗലൂർ · കോവിൽപാളയം ഭാഗങ്ങളിലേക്ക് വേഗത്തിലുള്ള ഡെലിവറി",
    searchPlaceholder: "പലചരക്ക്, ആവിൻ പാൽ, ശക്തി മസാല, അരി തിരയുക...",
    deliveringTo: "ഡെലിവറി സ്ഥലം",
    changeLocation: "മാറ്റുക",
    selectLocation: "സ്ഥലം തിരഞ്ഞെടുക്കുക",
    cart: "കാർട്ട്",
    items: "ഇനങ്ങൾ",
    home: "ഹോം",
    allGroceries: "എല്ലാ പലചരക്കും",
    freshDairy: "പാൽ ഉൽപ്പന്നങ്ങൾ",
    todaysDeals: "ഇന്നത്തെ ഓഫറുകൾ",
    trackOrder: "ഓർഡർ ട്രാക്ക്",
    aboutUs: "ഞങ്ങളെക്കുറിച്ച്",
    contact: "ബന്ധപ്പെടുക",
    freeDeliveryOver: "₹500-ന് മുകളിൽ സൗജന്യ ഡെലിവറി",
    freeGiftOver: "₹2000-ന് മുകളിൽ സൗജന്യ സമ്മാനം",

    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    cat_rice_grains: "അരിയും ധാന്യങ്ങളും",
    cat_dals_pulses: "പരിപ്പ് വർഗ്ഗങ്ങൾ",
    cat_flours: "പൊടികൾ",
    cat_cooking_oils: "പാചക എണ്ണയും നെയ്യും",
    cat_spices_masalas: "മസാലപ്പൊടികൾ",
    cat_salt_sugar: "ഉപ്പും പഞ്ചസാരയും",
    cat_dairy_products: "പാൽ ഉൽപ്പന്നങ്ങൾ",
    cat_breakfast_cereals: "പ്രഭാതഭക്ഷണ ധാന്യങ്ങൾ",
    cat_snacks_biscuits: "സ്നാക്സും ബിസ്ക്കറ്റുകളും",
    cat_beverages: "ചായ, കാപ്പി & പാനീയങ്ങൾ",
    cat_pickles_sauces: "അച്ചാറുകളും സോസുകളും",
    cat_dry_fruits_nuts: "ഡ്രൈ ഫ്രൂട്ട്സ് & നട്സ്",
    cat_cleaning_household: "ക്ലീനിംഗ് & ഗാർഹിക വസ്തുക്കൾ",
    cat_personal_care: "വ്യക്തിഗത പരിചരണം",
    cat_baby_care: "ബേബി കെയർ",

    filters: "ഫിൽട്ടറുകൾ",
    sortBy: "ക്രമീകരിക്കുക",
    priceRange: "വില പരിധി",
    allBrands: "ബ്രാൻഡുകൾ",
    inStockOnly: "ലഭ്യമായവ മാത്രം",
    minDiscount: "കുറഞ്ഞ ഡിസ്കൗണ്ട്",
    resetFilters: "റീസെറ്റ് ചെയ്യുക",
    sortPriceAsc: "വില: കുറഞ്ഞത് മുതൽ",
    sortPriceDesc: "വില: കൂടിയത് മുതൽ",
    sortDiscount: "കൂടിയ ഡിസ്കൗണ്ട്",
    sortName: "പേര് അനുസരിച്ച്",
    showingProducts: "ലഭ്യമായ സാധനങ്ങൾ",
    noProductsFound: "ഉൽപ്പന്നങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല.",

    packSize: "അളവ്",
    mrp: "എം.ആർ.പി",
    ourPrice: "ഞങ്ങളുടെ വില",
    save: "ലാഭം",
    off: "കിഴിവ്",
    addToCart: "കാർട്ടിലേക്ക്",
    addedToCart: "ചേർത്തു",
    inStock: "ലഭ്യമാണ്",
    outOfStock: "തീർന്നുപോയി",
    popularBrands: "പ്രധാന ബ്രാൻഡുകൾ",
    viewDetails: "വിശദാംശങ്ങൾ",

    shoppingCart: "നിങ്ങളുടെ ഷോപ്പിംഗ് കാർട്ട്",
    emptyCartTitle: "കാർട്ട് ശൂന്യമാണ്",
    emptyCartDesc: "ശ്രീ മനീശ്വര സൂപ്പർ മാർക്കറ്റിൽ നിന്നും ഗുണമേന്മയുള്ള പലചരക്ക് സാധനങ്ങൾ തിരഞ്ഞെടുക്കൂ.",
    startShopping: "ഷോപ്പിംഗ് ആരംഭിക്കൂ",
    subtotal: "സാധനങ്ങളുടെ തുക",
    deliveryCharge: "ഡെലിവറി നിരക്ക്",
    freeDeliveryApplied: "സൗജന്യം (₹500-ന് മുകളിൽ)",
    totalDiscount: "നിങ്ങൾ ലാഭിച്ചത്",
    grandTotal: "ആകെ തുക",
    proceedToCheckout: "ചെക്ക്ഔട്ട് ചെയ്യുക",
    freeGiftOffer: "സൗജന്യ സമ്മാന ഓഫർ",
    addMoreForFreeGift: "സൗജന്യ സമ്മാനത്തിന് ₹{amount} കൂടി ചേർക്കൂ!",
    freeGiftUnlocked: "അഭിനന്ദനങ്ങൾ! സൗജന്യ സമ്മാനം ലഭിച്ചു (₹0)",
    chooseFreeGift: "നിങ്ങളുടെ സൗജന്യ സമ്മാനം തിരഞ്ഞെടുക്കുക:",
    giftSelected: "സമ്മാനം കാർട്ടിൽ ചേർത്തു",
    addMoreForFreeDelivery: "സൗജന്യ ഡെലിവറിക്ക് ₹{amount} കൂടി ചേർക്കൂ",
    clearCart: "കാർട്ട് ഒഴിവാക്കുക",

    checkoutTitle: "സുരക്ഷിത ചെക്ക്ഔട്ട്",
    contactDetails: "1. കസ്റ്റമർ വിവരങ്ങൾ",
    fullName: "മുഴുവൻ പേര്",
    phoneNumber: "മൊബൈൽ നമ്പർ (10 അക്കം)",
    phoneHelper: "ഓർഡർ വിവരങ്ങൾ വാട്ട്‌സ്ആപ്പ് / എസ്എംഎസ് വഴി അറിയിക്കുന്നതാണ്.",
    deliveryAddress: "2. ഡെലിവറി വിലാസം (കോയമ്പത്തൂർ സോൺ)",
    doorStreet: "വീട്ടു നമ്പർ, തെരുവ്",
    landmark: "അടുത്തുള്ള ലാൻഡ്മാർക്ക്",
    selectArea: "ഡെലിവറി പ്രദേശം",
    pincode: "പിൻകോഡ് (6 അക്കം)",
    deliverySlot: "3. ഡെലിവറി സമയം",
    deliveryNotes: "നിർദ്ദേശങ്ങൾ (ഓപ്ഷണൽ)",
    paymentMethod: "4. പേയ്‌മെന്റ് രീതി",
    upiPayment: "UPI പേയ്‌മെന്റ് (GPay, PhonePe, Paytm)",
    upiInstruction: "QR കോഡ് സ്കാൻ ചെയ്തോ UPI ഐഡി വഴിയോ പണം നൽകാം.",
    cashOnDelivery: "ക്യാഷ് ഓൺ ഡെലിവറി",
    cardPayment: "കാർഡ് പേയ്‌മെന്റ്",
    netBanking: "നെറ്റ് ബാങ്കിംഗ്",
    placeOrder: "ഓർഡർ നൽകുക",
    processingOrder: "ഓർഡർ പൂർത്തിയാക്കുന്നു...",

    orderSuccessTitle: "ഓർഡർ വിജയകരമായി ലഭിച്ചു!",
    orderNumber: "ഓർഡർ നമ്പർ",
    estimatedDelivery: "ഡെലിവറി സമയം",
    deliveryTo: "ഡെലിവറി വിലാസം",
    whatsappOrderButton: "വാട്ട്‌സ്ആപ്പിൽ ഓർഡർ അയക്കുക",
    downloadInvoice: "ഇൻവോയ്സ് ഡൗൺലോഡ് / പ്രിന്റ് ചെയ്യുക",
    printInvoice: "പ്രിന്റ് ചെയ്യുക",
    trackThisOrder: "ഓർഡർ ട്രാക്ക് ചെയ്യുക",
    continueShopping: "തുടർന്ന് വാങ്ങുക",

    trackOrderTitle: "ഓർഡർ വിവരങ്ങൾ ട്രാക്ക് ചെയ്യുക",
    trackOrderSubtitle: "തത്സമയ വിവരങ്ങൾക്ക് ഓർഡർ നമ്പർ നൽകുക.",
    enterOrderNumber: "ഓർഡർ നമ്പർ നൽകുക",
    checkStatus: "നില പരിശോധിക്കുക",
    orderStatus: "നിലവിലെ അവസ്ഥ",
    statusPlaced: "ഓർഡർ സ്വീകരിച്ചു",
    statusPacked: "പാക്ക് ചെയ്തു",
    statusOutForDelivery: "ഡെലിവറിക്കായി പുറപ്പെട്ടു",
    statusDelivered: "വിജയകരമായി എത്തിച്ചു",
    needHelp: "സഹായത്തിന് വിളിക്കുക:",

    locationModalTitle: "ശ്രീ മനീശ്വര സൂപ്പർ മാർക്കറ്റിലേക്ക് സ്വാഗതം",
    locationModalSubtitle: "കൃത്യമായ വിവരങ്ങൾക്ക് നിങ്ങളുടെ പ്രദേശം തിരഞ്ഞെടുക്കുക.",
    chooseArea: "പ്രദേശം തിരഞ്ഞെടുക്കുക",
    enterPincode: "പിൻകോഡ്",
    verifyAndContinue: "ഉറപ്പാക്കുക",
    areaNotServedAlert: "ക്ഷമിക്കുക, ഞങ്ങൾ ഇപ്പോൾ ഈ പ്രദേശത്തേക്ക് സർവീസ് നടത്തുന്നില്ല. നിലവിൽ അന്നൂർ, കുമരൻകുണ്ട്രു, പൊഗലൂർ, കോവിൽപാളയം എന്നിവിടങ്ങളിൽ മാത്രമാണ് സേവനം.",
    currentlyServing: "ഞങ്ങൾ സേവനം നൽകുന്ന സ്ഥലങ്ങൾ:",

    shopNow: "വാങ്ങുക",
    quickLinks: "പ്രധാന ലിങ്കുകൾ",
    workingHours: "സമയം: രാവിലെ 6:30 മുതൽ രാത്രി 10:00 വരെ",
    customerSupport: "കസ്റ്റമർ സപ്പോർട്ട്",
    ownerSettings: "സ്റ്റോർ ക്രമീകരണങ്ങൾ"
  },

  kn: {
    storeSubtitle: "ಅನ್ನೂರು · ಕುಮರನ್‌ಕುಂಡ್ರು · ಪೊಗಲೂರು · ಕೋವಿಲ್‌ಪಾಳಯಂ ಪ್ರದೇಶಗಳಿಗೆ ಮನೆ ಬಾಗಿಲಿಗೆ ಡೆಲಿವರಿ",
    searchPlaceholder: "ದಿನಸಿ, ಆವಿನ್ ಹಾಲು, ಶಕ್ತಿ ಮಸಾಲೆ, ಅಕ್ಕಿ ಹುಡುಕಿ...",
    deliveringTo: "ಡೆಲಿವರಿ ಪ್ರದೇಶ",
    changeLocation: "ಬದಲಾಯಿಸಿ",
    selectLocation: "ಪ್ರದೇಶ ಆಯ್ಕೆಮಾಡಿ",
    cart: "ಕಾರ್ಟ್",
    items: "ವಸ್ತುಗಳು",
    home: "ಮುಖಪುಟ",
    allGroceries: "ಎಲ್ಲಾ ದಿನಸಿ",
    freshDairy: "ತಾಜಾ ಡೈರಿ",
    todaysDeals: "ಇಂದಿನ ಆಫರ್",
    trackOrder: "ಆರ್ಡರ್ ಟ್ರ್ಯಾಕ್",
    aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    freeDeliveryOver: "₹500 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಮೊತ್ತಕ್ಕೆ ಉಚಿತ ಡೆಲಿವರಿ",
    freeGiftOver: "₹2000 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಮೊತ್ತಕ್ಕೆ ಉಚಿತ ಉಡುಗೊರೆ",

    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    cat_rice_grains: "ಅಕ್ಕಿ ಮತ್ತು ಧಾನ್ಯಗಳು",
    cat_dals_pulses: "ಬೇಳೆಕಾಳುಗಳು",
    cat_flours: "ಹಿಟ್ಟುಗಳು",
    cat_cooking_oils: "ಅಡುಗೆ ಎಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ",
    cat_spices_masalas: "ಮಸಾಲೆ ಪುಡಿಗಳು",
    cat_salt_sugar: "ಉಪ್ಪು ಮತ್ತು ಸಕ್ಕರೆ",
    cat_dairy_products: "ಡೈರಿ ಉತ್ಪನ್ನಗಳು",
    cat_breakfast_cereals: "ಉಪಹಾರ ಧಾನ್ಯಗಳು",
    cat_snacks_biscuits: "ತಿಂಡಿಗಳು ಮತ್ತು ಬಿಸ್ಕತ್ತುಗಳು",
    cat_beverages: "ಚಹಾ, ಕಾಫಿ ಮತ್ತು ಪಾನೀಯಗಳು",
    cat_pickles_sauces: "ಉಪ್ಪಿನಕಾಯಿ ಮತ್ತು ಸಾಸ್‌ಗಳು",
    cat_dry_fruits_nuts: "ಒಣ ಹಣ್ಣುಗಳು ಮತ್ತು ಬೀಜಗಳು",
    cat_cleaning_household: "ಮನೆ ಸ್ವಚ್ಛತೆ ವಸ್ತುಗಳು",
    cat_personal_care: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ",
    cat_baby_care: "ಮಗುವಿನ ಆರೈಕೆ",

    filters: "ಫಿಲ್ಟರ್‌ಗಳು",
    sortBy: "ವಿಂಗಡಿಸಿ",
    priceRange: "ಬೆಲೆ ಶ್ರೇಣಿ",
    allBrands: "ಬ್ರ್ಯಾಂಡ್‌ಗಳು",
    inStockOnly: "ಸ್ಟಾಕ್ ಇರುವ ವಸ್ತುಗಳು",
    minDiscount: "ಕನಿಷ್ಠ ರಿಯಾಯಿತಿ",
    resetFilters: "ಮರುಹೊಂದಿಸಿ",
    sortPriceAsc: "ಬೆಲೆ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚು",
    sortPriceDesc: "ಬೆಲೆ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆ",
    sortDiscount: "ಹೆಚ್ಚಿನ ರಿಯಾಯಿತಿ",
    sortName: "ಹೆಸರಿನ ಪ್ರಕಾರ",
    showingProducts: "ತೋರಿಸಲಾಗುತ್ತಿರುವ ಉತ್ಪನ್ನಗಳು",
    noProductsFound: "ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",

    packSize: "ಗಾತ್ರ",
    mrp: "ಎಂಆರ್‌ಪಿ",
    ourPrice: "ನಮ್ಮ ಬೆಲೆ",
    save: "ಉಳಿತಾಯ",
    off: "ರಿಯಾಯಿತಿ",
    addToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    addedToCart: "ಸೇರಿಸಲಾಗಿದೆ",
    inStock: "ಲಭ್ಯವಿದೆ",
    outOfStock: "ಸ್ಟಾಕ್ ಇಲ್ಲ",
    popularBrands: "ಜನಪ್ರಿಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು",
    viewDetails: "ವಿವರಣೆ",

    shoppingCart: "ನಿಮ್ಮ ಶಾಪಿಂಗ್ ಕಾರ್ಟ್",
    emptyCartTitle: "ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
    emptyCartDesc: "ಶ್ರೀ ಮನೀಶ್ವರ ಸೂಪರ್ ಮಾರ್ಕೆಟ್‌ನಿಂದ ಗುಣಮಟ್ಟದ ದಿನಸಿ ಸೇರಿಸಿ.",
    startShopping: "ಶಾಪಿಂಗ್ ಆರಂಭಿಸಿ",
    subtotal: "ಉತ್ಪನ್ನಗಳ ಮೊತ್ತ",
    deliveryCharge: "ಡೆಲಿವರಿ ಶುಲ್ಕ",
    freeDeliveryApplied: "ಉಚಿತ (₹500 ಕ್ಕಿಂತ ಹೆಚ್ಚು)",
    totalDiscount: "ನಿಮ್ಮ ಉಳಿತಾಯ",
    grandTotal: "ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ",
    proceedToCheckout: "ಚೆಕ್‌ಔಟ್ ಮಾಡಿ",
    freeGiftOffer: "ಉಚಿತ ಉಡುಗೊರೆ ಆಫರ್",
    addMoreForFreeGift: "ಉಚಿತ ಉಡುಗೊರೆಗೆ ಇನ್ನೂ ₹{amount} ಸೇರಿಸಿ!",
    freeGiftUnlocked: "ಅಭಿನಂದನೆಗಳು! ಉಚಿತ ಉಡುಗೊರೆ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ (₹0)",
    chooseFreeGift: "ಉಚಿತ ಉಡುಗೊರೆ ಆಯ್ಕೆಮಾಡಿ:",
    giftSelected: "ಉಡುಗೊರೆ ಸೇರಿಸಲಾಗಿದೆ",
    addMoreForFreeDelivery: "ಉಚಿತ ಡೆಲಿವರಿಗೆ ಇನ್ನೂ ₹{amount} ಸೇರಿಸಿ",
    clearCart: "ಕಾರ್ಟ್ ಖಾಲಿ ಮಾಡಿ",

    checkoutTitle: "ಸುರಕ್ಷಿತ ಚೆಕ್‌ಔಟ್",
    contactDetails: "1. ಗ್ರಾಹಕರ ವಿವರಗಳು",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    phoneNumber: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (10 ಅಂಕಿಗಳು)",
    phoneHelper: "ಆರ್ಡರ್ ವಿವರಗಳನ್ನು ವಾಟ್ಸಾಪ್ / ಎಸ್‌ಎಂಎಸ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
    deliveryAddress: "2. ಡೆಲಿವರಿ ವಿಳಾಸ (ಕೊಯಮತ್ತೂರು ವಲಯ)",
    doorStreet: "ಮನೆ ಸಂಖ್ಯೆ, ರಸ್ತೆ ಹೆಸರು",
    landmark: "ಹತ್ತಿರದ ಸ್ಥಳ",
    selectArea: "ಡೆಲಿವರಿ ಪ್ರದೇಶ",
    pincode: "ಪಿನ್‌ಕೋಡ್ (6 ಅಂಕಿಗಳು)",
    deliverySlot: "3. ಡೆಲಿವರಿ ಸಮಯ",
    deliveryNotes: "ವಿಶೇಷ ಸೂಚನೆಗಳು (ಐಚ್ಛಿಕ)",
    paymentMethod: "4. ಪಾವತಿ ವಿಧಾನ",
    upiPayment: "UPI ಪಾವತಿ (GPay, PhonePe, Paytm)",
    upiInstruction: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ UPI ಐಡಿಗೆ ಪಾವತಿಸಿ.",
    cashOnDelivery: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ (ಮನೆಯಲ್ಲಿ ನಗದು ಪಾವತಿ)",
    cardPayment: "ಕಾರ್ಡ್ ಪಾವತಿ (ಡೆಲಿವರಿಯ ವೇಳೆ)",
    netBanking: "ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್",
    placeOrder: "ಆರ್ಡರ್ ಮಾಡಿ",
    processingOrder: "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ...",

    orderSuccessTitle: "ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿದೆ!",
    orderNumber: "ಆರ್ಡರ್ ಸಂಖ್ಯೆ",
    estimatedDelivery: "ಅಂದಾಜು ಡೆಲಿವರಿ ಸಮಯ",
    deliveryTo: "ಡೆಲಿವರಿ ವಿಳಾಸ",
    whatsappOrderButton: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಕಳುಹಿಸಿ",
    downloadInvoice: "ಇನ್‌ವಾಯ್ಸ್ ಡೌನ್‌ಲೋಡ್ / ಮುದ್ರಿಸಿ",
    printInvoice: "ಮುದ್ರಿಸಿ",
    trackThisOrder: "ಆರ್ಡರ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    continueShopping: "ಶಾಪಿಂಗ್ ಮುಂದುವರಿಸಿ",

    trackOrderTitle: "ಆರ್ಡರ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    trackOrderSubtitle: "ಸ್ಥಿತಿ ತಿಳಿಯಲು ಆರ್ಡರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
    enterOrderNumber: "ಆರ್ಡರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
    checkStatus: "ಪರಿಶೀಲಿಸಿ",
    orderStatus: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
    statusPlaced: "ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    statusPacked: "ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
    statusOutForDelivery: "ಡೆಲಿವರಿಗೆ ಹೊರಟಿದೆ",
    statusDelivered: "ತಲುಪಿಸಲಾಗಿದೆ",
    needHelp: "ಸಹಾಯಕ್ಕಾಗಿ ಕರೆ ಮಾಡಿ:",

    locationModalTitle: "ಶ್ರೀ ಮನೀಶ್ವರ ಸೂಪರ್ ಮಾರ್ಕೆಟ್‌ಗೆ ಸುಸ್ವಾಗತ",
    locationModalSubtitle: "ನಿಖರವಾದ ಡೆಲಿವರಿ ಮಾಹಿತಿ ತಿಳಿಯಲು ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    chooseArea: "ಪ್ರದೇಶ ಆಯ್ಕೆಮಾಡಿ",
    enterPincode: "ಪಿನ್‌ಕೋಡ್",
    verifyAndContinue: "ಖಚಿತಪಡಿಸಿ",
    areaNotServedAlert: "ಕ್ಷಮಿಸಿ, ನಾವು ಈ ಪ್ರದೇಶಕ್ಕೆ ಇನ್ನೂ ಡೆಲಿವರಿ ನೀಡುತ್ತಿಲ್ಲ. ಪ್ರಸ್ತುತ ಅನ್ನೂರು, ಕುಮರನ್‌ಕುಂಡ್ರು, ಪೊಗಲೂರು ಮತ್ತು ಕೋವಿಲ್‌ಪಾಳಯಂಗೆ ಮಾತ್ರ ಸೇವೆ ನೀಡಲಾಗುತ್ತಿದೆ.",
    currentlyServing: "ನಮ್ಮ ಡೆಲಿವರಿ ಪ್ರದೇಶಗಳು:",

    shopNow: "ಖರೀದಿಸಿ",
    quickLinks: "ಪ್ರಮುಖ ಲಿಂಕ್‌ಗಳು",
    workingHours: "ಸಮಯ: ಬೆಳಗ್ಗೆ 6:30 ರಿಂದ ರಾತ್ರಿ 10:00 ವರೆಗೆ",
    customerSupport: "ಗ್ರಾಹಕ ಸೇವೆ",
    ownerSettings: "ಅಂಗಡಿ ಸೆಟ್ಟಿಂಗ್ಸ್"
  }
};

const LANGUAGE_STORAGE_KEY = "sms_selected_language_v1";

export function getStoredLanguage(): LanguageCode {
  try {
    const lang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode;
    if (lang && SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
      return lang;
    }
  } catch (e) {
    console.error("Error reading language", e);
  }
  return "en";
}

export function saveStoredLanguage(lang: LanguageCode): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (e) {
    console.error("Error saving language", e);
  }
}
