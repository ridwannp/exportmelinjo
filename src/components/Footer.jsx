import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality & Certification', path: '/quality' },
  { name: 'Export Capability', path: '/export' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const products = [
  'Raw Melinjo',
  'Peeled Melinjo',
  'Raw Emping Melinjo',
  'Ready-to-Fry Emping',
]

function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#1E3D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                <Leaf className="w-6 h-6 text-[#C9A227]" />
              </div>
              <span className="text-xl font-bold text-white">MelinjoExport</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Your trusted partner for premium Indonesian melinjo products. 
              Export-ready quality, directly from local farmers to global markets.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 text-white hover:bg-[#C9A227] hover:text-[#1A1A1A] transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-[#C9A227] no-underline transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-white/70 hover:text-[#C9A227] no-underline transition-colors duration-200"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Jl. Raya Melinjo No. 123,<br />
                  Pandeglang, Banten 42212,<br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A227] flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-sm text-white/70 no-underline hover:text-[#C9A227]">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A227] flex-shrink-0" />
                <a href="mailto:export@melinjoexport.com" className="text-sm text-white/70 no-underline hover:text-[#C9A227]">
                  export@melinjoexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 mb-8 rounded-xl bg-white/5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {['Phytosanitary Certified', 'Halal Certified', 'HACCP Ready', 'ISO 22000 Ready'].map((badge) => (
              <span 
                key={badge}
                className="text-sm font-medium px-4 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227]"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} MelinjoExport. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 no-underline hover:text-white/80">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 no-underline hover:text-white/80">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
