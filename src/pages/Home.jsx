import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, stats, highlights } from '../data/products'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        {/* Decorative Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/20 text-[#C9A227] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
              <span className="text-sm font-medium">Trusted Indonesian Exporter</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Melinjo Products for{' '}
              <span className="text-[#C9A227]">Global Markets</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              Your trusted partner for high-quality Indonesian melinjo and emping. 
              Direct sourcing from local farmers with export-ready packaging for 
              international buyers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                Request Quotation
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#2D5A27] transition-all duration-200 no-underline"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Why Choose MelinjoExport?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We deliver premium quality melinjo products with reliability and professionalism
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-[#FAF8F5] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl bg-[#2D5A27]/10">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Our Products</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Premium quality melinjo products, carefully processed and packed for export
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center py-4">
                <div className="text-4xl md:text-5xl font-extrabold text-[#C9A227] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">
                Serving Global Markets
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We export premium melinjo products to buyers across Asia, Middle East, 
                Europe, and Americas. Our comprehensive export services include documentation, 
                shipping, and logistics support.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Full export documentation support',
                  'Flexible shipping options (FOB, CIF, EXW)',
                  'Competitive pricing for bulk orders',
                  'Dedicated customer support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#2D5A27] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/export" 
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5]">
              <div className="text-center mb-6">
                <Globe size={56} className="text-[#2D5A27] mx-auto" />
                <h3 className="text-xl font-bold text-gray-900 mt-4">Markets We Serve</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { region: 'Asia', icon: '🌏' },
                  { region: 'Middle East', icon: '🕌' },
                  { region: 'Europe', icon: '🏰' },
                  { region: 'Americas', icon: '🗽' },
                ].map((market, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white"
                  >
                    <span className="text-2xl">{market.icon}</span>
                    <span className="font-medium text-gray-900">{market.region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3D1A] to-[#2D5A27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Get a competitive quotation for your melinjo product requirements. 
            We're ready to serve buyers worldwide with premium Indonesian products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              Request Quotation
              <ArrowRight size={18} />
            </Link>
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-200 no-underline"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
