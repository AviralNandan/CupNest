import React, { useState, useEffect } from 'react';

const ImpactCounter: React.FC = () => {
  const [cupsSaved, setCupsSaved] = useState(0);
  
  useEffect(() => {
    // Simulate real-time counter
    const interval = setInterval(() => {
      setCupsSaved(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
      <div className="text-4xl font-bold text-green-600 mb-2">
        {cupsSaved.toLocaleString()}
      </div>
      <p className="text-gray-600">Disposable cups saved by our community</p>
    </div>
  );
};

export default ImpactCounter;