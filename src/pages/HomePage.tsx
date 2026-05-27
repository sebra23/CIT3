import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {
  Check,
  ArrowRight,
  Instagram,
} from 'lucide-react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

/* ------------------------------------------------------------------ */
/*  Product data                                                       */
/* ------------------------------------------------------------------ */
const products = [
  {
    id: '3x3m',
    name: '3\u00d73m',
    size: '300 x 300 cm',
    description:
      'Give your brand the standout impact it deserves with our 3\u00d73 meter inflatable exhibition tent. Your choice of branding and colors \u2014 then 1 person on your team to bring it alive in < 5 minutes.',
    price: '\u20ac1,390',
    image: '/tent-300xd.jpg',
  },
  {
    id: '4x4m',
    name: '4\u00d74m',
    size: '400 x 400 cm',
    description:
      'Showcase your products in full branded glory with our 4\u00d74 meter exhibition tent that inflates in < 6 minutes. Tell us what printing you envision, and we\u2019ll take care of it.',
    price: '\u20ac1,690',
    image: '/tent-400xd.jpg',
  },
  {
    id: '5x5m',
    name: '5\u00d75m',
    size: '500 x 500 cm',
    description:
      'Flood attention to your brand with our 5\u00d75 meter inflatable exhibition tent. Your brands & colors. And our promise of big impact \u2014 all from 1 backpack.',
    price: '\u20ac1,990',
    image: '/tent-500xd.jpg',
  },
  {
    id: '6x6m',
    name: '6\u00d76m',
    size: '600 x 600 cm',
    description:
      'Be the brand statement that people flock to at events, with our 6\u00d76 meter custom exhibition tent. Packs in 1 backpack, and inflates in < 8 minutes by just a single team member.',
    price: '\u20ac2,290',
    image: '/tent-600xd.jpg',
  },
]

const testimonials = [
  {
    quote:
      '"CIT delivered beyond expectations. The 3D preview made the decision easy, and our tent arrived within 14 days perfectly branded. Setup took 4 minutes at our first event."',
    avatar: '/testimonial-1.jpg',
    name: 'Sarah Meier',
    title: 'BRAND MANAGER, SWISS OUTDOOR AGENCY',
  },
  {
    quote:
      '"We use four CIT tents connected at every trade show. The airtight structure is a game changer — no power needed, no noise, just instant brand presence. Five years strong."',
    avatar: '/testimonial-2.jpg',
    name: 'Marcus Weber',
    title: 'EVENT DIRECTOR, ALPINE SPORTS GMBH',
  },
  {
    quote:
      '"From quote to delivery in Switzerland was seamless. The custom printing quality is exceptional — our clients always ask where we got our tent. CIT is now our go-to for every activation."',
    avatar: '/testimonial-3.jpg',
    name: 'Elena Rossi',
    title: 'HEAD OF MARKETING, TECNO GEAR EUROPE',
  },
]

const trustItems = [
  '1000+ SATISFIED CUSTOMERS',
  'DELIVERED WITHIN 14 BUSINESS DAYS',
  'BEST PRICE GUARANTEE',
  '5 YEARS FULL WARRANTY',
  'CUSTOM-MADE IN SWITZERLAND',
]

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */
function FadeUp({
  children,
  delay = 0,
  className = '',
  isVisible = true,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  isVisible?: boolean
}) {
  return (
    <div
      className={`transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}

/* ================================================================== */
/*  SECTION 1: HERO                                                  */
/* ================================================================== */
function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'image-set(url(/hero-bg.webp) type("image/webp"), url(/hero-bg.jpg) type("image/jpeg"))',
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 pb-16 md:pb-20">
        <FadeUp delay={0} isVisible={loaded}>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/90 mb-6">
            Trusted by brands across Europe
          </p>
        </FadeUp>

        <FadeUp delay={0.15} isVisible={loaded}>
          <h1
            className="font-display font-black uppercase text-white leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 8vw, 140px)' }}
          >
            Maximum
          </h1>
        </FadeUp>
        <FadeUp delay={0.2} isVisible={loaded}>
          <h1
            className="font-display font-black uppercase text-white leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 8vw, 140px)' }}
          >
            Brand Visibility
          </h1>
        </FadeUp>
        <FadeUp delay={0.25} isVisible={loaded}>
          <h1
            className="font-display font-black uppercase text-white leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 8vw, 140px)' }}
          >
            Zero Setup Crew
          </h1>
        </FadeUp>

        <FadeUp delay={0.45} isVisible={loaded}>
          <p className="mt-8 text-lg text-white/85 max-w-[560px] leading-relaxed">
            The inflatable tent that sets up in 5 minutes, fits in a backpack, and turns any
            location into a high-impact brand activation — delivered within 14 business days.
          </p>
        </FadeUp>

        <FadeUp delay={0.6} isVisible={loaded}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/free-3d-design"
              className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-all duration-200"
            >
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
              Get a free, custom 3D design
            </Link>
            <Link
              to="/products"
              className="text-sm font-semibold text-white border-b border-white pb-1 hover:border-2 transition-all"
            >
              View our products
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 2: TRUST BAR                                             */
/* ================================================================== */
function TrustBar() {
  const { ref, visibleItems } = useStaggerAnimation(5, {
    threshold: 0.5,
    staggerDelay: 0.08,
  })

  return (
    <section
      ref={ref}
      className="w-full bg-white border-y border-grey-light overflow-x-auto"
      style={{ height: '48px' }}
    >
      <div className="min-w-[900px] max-w-content mx-auto h-full flex items-center justify-around px-6">
        {trustItems.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 transition-all duration-500"
            style={{
              opacity: visibleItems[i] ? 1 : 0,
              transform: visibleItems[i] ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: `${i * 0.08}s`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Check size={14} className="text-black flex-shrink-0" strokeWidth={2.5} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-grey-dark whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 3: PROBLEM / SOLUTION                                    */
/* ================================================================== */
function ProblemSolutionSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-section"
    >
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:w-[55%]">
            <FadeUp delay={0} isVisible={isVisible}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-grey-mid mb-6">
                The Problem With Traditional Tents
              </p>
            </FadeUp>

            <FadeUp delay={0.08} isVisible={isVisible}>
              <h2
                className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                Effortless. Portable. Unmissable.
              </h2>
            </FadeUp>

            <FadeUp delay={0.16} isVisible={isVisible}>
              <p className="mt-8 text-base text-grey-dark leading-[1.7] max-w-[520px]">
                You arrive at the event, ready to make an impact. But instead of focusing on your
                brand, you&apos;re stuck assembling a heavy, outdated tent. Poles don&apos;t fit,
                fabric is stretched, and the whole setup takes far too long. You need extra hands,
                a truck for transportation and still, the impact of your stand is just regular.
              </p>
            </FadeUp>

            <FadeUp delay={0.24} isVisible={isVisible}>
              <p className="mt-4 text-base text-grey-dark leading-[1.7] max-w-[520px] font-bold">
                Not with Inflatable Tents.
              </p>
            </FadeUp>

            <FadeUp delay={0.32} isVisible={isVisible}>
              <p className="mt-4 text-base text-grey-dark leading-[1.7] max-w-[520px]">
                In just minutes, your event space is fully set up — no tools, no power supply, no
                stress. Once inflated, the airtight structure stays up without any continuous
                airflow. Transport is effortless — it fits in a small car — yet its bold, premium
                design makes sure all eyes are on you.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} isVisible={isVisible}>
              <p className="mt-4 text-base text-grey-dark leading-[1.7] max-w-[520px]">
                Need more space? Our tents are modular and fully connectable, expanding with your
                needs to create a striking, fully branded setup. Plus, every tent is custom-made
                to your brand&apos;s identity and delivered anywhere within 14 business days.
              </p>
            </FadeUp>

            <FadeUp delay={0.48} isVisible={isVisible}>
              <p className="mt-4 text-base text-grey-dark leading-[1.7] max-w-[520px]">
                We stand behind our quality — that&apos;s why we offer a full 5-year warranty. No
                more wasted time. No more setup headaches. Just instant impact.
              </p>
            </FadeUp>

            <FadeUp delay={0.56} isVisible={isVisible}>
              <p className="mt-4 text-base text-grey-dark leading-[1.7] max-w-[520px]">
                That&apos;s why brands across Europe trust CIT for their most important events. Now
                it&apos;s your turn — get your free 3D design today.
              </p>
            </FadeUp>

            <FadeUp delay={0.64} isVisible={isVisible}>
              <div className="mt-10">
                <Link
                  to="/free-3d-design"
                  className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-all duration-200"
                >
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                  Request free 3D design
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right: image */}
          <div className="lg:w-[45%]">
            <div
              className="overflow-hidden rounded-xl transition-all duration-1000"
              style={{
                clipPath: isVisible
                  ? 'inset(0% 0 0 0)'
                  : 'inset(100% 0 0 0)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="/solution-tent.jpg"
                alt="Premium inflatable dome tent at a brand activation event"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 4: PRODUCT RANGE                                         */
/* ================================================================== */
function ProductCard({
  product,
  index,
  isVisible,
}: {
  product: (typeof products)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`bg-white border border-grey-light rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[60px]'
      }`}
      style={{
        transitionDelay: `${index * 0.12}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} inflatable tent`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div>
          <h3 className="font-headline text-4xl font-black text-black">{product.name}</h3>
        </div>
        <p className="mt-1 font-mono text-sm text-grey-mid">{product.size}</p>
        <p className="mt-4 text-base text-grey-dark leading-relaxed">{product.description}</p>

        <div className="mt-6">
          <p className="text-[11px] uppercase text-grey-mid tracking-wide">Starting from</p>
          <p className="font-mono text-2xl text-black mt-1">{product.price}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/free-3d-design"
            className="group flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-all duration-200 text-center"
          >
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
            Free 3D Design
          </Link>
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-semibold text-grey-dark hover:text-black border-b border-grey-light hover:border-black pb-1 self-center transition-all"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProductRangeSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: gridRef, visibleItems } = useStaggerAnimation(products.length, {
    threshold: 0.1,
    staggerDelay: 0.12,
  })

  return (
    <section ref={sectionRef} className="bg-grey-pale py-20 md:py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0} isVisible={isVisible}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-grey-mid mb-6">
              Find Your Perfect Fit
            </p>
          </FadeUp>
          <FadeUp delay={0.08} isVisible={isVisible}>
            <h2
              className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
            >
              Our Range
            </h2>
          </FadeUp>
        </div>

        {/* Product grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isVisible={visibleItems[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 5: WARRANTY + TESTIMONIALS                               */
/* ================================================================== */
function WarrantyTestimonialsSection() {
  const { ref: warrantyRef, isVisible: warrantyVisible } = useScrollAnimation({
    threshold: 0.2,
  })
  const { ref: cardsRef, visibleItems } = useStaggerAnimation(testimonials.length, {
    threshold: 0.1,
    staggerDelay: 0.12,
  })

  return (
    <section className="bg-white">
      {/* Warranty banner */}
      <div ref={warrantyRef} className="py-20 md:py-[100px] border-b border-grey-light">
        <div className="max-w-content mx-auto px-6 text-center">
          <FadeUp delay={0} isVisible={warrantyVisible}>
            <h2
              className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
            >
              Our 5-Year Warranty + Money Back Guarantee
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} isVisible={warrantyVisible}>
            <p className="mt-6 text-lg text-grey-dark leading-[1.7] max-w-[680px] mx-auto">
              We&apos;ve invested thousands of hours perfecting our inflatable tents, creating what
              we believe is the ultimate event structure on the market. We&apos;re so confident in
              its quality and durability that we back it with a full 5-year warranty and a
              money-back guarantee — if you&apos;re not completely satisfied, neither are we.
            </p>
          </FadeUp>
          <FadeUp delay={0.25} isVisible={warrantyVisible}>
            <div className="mt-10">
              <Link
                to="/free-3d-design"
                className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-all duration-200"
              >
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                Request free 3D design
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Testimonials */}
      <div ref={cardsRef} className="py-20 md:py-[100px]">
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-tight text-center mb-12"
            style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
          >
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white border border-grey-light rounded-xl p-10 transition-all duration-600"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${i * 0.12}s`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <p className="text-lg italic text-grey-dark leading-[1.7] mb-8">{t.quote}</p>
                <div className="border-t border-grey-light pt-6 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-bold text-black">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.05em] text-grey-mid mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 6: PROCESS                                               */
/* ================================================================== */
const processSteps = [
  {
    number: '01',
    headline: 'REQUEST A FREE 3D DESIGN',
    description:
      "Curious about how your logos and colors would look on an inflatable tent? Reach out to us now, and we'll deliver a completely free, custom 3D design within 24 hours (barring weekends).",
  },
  {
    number: '02',
    headline: 'MOVE FORWARD WITH A SINGLE CLICK',
    description:
      "With your free design, you'll also receive a custom quotation. So, if you're ready to move ahead, you can order your tent with a single click.",
  },
  {
    number: '03',
    headline: 'DELIVERED TO YOU WITHIN 10\u201314 BUSINESS DAYS',
    description:
      "Once we've received your order, we'll design your tent and ship it to you within 14 business days.",
  },
]

function ProcessSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: stepsRef, visibleItems } = useStaggerAnimation(processSteps.length, {
    threshold: 0.1,
    staggerDelay: 0.15,
  })

  return (
    <section ref={sectionRef} className="bg-grey-pale py-20 md:py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0} isVisible={isVisible}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-grey-mid mb-6">
              How It Works
            </p>
          </FadeUp>
          <FadeUp delay={0.08} isVisible={isVisible}>
            <h2
              className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
            >
              The Process
            </h2>
          </FadeUp>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[32px] left-[16%] right-[16%] h-px bg-grey-light" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="text-center transition-all duration-500"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${i * 0.15}s`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span className="font-mono text-[64px] font-normal text-grey-light leading-none">
                  {step.number}
                </span>
                <h3 className="mt-4 font-headline text-xl font-bold uppercase text-black tracking-tight">
                  {step.headline}
                </h3>
                <p className="mt-4 text-base text-grey-dark leading-[1.7]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 7: INSTAGRAM CTA                                         */
/* ================================================================== */
function InstagramCTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="bg-grey-pale py-20 md:py-[100px]">
      <div className="max-w-content mx-auto px-6 text-center">
        <FadeUp delay={0} isVisible={isVisible}>
          <h2
            className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-none"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            See Us In Action
          </h2>
        </FadeUp>
        <FadeUp delay={0.12} isVisible={isVisible}>
          <p className="mt-6 text-lg text-grey-dark max-w-[560px] mx-auto leading-relaxed">
            Curious what we&apos;ve been up to and where in the world we&apos;ve been raising
            inflatable tents? Join us on Instagram!
          </p>
        </FadeUp>
        <FadeUp delay={0.24} isVisible={isVisible}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-8 text-sm font-semibold text-black border-b border-black pb-1 hover:border-2 transition-all"
          >
            <Instagram size={16} />
            Join us on Instagram
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 8: FOOTER CTA                                            */
/* ================================================================== */
function FooterCTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="bg-white border-t border-grey-light py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 text-center">
        <FadeUp delay={0} isVisible={isVisible}>
          <h2
            className="font-headline font-black uppercase text-black tracking-[-0.02em] leading-tight max-w-[800px] mx-auto"
            style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}
          >
            Ready to Take Your Brand to the Next Level?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} isVisible={isVisible}>
          <p className="mt-6 text-base text-grey-dark max-w-[600px] mx-auto leading-[1.7]">
            Request your FREE 3D Design today and we&apos;ll show you how our inflatable tents will
            boost your brand exposure at your next event, clinic, sampling or sponsorship.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} isVisible={isVisible}>
          <div className="mt-10">
            <Link
              to="/free-3d-design"
              className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-11 py-5 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-all duration-200"
            >
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
              Request free 3D design
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  HOME PAGE                                                          */
/* ================================================================== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSolutionSection />
      <ProductRangeSection />
      <WarrantyTestimonialsSection />
      <ProcessSection />
      <InstagramCTASection />
      <FooterCTASection />
    </>
  )
}
