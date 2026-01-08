import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Ship, FileText, Clock, Box } from 'lucide-react'
import { exportCapabilities } from '../data/products'

function ExportCapability() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Export Capability</h1>
            <p className="text-lg text-white/85">
              With 15+ years of export experience, we provide comprehensive export services 
              to buyers worldwide. From documentation to logistics, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-6 bg-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Box, value: exportCapabilities.capacity.monthly, label: 'Monthly Capacity' },
              { icon: Globe, value: '25+', label: 'Countries Served' },
              { icon: Ship, value: '3', label: 'Incoterms Options' },
              { icon: Clock, value: '2-4 weeks', label: 'Lead Time' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex items-center gap-4 py-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-white/20">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countries Served */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Markets We Serve</h2>
            <p className="text-gray-500 text-lg">Exporting premium melinjo products to buyers worldwide</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportCapabilities.countries.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="font-bold text-[#2D5A27] mb-4 pb-4 border-b-2 border-[#2D5A27]">
                  {region.region}
                </h4>
                <ul className="space-y-2">
                  {region.countries.map((country, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span>•</span>{country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#C9A227] mb-4 block uppercase tracking-wide">Shipping Options</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6">Flexible Incoterms</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We offer multiple shipping terms to accommodate your import requirements. 
                Our logistics team handles all aspects of shipping, from container booking 
                to port documentation.
              </p>

              <div className="space-y-4">
                {exportCapabilities.incoterms.map((term, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#FAF8F5] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2D5A27]/10">
                      <Ship size={24} className="text-[#2D5A27]" />
                    </div>
                    <span className="font-medium text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Shipping Details</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FAF8F5]">
                  <span className="text-sm text-gray-500">Container Options</span>
                  <p className="font-medium text-gray-800 mt-1">{exportCapabilities.shipping.seaFreight}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5]">
                  <span className="text-sm text-gray-500">Lead Time</span>
                  <p className="font-medium text-gray-800 mt-1">{exportCapabilities.shipping.leadTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Export Documentation</h2>
            <p className="text-gray-500 text-lg">Complete documentation for smooth customs clearance</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exportCapabilities.shipping.documentation.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white">
                <FileText size={20} className="text-[#2D5A27] flex-shrink-0" />
                <span className="font-medium text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Production Capacity</h2>
              <p className="text-white/85 mb-8 leading-relaxed">
                Our production facility and farmer network can accommodate large-scale orders. 
                We maintain consistent supply throughout the year to meet your demand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#C9A227] mb-2">
                    {exportCapabilities.capacity.monthly}
                  </div>
                  <div className="text-sm text-white/80">Monthly Capacity</div>
                </div>
                <div className="p-6 rounded-xl bg-white/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#C9A227] mb-2">
                    {exportCapabilities.capacity.yearly}
                  </div>
                  <div className="text-sm text-white/80">Yearly Capacity</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white/10">
                <Box size={64} className="text-[#C9A227] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Need Larger Orders?</h4>
                <p className="text-sm text-white/80 mb-6">Contact us to discuss your volume requirements</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] no-underline"
                >
                  Get Custom Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Ready to Start Exporting?</h2>
          <p className="text-gray-500 mb-8">
            Contact our export team today for pricing, samples, and shipping arrangements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Request Export Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ExportCapability
