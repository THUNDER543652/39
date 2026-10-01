export type LandUnit = {
  name: string;
  sqft: number;
  category: string;
  searchTerms?: string[];
};

export type LandCategory = {
  name: string;
  description: string;
  units: LandUnit[];
};

const make = (category: string, name: string, sqft: number, searchTerms: string[] = []): LandUnit => ({
  name,
  sqft,
  category,
  searchTerms,
});

export const LAND_CATEGORIES: LandCategory[] = [
  {
    name: 'Global & Metric',
    description: 'Common metric and international area units used for land measurement worldwide.',
    units: [
      make('Global & Metric', 'Square Foot (sq ft)', 1, ['sq ft', 'sqft', 'square feet', 'square foot']),
      make('Global & Metric', 'Square Yard (Gaj)', 9, ['gaj', 'square yard', 'sq yd']),
      make('Global & Metric', 'Square Meter (sq m)', 10.764, ['square metre', 'sqm', 'sq m', 'meter']),
      make('Global & Metric', 'Are', 1076.39),
      make('Global & Metric', 'Acre', 43560),
      make('Global & Metric', 'Hectare', 107639, ['ha']),
      make('Global & Metric', 'Square Kilometer', 10763910, ['sq km', 'km2', 'square kilometre']),
      make('Global & Metric', 'Square Mile', 27878400, ['sq mi', 'mile2']),
    ],
  },
  {
    name: 'India & South Asia',
    description: 'Regional land units used across India and South Asia, including Marla, Kanal, Bigha, Katha, Guntha and Dhur.',
    units: [
      make('India & South Asia', 'Dhur (Tripura)', 3.6, ['dhur tripura']),
      make('India & South Asia', 'Ankanam (AP/Telangana/Karnataka)', 72, ['ankanam', 'andhra', 'telangana', 'karnataka']),
      make('India & South Asia', 'Dhur (Bihar/Jharkhand)', 68.06, ['dhur bihar', 'dhur jharkhand']),
      make('India & South Asia', 'Lecha (Assam)', 144, ['lecha']),
      make('India & South Asia', 'Chatak (West Bengal)', 180, ['chatak']),
      make('India & South Asia', 'Marla', 272.25, ['marla land', 'marla to sqft']),
      make('India & South Asia', 'Cent / Decimal', 435.6, ['cent', 'decimal', 'cents']),
      make('India & South Asia', 'Katha / Kattha (Bengal)', 720, ['katha bengal', 'kattha bengal']),
      make('India & South Asia', 'Guntha (Maharashtra/Gujarat/South)', 1089, ['guntha', 'gunta']),
      make('India & South Asia', 'Biswa (Standard North)', 1361.25, ['biswa']),
      make('India & South Asia', 'Katha / Kattha (Bihar/UP)', 1361.25, ['katha bihar', 'katha up', 'kattha up']),
      make('India & South Asia', 'Ground (Tamil Nadu)', 2400, ['ground tamil nadu']),
      make('India & South Asia', 'Katha / Kattha (Assam)', 2880, ['katha assam', 'kattha assam']),
      make('India & South Asia', 'Kuncham (Andhra Pradesh)', 4356, ['kuncham']),
      make('India & South Asia', 'Kanal', 5445, ['kanal land', 'kanal to sqft']),
      make('India & South Asia', 'Bigha (Standard / West Bengal)', 14400, ['bigha west bengal', 'bigha standard']),
      make('India & South Asia', 'Bigha (Pucca - UP/Bihar/Rajasthan)', 27225, ['pucca bigha', 'bigha up', 'bigha bihar', 'bigha rajasthan']),
      make('India & South Asia', 'Killa / Ghumaon (Punjab/Haryana)', 43560, ['killa', 'ghumaon', 'punjab', 'haryana']),
    ],
  },
  {
    name: 'East & Southeast Asia',
    description: 'Traditional land-area units used in East and Southeast Asian regions.',
    units: [
      make('East & Southeast Asia', 'Ping / Tsubo / Pyung', 35.58, ['ping', 'tsubo', 'pyung']),
      make('East & Southeast Asia', 'Wa (Thailand)', 43.05, ['wa thailand']),
      make('East & Southeast Asia', 'Ngan (Thailand)', 4305.6, ['ngan']),
      make('East & Southeast Asia', 'Mu (China)', 7176, ['mu china']),
      make('East & Southeast Asia', 'Rai (Thailand)', 17222, ['rai']),
    ],
  },
  {
    name: 'Middle East & Europe',
    description: 'Regional and historical area units used across the Middle East and Europe.',
    units: [
      make('Middle East & Europe', 'Dunam / Donum', 10764, ['dunam', 'donum', 'dunum']),
      make('Middle East & Europe', 'Stremma (Greece)', 10764, ['stremma']),
      make('Middle East & Europe', 'Feddan (Egypt)', 45208, ['feddan']),
    ],
  },
  {
    name: 'Americas & Historical Imperial',
    description: 'American and historical Imperial land units included for broader international conversion needs.',
    units: [
      make('Americas & Historical Imperial', 'Square Perch / Pole / Rod', 272.25, ['perch', 'pole', 'rod']),
      make('Americas & Historical Imperial', 'Rood', 10890),
      make('Americas & Historical Imperial', 'Square Arpent', 36800, ['arpent']),
      make('Americas & Historical Imperial', 'Labor (Texas/Mexico)', 7717000, ['labor texas', 'labor mexico']),
      make('Americas & Historical Imperial', 'League', 192880000),
    ],
  },
];

export const LAND_UNITS = LAND_CATEGORIES.flatMap(category => category.units);
