const Headers = [
  {
    title: 'Step',
    field: 'step',
  },
  {
    title: 'Machine Name',
    field: 'machineName',
  },
  {
    title: 'Machine Tier',
    field: 'machineTier',
  },
  {
    title: 'Overclock',
    field: 'overclock',
  },
  {
    title: 'RF/t',
    field: 'rft',
  },
  {
    title: 'Time (s)',
    field: 'time',
  },
  {
    title: 'Efficiency (%)',
    field: 'efficiency',
  },
  {
    title: 'Base Inputs',
    field: 'inputs',
  },
  {
    title: 'Base Outputs',
    field: 'outputs',
  },
  {
    title: 'Target Machines',
    field: 'targetMachines',
  },
  {
    title: 'Target Inputs',
    field: 'targetInputs',
  },
  {
    title: 'Target Outputs',
    field: 'targetOutputs',
  },
  {
    title: 'Actions',
    field: 'actions',
  },
];

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
    machine: 'Wiremill',
    tier: 'LV',
    overclock: false,
    rft: 24,
    time: 3.15,
    efficiency: 100,
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
    step: 1,
    machine: 'Wiremill',
    tier: 'LV',
    overclock: false,
    rft: 24,
    time: 10,
    efficiency: 100,
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
    step: 2,
    machine: 'Macerator',
    tier: 'LV',
    overclock: false,
    rft: 48,
    time: 10,
    efficiency: 100,
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
    step: 3,
    machine: 'Assembler',
    tier: 'LV',
    overclock: false,
    rft: 24,
    time: 8,
    efficiency: 100,
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
    step: 4,
    machine: 'Diamond Furnace',
    tier: 'N/A',
    overclock: false,
    rft: 0,
    time: 1.28,
    efficiency: 100,
    inputs: [
      {
        name: 'Aluminium Dust',
        quantity: 1,
        unit: 'b',
      },
    ],
    outputs: [
      {
        name: 'Aluminium Ingot',
        quantity: 1,
        unit: 'b',
      },
    ],
    targetMachines: 1,
  },
  {
    step: 5,
    machine: 'Compressor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 5,
    efficiency: 100,
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
    machine: 'Cluster Mill',
    tier: 'LV',
    overclock: false,
    rft: 96,
    time: 1.3,
    efficiency: 100,
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
    machine: 'Assembler',
    tier: 'MV',
    overclock: false,
    rft: 384,
    time: 4,
    efficiency: 100,
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
    machine: 'Compressor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 5,
    efficiency: 100,
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
    machine: 'Cluster Mill',
    tier: 'LV',
    overclock: false,
    rft: 96,
    time: 5.9,
    efficiency: 100,
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
    machine: 'Diamond Furnace',
    tier: 'N/A',
    overclock: false,
    rft: 0,
    time: 1.28,
    efficiency: 100,
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
    machine: 'Compressor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 5,
    efficiency: 100,
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
    machine: 'Pyrolyse Oven',
    tier: 'MV',
    overclock: false,
    rft: 120,
    time: 30,
    efficiency: 100,
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
    machine: 'Distillery',
    tier: 'MV',
    overclock: false,
    rft: 256,
    time: 4,
    efficiency: 100,
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
    machine: 'Chemical Reactor',
    tier: 'LV',
    overclock: false,
    rft: 120,
    time: 8,
    efficiency: 100,
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
    machine: 'Assembler',
    tier: 'LV',
    overclock: false,
    rft: 96,
    time: 4,
    efficiency: 100,
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
    machine: 'Alloy Smelter',
    tier: 'LV',
    overclock: false,
    rft: 64,
    time: 5,
    efficiency: 100,
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
    machine: 'Wiremill',
    tier: 'LV',
    overclock: false,
    rft: 32,
    time: 20,
    efficiency: 100,
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
    machine: 'Blast Furnace',
    tier: 'MV',
    overclock: false,
    rft: 480,
    time: 300,
    efficiency: 100,
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
    machine: 'Cutting Saw',
    tier: 'MV',
    overclock: false,
    rft: 32,
    time: 20,
    efficiency: 100,
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
    machine: 'Precision Laser Engraver',
    tier: 'MV',
    overclock: false,
    rft: 480,
    time: 45,
    efficiency: 100,
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
    machine: 'Cutting Saw',
    tier: 'MV',
    overclock: false,
    rft: 32,
    time: 60,
    efficiency: 100,
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
    machine: 'Fluid Solidifier',
    tier: 'LV',
    overclock: false,
    rft: 32,
    time: 2,
    efficiency: 100,
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
    machine: 'Compressor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 5,
    efficiency: 100,
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
    machine: 'Cluster Mill',
    tier: 'LV',
    overclock: false,
    rft: 96,
    time: 3.15,
    efficiency: 100,
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
    machine: 'Chemical Reactor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 30,
    efficiency: 100,
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
    machine: 'Chemical Reactor',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 30,
    efficiency: 100,
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
    machine: 'Fluid Extractor',
    tier: 'LV',
    overclock: false,
    rft: 128,
    time: 4,
    efficiency: 100,
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
    machine: 'Assembler',
    tier: 'MV',
    overclock: false,
    rft: 240,
    time: 10,
    efficiency: 100,
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

export { Headers, TierNames, Voltages, Colors, Recipes, DefaultTheme };
