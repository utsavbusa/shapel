"use client";

import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Flame, Wrench, Hammer, Cog, Layers, Sparkles, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Materials = () => {
  const materialCategories = [
    {
      title: "Austenitic Stainless Steel",
      materials: ["304 / 304L", "316 / 316L", "321", "347"],
      icon: Shield,
      color: "from-[#ED1C24] to-red-700",
      description: "Corrosion-resistant with excellent formability",
    },
    {
      title: "Duplex Stainless Steel",
      materials: ["2205", "2507"],
      icon: Layers,
      color: "from-[#ED1C24] to-red-600",
      description: "High strength and corrosion resistance",
    },
    {
      title: "Nickel Based Alloys",
      materials: ["Inconel 600 / 625 / 718", "Monel 400", "Hastelloy C-22 / C-276"],
      icon: Sparkles,
      color: "from-[#ED1C24] to-red-800",
      description: "Superior high-temperature performance",
    },
    {
      title: "Cobalt Based Alloys",
      materials: ["Stellite 6", "Stellite 21"],
      icon: Zap,
      color: "from-red-500 to-[#ED1C24]",
      description: "Exceptional wear and heat resistance",
    },
    {
      title: "Heat Resisting Steel",
      materials: ["HK", "HP", "HU", "HT"],
      icon: Flame,
      color: "from-[#ED1C24] to-red-600",
      description: "Designed for high-temperature applications",
    },
    {
      title: "Martensitic Steel",
      materials: ["410", "420", "440C"],
      icon: Hammer,
      color: "from-red-600 to-[#ED1C24]",
      description: "High hardness and strength properties",
    },
    {
      title: "Low Alloy Steel",
      materials: ["4140", "4340", "8620"],
      icon: Wrench,
      color: "from-[#ED1C24] to-red-700",
      description: "Enhanced mechanical properties",
    },
    {
      title: "Carbon Steel",
      materials: ["WCB", "LCB", "LCC"],
      icon: Cog,
      color: "from-red-700 to-[#ED1C24]",
      description: "Versatile and cost-effective solutions",
    },
    {
      title: "Non-Ferrous Grades",
      materials: ["Aluminum Alloys", "Copper Alloys", "Bronze"],
      icon: Palette,
      color: "from-[#ED1C24] to-red-800",
      description: "Lightweight and corrosion-resistant",
    },
  ];
  const heroAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();

  // Add refs for each card section
  const cardRefs = materialCategories.map(() => useScrollAnimation());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Header />
      <main className="pt-20">
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
              <h1 className="text-5xl font-bold mb-6 animate-slide-down">Materials We Work With</h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animate-delay-300">
                Explore our extensive range of high-quality materials designed for precision and durability in metal
                casting.
              </p>
            </div>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materialCategories.map((category, index) => (
                <div
                  key={index}
                  ref={cardRefs[index].ref}
                  className={`transition-all duration-1000 ${
                    cardRefs[index].isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}>
                  <MaterialCard category={category} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const MaterialCard = ({
  category,
  index,
}: {
  category: {
    title: string;
    materials: string[];
    icon: React.ComponentType<any>;
    color: string;
    description: string;
  };
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <div className="group h-full">
      <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 hover:border-[#ED1C24]/30 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#ED1C24] rounded-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{category.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-white border-[#ED1C24] text-[#ED1C24] font-medium">
              {category.materials.length}
            </Badge>
          </div>
        </div>

        {/* Materials List */}
        <CardContent className="p-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-2">
              Available Grades
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {category.materials.map((material, materialIndex) => (
                <div
                  key={materialIndex}
                  className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#ED1C24]/5 rounded-lg transition-colors duration-200 border border-transparent hover:border-[#ED1C24]/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#ED1C24] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium text-sm">{material}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">GRADE</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Industry Standard</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Materials;
