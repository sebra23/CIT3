import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

const products = [
  {
    id: '3x3m',
    name: '3\u00d73m',
    size: '300 x 300 cm',
    setupTime: '< 5 minutes',
    description: 'Give your brand the standout impact it deserves. Your choice of branding and colors \u2014 then 1 person on your team to bring it alive in under 5 minutes. Perfect for small activations, sampling events, and intimate brand experiences.',
    price: '\u20ac1,390',
    image: '/tent-300xd.jpg',
  },
  {
    id: '4x4m',
    name: '4\u00d74m',
    size: '400 x 400 cm',
    setupTime: '< 6 minutes',
    description: 'Showcase your products in full branded glory. Tell us what printing you envision, and we\u2019ll take care of it. The 4\u00d74m is our most popular size \u2014 the sweet spot of impact and portability.',
    price: '\u20ac1,690',
    image: '/tent-400xd.jpg',
  },
  {
    id: '5x5m',
    name: '5\u00d75m',
    size: '500 x 500 cm',
    setupTime: '< 7 minutes',
    description: 'Flood attention to your brand. Your brands & colors. And our promise of big impact \u2014 all from 1 backpack. Ideal for festivals, sports events, and roadshows.',
    price: '\u20ac1,990',
    image: '/tent-500xd.jpg',
  },
  {
    id: '6x6m',
    name: '6\u00d76m',
    size: '600 x 600 cm',
    setupTime: '< 8 minutes',
    description: 'Be the brand statement that people flock to at events. Our 6\u00d76 meter custom exhibition tent packs in 1 backpack, and inflates in under 8 minutes by just a single team member.',
    price: '\u20ac2,290',
    image: '/tent-600xd.jpg',
  },
]

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="pt-[120px] pb-[60px] border-b border-[#D0D0D0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4">
            OUR COLLECTION
          </p>
          <h1 className="font-[Archivo] text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-black">
            INFLATABLE<br />TENTS
          </h1>
          <p className="text-xl text-[#222] max-w-[640px] mt-6 leading-relaxed">
            Custom-branded inflatable dome tents in 4 sizes. From intimate activations to massive brand takeovers &mdash; every tent sets up in under 8 minutes by one person.
          </p>
          <Link
            to="/free-3d-design"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider mt-8 hover:bg-[#222] transition-colors duration-200 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Get a free, custom 3D design
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-[#D0D0D0] rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} inflatable tent`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-start gap-1 mb-1">
                    <span className="font-[Montserrat] text-5xl font-black uppercase tracking-[-0.02em] text-black">
                      {product.name}
                    </span>
                  </div>
                  <p className="text-sm text-[#666] font-mono mb-4">{product.size}</p>
                  <p className="text-base text-[#222] leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-xs uppercase text-[#666] tracking-wider mb-1">Starting from</p>
                  <p className="text-2xl font-mono text-black mb-6">{product.price}</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/free-3d-design?product=${product.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group w-full text-center"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      FREE 3D DESIGN
                    </Link>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-sm font-semibold text-black border-b border-black pb-1 self-start hover:border-b-2 transition-all"
                    >
                      View full specs
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Comparison */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-[Montserrat] text-[clamp(28px,4vw,48px)] font-black uppercase tracking-[-0.02em] text-black mb-12">
            QUICK COMPARISON
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 pr-6 text-sm font-semibold uppercase tracking-wider text-[#666]">Feature</th>
                  {products.map((p) => (
                    <th key={p.id} className="text-left py-4 px-4 text-sm font-bold uppercase tracking-wider text-black">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Dimensions', values: products.map(p => p.size) },
                  { label: 'Setup Time', values: products.map(p => p.setupTime) },
                  { label: 'Setup People', values: ['1 person', '1 person', '1 person', '1-2 people'] },
                  { label: 'Weight', values: ['~12 kg', '~16 kg', '~22 kg', '~30 kg'] },
                  { label: 'Packed Size', values: ['1 backpack', '1 backpack', '1 large bag', '1 large bag'] },
                  { label: 'Wind Rating', values: ['40 km/h', '40 km/h', '40 km/h', '35 km/h'] },
                  { label: 'Warranty', values: ['5 years', '5 years', '5 years', '5 years'] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#D0D0D0]">
                    <td className="py-4 pr-6 text-sm font-semibold text-[#222]">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-4 px-4 text-sm text-[#222]">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 border-t border-[#D0D0D0]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-[Montserrat] text-[clamp(28px,4vw,48px)] font-black uppercase tracking-[-0.02em] text-black mb-4">
            NOT SURE WHICH SIZE?
          </h2>
          <p className="text-lg text-[#222] mb-8">
            Get a free 3D design of your branded tent and see exactly how it will look before you decide.
          </p>
          <Link
            to="/free-3d-design"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Get a free, custom 3D design
          </Link>
        </div>
      </section>
    </main>
  )
}
