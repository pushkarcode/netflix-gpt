export const USER_AVT =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
];

export const OPENAI_KEY = "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"


export const Error404 = "https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959253-3299952.gif"