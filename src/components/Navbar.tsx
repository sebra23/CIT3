import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Free 3D Design', path: '/free-3d-design' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-[12px] border-b border-grey-light'
            : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
      >
        <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
          {/* Left: Menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 group"
            aria-label="Open menu"
          >
            <Menu
              size={20}
              className={`transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
            />
            <span
              className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Menu
            </span>
          </button>

          {/* Center: Logo */}
          <Link
            to="/"
            className={`flex flex-col items-center transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <span className="font-headline text-[28px] font-black tracking-tight leading-none">CIT</span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] mt-0.5">Custom Inflatable Tents</span>
          </Link>

          {/* Right: Contact + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+41766737581"
              className={`flex items-center gap-2 text-sm transition-colors ${
                scrolled ? 'text-grey-dark' : 'text-white/90'
              } hover:opacity-70`}
            >
              <Phone size={14} />
              <span>+41 76 673 75 81</span>
            </a>
            <a
              href="mailto:info@custominflatabletents.com"
              className={`flex items-center gap-2 text-sm transition-colors ${
                scrolled ? 'text-grey-dark' : 'text-white/90'
              } hover:opacity-70`}
            >
              <Mail size={14} />
              <span>info@custominflatabletents.com</span>
            </a>
            <Link
              to="/free-3d-design"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider hover:bg-grey-dark transition-colors"
            >
              <ArrowRight size={14} />
              Free 3D Design
            </Link>
          </div>

          {/* Mobile: CTA only */}
          <div className="lg:hidden">
            <Link
              to="/free-3d-design"
              className="inline-flex items-center gap-1 bg-black text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
            >
              <ArrowRight size={12} />
              <span className="hidden sm:inline">Free 3D Design</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="max-w-content mx-auto px-6 h-full flex flex-col">
            {/* Menu header */}
            <div className="flex items-center justify-between h-[80px]">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
                aria-label="Close menu"
              >
                <X size={20} className="text-black" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-black">
                  Close
                </span>
              </button>
              <div className="flex flex-col items-center">
                <span className="font-headline text-[28px] font-black tracking-tight text-black leading-none">CIT</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-black mt-0.5">Custom Inflatable Tents</span>
              </div>
              <div className="w-20" />
            </div>

            {/* Menu links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-headline text-4xl md:text-5xl font-black uppercase text-black hover:text-grey-mid transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Menu footer */}
            <div className="pb-10 flex flex-col items-center gap-4">
              <a
                href="tel:+41766737581"
                className="flex items-center gap-2 text-grey-dark hover:text-black transition-colors"
              >
                <Phone size={16} />
                <span>+41 76 673 75 81</span>
              </a>
              <a
                href="mailto:info@custominflatabletents.com"
                className="flex items-center gap-2 text-grey-dark hover:text-black transition-colors"
              >
                <Mail size={16} />
                <span>info@custominflatabletents.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
