import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { useEffect } from 'react'

/* ------------------------------------------------------------------ */
/*  Trust Bar Component (inline reuse)                                 */
/* ------------------------------------------------------------------ */
function TrustBar() {
  const items = [
    '1000+ SATISFIED CUSTOMERS',
    'DELIVERED WITHIN 10 BUSINESS DAYS',
    'BEST PRICE GUARANTEE',
    '5 YEARS FULL WARRANTY',
    'CUSTOM-MADE IN SWITZERLAND',
  ]

  return (
    <div className="w-full bg-white border-t border-b border-[#D0D0D0] h-12 md:h-auto">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-around h-full overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 snap-start flex-shrink-0 px-4 md:px-0"
          >
            <Check className="w-3.5 h-3.5 text-black flex-shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#222] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Process Step Component                                             */
/* ------------------------------------------------------------------ */
function ProcessStep({
  number,
  headline,
  description,
  detail,
  image,
}: {
  number: string
  headline: string
  description: string
  detail?: string
  image?: string
}) {
  return (
    <div className="relative">
      <span className="font-mono text-sm text-[#666] block mb-4">{number}</span>
      <h3 className="font-[Montserrat] text-lg font-bold uppercase tracking-wider text-black mb-4">
        {headline}
      </h3>
      <p className="text-base text-[#222] leading-relaxed mb-2">{description}</p>
      {detail && <p className="text-sm text-[#666] leading-relaxed">{detail}</p>}
      {image && (
        <div className="mt-6 rounded-xl overflow-hidden aspect-video">
          <img src={image} alt={headline} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Stat Component                                                     */
/* ------------------------------------------------------------------ */
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <p className="font-mono text-[clamp(48px,6vw,80px)] font-normal text-black leading-none">
        {number}
      </p>
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666] mt-2">
        {label}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main About Page                                                    */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white">
      {/* Section 1: Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/about-hero.jpg"
            alt="Multiple branded inflatable tents at motorsport event"
            className="w-full h-full object-cover"
            style={{ animation: 'slowZoom 2s ease-out forwards' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-20 max-w-[1400px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80 mb-4">
            DISCOVER THE...
          </p>
          <h1 className="font-[Archivo] text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white mb-6">
            INFLATABLE
            <br />
            TENTS
            <br />
            EXPERIENCE
          </h1>
          <p className="text-lg text-white/85 max-w-[480px] leading-relaxed mb-8">
            If you want to stand out with your brand in the open, Inflatable Tents
            is what you need.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/free-3d-design"
              className="inline-flex items-center gap-2 border-2 border-white text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Request Free 3D Design
            </Link>
            <Link
              to="/products"
              className="text-sm font-semibold text-white border-b border-white pb-1 hover:border-b-2 transition-all"
            >
              View our products
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Story */}
      <section className="py-[80px] md:py-[140px]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Story */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4">
              OUR STORY
            </p>
            <h2 className="font-[Montserrat] text-[clamp(28px,3vw,48px)] font-black uppercase tracking-[-0.02em] text-black leading-[1.1] mb-8">
              HIGH IMPACT BRANDING. ZERO STRESS SETUP. ALL IN A SINGLE BACKPACK.
            </h2>
            <div className="space-y-6 text-lg text-[#222] leading-relaxed">
              <p>
                Custom Inflatable Tents (CIT) was born from a simple observation: event
                tents were either cheap and forgettable, or impressive and impossible to
                transport. We built CIT to solve both — a premium inflatable structure
                that fits in a backpack yet commands the attention of a billboard.
              </p>
              <p>
                Every CIT tent is engineered in Switzerland and manufactured to the
                highest European standards. We combine airtight structural technology
                with full-surface dye-sublimation printing, so your brand appears crisp
                and vivid on every wall and roof panel. The result is a tent that sets up
                in under 8 minutes by one person — no tools, no continuous blower, no hassle.
              </p>
              <p>
                From the Swiss Alps to city centres across Europe, brands trust CIT for
                trade shows, product launches, roadshows, and outdoor activations. We
                deliver within 14 business days with a full 5-year warranty and money-back
                guarantee. Ready to make your next event unforgettable?
              </p>
            </div>
            <Link
              to="/free-3d-design"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider mt-8 hover:bg-[#222] transition-colors duration-200 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Get your free 3D design
            </Link>
          </div>

          {/* Right — Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="/about-craft.jpg"
              alt="Craftsmanship - hands working on tent fabric"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Trust Bar */}
      <TrustBar />

      {/* Section 4: Process */}
      <section className="py-[80px] md:py-[140px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4 text-center">
            OUR PROCESS
          </p>
          <h2 className="font-[Montserrat] text-[clamp(36px,5vw,64px)] font-black uppercase tracking-[-0.02em] text-black text-center mb-16">
            FROM CONCEPT TO EVENT IN 3 STEPS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[18px] left-[16%] right-[16%] h-px bg-[#D0D0D0]" />

            <ProcessStep
              number="01"
              headline="REQUEST A FREE 3D DESIGN"
              description="Curious about how your logos and colors would look? Reach out to us now, and we'll deliver a completely free, custom 3D design within 24 hours (barring weekends)."
              image="/process-design.jpg"
            />
            <ProcessStep
              number="02"
              headline="APPROVE YOUR DESIGN"
              description="Review your custom 3D concept and AR preview. Make changes if needed. Once you're happy, we move to production."
              detail="You'll also receive a detailed quotation with transparent pricing."
            />
            <ProcessStep
              number="03"
              headline="DELIVERED TO YOUR DOOR"
              description="Your custom inflatable tent is manufactured in Switzerland and shipped to you within 14 business days. Set up in minutes, impress for years."
              image="/process-delivery.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Stats */}
      <section className="py-[80px] md:py-[100px] bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-[Montserrat] text-[clamp(24px,3vw,40px)] font-black uppercase tracking-[-0.02em] text-black text-center mb-16">
            TRUSTED BY 1000+ WORLDWIDE SATISFIED CUSTOMERS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number="1000+" label="SATISFIED CUSTOMERS" />
            <Stat number="14" label="BUSINESS DAY DELIVERY" />
            <Stat number="5" label="YEAR FULL WARRANTY" />
            <Stat number="&lt; 8" label="MINUTE SETUP TIME" />
          </div>
        </div>
      </section>

      {/* Section 6: Footer CTA */}
      <section className="py-24 border-t border-[#D0D0D0]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-[Montserrat] text-[clamp(28px,4vw,48px)] font-black uppercase tracking-[-0.02em] text-black mb-4">
            READY TO STAND OUT?
          </h2>
          <p className="text-lg text-[#222] mb-8">
            Request your FREE 3D Design today and we&apos;ll show you how our inflatable
            tents will boost your brand exposure at your next event.
          </p>
          <Link
            to="/free-3d-design"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Request free 3D design
          </Link>
        </div>
      </section>

      {/* Inject keyframes for hero zoom */}
      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
      `}</style>
    </main>
  )
}
