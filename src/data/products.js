export const products = [
  {
    id: 1,
    name: 'Raw Melinjo',
    description: 'Premium quality raw melinjo seeds, carefully selected from mature trees. Ideal for food processing and export.',
    image: null,
    grade: 'Grade A',
    specs: [
      { label: 'Size', value: '1.5 - 2.5 cm' },
      { label: 'Moisture', value: 'Max 12%' },
      { label: 'MOQ', value: '5,000 kg' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: 'PP Bags / Vacuum' },
    ],
    packaging: ['25kg PP Bags', '50kg PP Bags', 'Vacuum Pack', 'Custom Packaging'],
    fullDescription: `Our Raw Melinjo (Gnetum gnemon) seeds are sourced directly from trusted farmers in Banten and Central Java, Indonesia. Each batch undergoes rigorous quality inspection to ensure only the finest seeds reach our customers.

The melinjo seeds are harvested at optimal maturity, sun-dried using traditional methods, and carefully sorted by size and quality. Our raw melinjo is perfect for manufacturers looking to produce their own melinjo-based products or for further processing.`,
  },
  {
    id: 2,
    name: 'Peeled Melinjo',
    description: 'Hand-peeled melinjo seeds, cleaned and ready for immediate processing. Saves preparation time for manufacturers.',
    image: null,
    grade: 'Grade A',
    specs: [
      { label: 'Size', value: '1.2 - 2.0 cm' },
      { label: 'Moisture', value: 'Max 10%' },
      { label: 'MOQ', value: '3,000 kg' },
      { label: 'Shelf Life', value: '10 months' },
      { label: 'Packaging', value: 'Vacuum Pack' },
    ],
    packaging: ['10kg Vacuum Pack', '25kg Vacuum Pack', 'Custom Packaging'],
    fullDescription: `Our Peeled Melinjo offers convenience without compromising quality. Each seed is carefully de-shelled by hand, ensuring the integrity of the seed remains intact.

This product is ideal for food manufacturers and processors who require ready-to-use melinjo seeds. The peeling process is done in our hygienic facility following strict food safety protocols.`,
  },
  {
    id: 3,
    name: 'Raw Emping Melinjo',
    description: 'Uncooked melinjo crackers, hand-pressed using traditional methods. Ready for frying or further processing.',
    image: null,
    grade: 'Premium',
    specs: [
      { label: 'Size', value: '4 - 6 cm diameter' },
      { label: 'Moisture', value: 'Max 8%' },
      { label: 'MOQ', value: '1,000 kg' },
      { label: 'Shelf Life', value: '18 months' },
      { label: 'Packaging', value: 'Vacuum Pack' },
    ],
    packaging: ['5kg Vacuum Pack', '10kg Carton Box', '25kg Bulk Pack', 'Custom Packaging'],
    fullDescription: `Our Raw Emping Melinjo is produced using time-honored Indonesian techniques. Skilled artisans carefully flatten each melinjo seed by hand, creating thin, crispy crackers when fried.

These uncooked emping are sun-dried to achieve the perfect moisture content for long shelf life and optimal frying results. Available in both salted and unsalted varieties.`,
  },
  {
    id: 4,
    name: 'Ready-to-Fry Emping Melinjo',
    description: 'Premium emping crackers, pre-seasoned and ready to fry. Perfect for retail and food service applications.',
    image: null,
    grade: 'Premium',
    specs: [
      { label: 'Size', value: '4 - 6 cm diameter' },
      { label: 'Moisture', value: 'Max 6%' },
      { label: 'MOQ', value: '500 kg' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Packaging', value: 'Food-grade Box' },
    ],
    packaging: ['250g Retail Pack', '1kg Food Service Pack', '5kg Bulk Pack', 'Private Label Available'],
    fullDescription: `Our Ready-to-Fry Emping Melinjo is the ultimate convenience product for retailers and food service businesses. Each piece is carefully selected, seasoned, and packaged for immediate use.

Simply deep fry for 30-60 seconds until golden and crispy. Available with various seasonings including original, garlic, and spicy variants. Private label packaging available for retailers.`,
  },
]

export const certifications = [
  {
    name: 'Phytosanitary Certificate',
    description: 'All shipments accompanied by official plant health certificates from Indonesian quarantine authority.',
    icon: '🌿',
  },
  {
    name: 'Halal Certification',
    description: 'Our products and processing facilities are certified Halal by BPJPH (Indonesian Halal Authority).',
    icon: '☪️',
  },
  {
    name: 'HACCP Ready',
    description: 'Our facility follows HACCP principles for food safety management and hazard control.',
    icon: '✓',
  },
  {
    name: 'ISO 22000 Ready',
    description: 'Working towards ISO 22000 certification for international food safety management standards.',
    icon: '🏆',
  },
]

export const qualityProcess = [
  {
    step: 1,
    title: 'Sourcing & Selection',
    description: 'We partner directly with trusted farmers in Banten and Central Java, selecting only mature, high-quality melinjo from well-maintained trees.',
  },
  {
    step: 2,
    title: 'Quality Inspection',
    description: 'Each batch undergoes multi-stage inspection for size, moisture content, color consistency, and any defects or foreign materials.',
  },
  {
    step: 3,
    title: 'Processing & Packaging',
    description: 'Products are processed in our hygienic facility and packed using food-grade materials to ensure freshness and extended shelf life.',
  },
]

export const exportCapabilities = {
  countries: [
    { region: 'Asia', countries: ['Japan', 'South Korea', 'Taiwan', 'Hong Kong', 'Singapore', 'Malaysia'] },
    { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain'] },
    { region: 'Europe', countries: ['Netherlands', 'Germany', 'United Kingdom', 'France', 'Belgium'] },
    { region: 'Americas', countries: ['United States', 'Canada', 'Australia'] },
  ],
  capacity: {
    monthly: '50,000 kg',
    yearly: '600,000 kg',
  },
  incoterms: ['FOB (Jakarta/Surabaya)', 'CIF (to destination port)', 'EXW (ex-works from facility)'],
  shipping: {
    seaFreight: '20ft and 40ft containers available',
    leadTime: '2-4 weeks from order confirmation',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading',
      'Certificate of Origin',
      'Phytosanitary Certificate',
      'Halal Certificate',
      'Quality Analysis Report',
    ],
  },
}

export const galleryImages = [
  { id: 1, category: 'products', title: 'Raw Melinjo Seeds', image: null },
  { id: 2, category: 'products', title: 'Peeled Melinjo', image: null },
  { id: 3, category: 'products', title: 'Emping Melinjo', image: null },
  { id: 4, category: 'production', title: 'Sorting Process', image: null },
  { id: 5, category: 'production', title: 'Hand Peeling', image: null },
  { id: 6, category: 'production', title: 'Traditional Pressing', image: null },
  { id: 7, category: 'packaging', title: 'Vacuum Packaging', image: null },
  { id: 8, category: 'packaging', title: 'Export Cartons', image: null },
  { id: 9, category: 'shipping', title: 'Container Loading', image: null },
  { id: 10, category: 'shipping', title: 'Port Shipment', image: null },
]

export const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Countries Served' },
  { number: '500+', label: 'Tons Exported Yearly' },
  { number: '100+', label: 'Farmer Partners' },
]

export const highlights = [
  {
    title: 'Direct from Farmers',
    description: 'We work directly with over 100 local farmers, ensuring fair prices and premium quality from source.',
    icon: '🌱',
  },
  {
    title: 'Quality Control',
    description: 'Multi-stage inspection process with strict quality standards at every step of production.',
    icon: '✓',
  },
  {
    title: 'Export-Ready Packaging',
    description: 'Food-grade packaging designed for international shipping with extended shelf life.',
    icon: '📦',
  },
  {
    title: 'Global Shipping',
    description: 'Flexible shipping options to major ports worldwide with full export documentation.',
    icon: '🌍',
  },
]
