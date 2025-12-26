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
  { id: 1, category: 'Strength', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', title: 'Free Weights Zone' },
  { id: 2, category: 'Cardio', url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800', title: 'Treadmill Row' },
  { id: 3, category: 'Recovery', url: 'https://images.unsplash.com/photo-1594411643194-9b65798935c1?q=80&w=800', title: 'Steam Room' },
  { id: 4, category: 'Strength', url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800', title: 'Squat Racks' },
  { id: 5, category: 'Community', url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800', title: 'CrossFit Session' },
  { id: 6, category: 'Cardio', url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800', title: 'Spinning Class' },
  { id: 7, category: 'Recovery', url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800', title: 'Shower Facilities' },
  { id: 8, category: 'Community', url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800', title: 'Training Pride' },
];

export const TRANSFORMATIONS: Transformation[] = [
  { id: 1, name: 'Vikram S.', result: '-12kg in 3 Months', url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=800' },
  { id: 2, name: 'Sonal M.', result: 'Strength & Muscle Gain', url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800' },
  { id: 3, name: 'Rajesh K.', result: 'PCOS Transformation', url: 'https://images.unsplash.com/photo-1517838276537-c3359d9c878e?q=80&w=800' },
];
