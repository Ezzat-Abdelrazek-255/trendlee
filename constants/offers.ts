import { Offer } from "@/types/offers";

export const AdCampaignsOffers: Offer[] = [
  {
    title: "Ads Boost Pack",
    isMontly: false,
    isPopular: false,
    price: 350,
    paymentLink: "https://buy.stripe.com/cN2aF7cmA0z474YdQQ",
    perks: [
      {
        description:
          "3 short videos (15-30 seconds), ready for TikTok, Facebook, and Instagram.",
        isBonus: false,
      },
      {
        description:
          "Customised scripts: Tailored to grab attention and drive conversions.",
        isBonus: false,
      },
      {
        description:
          "Voice-over + sound design: Professional narration and sound effects to make your video stand out",
        isBonus: false,
      },
      {
        description:
          "Storyboard & illustrations: A clear visual plan for engaging and effective videos.",
        isBonus: false,
      },
      {
        description: "Transcription in 1 language (ideal for subtitles)",
        isBonus: false,
      },
      {
        description:
          "Free guide/video to help you get started with your first campaign, ensuring the best performance.",
        isBonus: true,
      },
      {
        description: "1 revision cycle to perfect your video",
        isBonus: true,
      },
    ],
  },
  {
    title: "High-Impact Ads",
    isMontly: false,
    isPopular: true,
    paymentLink: "https://buy.stripe.com/dR600t72gchM9d6eUV",
    price: 750,
    perks: [
      {
        description:
          "3  premium short videos (15-30 seconds), ready for TikTok, Facebook, and Instagram.",
        isBonus: false,
      },
      {
        description:
          "Attention-grabbing text optimised for your target audience",
        isBonus: false,
      },
      {
        description:
          "Professional voice-over + sound design: Engaging narration and high-quality sound effects to enhance video appeal",
        isBonus: false,
      },
      {
        description:
          "Custom storyboard & illustrations: Detailed visual planning for a story-driven approach",
        isBonus: false,
      },
      {
        description:
          "Transcriptions in 3 languages (e.g., English, French, Spanish)",
        isBonus: false,
      },
      {
        description:
          "Transcriptions in 3 languages (e.g., English, French, Spanish)",
        isBonus: false,
      },
      {
        description:
          "2 revision cycles to fine-tune your videos and ensure they align perfectly with your brand message",
        isBonus: true,
      },
      {
        description:
          "Post-campaign feedback session: 30-minute call to review results and suggest imporvements for better performance in future campaigns",
        isBonus: true,
      },
    ],
  },
  {
    title: "Ads Mastery Pack",
    isMontly: false,
    isPopular: false,
    paymentLink: "https://buy.stripe.com/fZe8wZ4U82Hc60UfZ0",
    price: 1200,
    perks: [
      {
        description:
          "5 videos tailored for different stages of the marketing funnel: awareness, consideration, conversion.",
        isBonus: false,
      },
      {
        description:
          "Custom scripts: Each video crafted to align with your messaging at each stage of the funnel",
        isBonus: false,
      },
      {
        description:
          "Premium voice-over + sound design: High-quality narration and sound for maximum impact.",
        isBonus: false,
      },

      {
        description:
          "Comprehensive storyboard & illustrations: In-depth visual planning for effective storytelling and engagement",
        isBonus: false,
      },
      {
        description:
          "Transcriptions in 3 languages (e.g., English, French, German).",
        isBonus: false,
      },
      {
        description:
          "3 revision cycles to perfect each video, ensuring they resonate with your target audience.",
        isBonus: true,
      },
      {
        description:
          "Post-campaign support: 30 days of performance monitoring with actionable recommendations to optimise your ad strategy",
        isBonus: true,
      },
      {
        description:
          "Free video marketing training: A 45-minute session to learn how to optimise your ad campaigns for better ROI",
        isBonus: true,
      },
    ],
  },
];
export const OrganicOffers: Offer[] = [
  {
    title: "Organic Boost Pack",
    isMontly: true,
    paymentLink: "https://buy.stripe.com/3cs9B3aesepU9d6147",
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
    paymentLink: "https://buy.stripe.com/28oaF7gCQdlQahaeUY",
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
    paymentLink: "https://buy.stripe.com/dR63cF2M095A3SMbIN",
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
    paymentLink: "https://buy.stripe.com/28o4gJaes3Lgexq14a",
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

export const paymentSuccessEmailMarkup = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border-radius: 5px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00ff43;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
        a {
            color: #fff;
            text-decoration: none;
        }

        a:visited,a:active {
        color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Purchase Confirmation</h1>
        </div>
        <div class="content">
            <p>Thank you for your purchase! We're excited to assist you with your order.</p>
            <p>Please fill out the form below to proceed:</p>
            <a href="https://forms.gle/Mzh2xNvgZk8aAD6i8" class="btn">Fill out the form (Français)</a>
            <p>or</p>
            <a href="https://forms.gle/hzk5Q5HKf9moD9df6" class="btn">Fill out the form (English)</a>
            <p>Once you've filled out the form, our team will contact you as soon as possible.</p>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to reach out to us at <a href="mailto:trendlee.agency@gmail.com">trendlee.agency@gmail.com</a>.</p>
        </div>
    </div>
</body>
</html>
`;
