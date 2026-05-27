import { Link } from 'react-router'
import { Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-grey-light">
      <div className="max-w-content mx-auto px-6 pt-20 pb-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex flex-col">
              <span className="font-headline text-2xl font-black tracking-tight text-black leading-none">CIT</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-grey-mid mt-0.5">Custom Inflatable Tents</span>
            </Link>
            <p className="mt-4 text-sm text-grey-mid leading-relaxed">
              Europe's leading inflatable tents for marketing, promotions and events.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-black mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                { label: '3\u00d73m', path: '/products/3x3m' },
                { label: '4\u00d74m', path: '/products/4x4m' },
                { label: '5\u00d75m', path: '/products/5x5m' },
                { label: '6\u00d76m', path: '/products/6x6m' },
                { label: 'View all products', path: '/products' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm text-grey-dark hover:text-black hover:underline transition-colors ${
                      link.label.includes('View all') ? 'font-bold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-black mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About us', path: '/about' },
                { label: 'Blog', path: '/blog' },
                { label: 'Free 3D Design', path: '/free-3d-design' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-grey-dark hover:text-black hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-black mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41766737581"
                  className="flex items-center gap-2 text-sm text-grey-dark hover:text-black transition-colors"
                >
                  <Phone size={14} />
                  <span>+41 76 673 75 81</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@custominflatabletents.com"
                  className="flex items-center gap-2 text-sm text-grey-dark hover:text-black transition-colors"
                >
                  <Mail size={14} />
                  <span>info@custominflatabletents.com</span>
                </a>
              </li>
              <li>
                <p className="text-sm text-grey-mid leading-relaxed">
                  Inflatable Tents&reg; Häldelistrasse 15a, Switzerland
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-grey-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-grey-mid">
            &copy; 2026 Inflatable Tents
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/disclaimer"
              className="text-xs text-grey-mid hover:text-black transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              to="/terms"
              className="text-xs text-grey-mid hover:text-black transition-colors"
            >
              Terms and conditions
            </Link>
            <Link
              to="/cookie-policy"
              className="text-xs text-grey-mid hover:text-black transition-colors"
            >
              Cookie policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-mid hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-mid hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-mid hover:text-black transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
