
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      title: "Manufacturing Director",
      company: "AutoTech Industries",
      content: "SHAPEL has been our trusted partner for over 5 years. Their precision casting and attention to detail have consistently exceeded our expectations. The quality of their work is simply outstanding.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      title: "Operations Manager",
      company: "Aerospace Solutions",
      content: "Working with SHAPEL has transformed our production capabilities. Their expertise in complex casting and commitment to deadlines makes them an invaluable partner in our supply chain.",
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Chief Engineer",
      company: "Marine Systems Corp",
      content: "The technical expertise and innovative solutions provided by SHAPEL have helped us achieve remarkable results. Their custom alloy casting capabilities are second to none.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-[#ED1C24]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear what our valued clients say about their experience working with SHAPEL.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[#ED1C24] opacity-20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-[#ED1C24] font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the SHAPEL difference in your next metal casting project.
              </p>
              <button className="bg-[#ED1C24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
