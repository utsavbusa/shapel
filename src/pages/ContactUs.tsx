import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";

const ContactUs = () => {
  useScrollToTop();

  const heroAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();
  const mapAnimation = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              <h1 className="text-5xl font-bold mb-6 animate-slide-down">Contact SHAPEL</h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animate-delay-300">
                Ready to discuss your metal casting project? Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactAnimation.ref}
          className={`py-20 transition-all duration-1000 ${
            contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-fade-in-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slide-up animate-delay-200">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="animate-slide-up animate-delay-300">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="animate-slide-up animate-delay-400">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="animate-slide-up animate-delay-500">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#ED1C24] hover:bg-red-700 text-white py-3 text-lg font-semibold animate-bounce-in animate-delay-600">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="animate-fade-in-right">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4 animate-slide-up animate-delay-200">
                      <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                        <p className="text-gray-600">
                          Shree Shakti Technocast LLP
                          <br />
                          PLOT NO. 1 + 2 , SR NO. 361/3/1
                          <br />
                          KAGDADI,RAJKOT GUJARAT
                          <br />
                          360003
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 animate-slide-up animate-delay-300">
                      <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                        <p className="text-gray-600">+91 8000088535</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 animate-slide-up animate-delay-400">
                      <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                        <p className="text-gray-600">info@shreeshaktitechnocast.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 animate-slide-up animate-delay-500">
                      <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={mapAnimation.ref}
          className={`bg-gray-50 py-20 transition-all duration-1000 ${
            mapAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-down">Find Us</h2>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center hover-lift animate-scale-in animate-delay-300">
                <div className="text-gray-600 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map Location</p>
                  <p className="text-sm">123 Industrial Boulevard, Manufacturing District</p>
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

export default ContactUs;
