"use client";

import React, { useState } from 'react';
import { 
  Info, 
  ShieldAlert, 
  Thermometer, 
  Recycle, 
  AlertTriangle,
  QrCode 
} from 'lucide-react';

const PaperCupQRSystem = () => {
  const [selectedCup, setSelectedCup] = useState(null);
  const [copiedCup, setCopiedCup] = useState(null);

  const paperCupDatabase = {
    'standard-hot': {
      id: 'standard-hot',
      name: 'Standard Hot Beverage Cup',
      type: 'Single-wall Insulated',
      cost: '₹4-₹8',
      lifeExpectancy: '1-2 hours',
      temperature: {
        suitable: 'Hot (up to 75°C)',
        unsuitable: 'Not for prolonged hot storage'
      },
      constituents: [
        '70% Wood Pulp',
        '20% Polyethylene Lining',
        '10% Additives'
      ],
      hazards: [
        'Chemical Leaching at High Temperatures',
        'Potential Microplastic Release',
        'Non-Biodegradable Lining'
      ],
      healthRisks: [
        'Potential BPA Exposure',
        'Chemical Migration',
        'Microbial Growth if Wet'
      ],
      recycling: {
        method: 'Separate Lining and Paper',
        difficulty: 'Moderate',
        recyclablePercentage: '60%'
      },
      alternatives: [
        'Ceramic Mugs',
        'Glass Containers',
        'Stainless Steel Tumblers'
      ]
    },
    'eco-cold': {
      id: 'eco-cold',
      name: 'Eco-Friendly Cold Beverage Cup',
      type: 'Biodegradable',
      cost: '₹6-₹12',
      lifeExpectancy: '2-3 hours',
      temperature: {
        suitable: 'Cold Drinks (up to 25°C)',
        unsuitable: 'Not for Hot Beverages'
      },
      constituents: [
        '80% Bamboo Fiber',
        '15% Corn Starch',
        '5% Natural Binders'
      ],
      hazards: [
        'Limited Structural Integrity',
        'Moisture Sensitivity',
        'Short Shelf Life'
      ],
      healthRisks: ['Minimal Chemical Risk'],
      recycling: {
        method: 'Compost or Industrial Recycling',
        difficulty: 'Easy',
        recyclablePercentage: '90%'
      },
      alternatives: [
        'Glass Bottles',
        'Reusable Silicon Cups'
      ]
    },
    'premium-insulated': {
      id: 'premium-insulated',
      name: 'Premium Insulated Cup',
      type: 'Double-wall Thermal',
      cost: '₹10-₹18',
      lifeExpectancy: '3-4 hours',
      temperature: {
        suitable: 'Both Hot and Cold (40-80°C)',
        unsuitable: 'Extreme Temperatures'
      },
      constituents: [
        '65% Wood Pulp',
        '25% Advanced Thermal Lining',
        '10% Sustainable Additives'
      ],
      hazards: [
        'Minor Chemical Migration',
        'Potential Thermal Stress'
      ],
      healthRisks: [
        'Low Chemical Exposure',
        'Temperature-Related Risks'
      ],
      recycling: {
        method: 'Complex Recycling Process',
        difficulty: 'Difficult',
        recyclablePercentage: '50%'
      },
      alternatives: [
        'Vacuum Flasks',
        'Ceramic Thermal Mugs'
      ]
    },
    'medical-grade': {
      id: 'medical-grade',
      name: 'Medical-Grade Disposable Cup',
      type: 'Sterile Single-use',
      cost: '₹8-₹15',
      lifeExpectancy: '1 hour',
      temperature: {
        suitable: 'Controlled Medical Environment',
        unsuitable: 'Outside Sterile Conditions'
      },
      constituents: [
        '90% Medical-Grade Paper',
        '10% Sterile Coating'
      ],
      hazards: [
        'Contamination Risk if Mishandled',
        'Single-Use Only'
      ],
      healthRisks: ['Minimal When Used Correctly'],
      recycling: {
        method: 'Medical Waste Disposal',
        difficulty: 'Specialized',
        recyclablePercentage: '30%'
      },
      alternatives: [
        'Reusable Medical Containers',
        'Autoclavable Cups'
      ]
    },
    'sustainable-zero-waste': {
      id: 'sustainable-zero-waste',
      name: 'Zero-Waste Sustainable Cup',
      type: 'Fully Compostable',
      cost: '₹7-₹14',
      lifeExpectancy: '2-3 hours',
      temperature: {
        suitable: 'Moderate Temperatures',
        unsuitable: 'Extreme Hot or Cold'
      },
      constituents: [
        '100% Plant-Based Materials',
        'Zero Synthetic Additives'
      ],
      hazards: [
        'Rapid Biodegradation',
        'Limited Structural Strength'
      ],
      healthRisks: ['No Known Risks'],
      recycling: {
        method: 'Direct Composting',
        difficulty: 'Very Easy',
        recyclablePercentage: '100%'
      },
      alternatives: [
        'Reusable Organic Containers',
        'Glass Drinkware'
      ]
    }
  };

  // Rest of the component remains the same as in the previous implementation
  const CupInfoModal = ({ cup }) => {
    if (!cup) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-xl w-[500px] max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{cup.name}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Info className="mr-2 text-green-600" />
              <strong>Type:</strong> {cup.type}
            </div>
            
            <div className="flex items-center">
              <Thermometer className="mr-2 text-green-600" />
              <strong>Temperature Suitability:</strong> {cup.temperature.suitable}
            </div>
            
            <div className="flex items-center">
              <AlertTriangle className="mr-2 text-red-600" />
              <strong>Hazards:</strong>
              <ul className="ml-4 list-disc">
                {cup.hazards.map((hazard, index) => (
                  <li key={index}>{hazard}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center">
              <ShieldAlert className="mr-2 text-yellow-600" />
              <strong>Health Risks:</strong>
              <ul className="ml-4 list-disc">
                {cup.healthRisks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center">
              <Recycle className="mr-2 text-green-600" />
              <strong>Recycling:</strong> {cup.recycling.method}
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => setSelectedCup(null)}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(cup, null, 2));
                setCopiedCup(cup.id);
                setTimeout(() => setCopiedCup(null), 2000);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {copiedCup === cup.id ? 'Copied!' : 'Copy Details'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Paper Cup Information System</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {Object.values(paperCupDatabase).map((cup) => (
          <div 
            key={cup.id} 
            className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold mb-4">{cup.name}</h2>
            
            <div className="flex justify-center mb-4">
              <div 
                onClick={() => setSelectedCup(cup)}
                className="cursor-pointer hover:bg-green-100 p-4 rounded-lg transition-all"
              >
                <QrCode size={128} className="text-green-600" />
              </div>
            </div>
            
            <p className="text-center">Click QR Icon for Complete Details</p>
          </div>
        ))}
      </div>

      <CupInfoModal 
        cup={selectedCup} 
        copiedCup={copiedCup}
        setCopiedCup={setCopiedCup}
      />
    </div>
  );
};

export default PaperCupQRSystem;