import { Offer } from "@/types/offers";

export const AdCampaignsOffers: Offer[] = [
  {
    title: "Ads Boost Pack",
    isMontly: false,
    isPopular: false,
    price: 350,
    perks: [
      {
        description:
          "3 short videos (15-30 seconds), ready for TikTok, Facebook, and Instagram.",
        isBonus: false,
      },
      {
        description:
          "Tailored to specific ad formats: high-performing CTAs, subtitles, and benefit highlights.",
        isBonus: false,
      },
      {
        description:
          "Bonus: Personalized recommendation for your first campaign.",
        isBonus: true,
      },
    ],
  },
  {
    title: "High-Impact Ads",
    isMontly: false,
    isPopular: true,
    price: 750,
    perks: [
      {
        description:
          "3 short videos (15-30 seconds), ready for TikTok, Facebook, and Instagram.",
        isBonus: false,
      },
      {
        description:
          "Tailored to specific ad formats: high-performing CTAs, subtitles, and benefit highlights.",
        isBonus: false,
      },
      {
        description:
          "Bonus: Personalized recommendation for your first campaign.",
        isBonus: true,
      },
    ],
  },
  {
    title: "Ads Mastery Pack",
    isMontly: false,
    isPopular: false,
    price: 1200,
    perks: [
      {
        description:
          "5 videos tailored for different stages of the marketing funnel: awareness, consideration, conversion.",
        isBonus: false,
      },
      {
        description:
          "Comprehensive ad strategy: budgeting, targeting, and optimization.",
        isBonus: false,
      },
      {
        description:
          "Post-campaign support: performance analysis and improvement suggestions.",
        isBonus: false,
      },
      {
        description: "Bonus: Free audit of your current ad strategy.",
        isBonus: true,
      },
    ],
  },
];
export const OrganicOffers: Offer[] = [
  {
    title: "Organic Boost Pack",
    isMontly: true,
    isPopular: false,
    price: 300,
    perks: [
      {
        description:
          "3 short videos (15-60 seconds), perfect for TikTok, Instagram Reels, and YouTube Shorts.",
        isBonus: false,
      },
      {
        description: "Aligned with your brand identity and algorithm trends.",
        isBonus: false,
      },
      {
        description: "A guide on the best hashtags and posting times.",
        isBonus: true,
      },
    ],
  },
  {
    title: "Viral Growth Pack",
    isMontly: true,
    isPopular: true,
    price: 600,
    perks: [
      {
        description:
          "5 videos optimized for virality: trending music, challenges, storytelling.",
        isBonus: false,
      },
      {
        description: "Content strategy included: themes, trends, and planning.",
        isBonus: false,
      },
      {
        description: "Quick training to maximize engagement through comments",
        isBonus: true,
      },
    ],
  },
  {
    title: "Go Viral Master Pack",
    isMontly: true,
    isPopular: false,
    price: 1000,
    perks: [
      {
        description:
          "5 videos designed to maximize shares and leverage trends.",
        isBonus: false,
      },
      {
        description:
          "Complete planning and management of the editorial calendar.",
        isBonus: false,
      },
      {
        description:
          "Monthly performance evaluation with recommendations for future viral opportunities.",
        isBonus: false,
      },
      {
        description: "Audit of your social media + improvement suggestions.",
        isBonus: true,
      },
    ],
  },
];
export const EngageAndConvertOffers: Offer[] = [
  {
    title: "Complete Pack",
    isMontly: true,
    isPopular: false,
    price: 1500,
    perks: [
      {
        description:
          "5 ready-to-use videos for both organic content and ad campaigns.",
        isBonus: false,
      },
      {
        description:
          "30-day editorial calendar with platform-specific recommendations.",
        isBonus: false,
      },
      {
        description:
          "Continuous optimization based on campaign data and current trends.",
        isBonus: false,
      },
      {
        description:
          "Free 1-hour coaching session on best practices to get the most out of your videos.",
        isBonus: false,
      },
    ],
  },
];
