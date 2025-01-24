"use client";

import React, { useState } from 'react';
import { Coffee, Atom ,QrCodeIcon ,Leaf, AlertTriangle, BarChart3, Recycle, ThumbsUp, Heart, Droplets, Thermometer, Globe2, BookOpen, Trophy, FileText, Youtube, Mail } from 'lucide-react';
import FactCard from '@/components/FactCard';
import AlternativeCard from '@/components/AlternativeCard';
import ImpactCounter from '@/components/ImpactCounter';
import BeverageRiskCard from '@/components/BeverageRiskCard';
import RegionalGuide from '@/components/RegionalGuide';
import PledgeCounter from '@/components/PledgeCounter';
import Quiz from '@/components/Quiz';
import FAQSection from '@/components/FAQSection';
import CaseStudies from '@/components/CaseStudies';
import PledgeForm from '@/components/PledgeForm';
import AboutSection from '@/components/AboutSection';
import QRCodeSection from '@/components/QRCode';
import CarbonFootprintCalculator from '@/components/CarbonFootprint';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center mb-6">
                <Coffee className="w-12 h-12 mr-4" />
                <h1 className="text-6xl font-bold">CUPNEST</h1>
              </div>
              <p className="text-xl opacity-90">
                Pioneering the revolution in sustainable beverage consumption. Join our mission to create a healthier planet and safer future - one cup at a time.
              </p>
            </div>
            <div className="hidden lg:flex space-x-4">
              <Leaf className="w-24 h-24 text-green-100 animate-pulse" />
              <Coffee className="w-24 h-24 text-green-100" />
              <Recycle className="w-24 h-24 text-green-100 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 py-4 overflow-x-auto">
            {[
              { id: 'about', label: 'About', icon: Coffee },
              { id: 'hazards', label: 'Health Hazards', icon: AlertTriangle },
              { id: 'alternatives', label: 'Sustainable Alternatives', icon: Leaf },
              { id: 'guide', label: 'Usage Guide', icon: BookOpen },
              { id: 'impact', label: 'Environmental Impact', icon: BarChart3 },
              { id: 'pledge', label: 'Take Action', icon: Heart },
              { id: 'learn', label: 'Play & Learn', icon: Trophy },
              { id: 'cases', label: 'Case Studies', icon: FileText },
              { id: 'qr', label: 'QR', icon: QrCodeIcon },
              { id: 'carbon', label: 'Carbon Footprint Calculator', icon: Atom },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className={activeTab === 'about' ? 'block' : 'hidden'}>
          <AboutSection />
        </section>

        {/* Health Hazards Section */}
        <section className={activeTab === 'hazards' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Health Risks by Beverage Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <BeverageRiskCard
              type="Hot Beverages"
              icon={Thermometer}
              risks={[
                "Accelerated chemical leaching at high temperatures",
                "BPA absorption increases by 55% above 70°C",
                "Plastic lining degradation releases toxins",
                "Endocrine system disruption",
                "Increased cancer risk from prolonged exposure",
                "Reproductive health concerns"
              ]}
              beverages={["Coffee", "Tea", "Hot Chocolate", "Herbal Infusions"]}
            />
            <BeverageRiskCard
              type="Cold Beverages"
              icon={Droplets}
              risks={[
                "Microplastic shedding in acidic drinks",
                "Chemical reactions with citrus beverages",
                "Extended exposure in iced drinks",
                "Bacterial growth in moisture-trapped areas",
                "Antimony leaching from PET containers",
                "Hormone disruption from plasticizers"
              ]}
              beverages={["Iced Coffee", "Soft Drinks", "Lemonade", "Fruit Juices"]}
            />
            <BeverageRiskCard
              type="Dairy-Based"
              icon={Coffee}
              risks={[
                "Fat content increases chemical absorption",
                "Protein-chemical interactions",
                "Temperature variation stress on materials",
                "Microplastic contamination in milk products",
                "Enhanced chemical leaching in fatty drinks",
                "Bacterial growth in residual dairy"
              ]}
              beverages={["Milkshakes", "Smoothies", "Lattes", "Protein Drinks"]}
            />
            <BeverageRiskCard
              type="Alcoholic Beverages"
              icon={Coffee}
              risks={[
                "Enhanced chemical extraction by alcohol",
                "Increased toxin absorption",
                "Plastic degradation acceleration",
                "Flavor alteration from cup materials",
                "Higher risk of contamination",
                "Chemical reaction with spirits"
              ]}
              beverages={["Beer", "Wine", "Cocktails", "Mixed Drinks"]}
            />
            <BeverageRiskCard
              type="Energy Drinks"
              icon={Coffee}
              risks={[
                "Acidic content accelerates leaching",
                "Chemical interaction with caffeine",
                "Enhanced absorption of toxins",
                "Increased risk from carbonation",
                "Temperature-related degradation",
                "Taurine-plastic interactions"
              ]}
              beverages={["Energy Drinks", "Sports Drinks", "Carbonated Beverages"]}
            />
            <BeverageRiskCard
              type="Health Drinks"
              icon={Coffee}
              risks={[
                "Nutrient-chemical interactions",
                "Vitamin degradation",
                "Mineral binding with toxins",
                "Reduced efficacy of supplements",
                "Contamination of probiotics",
                "Loss of beneficial compounds"
              ]}
              beverages={["Green Juice", "Kombucha", "Vitamin Drinks", "Protein Shakes"]}
            />
          </div>
        </section>

        {/* Sustainable Alternatives Section */}
        <section className={activeTab === 'alternatives' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Sustainable Alternatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Original alternatives remain, adding new ones */}
            <AlternativeCard
              title="Double-Wall Stainless Steel"
              description="Premium insulated cups perfect for maintaining temperature for extended periods."
              imageUrl="/2wall.png"
              benefits={[
                'Superior temperature retention',
                'Lifetime durability',
                'Completely BPA-free',
                'Ideal for extreme temperatures',
                'Perfect for outdoor activities'
              ]}
            />
            <AlternativeCard
              title="Bamboo Fiber Cups"
              description="Eco-friendly option made from sustainable bamboo fibers."
              imageUrl="/bamboo_cup.jpg"
              benefits={[
                'Naturally antibacterial',
                '100% biodegradable',
                'Lightweight design',
                'Chemical-free material',
                'Stylish appearance'
              ]}
            />
            <AlternativeCard
              title="Borosilicate Glass"
              description="Heat-resistant glass perfect for hot and cold beverages."
              imageUrl="/boro_cup.png"
              benefits={[
                'Temperature resistant',
                'Chemical-free',
                'Dishwasher safe',
                'Crystal clear clarity',
                'Taste neutral'
              ]}
            />
            <AlternativeCard
              title="Titanium Cups"
              description="Ultra-lightweight and incredibly durable option for outdoor enthusiasts."
              imageUrl="/titanium_cup.png"
              benefits={[
                'Ultralight design',
                'Virtually indestructible',
                'Natural antibacterial properties',
                'No metallic taste',
                'Ideal for camping'
              ]}
            />
            <AlternativeCard
              title="Rice Husk Cups"
              description="Innovative cups made from agricultural waste."
              imageUrl="/rice_cup.jpeg"
              benefits={[
                'Made from waste material',
                'Fully biodegradable',
                'Microwave safe',
                'Dishwasher safe',
                'Affordable option'
              ]}
            />
            <AlternativeCard
              title="Cork-Insulated Glass"
              description="Perfect blend of sustainability and functionality."
              imageUrl="/cork.png"
              benefits={[
                'Natural insulation',
                'Sustainable materials',
                'Comfortable grip',
                'Elegant design',
                'Easy to clean'
              ]}
            />
            <AlternativeCard
              title="Copper Vessels"
              description="Traditional cups with natural health benefits."
              imageUrl="/copper_cup.jpg"
              benefits={[
                'Natural purification',
                'Ayurvedic benefits',
                'Temperature retention',
                'Antimicrobial properties',
                'Long-lasting material'
              ]}
            />
            <AlternativeCard
              title="Hemp Fiber Cups"
              description="Sustainable cups made from hemp fiber composites."
              imageUrl="/image.png"
              benefits={[
                'Rapidly renewable resource',
                'Naturally antimicrobial',
                'Biodegradable',
                'Durable construction',
                'Chemical-free'
              ]}
            />
            <AlternativeCard
              title="Recycled Steel Cups"
              description="Eco-friendly cups made from recycled steel."
              imageUrl="/recycled.png"
              benefits={[
                'Made from recycled materials',
                'Infinitely recyclable',
                'Extremely durable',
                'Temperature resistant',
                'Zero waste option'
              ]}
            />
          </div>
        </section>

        {/* Usage Guide Section */}
        <section className={activeTab === 'guide' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Regional & Usage Guide</h2>
          <RegionalGuide />
        </section>

        {/* Environmental Impact Section */}
        <section className={activeTab === 'impact' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ImpactCounter />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Globe2 className="w-6 h-6 mr-2 text-green-600" />
                Global Impact Statistics
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                  <span>20 million trees saved through reusable cup adoption</span>
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                  <span>50% reduction in coffee shop waste where implemented</span>
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                  <span>2.5 billion gallons of water conserved annually</span>
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                  <span>75% reduction in carbon footprint per cup</span>
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                  <span>30% decrease in landfill waste from food service industry</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pledge Section */}
        <section className={activeTab === 'pledge' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Join the Movement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PledgeCounter />
            <PledgeForm />
          </div>
        </section>

        {/* Learn & Play Section */}
        <section className={activeTab === 'learn' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Play & Learn</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Quiz />
            </div>
            <div className="space-y-8">
              <FAQSection />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className={activeTab === 'cases' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Case Studies & Resources</h2>
          <CaseStudies />
        </section>

        {/* QR Code Section */}
        <section className={activeTab === 'qr' ? 'block' : 'hidden'}>
            <QRCodeSection />
        </section>

        {/* Carbon Footprint Calculator Section */}
        <section className={activeTab === 'carbon' ? 'block' : 'hidden'}>
          <CarbonFootprintCalculator />
        </section>
          
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Coffee className="w-6 h-6 mr-2" />
                CUPNEST
              </h3>
              <p className="text-sm opacity-75">
                Leading the movement towards sustainable beverage consumption.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2025 CUPNEST. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;