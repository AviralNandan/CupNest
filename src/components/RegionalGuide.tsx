import React from 'react';
import { MapPin, Thermometer, Wind } from 'lucide-react';

const RegionalGuide: React.FC = () => {
  const regions = [
    {
      name: 'Tropical Climate',
      recommendations: [
        'Double-walled stainless steel for cold retention',
        'Light-colored cups to reflect heat',
        'Bamboo cups for outdoor activities',
      ],
      considerations: [
        'High humidity resistance',
        'UV protection',
        'Condensation prevention',
      ],
    },
    {
      name: 'Cold Climate',
      recommendations: [
        'Ceramic mugs for hot beverages',
        'Insulated stainless steel',
        'Cork-lined glass cups',
      ],
      considerations: [
        'Temperature retention',
        'Frost resistance',
        'Grip comfort in cold weather',
      ],
    },
    {
      name: 'Temperate Climate',
      recommendations: [
        'Glass cups for versatility',
        'Ceramic for hot drinks',
        'Stainless steel for outdoor use',
      ],
      considerations: [
        'All-season durability',
        'Temperature adaptability',
        'Indoor-outdoor transition',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {regions.map((region) => (
        <div key={region.name} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-xl font-bold">{region.name}</h3>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Thermometer className="w-4 h-4 mr-2" />
              Recommended Cups
            </h4>
            <ul className="space-y-2">
              {region.recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600 flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Wind className="w-4 h-4 mr-2" />
              Key Considerations
            </h4>
            <ul className="space-y-2">
              {region.considerations.map((consideration, index) => (
                <li key={index} className="text-gray-600 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  {consideration}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegionalGuide;