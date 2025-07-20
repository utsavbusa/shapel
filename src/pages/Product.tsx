import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Product = () => {
  useScrollToTop();

  const heroAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroAnimation.ref}
          className={`relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 overflow-hidden transition-all duration-1000 ${
            heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1572019637935-a6bc9723b3b6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}></div>

          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-slide-down">Our Products</h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animate-delay-300">
                Precision-engineered metal casting products that meet the highest industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section
          ref={galleryAnimation.ref}
          className={`py-20 transition-all duration-1000 ${
            galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift animate-scale-in animate-delay-200">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/lovable-uploads/d6befdc7-3ffa-4f74-8587-810acb851f13.png"
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift animate-scale-in animate-delay-400">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/lovable-uploads/79b2b5ba-baa3-4d9b-82f3-94c298c0437f.png"
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift animate-scale-in animate-delay-600">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/lovable-uploads/6c1a7e65-7e0f-4f86-a4da-86d400793507.png"
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
