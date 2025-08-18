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
        shortDescription: 'Integrated solar thermal systems designed to deliver pressurized hot water with heat pipe technology, ideal for residential applications.',
        image: '/lovable-uploads/62b1740b-613a-4a2c-9b1a-479e27898872.png',
        alt: 'Compact pressurized heat pipe solar water heater',
        introduction: 'Tanso Heat Pipe Solar Water Heaters are integrated solar thermal systems designed to deliver pressurized hot water. Ideal for residential applications, they provide a sustainable, easy-to-install, high-efficiency, and reliable solar hot water solution.',
        workingPrinciple: 'The vacuum tube absorb solar energy and convert solar energy into thermal energy, then transfer to the central heat pipe via the aluminum fin. The heat pipe have tiny amount of purified water sealed inside at depressurized condition. When heated, the water inside the heat pipes vaporizes at low temperature (about 25°C), the vapor rises to the condenser and heat energy is conducted to water (inside the tank). When vapor is cooled down, and becomes condensate, falling back to the bottom of heat pipe. By continuously circulating in this way, heat is carried from outside to the water inside the tank.',
        specs: [
          { label: 'Capacity', value: '100L-300L' },
          { label: 'Maximum Working Pressure', value: '6 bar (87 psi)' },
          { label: 'Insulation', value: '50mm High-Density Polyurethane Foam' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' },
          { label: 'Low Temperature Resistance', value: 'Can be used in -50°C condition' }
        ],
        features: [
          'Simplified Installation & Maintenance',
          'High pressure system, directly connected with city water without booster pump',
          'Rapid Start-up & High Efficiency: Quick system activation, excellent energy yield, and minimal heat loss',
          'Low temperature resistance, can be used in -50°C condition',
          'Easy to replace individual tube in the event of tube damaged',
          '10-Year Warranty'
        ],
        premiumMaterials: [
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Heat Pipes: High-Purity Copper',
          'Heat Transfer Fins: Aluminum',
          'Inner Tank: Food-Grade 304 Stainless Steel (SUS304-28) or 316L Stainless Steel',
          'Outer Casing: 304 / 201 Stainless Steel / 430 BA Stainless Steel / Pre-painted Galvanized Steel',
          'Insulation: 50mm High-Density Polyurethane Foam',
          'Mounting Frame: 201 / 304 Stainless Steel / Pre-painted Galvanized Steel / Aluminum Alloy'
        ],
        optionalAccessories: [
          'Electric Heating Element (Immersion Heater)',
          'Pressure & Temperature Relief Valve (PTRV)',
          'Magnesium Anode Rod, Non-Return, Check Valve'
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