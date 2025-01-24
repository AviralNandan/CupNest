import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FactCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
}

const FactCard: React.FC<FactCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-red-500 mr-3" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FactCard;