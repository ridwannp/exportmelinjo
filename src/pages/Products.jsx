import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, X } from 'lucide-react'
import { products } from '../data/products'

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-lg text-white/85">
              Premium quality melinjo products, carefully sourced and processed 
              for international markets. Available in various grades and packaging options.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="h-48 md:h-auto bg-gray-100 flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Package size={56} className="text-gray-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A227]/10 text-[#C9A227] mb-3">
                      {product.grade}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>

                    {/* Specs Preview */}
                    <div className="space-y-2 mb-4">
                      {product.specs.slice(0, 4).map((spec, index) => (
                        <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-gray-100">
                          <span className="text-gray-500">{spec.label}</span>
                          <span className="text-gray-900 font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 py-2.5 rounded-lg font-medium text-sm bg-[#2D5A27]/10 text-[#2D5A27] border-none cursor-pointer hover:bg-[#2D5A27]/20 transition-all"
                      >
                        View Details
                      </button>
                      <Link
                        to={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white no-underline"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Packaging Options</h2>
            <p className="text-gray-500 text-lg">Flexible packaging solutions to meet your import requirements</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'PP Bags', sizes: '25kg / 50kg', icon: '📦' },
              { name: 'Vacuum Pack', sizes: '5kg / 10kg / 25kg', icon: '🛡️' },
              { name: 'Carton Box', sizes: '5kg / 10kg', icon: '📥' },
              { name: 'Custom Packaging', sizes: 'Based on requirement', icon: '✨' },
            ].map((pkg, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-[#FAF8F5]">
                <span className="text-4xl mb-4 block">{pkg.icon}</span>
                <h4 className="font-semibold text-gray-900 mb-1">{pkg.name}</h4>
                <p className="text-sm text-gray-500">{pkg.sizes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Order?</h2>
          <p className="text-white/85 mb-8">
            We can accommodate special requirements including custom grades, sizes, and packaging.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Request Custom Quotation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A227]/10 text-[#C9A227] mb-2">
                  {selectedProduct.grade}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-lg bg-gray-100 border-none cursor-pointer hover:bg-gray-200 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-500 mb-6 leading-relaxed">{selectedProduct.fullDescription}</p>

              <h4 className="font-semibold text-gray-900 mb-4">Specifications</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedProduct.specs.map((spec, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#FAF8F5]">
                    <span className="text-xs block text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-gray-900 mb-4">Available Packaging</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProduct.packaging.map((pkg, index) => (
                  <span key={index} className="px-3 py-2 rounded-lg text-sm bg-[#2D5A27]/10 text-[#2D5A27]">
                    {pkg}
                  </span>
                ))}
              </div>

              <Link
                to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-semibold bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white no-underline"
              >
                Request Quote for {selectedProduct.name}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
