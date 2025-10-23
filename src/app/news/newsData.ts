// src/app/news/newsData.ts

export type NewsDetails = {
  id: string | number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  content: string[];
  tags?: string[];
  related?: {
    id: string | number;
    title: string;
    image: string;
  }[];
};


export const newsData = [
  {
    id: "1",
    title: "How to Spend the Perfect Day on Croatia’s Magical Island",
    images: [
      "/images/demo1.png",
      "/images/demo1.png",
      "/images/demo1.png",
      "/images/demo1.png",
      "/images/demo1.png",
    ],
    date: "3rd September, 2025",
    comments: 25,
    category: "Travel",
    likes: 23000,
    dislikes: 3000,
    shares: 10000,
    content: [
      {
        heading: "Morning: Wake Up by the Sea",
        text: `Start your day with a gentle stroll along the coastline as the sun rises over the Adriatic. Many islands are dotted with quaint cafés right by the harbor—perfect for a fresh croissant and a cup of rich Croatian coffee. Don’t forget to enjoy the quiet charm of narrow cobblestone streets before the crowds arrive.`,
      },
      {
        heading: "Midday: Beach Bliss & Adventure",
        text: `By noon, the island comes alive with sparkling waters inviting you in. Head to a hidden bay or a sandy stretch like Dubovica Beach in Hvar or Stiniva Beach on Vis. If you love adventure, consider a short boat trip to the famous Blue Cave, where sunlight turns the sea into a glowing sapphire.`,
      },
      {
        heading: "Afternoon: Savor Authentic Flavors",
        text: `A perfect island day isn’t complete without tasting local cuisine. Stop at a family-run konoba (traditional tavern) and savor dishes like grilled fish, octopus salad, or peka (slow-cooked meat and vegetables under an iron bell). Pair it with a glass of local Croatian wine—many islands are famous for their vineyards.`,
      },
      {
        heading: "Evening: Culture & Sunset Magic",
        text: `As the day winds down, wander through the historic old towns. Explore medieval walls, charming squares, and artisan shops filled with local crafts. If you’re on Korčula, legend says it’s the birthplace of Marco Polo—don’t miss a visit to his house. Finally, find a seaside spot to watch the golden sunset melt into the horizon.`,
      },
      {
        heading: "Night: Under the Stars",
        text: `End your day with a relaxed evening by the shore. Many islands host lively music events in the summer, so you might stumble upon a local festival or live performance. Or simply enjoy stargazing—the clear island skies make for unforgettable nights.`,
      },
    ],
  },
];
