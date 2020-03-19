const TierNames = [
  'N/A',
  'ULV',
  'LV',
  'MV',
  'HV',
  'EV',
  'IV',
  'LuV',
  'ZPMV',
  'UV',
];

const Voltages = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288];

const Colors = [
  '#3B511A',
  '#51301A',
  '#253192',
  '#7B2FBE',
  '#287697',
  '#434343',
  '#D88198',
  '#41CD34',
  '#DECF2A',
  '#6689D3',
  '#C354CD',
  '#EB8844',
  '#1E1B1B',
  '#B3312C',
];
const Recipes = [
  {
    step: 0,
    machineName: 'Macerator',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 0.8,
    inputs: [
      {
        name: 'Cobblestone',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Gravel',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 1,
    machineName: 'Macerator',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 0.8,
    inputs: [
      {
        name: 'Gravel',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Sand',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 2,
    machineName: 'Macerator',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 0.8,
    inputs: [
      {
        name: 'Sand',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 3,
    machineName: 'Furnace',
    machineTier: 2,
    overclock: false,
    rft: 128,
    time: 3.2,
    inputs: [
      {
        name: 'Sand',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Glass',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 4,
    machineName: 'Chemical Reactor',
    machineTier: 2,
    overclock: false,
    rft: 60,
    time: 1,
    inputs: [
      {
        name: 'Dust',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Water',
        quantity: 1000,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Clay',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 5,
    machineName: 'Electrolyzer',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 5,
    inputs: [
      {
        name: 'Glass',
        quantity: 4,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Quartz',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 6,
    machineName: 'Fluid Extractor',
    machineTier: 2,
    overclock: false,
    rft: 128,
    time: 2,
    inputs: [
      {
        name: 'Ender Pearl',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Resonant Ender',
        quantity: 250,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 7,
    machineName: 'Chemical Reactor',
    machineTier: 3,
    overclock: false,
    rft: 400,
    time: 5,
    inputs: [
      {
        name: 'Quartz',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Resonant Ender',
        quantity: 250,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Resonant Clathrate',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 8,
    machineName: 'Furnace',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 3.2,
    inputs: [
      {
        name: 'Resonant Clathrate',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Pulsating Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 9,
    machineName: 'Alloy Smelter',
    machineTier: 2,
    overclock: false,
    rft: 96,
    time: 12,
    inputs: [
      {
        name: 'Pulsating Dust',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Clay',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Polymer Clay',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 10,
    machineName: 'Simulation Chamber',
    machineTier: 0,
    overclock: false,
    rft: 2048,
    time: 15,
    inputs: [
      {
        name: 'Polymer Clay',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Ender Pristine',
        quantity: 0.3,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 11,
    machineName: 'Simulation Chamber',
    machineTier: 0,
    overclock: false,
    rft: 2048,
    time: 15,
    inputs: [
      {
        name: 'Polymer Clay',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Shulker Pristine',
        quantity: 0.3,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 12,
    machineName: 'Loot Fabricator',
    machineTier: 0,
    overclock: false,
    rft: 0,
    time: 2.7,
    inputs: [
      {
        name: 'Ender Pristine',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Ender Pearl',
        quantity: 6,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 13,
    machineName: 'Loot Fabricator',
    machineTier: 0,
    overclock: false,
    rft: 0,
    time: 2.7,
    inputs: [
      {
        name: 'Shulker Pristine',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Diamond',
        quantity: 6,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 14,
    machineName: 'Numismatic Dynamo',
    machineTier: 0,
    overclock: false,
    rft: 0,
    time: 10.32,
    inputs: [
      {
        name: 'Diamond',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'RF/t',
        quantity: 12500,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
];

const Recipes2 = [
  {
    step: 1,
    machineName: 'Wiremill',
    machineTier: 2,
    overclock: false,
    rft: 24,
    time: 3.15,
    inputs: [
      {
        name: 'Copper Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Copper Wire',
        quantity: 2,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 2,
    machineName: 'Wiremill',
    machineTier: 2,
    overclock: false,
    rft: 24,
    time: 10,
    inputs: [
      {
        name: 'Copper Wire',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Fine Copper Wire',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 3,
    machineName: 'Macerator',
    machineTier: 2,
    overclock: false,
    rft: 48,
    time: 10,
    inputs: [
      {
        name: 'Coal',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Coal Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 4,
    machineName: 'Assembler',
    machineTier: 2,
    overclock: false,
    rft: 24,
    time: 8,
    inputs: [
      {
        name: 'Fine Copper Wire',
        quantity: 4,
        unit: 'b',
      },
      {
        name: 'Coal Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Resistor',
        quantity: 12,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 5,
    machineName: 'Compressor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 5,
    inputs: [
      {
        name: 'Aluminium Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Aluminium Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 6,
    machineName: 'Cluster Mill',
    machineTier: 2,
    overclock: false,
    rft: 96,
    time: 1.3,
    inputs: [
      {
        name: 'Aluminium Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Aluminium Foil',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 7,
    machineName: 'Assembler',
    machineTier: 3,
    overclock: false,
    rft: 384,
    time: 4,
    inputs: [
      {
        name: 'Aluminium Foil',
        quantity: 2,
        unit: 'b',
      },
      {
        name: 'Polyethylene Sheet',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Capacitor',
        quantity: 2,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 8,
    machineName: 'Compressor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 5,
    inputs: [
      {
        name: 'Tin Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Tin Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 9,
    machineName: 'Cluster Mill',
    machineTier: 2,
    overclock: false,
    rft: 96,
    time: 5.9,
    inputs: [
      {
        name: 'Tin Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Tin Foil',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 10,
    machineName: 'Diamond Furnace',
    machineTier: 0,
    overclock: false,
    rft: 0,
    time: 1.28,
    inputs: [
      {
        name: 'Silicon Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Silicon Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 11,
    machineName: 'Compressor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 5,
    inputs: [
      {
        name: 'Silicon Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Silicon Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 12,
    machineName: 'Pyrolyse Oven',
    machineTier: 3,
    overclock: false,
    rft: 120,
    time: 30,
    inputs: [
      {
        name: 'Wood',
        quantity: 16,
        unit: 'b',
      },
      {
        name: 'Steam',
        quantity: 4000,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Wood Gas',
        quantity: 1500,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 13,
    machineName: 'Distillery',
    machineTier: 3,
    overclock: false,
    rft: 256,
    time: 4,
    inputs: [
      {
        name: 'Wood Gas',
        quantity: 1000,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Ethylene',
        quantity: 20,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 14,
    machineName: 'Chemical Reactor',
    machineTier: 2,
    overclock: false,
    rft: 120,
    time: 8,
    inputs: [
      {
        name: 'Ethylene',
        quantity: 144,
        unit: 'mb',
      },
      {
        name: 'Air',
        quantity: 1000,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Polyethylene',
        quantity: 144,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 15,
    machineName: 'Assembler',
    machineTier: 2,
    overclock: false,
    rft: 96,
    time: 4,
    inputs: [
      {
        name: 'Tin Foil',
        quantity: 6,
        unit: 'b',
      },
      {
        name: 'Silicon Plate',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Polyethylene',
        quantity: 144,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Transistor',
        quantity: 8,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 16,
    machineName: 'Alloy Smelter',
    machineTier: 2,
    overclock: false,
    rft: 64,
    time: 5,
    inputs: [
      {
        name: 'Tin Ingot',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Iron Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Tin Alloy Ingot',
        quantity: 2,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 17,
    machineName: 'Wiremill',
    machineTier: 2,
    overclock: false,
    rft: 32,
    time: 20,
    inputs: [
      {
        name: 'Tin Alloy Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Fine Tin Alloy Wire',
        quantity: 8,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 18,
    machineName: 'Blast Furnace',
    machineTier: 3,
    overclock: false,
    rft: 480,
    time: 300,
    inputs: [
      {
        name: 'Silicon Dust',
        quantity: 32,
        unit: 'b',
      },
      {
        name: 'Tiny Pile of Gallium Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Monocrystalline Silicon Boule',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 19,
    machineName: 'Cutting Saw',
    machineTier: 3,
    overclock: false,
    rft: 32,
    time: 20,
    inputs: [
      {
        name: 'Water',
        quantity: 5,
        unit: 'mb',
      },
      {
        name: 'Monocrystalline Silicon Boule',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Wafer',
        quantity: 16,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 20,
    machineName: 'Precision Laser Engraver',
    machineTier: 3,
    overclock: false,
    rft: 480,
    time: 45,
    inputs: [
      {
        name: 'Wafer',
        quantity: 1,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'CPU Wafer',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 21,
    machineName: 'Cutting Saw',
    machineTier: 3,
    overclock: false,
    rft: 32,
    time: 60,
    inputs: [
      {
        name: 'Water',
        quantity: 90,
        unit: 'mb',
      },
      {
        name: 'CPU Wafer',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Central Processing Unit',
        quantity: 8,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 22,
    machineName: 'Fluid Solidifier',
    machineTier: 2,
    overclock: false,
    rft: 32,
    time: 2,
    inputs: [
      {
        name: 'Polyethylene',
        quantity: 144,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Polyethylene Sheet',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 23,
    machineName: 'Compressor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 5,
    inputs: [
      {
        name: 'Copper Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Copper Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 24,
    machineName: 'Cluster Mill',
    machineTier: 2,
    overclock: false,
    rft: 96,
    time: 3.15,
    inputs: [
      {
        name: 'Copper Plate',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Copper Foil',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 25,
    machineName: 'Chemical Reactor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 30,
    inputs: [
      {
        name: 'Water',
        quantity: 2000,
        unit: 'mb',
      },
      {
        name: 'Sulfur Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Sulfuric Acid',
        quantity: 3000,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 26,
    machineName: 'Chemical Reactor',
    machineTier: 2,
    overclock: false,
    rft: 40,
    time: 30,
    inputs: [
      {
        name: 'Polyethylene Sheet',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Copper Foil',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Sulfuric Acid',
        quantity: 125,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Plastic Circuit Board',
        quantity: 8,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 27,
    machineName: 'Fluid Extractor',
    machineTier: 2,
    overclock: false,
    rft: 128,
    time: 4,
    inputs: [
      {
        name: 'Soldering Alloy Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Soldering Alloy',
        quantity: 144,
        unit: 'mb',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 28,
    machineName: 'Assembler',
    machineTier: 3,
    overclock: false,
    rft: 240,
    time: 10,
    inputs: [
      {
        name: 'Resistor',
        quantity: 4,
        unit: 'b',
      },
      {
        name: 'Capacitor',
        quantity: 4,
        unit: 'b',
      },
      {
        name: 'Transistor',
        quantity: 4,
        unit: 'b',
      },
      {
        name: 'Fine Tin Alloy Wire',
        quantity: 4,
        unit: 'b',
      },
      {
        name: 'Central Processing Unit',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Plastic Circuit Board',
        quantity: 1,
        unit: 'b',
      },
      {
        name: 'Soldering Alloy',
        quantity: 72,
        unit: 'mb',
      },
    ],
    outputs: [
      {
        name: 'Refined Circuit',
        quantity: 4,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
];

const DefaultTheme = {
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#000',
    },
  },
};

export { TierNames, Voltages, Colors, Recipes, DefaultTheme };
