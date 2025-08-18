export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  alt: string;
  specs?: ProductSpec[];
  features?: string[];
  applications?: string[];
  introduction?: string;
  workingPrinciple?: string;
  premiumMaterials?: string[];
  optionalAccessories?: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  products: Product[];
}

export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    id: 'solar-water-heater',
    title: 'Solar Water Heater',
    slug: 'solar-water-heater',
    products: [
      {
        id: 'compact-non-pressure',
        slug: 'compact-non-pressure',
        title: 'Compact Non-Pressure',
        shortDescription: 'The most cost-effective and environmentally friendly way to harness solar energy for hot water applications, available with 50-500L tank.',
        image: '/lovable-uploads/5975e5c4-eb5e-4d0b-8b70-b2b9a88fbc6d.png',
        alt: 'Compact non-pressure solar water heater system',
        introduction: 'The Non pressure galvanized solar water heater is the most cost-effectiveness and environmentally friendly way to harness solar energy for hot water applications, which is unsurpassed by any other solar thermal products, for its most high efficiency, low cost and easy installation.',
        workingPrinciple: 'Using thermosiphon system - depending on the different density of hot water and cold water, a water flowing cycle is created in tubes, hot water raising up automatically and the cold water flowing in the bottom, we call it as the gravity system too.',
        specs: [
          { label: 'Capacity', value: '50L-500L' },
          { label: 'Inner Tank', value: 'Stainless steel SS304-2B / SS316L' },
          { label: 'Outer Tank', value: 'Galvanized steel /SS304/SS201' },
          { label: 'Insulation', value: 'Polyurethane foam, 41 kg/m³ high density' },
          { label: 'Support', value: 'Painted galvanized steel' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' }
        ],
        features: [
          'Adopt most economic material (outer tank and support)',
          'Most reliable, cost saving, efficient hot water heating solution',
          'Simple structure, easy installation, labor cost saving',
          'Automatic operation with intelligent controller',
          'Low maintenance cost'
        ],
        premiumMaterials: [
          'Inner tank: Stainless steel SS304-2B / SS316L',
          'Outer tank: Galvanized steel /SS304/SS201',
          'Insulation layer: Polyurethane foam, 41 kg/m³ high density',
          'Support: Painted galvanized steel',
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Capacity: 50L-500L'
        ],
        optionalAccessories: [
          'Electric Heating Element (1.5/2.0 kW)',
          'Smart Controller with temperature display',
          'Magnesium Anode Rod (extends tank life)'
        ],
        applications: [
          'Residential homes',
          'Small businesses',
          'Rural areas',
          'Cost-conscious installations'
        ]
      },
      {
        id: 'compact-pressurized-heat-pipe',
        slug: 'compact-pressurized-heat-pipe',
        title: 'Compact Pressurized Heat Pipe',
        shortDescription: 'Advanced heat pipe technology with pressurized tank',
        image: '/lovable-uploads/62b1740b-613a-4a2c-9b1a-479e27898872.png',
        alt: 'Compact pressurized heat pipe solar water heater',
        specs: [
          { label: 'Capacity', value: '200-500L' },
          { label: 'Pressure', value: '0.6-0.8 MPa' },
          { label: 'Efficiency', value: '95%+' }
        ],
        features: [
          'Heat pipe technology',
          'Pressurized system',
          'High efficiency',
          'All-weather operation'
        ],
        applications: [
          'Modern homes',
          'Hotels',
          'Apartments',
          'Commercial facilities'
        ]
      },
      {
        id: 'solar-collector-heat',
        slug: 'solar-collector-heat',
        title: 'Solar Collector Heat',
        shortDescription: 'High-efficiency solar collector system for optimal heating',
        image: '/lovable-uploads/37e633a1-38c7-43d1-b210-8f53587f74af.png',
        alt: 'Solar collector heat water heater system',
        specs: [
          { label: 'Capacity', value: '300-1000L' },
          { label: 'Backup Heating', value: 'Electric/Gas' },
          { label: 'Insulation', value: 'High-density foam' }
        ],
        features: [
          'Intelligent control',
          'Backup heating',
          'Large capacity',
          'Energy saving mode'
        ],
        applications: [
          'Large households',
          'Commercial buildings',
          'Industrial facilities',
          'Hospitals'
        ]
      }
    ]
  }
];