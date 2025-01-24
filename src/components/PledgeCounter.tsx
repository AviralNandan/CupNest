import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const PledgeCounter: React.FC = () => {
  const [pledgeCount, setPledgeCount] = useState(15234);
  const [treesCount, setTreesCount] = useState(1523);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPledgeCount(prev => prev + 1);
      setTreesCount(prev => Math.floor((pledgeCount + 1) / 10));
    }, 30000); // New pledge every 30 seconds

    return () => clearInterval(interval);
  }, [pledgeCount]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Users className="w-8 h-8 text-green-600 mr-3" />
        <h3 className="text-2xl font-bold">Community Impact</h3>
      </div>
      
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            {pledgeCount.toLocaleString()}
          </div>
          <p className="text-gray-600">People have taken the pledge</p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            {treesCount.toLocaleString()}
          </div>
          <p className="text-gray-600">Trees saved by our community</p>
        </div>
      </div>
    </div>
  );
};

export default PledgeCounter;