// pages/about.js or components/AboutPage.js
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Growing nature&apos;s finest mushrooms with passion and care
          </p>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Humble Beginnings</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our mushroom farming journey started in a small backyard greenhouse, 
                driven by a passion for organic farming and sustainable food production.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What began as a personal project to grow fresh, chemical-free mushrooms 
                for our family quickly grew into a mission to share nature&apos;s bounty with 
                our community.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to honor those roots by maintaining the same dedication 
                to quality, freshness, and environmental stewardship that started it all.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              {/* Replace with your actual farm image */}
              <div className="absolute inset-0 bg-green-200 flex items-center justify-center">
                <span className="text-green-600">Farm Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 italic">
                &quot;Deliver the freshest mushrooms to families while promoting sustainable 
                farming practices and environmental responsibility.&quot;
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 italic">
                "Promote healthy eating and sustainable farming by making organic mushrooms 
                accessible to every household while inspiring a connection with nature&apos;s gifts.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Farm Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Our Process</h2>
          
          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Farm Images Gallery */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-48 rounded-lg overflow-hidden bg-green-200 flex items-center justify-center">
                <span className="text-green-600">Farm Photo {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Meet Our Founder</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-lg overflow-hidden bg-green-200 flex items-center justify-center">
                <span className="text-green-600">Founder Photo</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Alex Johnson</h3>
                <p className="text-gray-700 mb-4">
                  With over 10 years of experience in organic farming and a degree in 
                  Sustainable Agriculture, Alex founded our mushroom farm with a simple 
                  vision: to grow the purest, most flavorful mushrooms while respecting 
                  our environment.
                </p>
                <p className="text-gray-700">
                  &quot;Every mushroom we grow carries our commitment to quality, sustainability, 
                  and the health of our community. We&apos;re not just farmers; we&apos;re stewards 
                  of the earth.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Taste the Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the fresh, organic mushrooms grown with care and dedication
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300">
            Shop Our Mushrooms
          </button>
        </div>
      </section>
    </div>
  )
}

const processSteps = [
  {
    title: "Cultivation",
    description: "We carefully cultivate mushrooms in controlled organic environments"
  },
  {
    title: "Harvest",
    description: "Hand-picked at peak freshness to ensure optimal flavor and nutrition"
  },
  {
    title: "Packaging",
    description: "Eco-friendly packaging that preserves freshness and quality"
  },
  {
    title: "Delivery",
    description: "Quick delivery to ensure you receive the freshest mushrooms possible"
  }
]