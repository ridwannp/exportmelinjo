import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Export', path: '/export' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#2D5A27] to-[#4A7C40]">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-[#2D5A27]' : 'text-white'}`}>
              MelinjoExport
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 no-underline ${
                  isScrolled
                    ? location.pathname === link.path
                      ? 'text-[#2D5A27]'
                      : 'text-gray-800 hover:text-[#2D5A27]'
                    : location.pathname === link.path
                      ? 'text-[#C9A227]'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Request Quotation
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 bg-transparent border-none cursor-pointer ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 rounded-xl bg-white shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-[#2D5A27] bg-[#2D5A27]/5'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] rounded-lg no-underline"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
