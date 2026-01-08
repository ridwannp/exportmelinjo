import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, Image as ImageIcon } from 'lucide-react'
import { galleryImages } from '../data/products'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'products', name: 'Products' },
  { id: 'production', name: 'Production' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'shipping', name: 'Shipping' },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-lg text-white/85">
              Explore our products, production processes, packaging solutions, 
              and shipping operations through our visual gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 sticky top-16 z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium text-sm border-none cursor-pointer transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? 'bg-[#2D5A27] text-white' 
                    : 'bg-[#FAF8F5] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((item) => (
              <div 
                key={item.id}
                className="gallery-item group"
                onClick={() => setSelectedImage(item)}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200">
                    <ImageIcon size={40} className="text-gray-400" />
                    <span className="mt-2 text-xs text-center px-2 text-gray-500">{item.title}</span>
                  </div>
                )}
                <div className="gallery-overlay">
                  <div>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[#C9A227] text-[#1A1A1A] mb-1">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon size={48} className="text-gray-400 mx-auto" />
              <p className="mt-4 text-gray-500">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to See More?</h2>
          <p className="text-white/85 mb-8">
            Request a virtual facility tour or product samples to see our quality firsthand.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Request Samples
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border-none cursor-pointer hover:bg-white/20 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-white" />
          </button>

          <div 
            className="max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.image ? (
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto" />
            ) : (
              <div className="aspect-video flex flex-col items-center justify-center bg-gray-200">
                <ImageIcon size={80} className="text-gray-400" />
                <span className="mt-4 text-lg text-gray-500">{selectedImage.title}</span>
              </div>
            )}
            <div className="p-6 bg-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#2D5A27]/10 text-[#2D5A27] mb-2">
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
