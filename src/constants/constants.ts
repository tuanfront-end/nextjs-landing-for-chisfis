const CONSTANTS_NEXT = {
  purchaseUrl:
    "https://themeforest.net/item/chisfis-online-booking-nextjs-template/43399526",
  liveDemoUrl: "https://chisfis-nextjs.vercel.app/",
  supportUrl: "https://support.booliitheme.com/",
  documentationUrl: "https://nghiaxchis.gitbook.io/chisfis-nextjs-template/",
  socials: {
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    instagramUrl: "https://www.instagram.com/",
    youtubeUrl: "https://www.youtube.com/",
    githubUrl: "https://github.com/",
  },
};

const CONSTANTS_REACT = {
  purchaseUrl:
    "https://themeforest.net/item/chisfis-online-booking-react-template/33515927",
  liveDemoUrl: "https://chisfis-template.vercel.app/",
  supportUrl: "https://support.booliitheme.com/",
  documentationUrl: "https://nghiaxchis.gitbook.io/chisfis-react-template/",
  socials: {
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    instagramUrl: "https://www.instagram.com/",
    youtubeUrl: "https://www.youtube.com/",
    githubUrl: "https://github.com/",
  },
};

const CONSTANTS =
  process.env.NEXT_PUBLIC_FRAMEWORK === "next"
    ? CONSTANTS_NEXT
    : CONSTANTS_REACT;

export { CONSTANTS_NEXT as CONSTANTS };
