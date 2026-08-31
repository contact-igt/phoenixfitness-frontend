export interface Offer {
  title: string;
  originalPrice: string;
  price: string;
  perks: string;
  popular?: boolean;
  category: 'gym' | 'pt';
}

export interface Branch {
  id: string;
  name: string;
  size: string;
  address: string;
  mapsUrl: string;
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
  poster?: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'budegere',
    name: 'Budegere Cross',
    size: '6,500 sq.ft',
    address: 'ISIRI HUB, First Floor, Near Coldman, Bommenahalli Village, Bengaluru 560049',
    mapsUrl: 'https://www.google.com/maps/place/Phoenix+Fitness+-+Budigere+Cross/@13.0670918,77.7409881,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1bd3db04208b:0x9481f62067a1f95e!8m2!3d13.0670918!4d77.743563!16s%2Fg%2F11yf8mpp20?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    offers: [
      { title: 'Monthly Plan', originalPrice: '7,000', price: '5,000', perks: 'Casual membership plan.', category: 'gym' },
      { title: 'Quarterly Plan', originalPrice: '14,000', price: '10,000', perks: 'Normal membership plan.', category: 'gym' },
      { title: 'Half-Yearly Plan', originalPrice: '21,000', price: '15,000', perks: 'Standard membership plan.', category: 'gym' },
      { title: 'Yearly Plan', originalPrice: '28,000', price: '22,000', perks: 'Committed membership plan.', popular: true, category: 'gym' },
      { title: 'PT Level 1', originalPrice: '20,000', price: '15,000', perks: 'Build your training base.', category: 'pt' },
      { title: 'PT Level 2', originalPrice: '24,000', price: '18,000', perks: 'Progress with expert guidance.', category: 'pt' },
      { title: 'PT Level 3', originalPrice: '27,000', price: '21,000', perks: 'Complete transformation support.', popular: true, category: 'pt' },
    ]
  },
  {
    id: 'kannamangala',
    name: 'Kannamangala',
    size: '7,500 sq.ft',
    address: '6th Floor, SBR Gokulam, Whitefield - Hoskote Rd, Bengaluru 560115',
    mapsUrl: 'https://www.google.com/maps/place/Phoenix+Fitness+-+Kannamangala/@13.022633,77.7603765,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae0f18a9627067:0xbca14ddf1e718455!8m2!3d13.022633!4d77.7629514!16s%2Fg%2F11txlvgr2m?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    offers: [
      { title: 'Monthly Plan', originalPrice: '7,000', price: '5,000', perks: 'Casual membership plan.', category: 'gym' },
      { title: 'Quarterly Plan', originalPrice: '14,000', price: '10,000', perks: 'Normal membership plan.', category: 'gym' },
      { title: 'Half-Yearly Plan', originalPrice: '21,000', price: '15,000', perks: 'Standard membership plan.', category: 'gym' },
      { title: 'Yearly Plan', originalPrice: '28,000', price: '22,000', perks: 'Committed membership plan.', popular: true, category: 'gym' },
      { title: 'PT Level 1', originalPrice: '20,000', price: '15,000', perks: 'Build your training base.', category: 'pt' },
      { title: 'PT Level 2', originalPrice: '24,000', price: '18,000', perks: 'Progress with expert guidance.', category: 'pt' },
      { title: 'PT Level 3', originalPrice: '27,000', price: '21,000', perks: 'Complete transformation support.', popular: true, category: 'pt' },
    ]
  },
  {
    id: 'nallurhalli',
    name: 'Nallurhalli',
    size: '5,000 sq.ft',
    address: 'Village Main Rd, Palm Meadows, Whitefield, Bengaluru 560066',
    mapsUrl: 'https://www.google.com/maps/place/Phoenix+Fitness+-+nallurahalli/@12.9722852,77.7316028,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae13d6db0a7413:0x5ba1f4f867185392!8m2!3d12.9722852!4d77.7341777!16s%2Fg%2F11hdzbl8cb?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    offers: [
      { title: 'Monthly Plan', originalPrice: '4,500', price: '4,000', perks: 'Casual membership plan.', category: 'gym' },
      { title: 'Quarterly Plan', originalPrice: '14,000', price: '12,000', perks: 'Normal membership plan.', category: 'gym' },
      { title: 'Half-Yearly Plan', originalPrice: '17,000', price: '14,000', perks: 'Standard membership plan.', category: 'gym' },
      { title: 'Yearly Plan', originalPrice: '21,000', price: '16,000', perks: 'Committed membership plan.', popular: true, category: 'gym' },
      { title: 'PT Level 1', originalPrice: '12,000', price: '8,000', perks: 'Build your training base.', category: 'pt' },
      { title: 'PT Level 2', originalPrice: '16,000', price: '10,000', perks: 'Progress with expert guidance.', category: 'pt' },
      { title: 'PT Level 3', originalPrice: '18,000', price: '12,000', perks: 'Complete transformation support.', popular: true, category: 'pt' },
    ]
  },
  {
    id: 'yello',
    name: 'Yello Living (ITPL)',
    size: '4,500 sq.ft',
    address: 'Extension Road, Pattandur Agrahara, Whitefield, Bengaluru 560066',
    mapsUrl: 'https://www.google.com/maps/place/Phoenix+Fitness-+Yello+Living/@12.984277,77.7301048,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1110f7bd08fd:0x18436f9a65f59a16!8m2!3d12.984277!4d77.7326797!16s%2Fg%2F11x__z8scr?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    offers: [
      { title: 'Monthly Plan', originalPrice: '4,500', price: '3,000', perks: 'Casual membership plan.', category: 'gym' },
      { title: 'Quarterly Plan', originalPrice: '14,000', price: '10,000', perks: 'Normal membership plan.', category: 'gym' },
      { title: 'Half-Yearly Plan', originalPrice: '17,000', price: '12,000', perks: 'Standard membership plan.', category: 'gym' },
      { title: 'Yearly Plan', originalPrice: '21,000', price: '15,000', perks: 'Committed membership plan.', popular: true, category: 'gym' },
      { title: 'PT Level 1', originalPrice: '12,000', price: '8,000', perks: 'Build your training base.', category: 'pt' },
      { title: 'PT Level 2', originalPrice: '16,000', price: '10,000', perks: 'Progress with expert guidance.', category: 'pt' },
      { title: 'PT Level 3', originalPrice: '18,000', price: '12,000', perks: 'Complete transformation support.', popular: true, category: 'pt' },
    ]
  },
  {
    id: 'hopefarm',
    name: 'Hope Farm',
    size: '3,500 sq.ft',
    address: '92, Whitefield Main Rd, Kadugodi Colony, Bengaluru 560066',
    mapsUrl: 'https://www.google.com/maps/place/Phoenix+Fitness-+Whitefield/@12.9845208,77.7311479,15z/data=!3m1!4b1!4m6!3m5!1s0x3bae0e036a736393:0xd22f56ad3896a5fa!8m2!3d12.9845005!4d77.749602!16s%2Fg%2F11bzv86p9c?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    offers: [
      { title: 'Monthly Plan', originalPrice: '4,000', price: '2,500', perks: 'Casual membership plan.', category: 'gym' },
      { title: 'Quarterly Plan', originalPrice: '9,000', price: '6,000', perks: 'Normal membership plan.', category: 'gym' },
      { title: 'Half-Yearly Plan', originalPrice: '12,000', price: '8,000', perks: 'Standard membership plan.', category: 'gym' },
      { title: 'Yearly Plan', originalPrice: '14,000', price: '10,000', perks: 'Committed membership plan.', popular: true, category: 'gym' },
      { title: 'PT Level 1', originalPrice: '9,000', price: '6,000', perks: 'Build your training base.', category: 'pt' },
      { title: 'PT Level 2', originalPrice: '11,000', price: '8,000', perks: 'Progress with expert guidance.', category: 'pt' },
      { title: 'PT Level 3', originalPrice: '13,000', price: '10,000', perks: 'Complete transformation support.', popular: true, category: 'pt' },
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
  { id: 3, name: 'Rajesh K.', result: 'PCOS Transformation', url: '/videos/transformation3.mp4', poster: '/assets/transformation3.png' },
];
