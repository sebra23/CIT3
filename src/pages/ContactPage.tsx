import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-[140px] pb-[60px] border-b border-[#D0D0D0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-[Archivo] text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-black">
            CONTACT
          </h1>
          <p className="text-xl text-[#222] max-w-[640px] mt-6 leading-relaxed">
            Have a question about our inflatable tents, need a custom quote, or want to discuss your next event? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-[Montserrat] text-2xl font-black uppercase tracking-wider text-black mb-8">
                REACH OUT
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[#666] tracking-wider mb-1">Phone</p>
                    <a
                      href="tel:+41766737581"
                      className="text-lg text-black font-semibold hover:underline"
                    >
                      +41 76 673 75 81
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[#666] tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:info@custominflatabletents.com"
                      className="text-lg text-black font-semibold hover:underline"
                    >
                      info@custominflatabletents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[#666] tracking-wider mb-1">Address</p>
                    <p className="text-lg text-black font-semibold">
                      Custom Inflatable Tents (CIT)
                    </p>
                    <p className="text-base text-[#222]">Häldelistrasse 15a</p>
                    <p className="text-base text-[#222]">Switzerland</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-12 p-8 bg-[#F5F5F5] rounded-xl">
                <h3 className="font-[Montserrat] text-lg font-bold uppercase tracking-wider text-black mb-2">
                  WANT A FASTER RESPONSE?
                </h3>
                <p className="text-base text-[#222] mb-6">
                  Request a free 3D design of your branded tent and we&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  to="/free-3d-design"
                  className="inline-flex items-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Free 3D Design
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-[Montserrat] text-3xl font-black uppercase tracking-[-0.02em] text-black mb-4">
                    MESSAGE SENT
                  </h2>
                  <p className="text-lg text-[#222]">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm text-[#666] mb-2">Full name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] mb-2">Email address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] mb-2">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] mb-2">Company name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-[#D0D0D0] rounded-lg p-4 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-full px-9 py-5 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
