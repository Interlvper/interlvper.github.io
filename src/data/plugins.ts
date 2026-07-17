export interface Plugin {
  title: string;
  desc: string;
  tech: string;
  fabUrl: string;
  demoUrl: string;
}

export const PLUGINS: Plugin[] = [
  {
    title: 'Dynamic Interaction System',
    desc: 'A powerful C++ interaction framework for robust communication between Players, NPCs, and World Actors.',
    tech: 'UE5 / C++',
    fabUrl: 'https://www.fab.com/listings/db3d4f43-f922-47d3-929e-5aaa5a715537',
    demoUrl: 'https://drive.google.com/file/d/1W7VgvZET-ap-okep-OHbDv49aBfbl7JW/view'
  },
  {
    title: 'Limb Health System',
    desc: 'Advanced character health distribution system for localized damage tracking across appendages.',
    tech: 'UE5 / C++',
    fabUrl: 'https://www.fab.com/listings/31f65c35-32c5-4aec-abec-fc4e6e7b6360',
    demoUrl: 'https://drive.google.com/file/d/1pXkvW0mOOYg-IpxOHMp0hdYwxGLESrtr/view'
  },
  {
    title: 'Vision Camera System',
    desc: 'Modular camera system for dynamic visual feedback and context-sensitive rotation.',
    tech: 'UE5 / C++',
    fabUrl: 'https://www.fab.com/listings/16c8f014-4fec-41df-82b2-18bf1fd7f7e0',
    demoUrl: 'https://drive.google.com/file/d/1s7Ousw0TFYg7GS-6kWHbDpAMhilVDRL0/view'
  },
  {
    title: 'Grid Inventory System',
    desc: 'A C++ grid inventory system similar to Diablo and Escape From Tarkov. Server-authoritative with network replication.',
    tech: 'UE5 / C++',
    fabUrl: 'https://www.fab.com/listings/2ddd1c8f-ec78-477e-a4db-9afd10e41004',
    demoUrl: 'https://drive.google.com/file/d/1hdD2WCTw4gL5RRzi_cnUELwFL-yqMejB/view'
  }
];
