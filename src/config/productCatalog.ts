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
        shortDescription: 'Efficient non-pressurized system for basic hot water needs',
        image: '/lovable-uploads/5975e5c4-eb5e-4d0b-8b70-b2b9a88fbc6d.png',
        alt: 'Compact non-pressure solar water heater system',
        specs: [
          { label: 'Capacity', value: '150-300L' },
          { label: 'Pressure', value: 'Non-pressurized' },
          { label: 'Material', value: 'Stainless steel' }
        ],
        features: [
          'Cost-effective solution',
          'Easy installation',
          'Low maintenance',
          'Gravity-fed system'
        ],
        applications: [
          'Residential homes',
          'Small businesses',
          'Rural areas'
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