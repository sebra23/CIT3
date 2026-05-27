import { useParams, Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { useEffect } from 'react'

const productData: Record<string, {
  name: string
  size: string
  price: string
  setupTime: string
  description: string
  features: string[]
  includes: string[]
  specs: Record<string, string>
  image: string
}> = {
  '3x3m': {
    name: '3\u00d73m',
    size: '300 x 300 cm',
    price: '\u20ac1,390',
    setupTime: '< 5 minutes',
    description: 'Give your brand the standout impact it deserves with our 3\u00d73 meter inflatable exhibition tent. Your choice of branding and colors \u2014 then 1 person on your team to bring it alive in under 5 minutes.',
    features: [
      'Set up by 1 person in under 5 minutes',
      'Fits in a single backpack',
      'Airtight structure \u2014 no continuous airflow needed',
      'Full custom branding on roof and walls',
      'Modular \u2014 connectable with other tents',
    ],
    includes: [
      'Inflatable tube frame',
      'Roof section with your branding',
      'Carrying backpack',
      'Ground spikes',
      'Guy-lines',
      'Repair kit',
      'Electric pump',
    ],
    specs: {
      'Dimensions': '300 x 300 cm (W x D)',
      'Height': '220 cm',
      'Weight': '~12 kg',
      'Packed size': '120 x 40 x 30 cm',
      'Setup time': '< 5 minutes',
      'Setup people': '1 person',
      'Wind rating': 'Up to 40 km/h',
      'Material': 'PVC-coated polyester',
      'Printing': 'Full colour dye-sublimation',
      'Warranty': '5 years full warranty',
    },
    image: '/tent-300xd.jpg',
  },
  '4x4m': {
    name: '4\u00d74m',
    size: '400 x 400 cm',
    price: '\u20ac1,690',
    setupTime: '< 6 minutes',
    description: 'Showcase your products in full branded glory with our 4\u00d74 meter exhibition tent that inflates in under 6 minutes. Tell us what printing you envision, and we\u2019ll take care of it.',
    features: [
      'Set up by 1 person in under 6 minutes',
      'Fits in a single backpack',
      'Airtight structure \u2014 no continuous airflow needed',
      'Full custom branding on roof and walls',
      'Modular \u2014 connectable with other tents',
    ],
    includes: [
      'Inflatable tube frame',
      'Roof section with your branding',
      'Carrying backpack',
      'Ground spikes',
      'Guy-lines',
      'Repair kit',
      'Electric pump',
    ],
    specs: {
      'Dimensions': '400 x 400 cm (W x D)',
      'Height': '250 cm',
      'Weight': '~16 kg',
      'Packed size': '130 x 45 x 35 cm',
      'Setup time': '< 6 minutes',
      'Setup people': '1 person',
      'Wind rating': 'Up to 40 km/h',
      'Material': 'PVC-coated polyester',
      'Printing': 'Full colour dye-sublimation',
      'Warranty': '5 years full warranty',
    },
    image: '/tent-400xd.jpg',
  },
  '5x5m': {
    name: '5\u00d75m',
    size: '500 x 500 cm',
    price: '\u20ac1,990',
    setupTime: '< 7 minutes',
    description: 'Flood attention to your brand with our 5\u00d75 meter inflatable exhibition tent. Your brands & colors. And our promise of big impact \u2014 all from 1 backpack.',
    features: [
      'Set up by 1 person in under 7 minutes',
      'Fits in a single large bag',
      'Airtight structure \u2014 no continuous airflow needed',
      'Full custom branding on roof and walls',
      'Modular \u2014 connectable with other tents',
    ],
    includes: [
      'Inflatable tube frame',
      'Roof section with your branding',
      'Carrying bag with wheels',
      'Ground spikes',
      'Guy-lines',
      'Repair kit',
      'Electric pump',
    ],
    specs: {
      'Dimensions': '500 x 500 cm (W x D)',
      'Height': '280 cm',
      'Weight': '~22 kg',
      'Packed size': '140 x 50 x 40 cm',
      'Setup time': '< 7 minutes',
      'Setup people': '1 person',
      'Wind rating': 'Up to 40 km/h',
      'Material': 'PVC-coated polyester',
      'Printing': 'Full colour dye-sublimation',
      'Warranty': '5 years full warranty',
    },
    image: '/tent-500xd.jpg',
  },
  '6x6m': {
    name: '6\u00d76m',
    size: '600 x 600 cm',
    price: '\u20ac2,290',
    setupTime: '< 8 minutes',
    description: 'Be the brand statement that people flock to at events with our 6\u00d76 meter custom exhibition tent. Packs in 1 backpack, and inflates in under 8 minutes by just a single team member.',
    features: [
      'Set up by 1-2 people in under 8 minutes',
      'Fits in a single large bag',
      'Airtight structure \u2014 no continuous airflow needed',
      'Full custom branding on roof and walls',
      'Modular \u2014 connectable with other tents',
    ],
    includes: [
      'Inflatable tube frame',
      'Roof section with your branding',
      'Carrying bag with wheels',
      'Ground spikes',
      'Guy-lines',
      'Repair kit',
      'Electric pump',
    ],
    specs: {
      'Dimensions': '600 x 600 cm (W x D)',
      'Height': '320 cm',
      'Weight': '~30 kg',
      'Packed size': '150 x 55 x 45 cm',
      'Setup time': '< 8 minutes',
      'Setup people': '1-2 people',
      'Wind rating': 'Up to 35 km/h',
      'Material': 'PVC-coated polyester',
      'Printing': 'Full colour dye-sublimation',
      'Warranty': '5 years full warranty',
    },
    image: '/tent-600xd.jpg',
  },
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? productData[id] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <main className="bg-white min-h-screen pt-[120px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center py-20">
          <h1 className="font-[Montserrat] text-4xl font-black text-black mb-4">PRODUCT NOT FOUND</h1>
          <Link to="/products" className="text-black border-b border-black pb-1 font-semibold">
            View all products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Product Hero */}
      <section className="pt-[120px] pb-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link to="/products" className="text-sm text-[#666] hover:text-black transition-colors mb-6 inline-block">
            &larr; Back to all products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-[#F5F5F5]">
              <img
                src={product.image}
                alt={`${product.name} inflatable tent`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-1 mb-2">
                <span className="font-[Montserrat] text-7xl font-black uppercase tracking-[-0.02em] text-black">
                  {product.name}
                </span>
              </div>
              <p className="text-sm text-[#666] font-mono mb-2">{product.size}</p>
              <p className="text-lg text-[#222] leading-relaxed mb-6">
                {product.description}
              </p>
              <p className="text-xs uppercase text-[#666] tracking-wider mb-1">Starting from</p>
              <p className="text-3xl font-mono text-black mb-8">{product.price}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/free-3d-design?product=${id}`}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  FREE 3D DESIGN
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border border-black text-black rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
                >
                  VIEW ALL SIZES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="font-[Montserrat] text-2xl font-black uppercase tracking-wider text-black mb-6">
                KEY FEATURES
              </h2>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#222]">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* What&apos;s Included */}
            <div>
              <h2 className="font-[Montserrat] text-2xl font-black uppercase tracking-wider text-black mb-6">
                WHAT&apos;S INCLUDED
              </h2>
              <ul className="space-y-3">
                {product.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#222]">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-[Montserrat] text-2xl font-black uppercase tracking-wider text-black mb-8">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="border border-[#D0D0D0] rounded-xl overflow-hidden">
            {Object.entries(product.specs).map(([key, value], i, arr) => (
              <div
                key={key}
                className={`grid grid-cols-1 sm:grid-cols-2 ${i < arr.length - 1 ? 'border-b border-[#D0D0D0]' : ''}`}
              >
                <div className="px-6 py-4 text-sm font-semibold text-[#222] bg-[#F5F5F5]">{key}</div>
                <div className="px-6 py-4 text-sm text-[#222]">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#D0D0D0]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-[Montserrat] text-[clamp(28px,4vw,48px)] font-black uppercase tracking-[-0.02em] text-black mb-4">
            READY TO SEE YOUR BRAND ON THIS TENT?
          </h2>
          <p className="text-lg text-[#222] mb-8">
            Get a free 3D design rendering of your custom-branded {product.name} tent within 24 hours.
          </p>
          <Link
            to={`/free-3d-design?product=${id}`}
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            GET YOUR FREE 3D DESIGN
          </Link>
        </div>
      </section>
    </main>
  )
}
