import { Link } from 'react-router-dom'
import { Package, ArrowRight } from 'lucide-react'

function ProductCard({ product }) {
  const { name, description, specs, image, grade } = product

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package size={48} className="text-gray-400" />
          </div>
        )}
        
        {/* Grade Badge */}
        {grade && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A227] text-[#1A1A1A]">
            {grade}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>

        {/* Specs */}
        {specs && (
          <div className="space-y-2 mb-4">
            {specs.slice(0, 3).map((spec, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{spec.label}</span>
                <span className="text-gray-900 font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          to={`/contact?product=${encodeURIComponent(name)}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-medium text-sm bg-[#2D5A27]/10 text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white no-underline transition-all duration-200"
        >
          Request Quote
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
