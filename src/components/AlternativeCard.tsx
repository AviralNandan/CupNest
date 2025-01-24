import React from 'react';

interface AlternativeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

const AlternativeCard: React.FC<AlternativeCardProps> = ({
  title,
  description,
  imageUrl,
  benefits,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlternativeCard;