import React from 'react';
import { Info, Shield, Leaf } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Info className="w-8 h-8 mr-3 text-green-600" />
          About CUPNEST
        </h2>
        <div className="prose lg:prose-lg">
          <p className="text-lg mb-6">
            CUPNEST is a pioneering initiative dedicated to transforming how we consume beverages in our daily lives. We believe that every small change in our habits can lead to significant positive impacts on both our health and the environment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To educate and empower individuals and organizations to make informed decisions about their beverage container choices, promoting both personal health and environmental sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Leaf className="w-6 h-6 mr-2 text-green-600" />
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where sustainable and healthy beverage consumption is the norm, not the exception, leading to a significant reduction in plastic waste and improved public health.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Health Impact:</strong> Disposable cups often contain harmful chemicals that can leach into our beverages, potentially causing serious health issues over time.
            </li>
            <li>
              <strong>Environmental Crisis:</strong> Billions of disposable cups end up in landfills annually, contributing to pollution and environmental degradation.
            </li>
            <li>
              <strong>Economic Benefits:</strong> Switching to reusable cups can save money for both individuals and businesses while reducing waste management costs.
            </li>
            <li>
              <strong>Social Responsibility:</strong> By choosing sustainable alternatives, we contribute to a larger movement towards environmental consciousness and public health awareness.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;