export interface GameSystem {
  title: string;
  desc: string;
}

export interface GameButton {
  text: string;
  url: string;
}

export interface Game {
  id: string;
  title: string;
  year: number;
  description: string;
  image: string;
  fallbackImage: string | null;
  imageAlt: string;
  primaryUrl: string;
  buttons: GameButton[];
  systems: GameSystem[];
}

export const GAMES: Game[] = [
  {
    id: 'apoaxia',
    title: 'APOAXIA',
    year: 2026,
    description: 'An extraction-based hardcore tactical shooter built in <strong>Unreal Engine 5</strong>. Deploy to raids and scavenge better equipment, unlock new locations, and defeat the boss.',
    image: 'https://img.itch.zone/aW1nLzI4MzMzMzcwLnBuZw==/original/WHOGcJ.png',
    fallbackImage: 'https://img.itch.zone/aW1hZ2UvNDc1MTk1My8yODQzMTAwOC5wbmc=/original/tHMOye.png',
    imageAlt: 'APOAXIA Game Cover',
    primaryUrl: 'https://interlvper.itch.io/apoaxia',
    buttons: [
      { text: 'Play & Download on Itch.io', url: 'https://interlvper.itch.io/apoaxia' }
    ],
    systems: [
      { title: 'Deploy & Extract Loop', desc: 'A subsystem that manages the deployment state of the players. It is responsible for creating and destroying the level, saving the game after extraction, and general clean up between raids.' },
      { title: 'Ballistics System', desc: 'A data-oriented, server authoritative projectile system that allows for thousands of simulated projectiles at once.' },
      { title: 'AI State Trees', desc: 'All AI within the game are driven by state trees that utilize custom evaluators and tasks written in C++.' },
      { title: 'Inventory System', desc: 'A complex grid inventory system similar to that of Diablo, Escape From Tarkov, and System Shock 2. Server-authoritative with client-side rollback. Utilizes a flat array per inventory that is wrapped within a FFastArraySerializer.' },
      { title: 'Weapon Modularity & Attachments', desc: 'A hierarchical socket-based weapon modification framework. Supports runtime swap of optics, muzzle devices, handguards, and internal bolt components. Modifiers dynamically recalculate ergonomics, recoil curves, and muzzle velocity on the fly.' },
      { title: 'Limb Health System', desc: 'A detailed limb-based health system that divides character health into limbs that are defined by the physics asset of the skeletal mesh that the character uses. Supports limb modifiers such as bleeds, bruises, broken bones, etc. Uses gameplay effects to apply the modifier.' },
      { title: 'Loot Generation', desc: 'A robust loot generation system complete with custom Slate UI in the editor to make creating pools and tables easier. Developers can simulate tables, view drop percentages, and apply tables modularly to containers in the game.' },
      { title: 'Spatial Acoustics & Occlusion', desc: 'A custom audio system that utilizes "Environment Volumes" and "Portals" to connect interior levels. This allows for spatially accurate sounds to be routed through the system and played for the player.' }
    ]
  },
  {
    id: 'liminal',
    title: 'LIMINAL',
    year: 2024,
    description: 'A challenging first-person psychological horror and survival game built in <strong>Unreal Engine 5</strong>. You are faced with an unfamiliar environment of which you know nothing.',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2160760/header.jpg',
    fallbackImage: null,
    imageAlt: 'LIMINAL Game Cover',
    primaryUrl: 'https://store.steampowered.com/app/2160760/LIMINAL/',
    buttons: [
      { text: 'View on Steam', url: 'https://store.steampowered.com/app/2160760/LIMINAL/' },
      { text: 'Direct Download', url: 'https://drive.google.com/file/d/1nic-MQLPkdOT21SLqQ2GAmGJcs9S-NMf/view?usp=sharing' }
    ],
    systems: [
      { title: 'World Generation', desc: 'A system that procedurally generates the world around actors which have an invoker component. The system is data-driven, and allows for custom biomes to be defined within a collection of data assets.' },
      { title: 'Environmental Effects', desc: 'Utilizes a custom volume-based system that enables objects to posses properties such as radiation or heat that propogate through the environment.' },
      { title: 'AI Pathfinding', desc: 'A custom system that allows AI that are far away from the player to still simulate realistically with reduced tickrates, disabled features, etc.' }
    ]
  }
];
