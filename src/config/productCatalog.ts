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
  aliases?: string[];
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
        id: 'heat-pipe-solar-collector',
        slug: 'heat-pipe-solar-collector',
        title: 'Heat Pipe Solar Collector',
        shortDescription: 'Heat pipe solar thermal collectors for room heating, commercial water heating systems, and domestic applications with superior efficiency.',
        image: '/lovable-uploads/37e633a1-38c7-43d1-b210-8f53587f74af.png',
        alt: 'Heat pipe solar collector water heater system',
        aliases: ['solar-collector-heat'],
        introduction: 'Heat Pipe Solar Collector systems are always connected with existing water heating devices. Perfect for room heating, large scale commercial solar water heating systems, domestic water heating, and old heating equipment/system retrofit.',
        workingPrinciple: 'The selective absorber coating on the inner cover of vacuum tubes absorb solar energy, then convert solar energy into thermal energy and transfer thermal energy to heat pipe by aluminum fin. The heated liquid inside heat pipe change into vapor which rises to the top condenser, then thermal energy heat transfer liquid pass through heat exchanger and the cooled vapor becomes liquid, returning to the base of heat pipe.',
        specs: [
          { label: 'Efficiency', value: 'η₀ = 0.638 (aperture area)' },
          { label: 'Working Pressure', value: '0.6MPa' },
          { label: 'Max. Working Pressure', value: '1.2MPa' },
          { label: 'Ambient Temperature', value: '>=-50°C' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' },
          { label: 'Heat Pipe Condenser', value: 'Ф14mm red copper' },
          { label: 'Heat Pipe', value: 'Ф8mm red copper' },
          { label: 'Inlet/Outlet', value: 'Ф22mm (3/4 and 1 inch)' }
        ],
        features: [
          'Higher efficiency η₀ = 0.638 (aperture area)',
          'Low temperature resistance, heat pipe freeze protected, even can work under -50°C ambient, so can be used all year round in cold climate area',
          'No water inside vacuum tube, so vacuum tube will not break in the winter frozen weather',
          'In the event of a tube damaged, the whole system will still keep working, just remove and replace, low cost',
          'Combined with building perfectly, ideal for slope roof or flat roof installation',
          'It can be combined with existing water heating device easily',
          'Tube can be replaced without draining solar fluid',
          'Significant advantages over flat plate',
          'Low maintenance'
        ],
        premiumMaterials: [
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Heat pipe condenser: Ф14mm red copper',
          'Heat pipe: Ф8mm red copper',
          'Heat transfer fin: Integrated aluminum fin',
          'Manifold casing: Aluminium alloy 6063-TS',
          'Main tube: Ф27*1mm; Risers: @16*1mm',
          'Inlet/outlet: Ф22mm (3/4 and 1inch)',
          'Insulation layer: Polyurythan+Infrared reflective film+Glass Wool',
          'Frame: Aluminium alloy',
          'Working pressure: 0.6MPa',
          'Max. working pressure: 1.2MPa',
          'Ambient temperature: >=-50°C'
        ],
        applications: [
          'Room heating',
          'Large scale commercial solar water heating system',
          'Domestic water heating',
          'Old heating equipment/system retrofit'
        ]
      }
    ]
  }
];