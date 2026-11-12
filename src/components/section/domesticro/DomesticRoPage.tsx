import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import Aqua2090Img from '../../../assets/Products/Domestic/Aqua 2090/Images-1.jpeg'
import AquaEraImg from '../../../assets/Products/Domestic/Era/images-1.jpeg'
import AquaFonixImg from '../../../assets/Products/Domestic/Fonix/WhatsApp Image 2026-09-03 at 12.54.17.jpeg'
import GseriesImg from '../../../assets/Products/Domestic/G series/images-1.jpeg'
import HeiloImg from '../../../assets/Products/Domestic/Hielo/WhatsApp Image 2026-09-03 at 13.08.23.jpeg'
import InnovicaImg from '../../../assets/Products/Domestic/Innovica/images-1.jpeg'
import LivepurImg from '../../../assets/Products/Domestic/Livpure/images-1.jpeg'
import MerlinImg from '../../../assets/Products/Domestic/Merlin/Matrix/Matrix-1.jpeg'
import OrcaImg from '../../../assets/Products/Domestic/Orca/WhatsApp Image 2026-09-03 at 12.54.22.jpeg'
import Aquav5Img from '../../../assets/Products/Domestic/V5/images-1.jpeg'
import KleverImg from '../../../assets/Products/Domestic/klever/images-1.jpeg'

/* =========================================================
   0. GALLERY IMAGES (automatic)
   Every image inside  assets/Products/Domestic/<folder>/  is picked up
   automatically. Just drop more photos into a model's folder and set the
   same folder name in that model's `folder` field below.
   ========================================================= */
const folderImages = import.meta.glob<string>(
  '../../../assets/Products/Domestic/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
)

const imagesFromFolder = (folder?: string): string[] =>
  !folder
    ? []
    : Object.entries(folderImages)
        .filter(([path]) => path.includes(`/Domestic/${folder}/`))
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, url]) => url)

/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = 'Sri Rain RO Systems'
const PHONE_HREF = 'tel:+919715886000'
const WHATSAPP_NUMBER = '+919715886000' // country code + number, digits only

type Spec = { label: string; value: string }
type SpecGroup = { title: string; rows: Spec[] }

// Options you can filter by (RO is in every model)
const techOptions = ['UV', 'UF', 'TDS control', 'Alkaline / mineral', 'Copper'] as const
type Tech = typeof techOptions[number]

type Model = {
  slug: string
  name: string
  tagline: string // short line shown under the name
  tags: Tech[]
  facts: {
    technology: string
    capacity: string
    storage: string
    maxTds: string
    installation: string
  }
  intro?: string
  features?: string[]
  specGroups: SpecGroup[]
  image?: string // main (first) photo
  folder?: string // folder name under assets/Products/Domestic/ for the gallery
  gallery?: string[] // optional: extra photos you import by hand
}

const models: Model[] = [
  {
    slug: 'aqua-2090',
    name: 'Aqua 2090',
    tagline: 'RO + UV + UF with TDS controller',
    tags: ['UV', 'UF', 'TDS control'],
    facts: {
      technology: 'RO + UV + UF + TDS controller',
      capacity: '12–15 LPH',
      storage: '10 L',
      maxTds: 'Up to 2,000 ppm',
      installation: 'Wall-mounted / countertop'
    },
    image: Aqua2090Img,
    folder: 'Aqua 2090',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model', value: 'Aqua 2090' },
          { label: 'Product category', value: 'Domestic RO Water Purifier' },
          { label: 'Purification technology', value: 'RO + UV + UF + TDS Controller' },
          { label: 'Purification capacity', value: '12–15 litres per hour' },
          { label: 'Storage capacity', value: '10 litres' },
          { label: 'Maximum feed-water TDS', value: 'Up to 2,000 ppm' },
          { label: 'Booster pump', value: '75–100 GPD, depending on configuration' },
          { label: 'Operating voltage', value: '24V DC' },
          { label: 'Power supply', value: '100–300V AC, 50 Hz' },
          { label: 'Power consumption', value: 'Approximately 40–50 W' },
          { label: 'Body material', value: 'Food-grade ABS plastic' },
          { label: 'Installation', value: 'Wall-mounted / countertop' },
          { label: 'Suitable applications', value: 'Homes, apartments and small offices' },
          { label: 'Warranty', value: 'As per supplied model and warranty terms' }
        ]
      }
    ]
  },
  {
    slug: 'aqua-era',
    name: 'Aqua ERA',
    tagline: '5–7 stage purification with mineral options',
    tags: ['UV', 'UF', 'TDS control', 'Alkaline / mineral', 'Copper'],
    facts: {
      technology: 'RO + UV / UF, depending on variant',
      capacity: '10–15 LPH',
      storage: '10 L',
      maxTds: 'Up to 2,000 ppm (listed variants)',
      installation: 'Wall-mounted / countertop'
    },
    image: AquaEraImg,
    folder: 'Era',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model', value: 'Aqua ERA' },
          { label: 'Product type', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'RO + UV / UF, depending on variant' },
          { label: 'Filtration stages', value: '5–7 stages, depending on variant' },
          { label: 'Purification capacity', value: '10 to 15 LPH' },
          { label: 'Storage tank', value: '10 litres' },
          { label: 'Maximum feed-water TDS', value: 'Up to 2,000 ppm for listed variants' },
          { label: 'Membrane', value: '100 GPD, on some variants' },
          { label: 'Mineral enhancement', value: 'TDS controller / mineral / copper / alkaline options' },
          { label: 'Cabinet', value: 'Food-grade ABS plastic' },
          { label: 'Installation', value: 'Wall-mounted / countertop' },
          { label: 'Automatic operation', value: 'Auto-start and auto-shutoff on supported variants' },
          { label: 'Application', value: 'Homes and small offices' }
        ]
      }
    ]
  },
  {
    slug: 'aqua-fonix',
    name: 'Aqua Fonix',
    tagline: 'RO with alkaline copper, 12-litre storage',
    tags: ['UV', 'UF', 'Alkaline / mineral', 'Copper'],
    facts: {
      technology: 'RO + alkaline copper; UV/UF on selected variants',
      capacity: '—',
      storage: '12 L',
      maxTds: 'Advertised up to 2,000 ppm (verify model rating)',
      installation: 'Wall-mounted / countertop'
    },
    image: AquaFonixImg,
    folder: 'Fonix',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model name', value: 'Aqua Fonix' },
          { label: 'Purification technology', value: 'RO + alkaline copper; UV/UF on selected variants' },
          { label: 'Filtration stages', value: 'Multi-stage filtration' },
          { label: 'Storage capacity', value: '12 litres' },
          { label: 'Feed-water TDS', value: 'Advertised for water up to 2,000 ppm; verify model rating' },
          { label: 'Power consumption', value: 'Approx. 25–40 W' },
          { label: 'Input supply', value: '220 V AC, 50 Hz' },
          { label: 'Cabinet material', value: 'Food-grade ABS plastic, as advertised' },
          { label: 'Installation type', value: 'Wall-mounted / countertop' },
          { label: 'Water source', value: 'Municipal, borewell or tanker, subject to water quality' },
          { label: 'Warranty', value: 'As per warranty terms' },
          { label: 'Service', value: 'Installation, maintenance and filter replacement' }
        ]
      }
    ]
  },
  {
    slug: 'g-series',
    name: 'G Series',
    tagline: 'Up to 8-stage purification',
    tags: ['UV', 'UF', 'TDS control'],
    facts: {
      technology: 'RO + UV + UF + TDS control',
      capacity: '5–15 L/h',
      storage: '10–12 L',
      maxTds: '—',
      installation: 'Wall-mounted'
    },
    features: [
      'Multi-stage water purification.',
      'RO membrane for reducing dissolved salts.',
      'UV and UF treatment on compatible models.',
      'TDS control on compatible models.',
      'Compact design with a built-in storage tank.',
      'Filter replacement and maintenance support.'
    ],
    image: GseriesImg,
    folder: 'G series',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model', value: 'G Series' },
          { label: 'Product category', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'RO + UV + UF + TDS control' },
          { label: 'Filtration stages', value: '8 stages on selected variants' },
          { label: 'Purification capacity', value: '5–15 litres/hour' },
          { label: 'Storage capacity', value: '10 to 12 litres on listed variants' },
          { label: 'Rated power', value: '50 W' },
          { label: 'Power supply', value: '220–240 V AC or 24 V DC, depending on configuration' },
          { label: 'Installation', value: 'Wall-mounted' },
          { label: 'Cabinet material', value: 'Food grade ABS plastic' },
          { label: 'Automatic shut-off', value: 'Available on selected variants' },
          { label: 'Suitable applications', value: 'Homes and small offices' },
          { label: 'Warranty', value: 'As per warranty terms' }
        ]
      }
    ]
  },
  {
    slug: 'aqua-hiflo',
    name: 'Aqua Hi-Flo',
    tagline: 'Compact domestic RO for everyday drinking water',
    tags: [],
    facts: {
      technology: 'RO with additional stages, depending on model',
      capacity: '—',
      storage: '—',
      maxTds: '—',
      installation: '—'
    },
    intro:
      'The Aqua Hi-Flo RO Water Purifier is intended for convenient domestic drinking-water treatment. Depending on the supplied model, the system may combine reverse osmosis with additional filtration stages to reduce dissolved salts and other impurities.',
    features: [
      'Multi-stage water purification',
      'Compact cabinet design',
      'Convenient water storage',
      'Suitable configuration for household water sources',
      'Filter and membrane replacement support',
      `Installation and after-sales service from ${BRAND}`
    ],
    image: HeiloImg,
    folder: 'Hielo',
    specGroups: []
  },
  {
    slug: 'aqua-innovica',
    name: 'Aqua Innovica',
    tagline: 'RO with 12-litre storage and feed TDS up to 3,000 ppm',
    tags: [],
    facts: {
      technology: 'RO purification (TFC membrane)',
      capacity: '12 LPH',
      storage: '12 L',
      maxTds: 'Up to 3,000 ppm',
      installation: 'Wall-mounted / countertop'
    },
    image: InnovicaImg,
    folder: 'Innovica',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model', value: 'Aqua Innovica' },
          { label: 'Application', value: 'Domestic drinking water' },
          { label: 'Purification technology', value: 'RO purification' },
          { label: 'Membrane type', value: 'Thin Film Composite (TFC)' },
          { label: 'Purification capacity', value: '12 litres per hour' },
          { label: 'Storage capacity', value: '12 litres' },
          { label: 'Maximum feed-water TDS', value: 'Up to 3,000 ppm' },
          { label: 'Total power consumption', value: '50 W' },
          { label: 'Operating voltage', value: '24V DC' },
          { label: 'Input power supply', value: '100–300V AC, 50 Hz' },
          { label: 'Filtration components', value: 'Sediment, pre-carbon and post-carbon filters' },
          { label: 'Recovery rate', value: 'More than 40% under stated test conditions' },
          { label: 'Installation', value: 'Wall-mounted / countertop' },
          { label: 'Dimensions', value: '465 × 245 × 365 mm (H × W × L)' },
          { label: 'Approximate weight', value: '7.28 kg' },
          { label: 'Country of origin', value: 'India' }
        ]
      }
    ]
  },
  {
    slug: 'livpure',
    name: 'Livpure',
    tagline: 'Seven-stage RO + UV + UF',
    tags: ['UV', 'UF', 'Alkaline / mineral', 'Copper'],
    facts: {
      technology: 'RO + UV + UF',
      capacity: 'Up to 15 LPH',
      storage: '6.5–10 L',
      maxTds: 'Up to 1,500 to 2,500 ppm',
      installation: 'Wall-mounted'
    },
    intro: `${BRAND} offers Livpure water purification solutions designed for domestic drinking-water requirements. Depending on the selected model, the range includes reverse osmosis, ultraviolet sterilization, ultrafiltration, mineral enhancement and copper filtration technologies.`,
    features: [
      'Multiple purification technologies, depending on the model',
      'Different storage capacities to suit household requirements',
      'Compact, modern cabinet designs',
      'Options with mineralizer and copper cartridges',
      'Professional installation and routine maintenance support'
    ],
    image: LivepurImg,
    folder: 'Livpure',
    specGroups: [
      {
        title: 'Technical specifications (vary by model)',
        rows: [
          { label: 'Purification technology', value: 'RO + UV + UF' },
          { label: 'Purification stages', value: '7 stages' },
          { label: 'Purification capacity', value: 'Up to 15 LPH' },
          { label: 'Maximum duty cycle', value: 'Up to 40 litres/day' },
          { label: 'Storage tank', value: '6.5 to 10 litres' },
          { label: 'Suitable feed-water TDS', value: 'Up to 1,500 to 2,500 ppm' },
          { label: 'Suitable hardness', value: 'Up to 450 mg/L' },
          { label: 'Membrane type', value: 'Thin Film Composite (TFC)' },
          { label: 'UF membrane rating', value: '0.1 µm' },
          { label: 'UV power', value: '0.7 W, in-tank UV' },
          { label: 'Input voltage', value: '140–300 V AC, 50 Hz' },
          { label: 'Body material', value: 'Food-grade ABS plastic' },
          { label: 'Installation', value: 'Wall-mounted' },
          { label: 'Dimensions (L × W × H)', value: 'As per the model' },
          { label: 'Net weight', value: '8.6 kg' },
          { label: 'Applications', value: 'Homes, apartments and small offices' }
        ]
      }
    ]
  },
  {
    slug: 'merlin',
    name: 'Merlin',
    tagline: 'RO + UV + UF with alkaline and taste adjuster',
    tags: ['UV', 'UF', 'Alkaline / mineral'],
    facts: {
      technology: 'RO + UV + UF + alkaline + taste adjuster',
      capacity: '10–15 LPH',
      storage: '10–12 L',
      maxTds: 'Up to 2,000 ppm (one listed variant)',
      installation: 'Wall-mounted / countertop'
    },
    intro:
      'The Merlin  RO Water Purifier offers multi-stage water purification for domestic drinking-water requirements. Depending on the selected configuration, the system combines reverse osmosis with UV, UF and alkaline filtration technologies.',
    features: [
      'Advanced multi-stage purification',
      'RO membrane technology for reducing dissolved salts',
      'Optional alkaline filtration and taste adjustment',
      'Convenient water storage',
      'Compact installation options',
      `Professional installation and after-sales support from ${BRAND}`
    ],
    image: MerlinImg,
    folder: 'Merlin',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Brand', value: 'Merlin' },
          { label: 'Model', value: 'Matrix | I Speed | Oscar | Planet' },
          { label: 'Product category', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'RO + UV + UF + Alkaline + Taste Adjuster' },
          { label: 'Purification capacity', value: '10–15 litres/hour, depending on variant' },
          { label: 'Storage capacity', value: 'Approximately 10–12 litres, depending on variant' },
          { label: 'RO membrane', value: 'Thin Film Composite (TFC), model-dependent' },
          { label: 'Booster pump', value: '100 GPD, on listed Matrix variants' },
          { label: 'Maximum feed-water TDS', value: 'Up to 2,000 ppm on one listed variant' },
          { label: 'Operating voltage', value: '24V DC' },
          { label: 'Input power supply', value: '100–300V AC, 50 Hz, on one listed variant' },
          { label: 'Power consumption', value: 'Approximately 30–50 W, depending on variant' },
          { label: 'Installation', value: 'Wall-mounted / countertop, depending on model' },
          { label: 'Cabinet material', value: 'Food grade ABS plastic' },
          { label: 'Country of origin', value: 'India' },
          { label: 'Warranty', value: 'As per the terms' },
          { label: 'Applications', value: 'Homes, apartments and small offices' }
        ]
      }
    ]
  },
  {
    slug: 'aqua-orca',
    name: 'Aqua Orca',
    tagline: 'Five-stage RO with a detachable tank',
    tags: [],
    facts: {
      technology: 'Reverse osmosis (RO), 5 stages',
      capacity: '15 LPH',
      storage: '9 L',
      maxTds: '—',
      installation: 'Wall-mounted / countertop'
    },
    features: [
      'Five-stage RO purification in the standard listing.',
      'Detachable 9-litre storage tank.',
      'LED indicators for convenient operation.',
      'Compact cabinet design.',
      'Filter and membrane replacement support.',
      `Installation and after-sales service through ${BRAND}.`
    ],
    image: OrcaImg,
    folder: 'Orca',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Brand / model', value: 'Aqua Orca' },
          { label: 'Product category', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'Reverse osmosis (RO)' },
          { label: 'Purification stages', value: '5 stages' },
          { label: 'Purification capacity', value: '15 litres/hour' },
          { label: 'Storage capacity', value: '9 litres' },
          { label: 'Storage tank', value: 'Detachable' },
          { label: 'Indicators', value: 'Smart LED indication' },
          { label: 'Cabinet material', value: 'Food-grade plastic, according to a supplier listing' },
          { label: 'Installation', value: 'Wall-mounted / countertop, depending on variant' },
          { label: 'Suitable applications', value: 'Homes and small offices' },
          { label: 'Water source', value: 'Municipal, borewell or tanker, subject to water quality' },
          { label: 'Warranty', value: 'As per the terms' }
        ]
      }
    ]
  },
  {
    slug: 'aqua-v5',
    name: 'Aqua V5',
    tagline: 'Compact RO in standard and advanced variants',
    tags: ['UV', 'UF', 'TDS control', 'Alkaline / mineral', 'Copper'],
    facts: {
      technology: 'RO (standard); RO + UV + UF + TDS controller (advanced)',
      capacity: '12 LPH (std) · 12–15 LPH (adv)',
      storage: '8 L (std) · 9–10 L (adv)',
      maxTds: 'Below 2,000 ppm (standard)',
      installation: 'Countertop (std) · wall-mounted / countertop (adv)'
    },
    features: [
      'Advanced RO purification technology',
      'Compact and modern cabinet design',
      'Convenient purified-water storage',
      'Optional copper and alkaline enhancement',
      'Suitable configurations for municipal, borewell and tanker water',
      'Installation, maintenance and replacement-filter support'
    ],
    image: Aquav5Img,
    folder: 'V5',
    specGroups: [
      {
        title: 'Standard model',
        rows: [
          { label: 'Model', value: 'Aqua V5' },
          { label: 'Product category', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'Reverse Osmosis (RO)' },
          { label: 'Purification capacity', value: '12 litres/hour' },
          { label: 'Storage capacity', value: '8 litres' },
          { label: 'Max. operating feed-water TDS', value: 'Below 2,000 ppm' },
          { label: 'Membrane type', value: 'Thin Film Composite (TFC)' },
          { label: 'Operating voltage', value: '24V DC' },
          { label: 'Input power supply', value: '100–300V AC, 50 Hz' },
          { label: 'Total power consumption', value: '50 W' },
          { label: 'Recovery rate', value: 'More than 40% under stated test conditions' },
          { label: 'Pre-filtration', value: 'Sediment and pre-carbon filters' },
          { label: 'Post-filtration', value: 'Post-carbon filter' },
          { label: 'Installation', value: 'Countertop' },
          { label: 'Dimensions (H × W × L)', value: '405 × 240 × 315 mm' },
          { label: 'Approximate weight', value: '6.2 kg' },
          { label: 'Warranty', value: 'As per the terms' }
        ]
      },
      {
        title: 'Advanced variant',
        rows: [
          { label: 'Purification technology', value: 'RO + UV + UF + TDS controller' },
          { label: 'Purification stages', value: '7–8 stages, depending on variant' },
          { label: 'Purification capacity', value: '12–15 litres/hour' },
          { label: 'Storage capacity', value: '9–10 litres' },
          { label: 'Booster pump', value: '100 GPD on selected variants' },
          { label: 'Additional features', value: 'Copper, alkaline and zinc cartridges on selected variants' },
          { label: 'Installation', value: 'Wall-mounted / countertop' }
        ]
      }
    ]
  },
  {
    slug: 'klever',
    name: 'Klever',
    tagline: '5–7 stage purification with mineral options',
    tags: ['UV', 'UF', 'TDS control', 'Alkaline / mineral', 'Copper'],
    facts: {
      technology: 'RO + UV / UF, depending on variant',
      capacity: '10–15 LPH',
      storage: '10 L',
      maxTds: 'Up to 2,000 ppm (listed variants)',
      installation: 'Wall-mounted / countertop'
    },
    image: KleverImg,
    folder: 'klever',
    specGroups: [
      {
        title: 'Technical specifications',
        rows: [
          { label: 'Model', value: 'Klever' },
          { label: 'Product type', value: 'Domestic RO water purifier' },
          { label: 'Purification technology', value: 'RO + UV / UF, depending on variant' },
          { label: 'Filtration stages', value: '5–7 stages, depending on variant' },
          { label: 'Purification capacity', value: '10 to 15 LPH' },
          { label: 'Storage tank', value: '10 litres' },
          { label: 'Maximum feed-water TDS', value: 'Up to 2,000 ppm for listed variants' },
          { label: 'Membrane', value: '100 GPD, on some variants' },
          { label: 'Mineral enhancement', value: 'TDS controller / mineral / copper / alkaline options' },
          { label: 'Cabinet', value: 'Food-grade ABS plastic' },
          { label: 'Installation', value: 'Wall-mounted / countertop' },
          { label: 'Automatic operation', value: 'Auto-start and auto-shutoff on supported variants' },
          { label: 'Application', value: 'Homes and small offices' }
        ]
      }
    ]
  },
]

// Plain-language guide to the technology names used above
const techGuide = [
  { name: 'RO', text: 'Reverse osmosis membrane that reduces dissolved salts.', icon: 'M6 7a6 2.5 0 0 1 12 0v10a6 2.5 0 0 1-12 0zM6 7a6 2.5 0 0 0 12 0' },
  { name: 'UV', text: 'Ultraviolet sterilization, on compatible models.', icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z' },
  { name: 'UF', text: 'Ultrafiltration stage, on compatible models.', icon: 'M8 3h8v18H8zM8 8h8M8 13h8M8 18h8' },
  { name: 'TDS control', text: 'Lets you manage the TDS level of the drinking water, on compatible models.', icon: 'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6' },
  { name: 'Mineral / alkaline', text: 'Mineral enhancement and alkaline options on selected variants.', icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z' },
  { name: 'Copper', text: 'Copper filtration cartridges on selected variants.', icon: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z' }
]

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = 'px-5 md:px-8'
const DROP = 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
const ARROW = 'M5 12h14M13 6l6 6-6 6'
const BACK = 'M19 12H5M11 18l-6-6 6-6'
const CHAT = 'M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z'
const CHECK = 'M5 12.5l4.5 4.5L19 7.5'

function Icon ({ d, className = 'h-6 w-6' }: { d: string; className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'
    >
      <path d={d} />
    </svg>
  )
}

function Eyebrow ({ children }: { children: string }) {
  return (
    <p className='flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700'>
      <span className='h-px w-8 bg-cyan-600/50' aria-hidden='true' />
      {children}
    </p>
  )
}

const whatsappHref = (m: Model) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'd like details on the ${m.name}.`
  )}`

// All photos of a model: main image first, then manual extras, then the folder photos (no duplicates)
const modelImages = (m: Model): string[] =>
  Array.from(
    new Set(
      [m.image, ...(m.gallery ?? []), ...imagesFromFolder(m.folder)].filter(
        (x): x is string => Boolean(x)
      )
    )
  )

// Placeholder shown when a model has no photo yet
function Placeholder ({ model, className = '' }: { model: Model; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) ${className}`}
    >
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cyan-300/20'
        aria-hidden='true'
      >
        <path d={DROP} />
      </svg>
      <span className='absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white/80'>
        {model.name}
      </span>
    </div>
  )
}

const scrollToDetails = () =>
  document
    .getElementById('model-details')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })

/* =========================================================
   3. GALLERY: big image + small thumbnails (click to swap)
   ========================================================= */
function Gallery ({ model }: { model: Model }) {
  const images = useMemo(() => modelImages(model), [model])
  const [active, setActive] = useState(0)
  const count = images.length

  if (count === 0) {
    return (
      <Placeholder
        model={model}
        className='aspect-4/3 rounded-xs shadow-xl shadow-cyan-900/10'
      />
    )
  }

  const go = (n: number) => setActive((n + count) % count)
  const arrow =
    'absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-(--primary) shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'

  return (
    <div>
      {/* Big image */}
      <div className='relative aspect-4/4 overflow-hidden rounded-xs bg-white shadow-xl shadow-cyan-900/10'>
        <img
          key={images[active]}
          src={images[active]}
          alt={`${model.name}, image ${active + 1} of ${count}`}
          className='absolute inset-0 h-full w-full object-cover'
        />

        {count > 1 && (
          <>
            <button
              type='button'
              aria-label='Previous image'
              onClick={() => go(active - 1)}
              className={`${arrow} left-3`}
            >
              <Icon d={BACK} className='h-5 w-5' />
            </button>
            <button
              type='button'
              aria-label='Next image'
              onClick={() => go(active + 1)}
              className={`${arrow} right-3`}
            >
              <Icon d={ARROW} className='h-5 w-5' />
            </button>
            <span
              className='absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white'
              aria-live='polite'
            >
              {active + 1} / {count}
            </span>
          </>
        )}
      </div>

      {/* Small thumbnails */}
      {count > 1 && (
        <ul
          aria-label={`${model.name} photos`}
          className='mt-3 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden'
        >
          {images.map((src, i) => (
            <li key={src} className='shrink-0'>
              <button
                type='button'
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`block h-16 w-20 overflow-hidden rounded-xs border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 sm:h-18 sm:w-24 ${
                  i === active
                    ? 'border-(--primary) opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={src}
                  alt=''
                  loading='lazy'
                  className='h-full w-full object-cover'
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* =========================================================
   4. SECTION: HERO
   ========================================================= */
function Hero () {
  return (
    <section
      aria-labelledby='domestic-title'
      className='common-prod-bg relative isolate overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) pb-16 pt-36 text-white sm:pb-24 sm:pt-44'
    >
      <span
        className='pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 bg-cyan-300/10 blur-3xl'
        aria-hidden='true'
      />

      <div className={wrap}>
        <nav aria-label='Breadcrumb' className='text-sm text-white/70'>
          <ol className='flex items-center gap-2'>
            <li>
              <Link to='/' className='hover:text-white focus-visible:outline-none focus-visible:underline'>
                Home
              </Link>
            </li>
            <li aria-hidden='true'>/</li>
            <li className='text-white' aria-current='page'>
              Domestic RO
            </li>
          </ol>
        </nav>

        <h1
          id='domestic-title'
          className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
        >
          Domestic RO water purifiers
        </h1>
        <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
          Drinking-water purifiers for homes, apartments and small offices, with
          installation, filter replacement and maintenance from {BRAND}.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <Link
            to='/contact'
            className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   5. SECTION: MODEL DETAILS (one model at a time)
   ========================================================= */
function Details ({
  index,
  onSelect
}: {
  index: number
  onSelect: (slug: string) => void
}) {
  const m = models[index]
  const prev = models[(index - 1 + models.length) % models.length]
  const next = models[(index + 1) % models.length]

  return (
    <section
      id='model-details'
      aria-labelledby='details-title'
      className='scroll-mt-24 bg-slate-50 py-16 sm:py-24'
    >
      <div className={wrap}>
        <h2 id='details-title' className='sr-only'>
          Model details
        </h2>

        {/* Model switcher */}
        <div
          role='tablist'
          aria-label='Choose a model'
          className='-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden'
        >
          {models.map((x, i) => (
            <button
              key={x.slug}
              type='button'
              role='tab'
              aria-selected={i === index}
              onClick={() => onSelect(x.slug)}
              className={`shrink-0 border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                i === index
                  ? 'border-(--primary) bg-(--primary) text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-(--primary) hover:text-(--primary)'
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div className='mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-16'>
          {/* Left: gallery and key facts */}
          <div className='lg:sticky lg:top-28 lg:col-span-5'>
            {/* key={m.slug} resets the gallery to the first photo when the model changes */}
            <Gallery key={m.slug} model={m} />

            <dl className='mt-5 grid grid-cols-2 gap-4'>
              <div className='rounded-xs bg-linear-to-br from-(--blue) to-(--primary) p-5 text-white'>
                <dt className='text-xs font-semibold uppercase tracking-wider text-white/70'>
                  Capacity
                </dt>
                <dd className='mt-1 text-2xl font-semibold text-cyan-300'>{m.facts.capacity}</dd>
              </div>
              <div className='rounded-xs bg-linear-to-br from-(--blue) to-(--primary) p-5 text-white'>
                <dt className='text-xs font-semibold uppercase tracking-wider text-white/70'>
                  Storage
                </dt>
                <dd className='mt-1 text-2xl font-semibold text-cyan-300'>{m.facts.storage}</dd>
              </div>
              <div className='col-span-2 rounded-xs border border-slate-200 bg-white p-5'>
                <dt className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
                  Technology
                </dt>
                <dd className='mt-1 text-sm font-medium leading-relaxed text-(--primary)'>
                  {m.facts.technology}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: description, features, datasheet */}
          <div className='lg:col-span-7'>
            <Eyebrow>Domestic RO</Eyebrow>
            <h3 className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl'>
              {m.name}
            </h3>
            <p className='mt-2 text-base font-medium text-cyan-700'>{m.tagline}</p>
            {m.intro && (
              <p className='mt-4 text-base leading-relaxed text-slate-600'>{m.intro}</p>
            )}

            {m.features && (
              <ul className='mt-6 grid gap-3 sm:grid-cols-2'>
                {m.features.map(f => (
                  <li key={f} className='flex gap-3 text-sm leading-relaxed text-slate-700'>
                    <span className='mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700'>
                      <Icon d={CHECK} className='h-3 w-3' />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* Datasheet(s) */}
            {m.specGroups.length > 0 ? (
              <div className='mt-8 space-y-6'>
                {m.specGroups.map(g => (
                  <div key={g.title} className='overflow-hidden rounded-xs border border-slate-200 bg-white'>
                    <div className='bg-(--primary) px-5 py-3 text-white'>
                      <h4 className='text-sm font-semibold uppercase tracking-wider'>{g.title}</h4>
                    </div>
                    <dl className='divide-y divide-slate-100'>
                      {g.rows.map(r => (
                        <div
                          key={r.label}
                          className='grid gap-1 px-5 py-3.5 sm:grid-cols-[13rem_1fr] sm:gap-6'
                        >
                          <dt className='text-sm font-semibold text-(--primary)'>{r.label}</dt>
                          <dd className='text-sm leading-relaxed text-slate-600'>{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            ) : (
              <div className='mt-8 rounded-xs border border-dashed border-slate-300 bg-white p-6 text-sm leading-relaxed text-slate-600'>
                Specifications depend on the supplied model. Contact us for the
                exact configuration, capacity and storage.
              </div>
            )}

            <p className='mt-3 text-xs leading-relaxed text-slate-500'>
              Specifications can vary by model and variant. Please confirm the
              exact configuration with our team before ordering.
            </p>

            <div className='mt-7 flex flex-wrap items-center gap-3'>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
              >
                Request a quote
                <Icon d={ARROW} className='h-4 w-4' />
              </Link>
              <a
                href={whatsappHref(m)}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-(--primary)/25 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
              >
                <Icon d={CHAT} className='h-4 w-4' />
                WhatsApp
              </a>
            </div>

            {/* Previous / next model */}
            <div className='mt-10 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2'>
              <button
                type='button'
                onClick={() => onSelect(prev.slug)}
                className='group flex items-center gap-3 rounded-xs border border-slate-200 bg-white p-4 text-left transition-colors hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
              >
                <Icon
                  d={BACK}
                  className='h-5 w-5 shrink-0 text-cyan-700 transition-transform group-hover:-translate-x-1'
                />
                <span>
                  <span className='block text-xs font-semibold uppercase tracking-wider text-slate-500'>Previous</span>
                  <span className='block text-sm font-semibold text-(--primary)'>{prev.name}</span>
                </span>
              </button>
              <button
                type='button'
                onClick={() => onSelect(next.slug)}
                className='group flex items-center justify-end gap-3 rounded-xs border border-slate-200 bg-white p-4 text-right transition-colors hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
              >
                <span>
                  <span className='block text-xs font-semibold uppercase tracking-wider text-slate-500'>Next</span>
                  <span className='block text-sm font-semibold text-(--primary)'>{next.name}</span>
                </span>
                <Icon
                  d={ARROW}
                  className='h-5 w-5 shrink-0 text-cyan-700 transition-transform group-hover:translate-x-1'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   6. SECTION: COMPARE ALL MODELS
   ========================================================= */
function Compare ({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <section aria-labelledby='compare-title' className='bg-(--blue) py-20 text-white sm:py-28'>
      <div className={wrap}>
        <div className='grid gap-5 lg:grid-cols-12 lg:items-end'>
          <h2
            id='compare-title'
            className='text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl'
          >
            Compare all models
          </h2>
          <p className='max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5'>
            Key figures side by side. A dash means the information is not
            specified. Select a model name to see its full details.
          </p>
        </div>

        <div className='mt-12 overflow-x-auto rounded-xs border border-white/15 bg-white/10 backdrop-blur-sm'>
          <table className='w-full min-w-225 border-collapse text-left'>
            <caption className='sr-only'>Comparison of domestic RO water purifier models</caption>
            <thead>
              <tr className='border-b border-white/15 text-sm text-white/70'>
                {['Model', 'Technology', 'Capacity', 'Storage', 'Max feed-water TDS', 'Installation'].map((h, i) => (
                  <th
                    key={h}
                    scope='col'
                    className={`px-5 py-4 font-semibold ${i === 0 ? 'sticky left-0 bg-(--blue)' : ''}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {models.map(m => (
                <tr key={m.slug} className='border-b border-white/10 last:border-0 hover:bg-white/5'>
                  <th scope='row' className='sticky left-0 bg-(--blue) px-5 py-4 align-top'>
                    <button
                      type='button'
                      onClick={() => onSelect(m.slug)}
                      className='text-left text-base font-semibold text-cyan-300 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:underline'
                    >
                      {m.name}
                    </button>
                  </th>
                  <td className='px-5 py-4 align-top text-sm leading-relaxed text-white/80'>{m.facts.technology}</td>
                  <td className='px-5 py-4 align-top text-sm leading-relaxed text-white/80'>{m.facts.capacity}</td>
                  <td className='px-5 py-4 align-top text-sm leading-relaxed text-white/80'>{m.facts.storage}</td>
                  <td className='px-5 py-4 align-top text-sm leading-relaxed text-white/80'>{m.facts.maxTds}</td>
                  <td className='px-5 py-4 align-top text-sm leading-relaxed text-white/80'>{m.facts.installation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   7. SECTION: TECHNOLOGY GUIDE
   ========================================================= */
function TechGuide () {
  return (
    <section aria-labelledby='tech-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Good to know</Eyebrow>
          </div>
          <h2 id='tech-title' className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'>
            What the technology names mean
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Each purifier combines these stages in a different way. Water
            quality matters too, so check the feed-water TDS rating of the model
            you choose.
          </p>
        </div>

        <ul className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {techGuide.map(t => (
            <li key={t.name} className='flex gap-4 rounded-xs border border-slate-200 bg-slate-50 p-6'>
              <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-100 text-cyan-700'>
                <Icon d={t.icon} />
              </span>
              <div>
                <h3 className='text-lg font-semibold text-(--primary)'>{t.name}</h3>
                <p className='mt-1 text-sm leading-relaxed text-slate-600'>{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   8. SECTION: CALL TO ACTION
   ========================================================= */
function CtaBand () {
  return (
    <section aria-labelledby='domestic-cta-title' className='bg-white pb-20 sm:pb-28'>
      <div className={wrap}>
        <div className='abt-cta relative isolate overflow-hidden rounded-xs px-7 py-12 text-white sm:px-14 sm:py-16'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 id='domestic-cta-title' className='max-w-xl text-3xl font-semibold leading-tight sm:text-4xl'>
                Not sure which purifier suits your home?
              </h2>
              <p className='mt-3 max-w-xl text-base leading-relaxed text-white/75'>
                Tell us your water source and family size and we will recommend
                a model, then install and service it.
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Talk to our team
                <Icon d={ARROW} className='h-4 w-4' />
              </Link>
              <a
                href={PHONE_HREF}
                className='rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   9. THE PAGE
   ========================================================= */
export default function DomesticRoPage () {
  const [selected, setSelected] = useState(0)

  // Open a model from a link such as /domestic-ro?model=aqua-v5
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('model')
    const i = models.findIndex(m => m.slug === slug)
    if (i >= 0) setSelected(i)
  }, [])

  // Choose a model and scroll to its details
  const select = (slug: string) => {
    const i = models.findIndex(m => m.slug === slug)
    if (i < 0) return
    setSelected(i)
    // wait a moment so the new content is on screen before scrolling
    window.setTimeout(scrollToDetails, 30)
  }

  return (
    <main>
      <Hero />
      <Details index={selected} onSelect={select} />
      <Compare onSelect={select} />
      <TechGuide />
      <CtaBand />
    </main>
  )
}