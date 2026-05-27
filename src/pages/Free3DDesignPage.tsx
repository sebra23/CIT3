import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router'
import { Upload, X, ArrowRight, Check } from 'lucide-react'

export default function Free3DDesignPage() {
  const [searchParams] = useSearchParams()
  const productParam = searchParams.get('product') || ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
    productInterest: productParam,
  })
  const [file, setFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0])
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0])
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="bg-white min-h-screen pt-[120px] pb-20">
        <div className="max-w-[800px] mx-auto px-6 text-center py-20">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-[Montserrat] text-[clamp(32px,5vw,56px)] font-black uppercase tracking-[-0.02em] text-black mb-4">
            THANK YOU
          </h1>
          <p className="text-lg text-[#222] max-w-[480px] mx-auto mb-8">
            We&apos;ve received your request. Our design team will prepare your custom 3D concept within 24 hours (weekends excluded).
          </p>
          <p className="text-sm text-[#666] mb-8">
            A confirmation email has been sent to {formData.email || 'your inbox'}.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Back to homepage
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-[140px] pb-[60px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="font-[Archivo] text-[clamp(48px,10vw,120px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-black">
            UPLOAD<br />
            YOUR LOGO<br />
            TO START YOUR<br />
            3D CONCEPT.
          </h1>
          <p className="text-lg text-[#222] max-w-[480px] mx-auto mt-8 leading-relaxed">
            Our design team will prepare your custom 3D concept based on your branding within 24 hours (weekends excluded).
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-[120px]">
        <div className="max-w-[800px] mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm text-[#666] mb-2">Full name*</label>
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
                <label className="block text-sm text-[#666] mb-2">Email address*</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Row 2: Phone + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm text-[#666] mb-2">Phone number*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(for design questions)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent placeholder:text-[#999]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666] mb-2">Company name*</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-[#D0D0D0] pb-3 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Row 3: Logo Upload */}
            <div>
              <label className="block text-sm text-[#666] mb-3">Upload your logo file</label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                onDragLeave={() => setIsDragging(false)}
                className={`border-2 ${isDragging ? 'border-black bg-[#F5F5F5]' : 'border-dashed border-[#D0D0D0]'} rounded-xl p-12 text-center transition-colors cursor-pointer`}
                onClick={() => document.getElementById('logo-upload')?.click()}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm font-semibold text-black">{file.name}</span>
                    <span className="text-xs text-[#666]">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setFile(null) }}
                      className="p-1 hover:bg-[#F5F5F5] rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-[#666]" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-[#666] mx-auto mb-4" />
                    <p className="text-sm text-[#666] mb-2">
                      Drag and drop your logo here, or click to browse
                    </p>
                    <p className="text-xs text-[#999] mb-4">
                      PNG, JPG, SVG, PDF &mdash; max 10MB
                    </p>
                    <button
                      type="button"
                      className="border border-black bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
                    >
                      Select files
                    </button>
                  </>
                )}
                <input
                  id="logo-upload"
                  type="file"
                  accept=".png,.jpg,.jpeg,.svg,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Row 4: Tent Size Selection */}
            <div>
              <label className="block text-sm text-[#666] mb-3">Tent size interest</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: '3x3m', label: '3\u00d73m' },
                  { id: '4x4m', label: '4\u00d74m' },
                  { id: '5x5m', label: '5\u00d75m' },
                  { id: '6x6m', label: '6\u00d76m' },
                ].map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, productInterest: size.id }))}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold uppercase transition-all ${
                      formData.productInterest === size.id
                        ? 'border-black bg-black text-white'
                        : 'border-[#D0D0D0] text-[#222] hover:border-black'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Project Notes */}
            <div>
              <label className="block text-sm text-[#666] mb-2">Tell us about your project</label>
              <textarea
                name="notes"
                placeholder="Design preferences, branding colors, event details..."
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full border border-[#D0D0D0] rounded-lg p-4 text-black text-base focus:border-black focus:outline-none transition-colors bg-transparent resize-vertical placeholder:text-[#999]"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-full px-9 py-5 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                REQUEST YOUR FREE 3D DESIGN
              </button>
              <p className="text-xs text-[#666] text-center mt-4">
                You will receive a free 3D concept design of your branded tent within 24 hours. Your sign-up is completely obligation-free.
              </p>
            </div>
          </form>

          {/* Trust Note */}
          <div className="mt-16 pt-10 border-t border-[#D0D0D0]">
            <h3 className="font-[Montserrat] text-lg font-bold uppercase tracking-wider text-black mb-6">
              EVERY QUOTE INCLUDES:
            </h3>
            <ul className="space-y-3">
              {[
                'Free custom 3D design rendering',
                'Full-colour dye-sub print quote',
                'Electric pump + carry bag',
                'Ground stakes and guy-lines',
                '5-year warranty',
                'Free mainland delivery',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#222]">
                  <Check className="w-4 h-4 text-black flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
