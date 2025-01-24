import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BeverageRiskCardProps {
  type: string;
  icon: typeof LucideIcon;
  risks: string[];
  beverages: string[];
}

const BeverageRiskCard: React.FC<BeverageRiskCardProps> = ({
  type,
  icon: Icon,
  risks,
  beverages,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-red-500 mr-3" />
        <h3 className="text-xl font-bold text-gray-800">{type}</h3>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Risks:</h4>
        <ul className="space-y-2">
          {risks.map((risk, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span className="text-gray-600">{risk}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Common Beverages:</h4>
        <div className="flex flex-wrap gap-2">
          {beverages.map((beverage, index) => (
            <span
              key={index}
              className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
            >
              {beverage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeverageRiskCard;