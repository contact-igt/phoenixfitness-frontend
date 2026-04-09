export interface Offer {
  title: string;
  originalPrice: string;
  price: string;
  perks: string;
  popular?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  size: string;
  address: string;
  offers: Offer[];
}

export interface GalleryImage {
  id: number;
  category: string;
  url: string;
  title: string;
}

export interface Transformation {
  id: number;
  name: string;
  result: string;
  url: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'budegere',
    name: 'Budegere Cross',
    size: '6,500 sq.ft',
    address: 'ISIRI HUB, First Floor, Near Coldman, Bommenahalli Village, Bengaluru 560049',
    offers: [
      { title: 'Quarterly Plan', originalPrice: '13,000', price: '9,999', perks: '1 Month Ext. FREE + 15 Days Freezing' },
      { title: 'Half-Yearly Plan', originalPrice: '18,500', price: '13,999', perks: '1 Month Ext. FREE + 30 Days Freezing' },
      { title: 'Yearly Plan', originalPrice: '23,000', price: '17,999', perks: '2 Months Ext. FREE + 45 Days Freezing', popular: true },
    ]
  },
  {
    id: 'kannamangala',
    name: 'Kannamangala',
    size: '7,500 sq.ft',
    address: '6th Floor, SBR Gokulam, Whitefield - Hoskote Rd, Bengaluru 560115',
    offers: [
      { title: 'Quarterly Plan', originalPrice: '12,500', price: '9,999', perks: '1 Month Ext. FREE + 15 Days Freezing' },
      { title: 'Half-Yearly Plan', originalPrice: '16,000', price: '13,999', perks: '1 Month Ext. FREE + 30 Days Freezing' },
      { title: 'Yearly Plan', originalPrice: '20,000', price: '15,999', perks: '2 Months Ext. FREE + 45 Days Freezing', popular: true },
    ]
  },
  {
    id: 'nallurhalli',
    name: 'Nallurhalli',
    size: '5,000 sq.ft',
    address: 'Village Main Rd, Palm Meadows, Whitefield, Bengaluru 560066',
    offers: [
      { title: '3 Month Starter', originalPrice: '15,000', price: '8,000', perks: '3 Months Extension FREE + 15 Days Freezing', popular: true },
      { title: 'Half-Yearly Plan', originalPrice: '20,000', price: '10,000', perks: '6 Months + 1 Month FREE + 30 Days Freezing' },
    ]
  },
  {
    id: 'yello',
    name: 'Yello Living (ITPL)',
    size: '4,500 sq.ft',
    address: 'Extension Road, Pattandur Agrahara, Whitefield, Bengaluru 560066',
    offers: [
      { title: '3 Month Starter', originalPrice: '15,000', price: '8,000', perks: '3 Months Extension FREE + 15 Days Freezing', popular: true },
      { title: 'Half-Yearly Plan', originalPrice: '20,000', price: '10,000', perks: '6 Months + 1 Month FREE + 30 Days Freezing' },
    ]
  },
  {
    id: 'hopefarm',
    name: 'Hope Farm',
    size: '3,500 sq.ft',
    address: '92, Whitefield Main Rd, Kadugodi Colony, Bengaluru 560066',
    offers: [
      { title: 'Standard Plan', originalPrice: '12,000', price: '8,000', perks: 'Pricing varies per season. Contact for trial.' },
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, category: 'Strength', url: '/assets/img13.jpg', title: 'Free Weights Zone' },
  { id: 2, category: 'Cardio', url: '/assets/img18.jpg', title: 'Treadmill Row' },
  { id: 3, category: 'Recovery', url: '/assets/steamroom.jpg', title: 'Steam Room' },
  { id: 4, category: 'Strength', url: '/assets/img12.jpg', title: 'Squat Racks' },
  { id: 5, category: 'Community', url: '/assets/img19.jpg', title: 'CrossFit Session' },
  { id: 6, category: 'Cardio', url: '/assets/img16.jpg', title: 'Spinning Class' },
  { id: 7, category: 'Recovery', url: '/assets/img14.jpg', title: 'Shower Facilities' },
  { id: 8, category: 'Community', url: '/assets/img5.jpg', title: 'Training Pride' },
  { id: 9, category: 'Strength', url: '/assets/img21.jpg', title: 'Muscle Build' },
  { id: 10, category: 'Community', url: '/assets/img23.jpg', title: 'Clients' },
  { id: 11, category: 'recovery', url: '/assets/img2.jpg', title: 'Pose structure' },
];

export const TRANSFORMATIONS: Transformation[] = [
  { id: 1, name: 'Vikram S.', result: '-12kg in 3 Months', url: '/videos/transformation1.mp4' },
  { id: 2, name: 'Sonal M.', result: 'Strength & Muscle Gain', url: '/videos/transformation2.mp4' },
  { id: 3, name: 'Rajesh K.', result: 'PCOS Transformation', url: '/videos/transformation3.mp4' },
];
