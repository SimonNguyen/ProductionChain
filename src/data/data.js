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
    machine: 'Macerator',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 0.8,
    efficiency: 100,
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
    machine: 'Macerator',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 0.8,
    efficiency: 100,
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
    machine: 'Macerator',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 0.8,
    efficiency: 100,
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
    machine: 'Furnace',
    tier: 'LV',
    overclock: false,
    rft: 128,
    time: 3.2,
    efficiency: 100,
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
    machine: 'Chemical Reactor',
    tier: 'LV',
    overclock: false,
    rft: 60,
    time: 1,
    efficiency: 100,
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
    machine: 'Electrolyzer',
    tier: 'LV',
    overclock: false,
    rft: 40,
    time: 5,
    efficiency: 100,
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
    machine: 'Fluid Extractor',
    tier: 'LV',
    overclock: false,
    rft: 128,
    time: 2,
    efficiency: 100,
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
    machine: 'Chemical Reactor',
    tier: 'MV',
    overclock: false,
    rft: 400,
    time: 5,
    efficiency: 100,
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
    machine: 'Furnace',
    tier: 'MV',
    overclock: false,
    rft: 40,
    time: 3.2,
    efficiency: 100,
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
    machine: 'Alloy Smelter',
    tier: 'MV',
    overclock: false,
    rft: 96,
    time: 12,
    efficiency: 100,
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
    machine: 'Simulation Chamber',
    tier: 'N/A',
    overclock: false,
    rft: 2048,
    time: 15,
    efficiency: 100,
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
    machine: 'Simulation Chamber',
    tier: 'N/A',
    overclock: false,
    rft: 2048,
    time: 15,
    efficiency: 100,
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
    machine: 'Loot Fabricator',
    tier: 'N/A',
    overclock: false,
    rft: 0,
    time: 2.7,
    efficiency: 100,
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
    machine: 'Loot Fabricator',
    tier: 'N/A',
    overclock: false,
    rft: 0,
    time: 2.7,
    efficiency: 100,
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
    type: 'light',
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
