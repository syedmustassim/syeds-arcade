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
    recommendation: "Highly Recommended",
    description_one:
    "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. ",
    price: 3599,
    categoryName: "action",
    year: "2018",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/Hsptfcx5/god-of-war.jpg',
    carousel_img_1: "https://i.postimg.cc/qgfmQt5J/gow-img-1.jpg",
    carousel_img_2: "https://i.postimg.cc/sfZCP5BR/gow-img-2.jpg",
    carousel_img_3: "https://i.postimg.cc/wvyZVdjk/gow-img-3.jpg",
    carousel_img_4: "https://i.postimg.cc/br157HbD/gow-img-4.jpg",
    carousel_img_5: "https://i.postimg.cc/bYn4S8My/gow-img-5.jpg",
    about_game: [
    {
      title: "Enter the Norse realm",
      desc:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. "
    },
    {
      title: "Grasp a second chance",
      desc:
        "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. "
    },
    {
      title: "Journey to a dark, elemental world of fearsome creatures",
      desc:
        "From the marble and columns of ornate Olympus to the gritty forests, mountains and caves of pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters and gods. "
    },
    {
      title: "Engage in visceral, physical combat",
      desc:
        "With an over the shoulder camera that brings the player closer to the action than ever before, fights in God of War™ mirror the pantheon of Norse creatures Kratos will face: grand, gritty and grueling. A new main weapon and new abilities retain the defining spirit of the God of War series while presenting a vision of conflict that forges new ground in the genre. "
    }
  ]
  },
  {
    _id: uuid(),
    title: "Red Dead Redemption 2",
    publisher: "Rockstar Games",
    recommendation: "Highly Recommended",
    description_one:
    "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.",
    price: 3599,
    categoryName: "action",
    year: "2018",
    rating: "4.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/HLCK8Wzt/red-dead-redemption-2.jpg',
    carousel_img_1: "https://i.postimg.cc/j2sxnJ5J/rdr-1.jpg",
    carousel_img_2: "https://i.postimg.cc/fWKTn527/rdr-2.jpg",
    carousel_img_3: "https://i.postimg.cc/WbYNtzPh/rdr-3.jpg",
    carousel_img_4: "https://i.postimg.cc/8CMNybf6/rdr-4.jpg",
    carousel_img_5: "https://i.postimg.cc/85GDxrLn/rdr-5.jpg",
    about_game: [
    {
      title: "Summary",
      desc:
        "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. "
    },
    {
      title: "Features",
      desc:
        "Red Dead Redemption 2 also includes the shared living world of Red Dead Online – forge your own path as you battle lawmen, outlaw gangs and ferocious wild animals to build a life on the American frontier. Build a camp, ride solo or form a posse and explore everything from the snowy mountains in the North to the swamps of the South, from remote outposts to busy farms and bustling towns. Chase down bounties, hunt, fish and trade, search for exotic treasures, run your own underground Moonshine distillery, or become a Naturalist to learn the secrets of the animal kingdom and much more in a world of astounding depth and detail – includes all new features, gameplay content and additional enhancements released since launch."
    }
  ]
  },
  {
    _id: uuid(),
    title: "Star Wars Jedi Fallen Order",
    publisher: "Respawn Entertainment EA",
    recommendation: "Recommended",
    description_one: "A galaxy-spanning adventure awaits in STAR WARS Jedi: Fallen Order, a new 3rd person action-adventure title from Respawn Entertainment. This narratively-driven single player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode 3: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities, and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors.",
    price: 3299,
    categoryName: "action",
    year: "2019",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/SQDJZJzJ/jedi-fallen-order.jpg',
    carousel_img_1: "https://i.postimg.cc/zfjPXL9Q/sw-1.jpg",
    carousel_img_2: "https://i.postimg.cc/jd7gn3pP/sw-2.jpg",
    carousel_img_3: "https://i.postimg.cc/ht82pzPG/sw-3.jpg",
    carousel_img_4: "https://i.postimg.cc/0QjZkVG6/sw-4.jpg",
    carousel_img_5: "https://i.postimg.cc/QCWb5Vyh/sw-5.jpg",
    about_game: [
    {
      title: "About",
      desc:
        "While mastering your abilities, players will engage in cinematically-charged lightsaber and Force combat designed to deliver the kind of intense STAR WARS lightsaber battles as seen in the films. Players will need to approach enemies strategically, sizing up strengths and weaknesses while cleverly utilizing your Jedi training to overcome your opponents and solve the mysteries that lay in your path. STAR WARS fans will recognize iconic locations, weapons, gear, and enemies while also meeting a roster of fresh characters, locations, creatures, droids and adversaries new to STAR WARS. As part of this authentic STAR WARS story, fans will delve into a galaxy recently seized by the Empire. As a Jedi hero-turned-fugitive, players will need to fight for survival while exploring the mysteries of a long-extinct civilization all in an effort to rebuild the remnants of the Jedi Order as the Empire seeks to erase the Jedi completely. "
    },
    {
      title: "Features",
      desc:
        "Cinematic, Immersive Combat – Jedi: Fallen Order delivers the fantasy of becoming a Jedi through its innovative lightsaber combat system – striking, parrying, dodging - partnered with a suite of powerful Force abilities you’ll need to leverage to overcome obstacles that stand in your way. This combat system is intuitive to pick up, but takes training and practice to fully master its nuances as you gain new powers and abilities along your adventure."
    }
  ]
  },
  {
    _id: uuid(),
    title: "Sekiro: Shadows Die Twice",
    publisher: "From Software",
    price: 3599,
    categoryName: "action",
    year: "2019",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/8kRP3sJh/sekiro.png',
    recommendation: "Highly Recommended",
    description_one: "Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
    carousel_img_1: "https://i.postimg.cc/pVwNSjxQ/sekiro-1.jpg",
    carousel_img_2: "https://i.postimg.cc/gJ17f99c/sekiro-2.jpg",
    carousel_img_3: "https://i.postimg.cc/DzMpXVwQ/sekiro-3.jpg",
    carousel_img_4: "https://i.postimg.cc/CLsv4nKx/sekiro-4.jpg",
    carousel_img_5: "https://i.postimg.cc/jS8ZpVPV/sekiro-5.jpg",
    about_game: [
    {
      title: "About",
      desc:
        "In Sekiro™: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself. "
    },
    {
      title: "Gameplay Features",
      desc:
        "Cinematic, Immersive Combat, Narrative storyline. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation."
    }
  ]
  },
  {
    _id: uuid(),
    title: "Elden Ring",
    publisher: "From Software",
    price: 3999,
    categoryName: "action",
    year: "2022",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/P5873vNH/elden-ring.png',
    recommendation: "Highly Recommended",
    description_one: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    carousel_img_1: "https://i.postimg.cc/DzH5zqxB/elden-ring-1.jpg",
    carousel_img_2: "https://i.postimg.cc/rm4jRKbc/elden-ring-2.jpg",
    carousel_img_3: "https://i.postimg.cc/T1qcQBf4/elden-ring-3.jpg",
    carousel_img_4: "https://i.postimg.cc/TY09b8ky/elden-ring-4.jpg",
    carousel_img_5: "https://i.postimg.cc/x1dPys76/elden-ring-5.jpg",
    about_game: [
    {
      title: "A Vast World Full of Excitement",
      desc:
        "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment. "
    },
    {
      title: "Create your Own Character",
      desc:
        "In addition to customizing the appearance of your character, you can freely combine the weapons, armor, and magic that you equip. You can develop your character according to your play style, such as increasing your muscle strength to become a strong warrior, or mastering magic."
    },
    {
      title: "An Epic Drama Born from a Myth",
      desc:
        "A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between."
    },
    {
      title: "Unique Online Play that Loosely Connects You to Others",
      desc:
        "In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others."
    }
  ]

  },
  {
    _id: uuid(),
    title: "GTA 5",
    publisher: "Rockstar Games",
    price: 2599,
    categoryName: "action",
    year: "2013",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/nh7dY8wc/gta-5.jpg',
    recommendation: "Diverse Characters",
    description_one: "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
    carousel_img_1: "https://i.postimg.cc/qR2cMWhv/gta-1.jpg",
    carousel_img_2: "https://i.postimg.cc/x8RKLHPr/gta-2.jpg",
    carousel_img_3: "https://i.postimg.cc/hth97Xzw/gta-3.jpg",
    carousel_img_4: "https://i.postimg.cc/tJX6RJGB/gta-4.jpg",
    carousel_img_5: "https://i.postimg.cc/mgcHgKKW/gta-5.jpg",
    about_game: [
    {
      title: "About",
      desc:
        "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other."
    },
    {
      title: "Features",
      desc:
        "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. The PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way."
    },
    {
      title: "GTA Online",
      desc:
        "Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience. Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation. Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet."
    }
  ]
  },
  {
    _id: uuid(),
    title: "FIFA 23",
    publisher: "EA Sports",
    price: 2599,
    categoryName: "sports",
    year: "2022",
    rating: "4.0",
    platform: "PC",
    image_link: 'https://i.postimg.cc/qRkpG8sb/fifa-23.jpg',
    recommendation: "Highly Recommended",
    description_one: "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features*, and more.",
    carousel_img_1: "https://i.postimg.cc/Y9j9dFkK/fifa-1.jpg",
    carousel_img_2: "https://i.postimg.cc/BZXNdZCJ/fifa-2.jpg",
    carousel_img_3: "https://i.postimg.cc/Z5hcB8zq/fifa-3.jpg",
    carousel_img_4: "https://i.postimg.cc/vBj7Q9vb/fifa-4.jpg",
    carousel_img_5: "https://i.postimg.cc/fTY7NVSQ/fifa-5.jpg",
    about_game: [
    {
      title: "The World's Game",
      desc:
        "EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup™ coming to the game as post-launch updates, the addition of women’s club teams, cross-play features*, and more. Experience unrivaled authenticity with over 19,000 players, 700+ teams, 100 stadiums, and over 30 leagues in FIFA 23. "
    },
    {
      title: "FIFA 23 Ulitmate Team",
      desc:
        "Get the ultimate connection to the FIFA World Cup with a full season of daily content, including special player items, objectives and much more."
    },
    {
      title: "Career Mode",
      desc:
        "Define your personality as a player, manage as some of football's most famous names, and enjoy a new way to play your season with Playable Highlights in the most authentic FIFA career mode expereince to date."
    },
    {
      title: "PRO Clubs",
      desc:
        "Bring more personality than ever before to the pitch with new customizations, improvements to Drop Ins, new perks and more."
    }
  ]

  },
  {
    _id: uuid(),
    title: "NBA 2K23",
    publisher: "Visual Concepts 2K",
    price: 2999,
    categoryName: "sports",
    year: "2022",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vm8QrrLP/nba-2k23.jpg',
    recommendation: "Moderate reviews",
    description_one: "Rise to the occasion and realize your full potential in NBA 2K23. Prove yourself against the best players in the world and showcase your talent in MyCAREER. Pair today’s All-Stars with timeless legends in MyTEAM. Build a dynasty of your own in MyGM or take the NBA in a new direction with MyLEAGUE. Take on NBA or WNBA teams in PLAY NOW and experience true-to-life gameplay. How will you Answer the Call?",
    carousel_img_1: "https://i.postimg.cc/wvtJbMYP/nba-1.jpg",
    carousel_img_2: "https://i.postimg.cc/c4GYXd99/nba-2.jpg",
    carousel_img_3: "https://i.postimg.cc/0y8S1cq7/nba-3.jpg",
    carousel_img_4: "https://i.postimg.cc/RZXHSKMy/nba-4.jpg",
    carousel_img_5: "https://i.postimg.cc/90dDvq8x/nba-5.jpg",
    about_game: [
    {
      title: "Take more control",
      desc:
        "Feel refined gameplay in the palm of your hands on both sides of the ball in NBA 2K23. Attack the basket with a new arsenal of offensive skill-based moves, while you unleash your potential as a lockdown defender with new 1-on-1 mechanics to stifle opposing players at every tur"
    },
    {
      title: "An Epic voyage Awaits",
      desc:
        "Embark on a swashbuckling basketball journey aboard a spacious cruiseliner equipped with pristine courts, scenic views, and a boatload of rewards for you and your MyPLAYER to enjoy. Plus, there’s even more to explore during shore excursions."
    },
    {
      title: "Jordan Challenge Returns",
      desc:
        "Step back in time with era-specific visuals that captured Michael Jordan’s ascent from collegiate sensation to global icon with immersive Jordan Challenges chronicling his career-defining dominance. Lace up his shoes to recreate his otherworldly stat lines and iconic last shots, while listening to first-hand accounts from those who witnessed his maturation from budding star to basketball legend."
    },
    {
      title: "Build Your Squad",
      desc:
        "Ball without limits as you collect and assemble a bevy of legendary talent from any era in MyTEAM. Dominate the hardwood each Season, and bring your vision to life with a broad set of customization tools to create the perfect look for your perfect starting five."
    }
  ]

  },
  {
    _id: uuid(),
    title: "WWE 2K22",
    publisher: "Visual Concepts 2K",
    price: 2499,
    categoryName: "sports",
    year: "2021",
    rating: "3.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/Xq4xqv0y/wwe-2k22.jpg',
    recommendation: "Recommended for WWE fans",
    description_one: "Get ripped out of the stands and hit with complete control of the WWE Universe. Hitting this hard has never been so easy. WWE 2K22: IT HITS DIFFERENT",
    carousel_img_1: "https://i.postimg.cc/MZVfch6y/wwe-1.jpg",
    carousel_img_2: "https://i.postimg.cc/jSgD0Tcr/wwe-2.jpg",
    carousel_img_3: "https://i.postimg.cc/NMTFHHcg/wwe-3.jpg",
    carousel_img_4: "https://i.postimg.cc/8CfP26sh/wwe-4.jpg",
    carousel_img_5: "https://i.postimg.cc/fLxWLQcy/wwe-5.jpg",
    about_game: [
    {
      title: "THE GAME THAT MAY HIT TOO REAL",
      desc:
        "Hitting this hard has never been so easy. Everything from the controls to the stunning graphics has been redesigned, and feels as real as being ringside at WrestleMania. "
    },
    {
      title: "CONTROL WWE SUPERSTARS AND CLASSIC LEGENDS",
      desc:
        "Unleash dives, kickouts, and finishers with the biggest and most realistic-looking WWE Superstars and Legends: The Rock, Sasha Banks, Goldberg, “Stone Cold” Steve Austin, Brock Lesnar, and more."
    },
    {
      title: "INTRODUCING MyGM",
      desc:
        "It’s your turn to call the shots as a WWE General Manager. Take the reins of Raw, Smackdown, NXT or NXT UK and draft your ultimate roster of WWE Superstars and Legends, then compete against rival GM’s to build the biggest brand in the WWE Universe. Become the top-rated show by setting up intense rivalries, over-the-top match types, championship showdowns, pay-per-view events, and an ever-escalating arms race of arenas and audiences. Once you’ve set the stage, play as a Superstar, interfere as a GM, or call the shots from behind the scenes —the choice is yours!"
    },
    {
      title: "CONTROL WWE SUPERSTARS AND CLASSIC LEGENDS",
      desc:
        "Unleash dives, kickouts, and finishers with the biggest and most realistic-looking WWE Superstars and Legends: The Rock, Sasha Banks, Goldberg, “Stone Cold” Steve Austin, Brock Lesnar, and more."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Rocket League",
    publisher: "Psyonix",
    price: 1999,
    categoryName: "sports",
    year: "2015",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/SxFRMYv5/rocket-league.jpg',
    recommendation: "Great for Quick Sessions",
    description_one: "Download and compete in the high-octane hybrid of arcade-style soccer and vehicular mayhem! customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time! Download and take your shot!",
    carousel_img_1: "https://i.postimg.cc/Gh33cNH3/rl-1.jpg",
    carousel_img_2: "https://i.postimg.cc/fbdD2QgC/rl-2.jpg",
    carousel_img_3: "https://i.postimg.cc/t4hB2rNP/rl-3.jpg",
    carousel_img_4: "https://i.postimg.cc/VkRVzG0w/rl-4.jpg",
    carousel_img_5: "https://i.postimg.cc/Z5Tws87M/rl-5.jpg",
    about_game: [
    {
      title: "About",
      desc:
        "Hit the field by yourself or with friends in 1v1, 2v2, and 3v3 Online Modes, or enjoy Extra Modes like Rumble, Snow Day, or Hoops. Unlock items in Rocket Pass, climb the Competitive Ranks, compete in Competitive Tournaments, complete Challenges, enjoy cross-platform progression and more! The field is waiting. Take your shot!  "
    },
    {
      title: "In-Game Events and Limited Time Modes",
      desc:
        "From Haunted Hallows to Frosty Fest, enjoy limited time events that feature festive in-game items that can be unlocked by playing online! Keep on the lookout for Limited Time Modes and arenas."
    },
    {
      title: "Tournaments",
      desc:
        "Feel the competitive energy! Join free Tournaments and compete all season against teams at your Rank! Win and earn new rewards! "
    },
    {
      title: "Cross-Platform Progression",
      desc:
        "Share your Rocket League Inventory, Competitive Rank, and Rocket Pass Tier on any connected platform!"
    }
  ]
  },
  {
    _id: uuid(),
    title: "Madden NFL 22",
    publisher: "EA Sports",
    price: 2999,
    categoryName: "sports",
    year: "2021",
    rating: "3.4",
    platform: "PC",
    image_link: 'https://i.postimg.cc/qRPqxt7z/madden-nfl-23.jpg',
    recommendation: "Mixed Reviews",
    description_one: "Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.",
    carousel_img_1: "https://i.postimg.cc/0jMTQYRf/nfl-1.jpg",
    carousel_img_2: "https://i.postimg.cc/rsBvtDqL/nfl-2.jpg",
    carousel_img_3: "https://i.postimg.cc/9XsMB1Mc/nfl-3.jpg",
    carousel_img_4: "https://i.postimg.cc/7hkRxp9x/nfl-4.jpg",
    carousel_img_5: "https://i.postimg.cc/qq4mf2Bq/nfl-5.jpg",
    about_game: [
    {
      title: "About",
      desc:
        "Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression. And for the first time ever in Ultimate Team, adjust Superstar X-Factors at halftime."
    },
    {
      title: "Features",
      desc:
        "Staff management & talent trees, Enhanced scenario engine, Weekly strategy, New player classes and much more."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Tony Hawk's Pro Skater 1 + 2",
    publisher: "Activision",
    price: 1999,
    categoryName: "sports",
    year: "2020",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/cCL9TJ5G/tony-hawks-pro-skater.jpg',
    recommendation: "Extremely Fun",
    description_one: "Play the fully-remastered Tony Hawk’s™ Pro Skater™ & Tony Hawk’s™ Pro Skater™ 2 games in one epic collection, rebuilt from the ground up in incredible HD.",
    carousel_img_1: "https://i.postimg.cc/vBM7DMJS/th-1.jpg",
    carousel_img_2: "https://i.postimg.cc/XYC98p3z/th-2.jpg",
    carousel_img_3: "https://i.postimg.cc/TPjmzFKj/th-3.jpg",
    carousel_img_4: "https://i.postimg.cc/3rfpQgxq/th-4.jpg",
    carousel_img_5: "https://i.postimg.cc/4xVhcqQC/th-5.jpg",
    about_game: [
    {
      title: "Drop Back In With The Most Iconic Skateboarding Games Ever Made",
      desc:
        "Skate as the legendary Tony Hawk and the original pro roster, plus new pros. Listen to songs from the era-defining soundtrack along with new music. Hit insane trick combos with the iconic handling of the Tony Hawk’s™ Pro Skater™ series."
    },
    {
      title: "All The Original Game Modes And More",
      desc:
        "Play all the original modes and go head-to-head with local 2-Player modes. Show off your style and creativity with upgraded Create-A-Park and Create-A-Skater features. Compete against players from around the world in Multiplayer modes and leaderboards."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Resident Evil Village",
    publisher: "Capcom",
    price: 2999,
    categoryName: "horror",
    year: "2021",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/HxzHVV7q/re-village.jpg',
    recommendation: "Enthralling Horror Experience",
    description_one: "Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.",
    carousel_img_1: "https://i.postimg.cc/Kj118H8H/re-1.jpg",
    carousel_img_2: "https://i.postimg.cc/0yYbjm9P/re-2.jpg",
    carousel_img_3: "https://i.postimg.cc/kX8xN27h/re-3.jpg",
    carousel_img_4: "https://i.postimg.cc/qqKCGFHC/re-4.jpg",
    carousel_img_5: "https://i.postimg.cc/x15NgHhg/re-5.jpg",
    about_game: [
    {
      title: "First-Person Action ",
      desc:
        "Players will assume the role of Ethan Winters and experience every up-close battle and terrifying pursuit through a first-person perspective."
    },
    {
      title: "Familiar Faces and New Foes",
      desc:
        "Chris Redfield has typically been a hero in the Resident Evil series, but his appearance in Resident Evil Village seemingly shrouds him in sinister motives. A host of new adversaries inhabiting the village will relentlessly hunt Ethan and hinder his every move as he attempts to make sense of the new nightmare he finds himself in."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Alien: Isolation",
    publisher: "Creative Assembly Sega",
    price: 999,
    categoryName: "horror",
    year: "2014",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vms97NcW/alien-isolation.jpg',
    recommendation: "Great Survival Horror",
    description_one: "Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger. Fifteen years after the events of Alien™, Ellen Ripley’s daughter, Amanda enters a desperate battle for survival, on a mission to unravel the truth behind her mother's disappearance.",
    carousel_img_1: "https://i.postimg.cc/0QM684QH/alien-img-1.jpg",
    carousel_img_2: "https://i.postimg.cc/pVj9433m/alien-img-2.jpg",
    carousel_img_3: "https://i.postimg.cc/rpbmY9JG/alien-img-3.jpg",
    carousel_img_4: "https://i.postimg.cc/NGn4khmL/alien-img-4.jpg",
    carousel_img_5: "https://i.postimg.cc/3RRX29wg/alien-img-6.jpg",
    about_game: [
    {
      title: "HOW WILL YOU SURVIVE?",
      desc:
        "As Amanda, you will navigate through an increasingly volatile world as you find yourself confronted on all sides by a panicked, desperate population and an unpredictable, ruthless Alien. Underpowered and underprepared, you must scavenge resources, improvise solutions and use your wits, not just to succeed in your mission, but to simply stay alive. "
    },
    {
      title: "Overcome an ever-present deadly threat",
      desc:
        "Experience persistent fear as a truly dynamic and reactive Alien uses its senses to hunt you down and respond to your every move."
    },
    {
      title: "Improvise to survive",
      desc:
        "Hack systems, scavenge for vital resources and craft items to deal with each situation. Will you evade your enemies, distract them or face them head on?"
    }
  ]

  },
  {
    _id: uuid(),
    title: "Amnesia: The Dark Descent",
    publisher: "Frictional Games",
    price: 599,
    categoryName: "horror",
    year: "2010",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/jqmX9K2T/amnesia.jpg',
    recommendation: "The game that made PewDiePie",
    description_one: "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.",
    carousel_img_1: "https://i.postimg.cc/fysBmm6Z/amnesia-img-6.jpg",
    carousel_img_2: "https://i.postimg.cc/rphn6D0N/amnesia-img-2.jpg",
    carousel_img_3: "https://i.postimg.cc/j2fZJv8M/amnesia-img-3.jpg",
    carousel_img_4: "https://i.postimg.cc/fThvrcqh/amnesia-img-4.jpg",
    carousel_img_5: "https://i.postimg.cc/mgmNk0Lb/amnesia-img-5.jpg",
    about_game: [
    {
      title: "Awake...",
      desc:
        "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core. You stumble through the narrow corridors as the distant cry is heard. It is getting closer."
    },
    {
      title: "Explore...",
      desc:
        "Amnesia: The Dark Descent puts you in the shoes of Daniel as he wakes up in a desolate castle, barely remembering anything about his past. Exploring the eerie pathways, you must also take part of Daniel's troubled memories. The horror does not only come from the outside, but from the inside as well. A disturbing odyssey into the dark corners of the human mind awaits. A sound of dragging feet? Or is your mind playing tricks on you?"
    },
    {
      title: "Experience...",
      desc:
        "By using a fully physically simulated world, cutting edge 3D graphics and a dynamic sound system, the game pulls no punches when trying to immerse you. Once the game starts, you will be in control from the beginning to the end. There are no cut-scenes or time-jumps, whatever happens will happen to you first hand. Something emerges out of the darkness. It's approaching. Fast."
    },
    {
      title: "Survive...",
      desc:
        "Amnesia: The Dark Descent throws you headfirst into a dangerous world where danger can lurk behind every corner. Your only means of defense are hiding, running or using your wits. Do you have what it takes to survive?"
    }
  ]

  },
  {
    _id: uuid(),
    title: "Outlast",
    publisher: "Red Barrels",
    price: 599,
    categoryName: "horror",
    year: "2013",
    rating: "4.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/RhSBxfX3/outlast.jpg',
    recommendation: "Highly Recommended",
    description_one: "Hell is an experiment you can't survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.",
    carousel_img_1: "https://i.postimg.cc/HxdytzsS/ol-1.jpg",
    carousel_img_2: "https://i.postimg.cc/BbwP4G5y/ol-2.jpg",
    carousel_img_3: "https://i.postimg.cc/2SWLRM1c/ol-3.jpg",
    carousel_img_4: "https://i.postimg.cc/Kcs1KxLp/ol-4.jpg",
    carousel_img_5: "https://i.postimg.cc/Dw10YGNR/ol-5.jpg",
    about_game: [
    {
      title: "Synopsis",
      desc:
        "In the remote mountains of Colorado, horrors wait inside Mount Massive Asylum. A long-abandoned home for the mentally ill, recently re-opened by the “research and charity” branch of the transnational Murkoff Corporation, the asylum has been operating in strict secrecy… until now. Acting on a tip from an anonymous source, independent journalist Miles Upshur breaks into the facility, and what he discovers walks a terrifying line between science and religion, nature and something else entirely. Once inside, his only hope of escape lies with the terrible truth at the heart of Mount Massive. Outlast is a true survival horror experience which aims to show that the most terrifying monsters of all come from the human mind. "
    },
    {
      title: "Features",
      desc:
        "You are no fighter - if you want to survive the horrors of the asylum, your only chance is to run... or hide, AAA-quality graphics give players a detailed, terrifying world to explore, Stealth-based gameplay, with parkour-inspired platforming elements, Players cannot know when - and from where - one of the asylum’s terrifying inhabitants will finally catch up to them, Outlast’s setting and characters are inspired by real asylums and cases of criminal insanity."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Little Nightmares",
    publisher: "Tarsier Studios",
    price: 999,
    categoryName: "horror",
    year: "2017",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/zXHdXv63/little-nightmares.jpg',
    recommendation: "Great Little Game",
    description_one: "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.",
    carousel_img_1: "https://i.postimg.cc/Vv3sKsWY/ln-1.jpg",
    carousel_img_2: "https://i.postimg.cc/tRfgqDQL/ln-2.jpg",
    carousel_img_3: "https://i.postimg.cc/0y12mQNn/ln-3.jpg",
    carousel_img_4: "https://i.postimg.cc/QdDKDScj/ln-4.jpg",
    carousel_img_5: "https://i.postimg.cc/W3xtH72L/ln-5.jpg",
    about_game: [
    {
      title: "Synopsis",
      desc:
        "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal. As you progress on your journey, explore the most disturbing dollhouse offering a prison to escape from and a playground full of secrets to discover. Reconnect with your inner child to unleash your imagination and find the way out!"
    },
  ]

  },  {
    _id: uuid(),
    title: "Five Nights at Freddy's",
    publisher: "Scott Cawthon",
    price: 999,
    categoryName: "horror",
    year: "2014",
    rating: "4.0",
    platform: "PC",
    image_link: 'https://i.postimg.cc/fLx9r4rz/fnaf.jpg',
    recommendation: "Simply Frightening",
    description_one: "Welcome to your new summer job at Freddy Fazbear's Pizza, where kids and parents alike come for entertainment and food! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!",
    carousel_img_1: "https://i.postimg.cc/J0JtVBny/fnaf-1.jpg",
    carousel_img_2: "https://i.postimg.cc/fTck8Xpp/fnaf-2.jpg",
    carousel_img_3: "https://i.postimg.cc/VvHgTpJs/fnaf-3.jpg",
    carousel_img_4: "https://i.postimg.cc/GhHqYLf4/fnaf-4.jpg",
    carousel_img_5: "https://i.postimg.cc/4dWQ7qbv/fnaf-5.jpg",
    about_game: [
    {
      title: "Synopsis",
      desc:
        "Welcome to your new summer job at Freddy Fazbear's Pizza, where kids and parents alike come for entertainment and food as far as the eye can see! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds! The robots' behavior has become somewhat unpredictable at night however, and it was much cheaper to hire you as a security guard than to find a repairman. From your small office you must watch the security cameras carefully. You have a very limited amount of electricity that you're allowed to use per night (corporate budget cuts, you know). That means when you run out of power for the night- no more security doors and no more lights! If something isn't right- namely if Freddybear or his friends aren't in their proper places, you must find them on the monitors and protect yourself if needed! "
    },
    {
      title: "Can you survive five nights at Freddy's?",
      desc:
        "Simplistic game design and presmise. Jumpscares galore! Get yourself ready and do not fall pray to the animatronics!"
    }
  ]

  },
  {
    _id: uuid(),
    title: "The Witcher 3: Wild Hunt",
    publisher: "CD Projekt Red",
    price: 1999,
    categoryName: "RPG",
    year: "2015",
    rating: "4.9",
    platform: "PC",
    image_link: 'https://i.postimg.cc/TwX9wc8P/witcher-3.jpg',
    recommendation: "Highly Recommended",
    description_one: "From your small office you must watch the security cameras carefully. You have a very limited amount of electricity that you're allowed to use per night (corporate budget cuts, you know). That means when you run out of power for the night- no more security doors and no more lights! If something isn't right- namely if Freddybear or his friends aren't in their proper places, you must find them on the monitors and protect yourself if needed!",
    carousel_img_1: "https://i.postimg.cc/RV6LhP3f/witcher-1.jpg",
    carousel_img_2: "https://i.postimg.cc/vmzWkkjR/witcher-2.jpg",
    carousel_img_3: "https://i.postimg.cc/NFymyM0Y/witcher-3.jpg",
    carousel_img_4: "https://i.postimg.cc/bNt1psM9/witcher-4.jpg",
    carousel_img_5: "https://i.postimg.cc/1zJqJ6ns/witcher-5.jpg",
    about_game: [
    {
      title: "THE MOST AWARDED GAME OF A GENERATION",
      desc:
        "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world. "
    },
    {
      title: "FANTASY AND ADVENTURE AWAITS",
      desc:
        "Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes, witchers are a counterbalance to the monster-infested world in which they live. Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic. Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural predators lurking in the shadowy back alleys of densely populated cities. Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist fighting, and other pleasures life brings."
    },
    {
      title: "EXPLORE A MORALLY AMBIGUOUS FANTASY WORLD",
      desc:
        "Built for endless adventure, the massive open world of The Witcher sets new standards in terms of size, depth, and complexity. Traverse a fantastical open world: explore forgotten ruins, caves, and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across the open plains, mountains, and seas.  Deal with treasonous generals, devious witches, and corrupt royalty to provide dark and dangerous services. Make choices that go beyond good & evil, and face their far-reaching consequences."
    },
    {
      title: "TRACK DOWN THE CHILD OF PROPHECY",
      desc:
        "Take on the most important contract of your life: to track down the child of prophecy, the key to saving or destroying this world. In times of war, chase down the child of prophecy, a living weapon foretold by ancient elven legends. Struggle against ferocious rulers, spirits of the wilds, and even a threat from beyond the veil – all hell-bent on controlling this world. Define your destiny in a world that may not be worth saving."
    }
  ]

  },
  {
    _id: uuid(),
    title: "The Elder Scrolls V: Skyrim",
    publisher: "Bethesda",
    price: 799,
    categoryName: "RPG",
    year: "2011",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/B6HJ54wg/skyrim.jpg',
    recommendation: "A game for Generations",
    description_one: "The Elder Scrolls V: Skyrim, the 2011 Game of the Year, is the next chapter in the highly anticipated Elder Scrolls saga. Developed by Bethesda Game Studios, the 2011 Studio of the Year, that brought you Oblivion and Fallout 3. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose.",
    carousel_img_1: "https://i.postimg.cc/3W54dF6C/skyrim-1.jpg",
    carousel_img_2: "https://i.postimg.cc/wTXcD1VT/skyrim-2.jpg",
    carousel_img_3: "https://i.postimg.cc/y87hj7Qh/skyrim-3.jpg",
    carousel_img_4: "https://i.postimg.cc/9Q1dNsK6/skyrim-4.jpg",
    carousel_img_5: "https://i.postimg.cc/nLjXY5JY/skyrim-5.jpg",
    about_game: [
    {
      title: "Synopsis",
      desc:
        "The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely. "
    },
    {
      title: "Dragonborn DLC",
      desc:
        "With this official add-on for The Elder Scrolls V: Skyrim, journey off the coast of Morrowind, to the island of Solstheim. Encounter new towns, dungeons, and quests, as you traverse the ash wastes and glacial valleys of this new land. Become more powerful with shouts that bend the will of your enemies and even tame dragons. Your fate, and the fate of Solstheim, hangs in the balance as you face off against your deadliest adversary – the first Dragonborn."
    },
    {
      title: "Dawnguard DLC",
      desc:
        "The Vampire Lord Harkon has returned to power. By using the Elder Scrolls, he seeks to do the unthinkable - to end the sun itself. Will you join the ancient order of the Dawnguard and stop him? Or will you become a Vampire Lord? In Dawnguard, the ultimate choice will be yours."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Cyberpunk 2077",
    publisher: "CD Projekt Red",
    price: 3999,
    categoryName: "RPG",
    year: "2020",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/V6Q8k2Lb/cyberpunk-2077.png',
    recommendation: "Recommended",
    description_one: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
    carousel_img_1: "https://i.postimg.cc/br3YjHPw/cp-1.jpg",
    carousel_img_2: "https://i.postimg.cc/157RCHMW/cp-2.jpg",
    carousel_img_3: "https://i.postimg.cc/SxXSwMvm/cp-3.jpg",
    carousel_img_4: "https://i.postimg.cc/hvPgMzmW/cp-4.jpg",
    carousel_img_5: "https://i.postimg.cc/gkjmZhd3/cp-5.jpg",
    about_game: [
    {
      title: "CREATE YOUR OWN CYBERPUNK",
      desc:
        "Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City. "
    },
    {
      title: "EXPLORE THE CITY OF THE FUTURE",
      desc:
        "Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there."
    },
    {
      title: "BUILD YOUR LEGEND",
      desc:
        "Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Genshin Impact",
    publisher: "miHoYo",
    price: 499,
    categoryName: "RPG",
    year: "2020",
    rating: "4.2",
    platform: "PC",
    image_link: 'https://i.postimg.cc/MTbhKTFh/genshin-impact.jpg',
    recommendation: "Great for Beginners",
    description_one: "Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...",
    carousel_img_1: "https://i.postimg.cc/Pqsj9FDM/genshin-1.png",
    carousel_img_2: "https://i.postimg.cc/4dXTN7B7/genshin-2.jpg",
    carousel_img_3: "https://i.postimg.cc/C51Tbyyw/genshin-3.jpg",
    carousel_img_4: "https://i.postimg.cc/CLRp1VHN/genshin-4.jpg",
    carousel_img_5: "https://i.postimg.cc/BvcdyZ4q/genshin-5.jpg",
    about_game: [
    {
      title: "MASSIVE OPEN WORLD",
      desc:
        "Climb any mountain, swim across any river, and glide over the world below, taking in the jaw-dropping scenery each step of the way. And if you stop to investigate a wandering Seelie or strange mechanism, who knows what you might discover?"
    },
    {
      title: "ELEMENTAL COMBAT SYSTEM",
      desc:
        "Harness the seven elements to unleash elemental reactions. Anemo, Electro, Hydro, Pyro, Cryo, Dendro, and Geo interact in all sorts of ways, and Vision wielders have the power to turn this to their advantage. Will you vaporize Hydro with Pyro, electro-charge it with Electro, or freeze it with Cryo? Your mastery of the elements will give you the upper hand in battle and exploration."
    },
    {
      title: "BEAUTIFUL VISUALS",
      desc:
        "Feast your eyes on the world around you, with a stunning art style, real-time rendering, and finely tuned character animations delivering you a truly immersive visual experience. Lighting and weather all change naturally over time, bringing every detail of this world to life."
    },
    {
      title: "SOOTHING SOUNDTRACK",
      desc:
        "Let the beautiful sounds of Teyvat draw you in as you explore the expansive world around you. Performed by the world's top orchestras such as London Philharmonic Orchestra and Shanghai Symphony Orchestra, the soundtrack changes seamlessly with the time and gameplay to match the mood."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Diablo 3",
    publisher: "Blizzard",
    price: 999,
    categoryName: "RPG",
    year: "2012",
    rating: "4.3",
    platform: "PC",
    image_link: 'https://i.postimg.cc/2ytTzNrs/diablo-3.jpg',
    recommendation: "Recommended",
    description_one: "The game takes place in Sanctuary, the dark fantasy world of the Diablo Series, twenty years after the events of Diablo II. Deckard Cain and his ward Leah are in Tristram Cathedral (the same cathedral that was the setting of Diablo) investigating ancient texts regarding an ominous prophecy. A mysterious star falling from the sky strikes the cathedral, creating a deep crater into which Deckard Cain disappears. ",
    carousel_img_1: "https://i.postimg.cc/W4WQjWFK/diablo-1.jpg",
    carousel_img_2: "https://i.postimg.cc/FztCs29P/diablo-2.jpg",
    carousel_img_3: "https://i.postimg.cc/yxFQJvx7/diablo-3.jpg",
    carousel_img_4: "https://i.postimg.cc/ncJw8bSr/diablo-4.jpg",
    carousel_img_5: "https://i.postimg.cc/GpHXPct7/diablo-5.jpg",
    about_game: [
    {
      title: "Gameplay",
      desc:
        "Much like Diablo and Diablo II, Diablo III is an action role-playing game with fast-paced real-time combat and an isometric graphics engine. The game utilizes classic dark fantasy elements and players assume the role of a heroic character charged with saving the world of Sanctuary from the forces of Hell. Many role-playing elements are present, such as choosing a character class, gaining experience and leveling up, and acquiring more powerful equipment. "
    },
  ]

  },
  {
    _id: uuid(),
    title: "Monster Hunter: World",
    publisher: "Capcom",
    price: 2479,
    categoryName: "RPG",
    year: "2020",
    rating: "4.3",
    platform: "PC",
    image_link: 'https://i.postimg.cc/YqbLLzFS/monster-hunter-world.png',
    recommendation: "A fun adventure!",
    description_one: "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
    carousel_img_1: "https://i.postimg.cc/DzHBBtb2/mh-1.jpg",
    carousel_img_2: "https://i.postimg.cc/7hyXy0Vd/mh-2.jpg",
    carousel_img_3: "https://i.postimg.cc/0jdn5jXQ/mh-3.jpg",
    carousel_img_4: "https://i.postimg.cc/jdccGWJ3/mh-4.jpg",
    carousel_img_5: "https://i.postimg.cc/T3H93Z0r/mh-5.jpg",
    about_game: [
    {
      title: "Battle gigantic monsters in epic locales",
      desc:
        "As a hunter, you'll take on quests to hunt monsters in a variety of habitats.Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters."
    },
    {
      title: "Setting",
      desc:
        "Once every decade, elder dragons trek across the sea to travel to the land known as the New World in a migration referred to as the Elder Crossing. To get to the bottom of this mysterious phenomenon, the Guild has formed the Research Commission, dispatching them in large fleets to the New World. As the Commission sends its Fifth Fleet in pursuit of the colossal elder dragon, Zorah Magdaros, one hunter is about to embark on a journey grander than anything they could have ever imagined."
    },
    {
      title: "The Hunter's Arsenal",
      desc:
        "There are fourteen different weapons at the hunter's disposal, each with its own unique characteristics and attacks. Many hunters acquire proficiency in multiple types, while others prefer to attain mastery of one."
    }
  ]

  },
  {
    _id: uuid(),
    title: "DOOM Eternal",
    publisher: "Bethesda Softworks",
    price: 1999,
    categoryName: "FPS",
    year: "2020",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/7PXZKYZs/doom-eternal.png',
    recommendation: "Explosive!",
    description_one: "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
    carousel_img_1: "https://i.postimg.cc/76SMXbkV/doom-1.jpg",
    carousel_img_2: "https://i.postimg.cc/qq0cF0Bd/doom-2.jpg",
    carousel_img_3: "https://i.postimg.cc/3J8CCKbX/doom-3.jpg",
    carousel_img_4: "https://i.postimg.cc/dt5R5zzz/doom-4.jpg",
    carousel_img_5: "https://i.postimg.cc/NjV6cRGD/doom-5.jpg",
    about_game: [
    {
      title: "The Only Thing they Fear... Is You",
      desc:
        "Experience the ultimate combination of speed and power in DOOM Eternal - the next leap in push-forward, first-person combat. Armed with a shoulder-mounted flamethrower, retractable wrist-mounted blade, upgraded guns and mods, and abilities, you're faster, stronger, and more versatile than ever."
    },
    {
      title: "Unholy Trinity",
      desc:
        "Take what you need from your enemies: Glory kill for extra health, incinerate for armor, and chainsaw demons to stock up on ammo to become the ultimate demon-slayer."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Halo: The Master Chief Collection",
    publisher: "343 Industries",
    price: 999,
    categoryName: "FPS",
    year: "2014",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/5N6bpBGy/halo.jpg',
    recommendation: "Recommended",
    description_one: "The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
    carousel_img_1: "https://i.postimg.cc/gJb3wdZ6/halo-1.jpg",
    carousel_img_2: "https://i.postimg.cc/bJ0kkMxV/halo-2.jpg",
    carousel_img_3: "https://i.postimg.cc/wM0Nbmbh/halo-3.jpg",
    carousel_img_4: "https://i.postimg.cc/Hsv5wbMm/halo-4.jpg",
    carousel_img_5: "https://i.postimg.cc/BndKysNw/halo-5.jpg",
    about_game: [
    {
      title: "Campaign",
      desc:
        "Featuring Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign, and Halo 4, The Master Chief Collection offers players their own exciting journey through the epic saga. Starting with the incredible bravery of Noble Six in Halo: Reach and ending with the rise of a new enemy in Halo 4, the Master Chief’s saga totals 67 campaign missions over six critically-acclaimed titles."
    },
    {
      title: "Multiplayer",
      desc:
        "Each of the six games in The Master Chief Collection brings its own multiplayer maps, modes and game types. With more than 120 multiplayer maps and countless ways to play with community-created Forge content the Collection has the most diverse and expansive Halo multiplayer experience to date."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Call of Duty: Modern Warfare",
    publisher: "Infinity Ward",
    price: 3999,
    categoryName: "FPS",
    year: "2019",
    rating: "4.5",
    platform: "PC",
    image_link: 'https://i.postimg.cc/jdwYyswJ/cod-mw.jpg',
    recommendation: "Highly Recommended",
    description_one: "Experience a visceral Campaign or assemble your team in the ultimate online playground with multiple Special Ops challenges and a mix of Multiplayer maps and modes.",
    carousel_img_1: "https://i.postimg.cc/9fZ7HSnX/cod-mw-1.jpg",
    carousel_img_2: "https://i.postimg.cc/T17ycXp0/cod-mw-2.jpg",
    carousel_img_3: "https://i.postimg.cc/02jKyrBB/cod-mw-3.jpg",
    carousel_img_4: "https://i.postimg.cc/CKGzQ8Rz/cod-mw-4.jpg",
    carousel_img_5: "https://i.postimg.cc/xCgq0SyQ/cod-mw-5.jpg",
    about_game: [
    {
      title: "Campaign",
      desc:
        "Modern Warfare's single-player campaign focuses on realism and features tactically-based moral choices whereupon the player is evaluated and assigned a score at the end of each level; players have to quickly ascertain whether NPCs are a threat or not, such as a civilian woman who is believed to be reaching for a gun, but then simply grabs her baby from a crib."
    },
    {
      title: "Story",
      desc:
        "The game takes place in a realistic and modern setting. The campaign follows a CIA officer and British SAS forces as they team up with rebels from the fictional Republic of Urzikstan, combating together against Russian Armed Forces who have invaded the country and the Urzik terrorist group Al-Qatala, while searching for a stolen shipment of chlorine gas."
    }
  ]
  },
  {
    _id: uuid(),
    title: "Deathloop",
    publisher: "Arkane Studios",
    price: 2499,
    categoryName: "FPS",
    year: "2021",
    rating: "3.8",
    platform: "PC",
    image_link: 'https://i.postimg.cc/cJ9NQ6mw/deathloop.jpg',
    recommendation: "Recommended",
    description_one: "DEATHLOOP is a next-gen first person shooter from Arkane Lyon, the award-winning studio behind Dishonored. In DEATHLOOP, two rival assassins are trapped in a mysterious timeloop on the island of Blackreef, doomed to repeat the same day for eternity. As Colt, the only chance for escape is to end the cycle by assassinating eight key targets before the day resets. Learn from each cycle - try new paths, gather intel, and find new weapons and abilities. Do whatever it takes to break the loop.",
    carousel_img_1: "https://i.postimg.cc/RhNC4JZ1/deathloop-1.jpg",
    carousel_img_2: "https://i.postimg.cc/c4t1z3j0/deathloop-2.jpg",
    carousel_img_3: "https://i.postimg.cc/BvpJFB8c/deathloop-3.jpg",
    carousel_img_4: "https://i.postimg.cc/WbsLGkv5/deathloop-4.jpg",
    carousel_img_5: "https://i.postimg.cc/t4mKGvVc/deathloop-5.jpg",
    about_game: [
    {
      title: "If At First You Don’t Succeed... Die, Die Again",
      desc:
        "Every new loop is an opportunity to change things up. Use the knowledge you gain from each attempt to change up your playstyle, stealthily sneaking through levels or barreling into the fight, guns-blazing. In each loop you’ll discover new secrets, gather intel on your targets as well as the island of Blackreef, and expand your arsenal. Armed with a host of otherworldly abilities and savage weaponry, you’ll utilize every tool at your command to execute takedowns that are as striking as they are devastating. Customize your loadout wisely to survive this deadly game of hunter vs hunted."
    },
    {
      title: "SINGLE PLAYER GAMEPLAY INJECTED WITH DEADLY MULTIPLAYER",
      desc:
        "Are you the hero or the villain? You’ll experience DEATHLOOP’s main story as Colt, hunting down targets across the island of Blackreef to break the loop and earn your freedom. All the while, you’ll be hunted by your rival Julianna, who can be controlled by another player. So if you’re feeling devious, you, too, can step into Julianna’s stylish sneakers and invade another player’s campaign to kill Colt. The multiplayer experience is completely optional, and players can choose to have Julianna controlled by AI within their campaign."
    },
    {
      title: "The island Of Blackreef – Paradise Or Prison",
      desc:
        "Arkane is renowned for magnificently artistic worlds with multiple pathways and emergent gameplay. DEATHLOOP will present a stunning, retro-future, 60s-inspired environment, that feels like a character within itself. While Blackreef may be a stylish wonderland, for Colt it is his prison, a world ruled by decadence where death has no meaning, and delinquents party forever while keeping him captive."
    }
  ]

  },
  {
    _id: uuid(),
    title: "BioShock Infinite",
    publisher: "Irrational Games",
    price: 349,
    categoryName: "FPS",
    year: "2014",
    rating: "4.7",
    platform: "PC",
    image_link: 'https://i.postimg.cc/vZx9R61H/bioshock-infinite.png',
    recommendation: "Highly Recommended",
    description_one: "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia.",
    carousel_img_1: "https://i.postimg.cc/2SJKKqsR/bioshock-img-1.jpg",
    carousel_img_2: "https://i.postimg.cc/Kz7pj0Rx/bioshock-img-2.jpg",
    carousel_img_3: "https://i.postimg.cc/fR68vGdM/bioshock-img-3.jpg",
    carousel_img_4: "https://i.postimg.cc/bJRLpdBv/bioshock-img-4.jpg",
    carousel_img_5: "https://i.postimg.cc/CL5JphHF/bioshock-img-5.jpg",
    about_game: [
    {
      title: "The City in the Sky",
      desc:
        "Leave the depths of Rapture to soar among the clouds of Columbia. A technological marvel, the flying city is a beautiful and vibrant world that holds a very dark secret. "
    },
    {
      title: "Gampeplay",
      desc:
        "Turn the city’s Sky-Lines into weaponized roller coasters as you zip through the flying city and dish out fatal hands-on punishment. Tear Through Time – Open Tears in time and space to shape the battlefield and turn the tide in combat by pulling weapons, turrets, and other resources out of thin air. Vigorous Powers – Throw explosive fireballs, shoot lightning, and release murders of crows as devastatingly powerful Vigors surge through your body to be unleashed against all that oppose you."
    }
  ]

  },
  {
    _id: uuid(),
    title: "Far Cry 6",
    publisher: "Ubisoft",
    price: 750,
    categoryName: "FPS",
    year: "2021",
    rating: "3.6",
    platform: "PC",
    image_link: 'https://i.postimg.cc/k4SqqqQS/farcry-6.jpg',
    recommendation: "Mixed Reviews",
    description_one: "Enter the adrenaline-filled world of a modern-day guerrilla revolution. With stunning vistas, visceral gunplay, and a huge variety of gameplay experiences, there's never been a better time to join the fight.",
    carousel_img_1: "https://i.postimg.cc/HLDtMQGx/farcry-1.jpg",
    carousel_img_2: "https://i.postimg.cc/y6QXjqq2/farcry-2.jpg",
    carousel_img_3: "https://i.postimg.cc/PrCbF6TJ/farcry-3.jpg",
    carousel_img_4: "https://i.postimg.cc/mry7FJNX/fracry-4.jpg",
    carousel_img_5: "https://i.postimg.cc/3xpX3dyH/farcry-5.jpg",
    about_game: [
    {
      title: "Synopsis",
      desc:
        "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation to its former glory by any means necessary, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution. Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara. Play the full game solo or with a friend in co-op."
    },
    {
      title: "Gameplay",
      desc:
        "Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles including boats and Jet Skis as you fight against Castillo’s regime in the most expansive Far Cry to date. Feel the thrill of combat with an arsenal of hundreds of weapons alongside helpful amigos like Chorizo the dog and Guapo the gator. Enjoy all-new content and features added since launch, including four new special operations, free blockbuster crossover missions, and fan-requested updates such as New Game Plus, Completionist Aid, an extra-hard difficulty mode, and four new loadout slots."
    }
  ]

  }
];

