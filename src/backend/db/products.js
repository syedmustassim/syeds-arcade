import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "God of War",
    publisher: "Santa Monica Studios",
    price: "3599",
    categoryName: "action",
    year: "2018",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/Hsptfcx5/god-of-war.jpg'
  },
  {
    _id: uuid(),
    title: "Red Dead Redemption 2",
    publisher: "Rockstar Games",
    price: "3599",
    categoryName: "action",
    year: "2018",
    rating: "4.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/HLCK8Wzt/red-dead-redemption-2.jpg'
  },
  {
    _id: uuid(),
    title: "Star Wars Jedi Fallen Order",
    publisher: "Respawn Entertainment EA",
    price: "3299",
    categoryName: "action",
    year: "2019",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/SQDJZJzJ/jedi-fallen-order.jpg'
  },
  {
    _id: uuid(),
    title: "Sekiro: Shadows Die Twice",
    publisher: "From Software",
    price: "3599",
    categoryName: "action",
    year: "2019",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/8kRP3sJh/sekiro.png'
  },
  {
    _id: uuid(),
    title: "Elden Ring",
    publisher: "From Software",
    price: "3999",
    categoryName: "action",
    year: "2022",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/P5873vNH/elden-ring.png'
  },
  {
    _id: uuid(),
    title: "GTA 5",
    publisher: "Rockstar Games",
    price: "2599",
    categoryName: "action",
    year: "2013",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/nh7dY8wc/gta-5.jpg'
  },
  {
    _id: uuid(),
    title: "FIFA 23",
    publisher: "EA Sports",
    price: "2599",
    categoryName: "sports",
    year: "2022",
    rating: "4.0",
    platform: "PC",
    image_link: 'https://i.postimg.cc/qRkpG8sb/fifa-23.jpg'
  },
  {
    _id: uuid(),
    title: "NBA 2K23",
    publisher: "Visual Concepts 2K",
    price: "2999",
    categoryName: "sports",
    year: "2022",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vm8QrrLP/nba-2k23.jpg'
  },
  {
    _id: uuid(),
    title: "WWE 2K22",
    publisher: "Visual Concepts 2K",
    price: "2499",
    categoryName: "sports",
    year: "2021",
    rating: "3.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/Xq4xqv0y/wwe-2k22.jpg'
  },
  {
    _id: uuid(),
    title: "Rocket League",
    publisher: "Psyonix",
    price: "1999",
    categoryName: "sports",
    year: "2015",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/SxFRMYv5/rocket-league.jpg'
  },
  {
    _id: uuid(),
    title: "Madden NFL 22",
    publisher: "EA Sports",
    price: "2999",
    categoryName: "sports",
    year: "2021",
    rating: "3.4",
    platform: "PC",
    image_link: 'https://i.postimg.cc/qRPqxt7z/madden-nfl-23.jpg'
  },
  {
    _id: uuid(),
    title: "Tony Hawk's Pro Skater 1 + 2",
    publisher: "Activision",
    price: "1999",
    categoryName: "sports",
    year: "2020",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/cCL9TJ5G/tony-hawks-pro-skater.jpg'
  },
  {
    _id: uuid(),
    title: "Resident Evil Village",
    publisher: "Capcom",
    price: "2999",
    categoryName: "horror",
    year: "2021",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/HxzHVV7q/re-village.jpg'
  },
  {
    _id: uuid(),
    title: "Alien: Isolation",
    publisher: "Creative Assembly Sega",
    price: "999",
    categoryName: "horror",
    year: "2014",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vms97NcW/alien-isolation.jpg'
  },
  {
    _id: uuid(),
    title: "Amnesia: The Dark Descent",
    publisher: "Frictional Games",
    price: "599",
    categoryName: "horror",
    year: "2010",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/jqmX9K2T/amnesia.jpg'
  },
  {
    _id: uuid(),
    title: "Outlast",
    publisher: "Red Barrels",
    price: "599",
    categoryName: "horror",
    year: "2013",
    rating: "4.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/RhSBxfX3/outlast.jpg'
  },
  {
    _id: uuid(),
    title: "Little Nightmares",
    publisher: "Tarsier Studios",
    price: "999",
    categoryName: "horror",
    year: "2017",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/zXHdXv63/little-nightmares.jpg'
  },  {
    _id: uuid(),
    title: "Five Nights at Freddy's",
    publisher: "Scott Cawthon",
    price: "999",
    categoryName: "horror",
    year: "2014",
    rating: "4.0",
    platform: "PC",
    image_link: 'https://i.postimg.cc/fLx9r4rz/fnaf.jpg'
  },
  {
    _id: uuid(),
    title: "The Witcher 3: Wild Hunt",
    publisher: "CD Projekt Red",
    price: "1999",
    categoryName: "RPG",
    year: "2015",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/TwX9wc8P/witcher-3.jpg'
  },
  {
    _id: uuid(),
    title: "The Elder Scrolls V: Skyrim",
    publisher: "Bethesda",
    price: "799",
    categoryName: "RPG",
    year: "2011",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/B6HJ54wg/skyrim.jpg'
  },
  {
    _id: uuid(),
    title: "Cyberpunk 2077",
    publisher: "CD Projekt Red",
    price: "3999",
    categoryName: "RPG",
    year: "2020",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/V6Q8k2Lb/cyberpunk-2077.png'
  },
  {
    _id: uuid(),
    title: "Genshin Impact",
    publisher: "miHoYo",
    price: "499",
    categoryName: "RPG",
    year: "2020",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/MTbhKTFh/genshin-impact.jpg'
  },
  {
    _id: uuid(),
    title: "Diablo 3",
    publisher: "Blizzard",
    price: "999",
    categoryName: "RPG",
    year: "2012",
    rating: "4.3",
    platform: "PC",
    image_link: 'https://i.postimg.cc/2ytTzNrs/diablo-3.jpg'
  },
  {
    _id: uuid(),
    title: "Monster Hunter: World",
    publisher: "Capcom",
    price: "2479",
    categoryName: "RPG",
    year: "2020",
    rating: "4.3",
    platform: "PC",
    image_link: 'https://i.postimg.cc/YqbLLzFS/monster-hunter-world.png'
  },
  {
    _id: uuid(),
    title: "DOOM Eternal",
    publisher: "Bethesda Softworks",
    price: "1999",
    categoryName: "FPS",
    year: "2020",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/7PXZKYZs/doom-eternal.png'
  },
  {
    _id: uuid(),
    title: "Halo: The Master Chief Collection",
    publisher: "343 Industries",
    price: "999",
    categoryName: "FPS",
    year: "2014",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/5N6bpBGy/halo.jpg'
  },
  {
    _id: uuid(),
    title: "Call of Duty: Modern Warfare",
    publisher: "Infinity Ward",
    price: "3999",
    categoryName: "FPS",
    year: "2019",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/jdwYyswJ/cod-mw.jpg'
  },
  {
    _id: uuid(),
    title: "Deathloop",
    publisher: "Arkane Studios",
    price: "2499",
    categoryName: "FPS",
    year: "2021",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/cJ9NQ6mw/deathloop.jpg'
  },
  {
    _id: uuid(),
    title: "BioShock Infinite",
    publisher: "Irrational Games",
    price: "349",
    categoryName: "FPS",
    year: "2014",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vZx9R61H/bioshock-infinite.png'
  },
  {
    _id: uuid(),
    title: "Far Cry 6",
    publisher: "Ubisoft",
    price: "750",
    categoryName: "FPS",
    year: "2021",
    rating: "3.6",
    platform: "PC",
    image_link: 'https://i.postimg.cc/k4SqqqQS/farcry-6.jpg'
  }
];

