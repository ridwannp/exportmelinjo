import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Leaf, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Quality Excellence',
    description: 'Every product undergoes rigorous quality inspection to meet international standards.',
  },
  {
    icon: Users,
    title: 'Farmer Partnership',
    description: 'We work directly with local farmers, ensuring fair trade and sustainable sourcing.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible practices throughout our supply chain.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Dedicated to building long-term partnerships with our international buyers.',
  },
]

const milestones = [
  { year: '2009', event: 'Company founded in Pandeglang, Banten' },
  { year: '2012', event: 'First international export to Japan' },
  { year: '2015', event: 'Expanded to Middle East markets' },
  { year: '2018', event: 'HACCP certification achieved' },
  { year: '2021', event: 'Capacity expanded to 50 tons/month' },
  { year: '2024', event: 'Serving 25+ countries worldwide' },
]

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E3D1A] via-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About MelinjoExport</h1>
            <p className="text-lg text-white/85">
              Your trusted partner for premium Indonesian melinjo products, 
              connecting local farmers with global markets since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#C9A227] mb-4 block uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6">
                Bringing Indonesian Heritage to the World
              </h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                MelinjoExport was founded in 2009 with a simple mission: to share the unique 
                taste and quality of Indonesian melinjo with the world. What started as a 
                small family business in Pandeglang, Banten—the heart of Indonesia's melinjo 
                production—has grown into a trusted exporter serving buyers across four continents.
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Our founder, with over 25 years of experience in the agricultural industry, 
                recognized the potential of melinjo products in international markets. Today, 
                we work directly with over 100 local farmers, ensuring fair prices and 
                consistent quality while preserving traditional production methods.
              </p>

              <ul className="space-y-3">
                {[
                  '15+ years of export experience',
                  'Direct partnerships with 100+ farmers',
                  'Monthly capacity of 50,000 kg',
                  'Serving 25+ countries worldwide',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#2D5A27] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-square rounded-2xl bg-[#FAF8F5] border-2 border-dashed border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Leaf size={64} className="text-[#2D5A27] mx-auto" />
                <p className="mt-4 text-sm text-gray-400">Company Image / Facility Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Our Core Values</h2>
            <p className="text-gray-500 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[#2D5A27]/10">
                    <Icon size={28} className="text-[#2D5A27]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Our Journey</h2>
            <p className="text-gray-500 text-lg">Key milestones in our growth story</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#2D5A27] to-[#4A7C40]">
                  <span className="text-base md:text-lg font-bold text-white">{milestone.year}</span>
                </div>
                <div className="flex-grow py-4 md:py-5 px-4 md:px-6 rounded-xl bg-[#FAF8F5] flex items-center">
                  <p className="font-medium text-gray-800 text-sm md:text-base">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Network */}
      <section className="py-20 bg-gradient-to-r from-[#2D5A27] to-[#4A7C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Farmer Network</h2>
              <p className="text-white/85 mb-6 leading-relaxed">
                We believe in the power of direct partnerships. Our network of over 100 
                local farmers in Banten and Central Java are the backbone of our operation. 
                By working directly with them, we ensure:
              </p>
              <ul className="space-y-4">
                {[
                  'Fair and transparent pricing for farmers',
                  'Consistent quality through training programs',
                  'Sustainable farming practices',
                  'Year-round supply capacity',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-2xl bg-white/10 border-2 border-dashed border-white/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Users size={64} className="text-white/50 mx-auto" />
                <p className="mt-4 text-sm text-white/50">Farmer Partnership Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Ready to Work with Us?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Partner with a trusted Indonesian exporter for your melinjo product needs. 
            We're committed to quality, reliability, and your satisfaction.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-[#2D5A27] to-[#4A7C40] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Contact Us Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
