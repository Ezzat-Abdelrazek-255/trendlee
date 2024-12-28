type Perk = {
  description: string;
  isBonus: boolean;
};

export type Offer = {
  title: string;
  isMontly: boolean;
  isPopular: boolean;
  paymentLink: string;
  price: number;
  perks: Perk[];
};
