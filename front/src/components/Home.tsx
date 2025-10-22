// pages/index.js or components/HomePage.js
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <>
      <Head>
        <title>Fresh Organic Mushrooms | Farm to Table Quality</title>
        <meta name="description" content="Fresh, organic mushrooms delivered to your doorstep. Farm-to-table quality, hygienically packed." />
      </Head>

      <div className="min-h-screen m-2 rounded-sm">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 bg-green-900">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Replace with actual image */}
            <div className="w-full h-full bg-green-200 flex items-center justify-center">
              <span className="text-green-600 text-xl">Hero Image: Fresh Mushrooms</span>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Fresh, Organic Mushrooms<br />
              <span className="text-green-300">Delivered to Your Doorstep</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Farm-to-table quality, hygienically packed. Experience the freshest mushrooms from our farm to your kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="bg-white text-green-800 hover:bg-green-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
                View Products
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Mushroom Varieties</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our wide range of fresh, organic mushrooms grown with care and passion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 bg-green-200">
                    {/* Product Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-green-600">Image: {product.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-700">${product.price}</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Why Choose Our Mushrooms?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;re committed to delivering the highest quality mushrooms with unmatched benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter & CTA Section */}
        <section className="py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter */}
              <div>
                <h2 className="text-4xl font-bold mb-4">Subscribe for Offers & New Arrivals</h2>
                <p className="text-xl mb-8 text-green-100">
                  Be the first to know about new mushroom varieties, special offers, and farming updates.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition duration-300 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-sm text-green-200 mt-4">
                  No spam ever. Unsubscribe anytime.
                </p>
              </div>

              {/* Final CTA */}
              <div className="text-center lg:text-right">
                <h3 className="text-3xl font-bold mb-4">Ready to Taste the Difference?</h3>
                <p className="text-xl mb-8 text-green-100">
                  Experience farm-fresh mushrooms delivered straight to your kitchen.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Product Data
const products = [
  {
    name: "Button Mushrooms",
    description: "Classic white mushrooms, perfect for everyday cooking with mild flavor and firm texture.",
    price: "8.99"
  },
  {
    name: "Shiitake Mushrooms",
    description: "Rich, savory flavor with meaty texture. Ideal for Asian dishes and gourmet recipes.",
    price: "12.99"
  },
  {
    name: "Oyster Mushrooms",
    description: "Delicate, mild flavor with velvety texture. Great for stir-fries and vegetarian dishes.",
    price: "10.99"
  },
  {
    name: "Portobello Mushrooms",
    description: "Large, meaty caps perfect for grilling and as vegetarian burger alternatives.",
    price: "11.99"
  }
]

// Benefit Icons
const OrganicIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const DeliveryIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const SustainableIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
  </svg>
)

const QualityIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const benefits = [
  {
    icon: OrganicIcon,
    title: "100% Organic & Pesticide-Free",
    description: "Grown naturally without chemicals, ensuring pure and healthy mushrooms for your family."
  },
  {
    icon: DeliveryIcon,
    title: "Quick Delivery",
    description: "Fresh from farm to your doorstep within 24 hours of harvesting for maximum freshness."
  },
  {
    icon: SustainableIcon,
    title: "Sustainable Farming",
    description: "Eco-friendly practices that protect our environment while producing premium mushrooms."
  },
  {
    icon: QualityIcon,
    title: "Premium Quality",
    description: "Hand-selected and carefully packaged to maintain freshness, flavor, and nutritional value."
  }
]

const testimonials = [
  {
    quote: "Best mushrooms I've ever bought — fresh and tasty! The quality is consistently excellent.",
    name: "Sarah Johnson",
    role: "Regular Customer"
  },
  {
    quote: "As a chef, I demand the best ingredients. Their shiitake mushrooms are unparalleled in quality.",
    name: "Michael Chen",
    role: "Professional Chef"
  },
  {
    quote: "The delivery is always prompt, and the mushrooms arrive perfectly fresh every single time.",
    name: "Emily Rodriguez",
    role: "Home Cook"
  }
]

const stats = [
  {
    value: "5000+",
    label: "Happy Customers"
  },
  {
    value: "100%",
    label: "Organic"
  },
  {
    value: "24h",
    label: "Delivery"
  },
  {
    value: "15+",
    label: "Mushroom Varieties"
  }
]