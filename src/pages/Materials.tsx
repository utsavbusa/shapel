
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Materials = () => {
  useScrollToTop();

  const materialCategories = [
    {
      title: "Austenitic Stainless Steel",
      materials: ["304 / 304L", "316 / 316L", "321", "347"]
    },
    {
      title: "Duplex Stainless Steel", 
      materials: ["2205", "2507"]
    },
    {
      title: "Nickel Based Alloys",
      materials: ["Inconel 600 / 625 / 718", "Monel 400", "Hastelloy C-22 / C-276"]
    },
    {
      title: "Cobalt Based Alloys",
      materials: ["Stellite 6", "Stellite 21"]
    },
    {
      title: "Heat Resisting Steel",
      materials: ["HK", "HP", "HU", "HT"]
    },
    {
      title: "Martenistic Steel",
      materials: ["410", "420", "440C"]
    },
    {
      title: "Low Alloy Steel",
      materials: ["4140", "4340", "8620"]
    },
    {
      title: "Carbon Steel",
      materials: ["WCB", "LCB", "LCC"]
    },
    {
      title: "Non-Ferrous Grades",
      materials: ["Aluminum Alloys", "Copper Alloys", "Bronze"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Materials We Work With
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            SHAPEL works with a comprehensive range of high-quality materials to meet diverse industry requirements and specifications.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialCategories.map((category, index) => (
              <MaterialCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const MaterialCard = ({ category, index }: { category: { title: string; materials: string[] }; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 0.1}s` 
      }}
    >
      <Card className="h-full hover-lift bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-[#ED1C24] to-red-600 text-white">
          <CardTitle className="text-xl font-bold text-center">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-3">
            {category.materials.map((material, materialIndex) => (
              <li 
                key={materialIndex}
                className="flex items-center text-gray-700 font-medium"
              >
                <div className="w-2 h-2 bg-[#ED1C24] rounded-full mr-3 flex-shrink-0"></div>
                <span>{material}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Materials;
