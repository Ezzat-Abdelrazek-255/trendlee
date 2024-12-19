type Perk = {
  description: string;
  isBonus: boolean;
};

export type Offer = {
  title: string;
  isMontly: boolean;
  isPopular: boolean;
  price: number;
  perks: Perk[];
};
