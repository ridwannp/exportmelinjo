import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { products } from '../data/products'

const incotermsOptions = ['FOB Jakarta', 'FOB Surabaya', 'CIF (to destination)', 'EXW (ex-works)']
const countries = [
  'Japan', 'South Korea', 'Taiwan', 'Hong Kong', 'Singapore', 'Malaysia',
  'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait',
  'Netherlands', 'Germany', 'United Kingdom', 'France',
  'United States', 'Canada', 'Australia', 'Other'
]

function Contact() {
  const [searchParams] = useSearchParams()
  const preselectedProduct = searchParams.get('product')

  const [formData, setFormData] = useState({
    product: preselectedProduct || '',
    quantity: '',
    country: '',
    incoterms: '',
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, product: preselectedProduct }))
    }
  }, [preselectedProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Form submitted:', formData)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Request Quotation</h1>
            <p className="text-lg text-white/85">
              Ready to order? Fill out the form below and our export team will 
              respond with a competitive quotation within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md order-2 lg:order-1">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-[#2D5A27]/10">
                    <Send size={40} className="text-[#2D5A27]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-500 mb-6">
                    Your quotation request has been received. Our export team will 
                    contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        product: '', quantity: '', country: '', incoterms: '',
                        company: '', contactPerson: '', email: '', phone: '', message: '',
                      })
                    }}
                    className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] border-none cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Request for Quotation (RFQ)</h3>

                  {/* Product & Quantity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Product *</label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        required
                      >
                        <option value="">Select product</option>
                        {products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Quantity (kg) *</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        placeholder="e.g., 5000"
                        required
                      />
                    </div>
                  </div>

                  {/* Country & Incoterms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Destination Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        required
                      >
                        <option value="">Select country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Preferred Incoterms</label>
                      <select
                        name="incoterms"
                        value={formData.incoterms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                      >
                        <option value="">Select incoterms</option>
                        {incotermsOptions.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-200" />

                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Contact Person *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        placeholder="Full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 font-medium text-gray-700 text-sm">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27]"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-1.5 font-medium text-gray-700 text-sm">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#2D5A27] min-h-[120px] resize-y"
                      placeholder="Any specific requirements, packaging preferences, or questions..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] border-none cursor-pointer transition-opacity ${isSubmitting ? 'opacity-70' : 'hover:shadow-lg'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Quotation Request'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Prefer to contact us directly? Reach out via WhatsApp, email, or phone. 
                Our export team is available Monday to Friday, 9 AM - 5 PM (GMT+7).
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white no-underline hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#25D366]">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm block text-gray-500">WhatsApp</span>
                    <span className="font-semibold text-gray-900">+62 812-3456-7890</span>
                  </div>
                </a>

                <a
                  href="mailto:export@melinjoexport.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white no-underline hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2D5A27]">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm block text-gray-500">Email</span>
                    <span className="font-semibold text-gray-900">export@melinjoexport.com</span>
                  </div>
                </a>

                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white no-underline hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#C9A227]">
                    <Phone size={24} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <span className="text-sm block text-gray-500">Phone</span>
                    <span className="font-semibold text-gray-900">+62 812-3456-7890</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2D5A27]/10 flex-shrink-0">
                    <MapPin size={24} className="text-[#2D5A27]" />
                  </div>
                  <div>
                    <span className="text-sm block text-gray-500">Office Address</span>
                    <span className="font-semibold text-gray-900">
                      Jl. Raya Melinjo No. 123<br />
                      Pandeglang, Banten 42212<br />
                      Indonesia
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden h-48 lg:h-64 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin size={40} className="text-gray-400 mx-auto" />
                  <p className="mt-2 text-sm text-gray-400">Google Maps Embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
