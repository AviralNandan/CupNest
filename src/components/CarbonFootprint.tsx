import React, { useState, useEffect } from "react";
import { TreePine, Leaf, Cloud, Calculator } from "lucide-react";

type CupType = "disposable" | "reusable";
type BeverageType = "coffee" | "tea" | "water";

const CarbonFootprintCalculator = () => {
  const [cupType, setCupType] = useState<CupType>("disposable");
  const [dailyCupUsage, setDailyCupUsage] = useState(2);
  const [beverageType, setBeverageType] = useState<BeverageType>("coffee");
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [treesNeeded, setTreesNeeded] = useState(0);

  const carbonFactors = {
    disposable: {
      coffee: 0.12,
      tea: 0.09,
      water: 0.05,
    },
    reusable: {
      coffee: 0.02,
      tea: 0.015,
      water: 0.01,
    },
  };

  useEffect(() => {
    const factor = carbonFactors[cupType][beverageType];
    const annualFootprint = factor * dailyCupUsage * 365;

    setCarbonFootprint(parseFloat(annualFootprint.toFixed(2)));

    setTreesNeeded(Math.ceil(annualFootprint / 22));
  }, [cupType, dailyCupUsage, beverageType]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="mr-3 text-green-600" size={40} />
        <h2 className="text-3xl font-bold text-green-800">
          Carbon Footprint Calculator
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block mb-2">Cup Type</label>
          <select
            value={cupType}
            onChange={(e) => setCupType(e.target.value as CupType)}
            className="w-full p-2 border rounded"
          >
            <option value="disposable">Disposable</option>
            <option value="reusable">Reusable</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Daily Cup Usage</label>
          <input
            type="number"
            value={dailyCupUsage}
            onChange={(e) => setDailyCupUsage(Number(e.target.value))}
            min="1"
            max="10"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Beverage Type</label>
          <select
            value={beverageType}
            onChange={(e) => setBeverageType(e.target.value as BeverageType)}
            className="w-full p-2 border rounded"
          >
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="water">Water</option>
          </select>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Cloud className="mr-3 text-blue-600" size={32} />
          <h3 className="text-xl font-semibold">
            Your Annual Carbon Footprint
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Carbon Emissions:</p>
            <p className="text-2xl font-bold text-green-800">
              {carbonFootprint} kg CO2
            </p>
          </div>
          <div>
            <p className="text-gray-600 flex items-center">
              <TreePine className="mr-2 text-green-600" size={24} />
              Trees Needed to Offset:
            </p>
            <p className="text-2xl font-bold text-green-800">
              {treesNeeded} trees
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Switch to reusable cups to significantly reduce your carbon footprint!
        </p>
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
