import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, FileCheck, Microscope } from 'lucide-react'
import { certifications, qualityProcess } from '../data/products'

function Quality() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quality & Certification</h1>
            <p className="text-lg text-white/85">
              We maintain the highest quality standards throughout our production process, 
              ensuring every shipment meets international food safety requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Our Quality Control Process</h2>
            <p className="text-gray-500 text-lg">A rigorous multi-stage process ensures consistent quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#2D5A27] h-full">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#2D5A27] to-[#4A7C40] mb-6">
                    <span className="text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#C9A227] mb-4 block uppercase tracking-wide">Quality Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6">Food Safety is Our Priority</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We implement comprehensive quality management systems to ensure our 
                products meet the strictest international food safety requirements.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Microscope, text: 'Laboratory testing for each batch' },
                  { icon: Shield, text: 'Strict hygiene protocols in production' },
                  { icon: FileCheck, text: 'Full traceability from farm to shipment' },
                  { icon: Award, text: 'Continuous quality improvement programs' },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2D5A27]/10">
                        <Icon size={24} className="text-[#2D5A27]" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="aspect-square rounded-2xl bg-white border-2 border-dashed border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Shield size={64} className="text-[#2D5A27] mx-auto" />
                <p className="mt-4 text-sm text-gray-400">Quality Control Process Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Our Certifications</h2>
            <p className="text-gray-500 text-lg">Recognized quality and compliance certifications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br from-[#2D5A27]/10 to-[#C9A227]/10">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{cert.name}</h4>
                <p className="text-sm text-gray-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Testing Parameters</h2>
            <p className="text-gray-500 text-lg">Comprehensive testing ensures product quality</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2D5A27] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                    <th className="px-6 py-4 text-left font-semibold">Standard</th>
                    <th className="px-6 py-4 text-left font-semibold">Testing Method</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Moisture Content', standard: '≤12%', method: 'Oven drying method' },
                    { param: 'Foreign Matter', standard: '≤0.5%', method: 'Visual inspection' },
                    { param: 'Defective Seeds', standard: '≤3%', method: 'Manual sorting' },
                    { param: 'Size Uniformity', standard: '≥90%', method: 'Sieve analysis' },
                    { param: 'Aflatoxin', standard: '≤10 ppb', method: 'ELISA / HPLC' },
                    { param: 'Microbiological', standard: 'Per ICMSF', method: 'Plate count' },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.param}</td>
                      <td className="px-6 py-4 text-gray-500">{row.standard}</td>
                      <td className="px-6 py-4 text-gray-500">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Request Quality Documentation</h2>
          <p className="text-white/85 mb-8">
            We provide comprehensive quality documentation including Certificate of Analysis (COA), 
            test reports, and sample shipments upon request.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C65C] text-[#1A1A1A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Request Documentation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Quality
