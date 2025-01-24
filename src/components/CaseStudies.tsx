import React from 'react';
import { FileText, Youtube, AlertTriangle } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "India's Pollution Crisis (2021)",
      description: `In 2021, India faced severe monsoon rains that led to devastating floods and landslides, particularly along its western coast. These natural disasters resulted in the tragic loss of 159 lives and the displacement of a quarter of a million people across three states. While the immediate cause was torrential rainfall, the situation was exacerbated by clogged drainage systems. Urban areas, overwhelmed by non-biodegradable waste, including disposable cups, experienced significant waterlogging.`,
      source: "Phys.org",
      impact: "Environmental, Social",
      lessons: [
        "Importance of proper waste management",
        "Need for biodegradable alternatives",
        "Urban planning considerations"
      ]
    },
    {
      title: "UK Waste Scandal (2018)",
      description: `In 2018, the UK's Environmental Audit Committee revealed a startling statistic: out of the 2.5 billion disposable coffee cups used annually, less than 0.25% were recycled. This equates to only one in every 400 cups being processed for recycling, with the vast majority ending up in landfills or as environmental litter.`,
      source: "UK Parliament",
      impact: "Environmental, Economic",
      lessons: [
        "Recycling infrastructure challenges",
        "Consumer awareness gaps",
        "Need for policy intervention"
      ]
    },
    {
      title: "US Landfill Overflow (2020)",
      description: `In 2020, studies indicated that disposable paper cups significantly contributed to the United States' waste management challenges. The combination of high consumption rates and the difficulty in recycling due to plastic linings led to an overwhelming amount of waste in landfills.`,
      source: "Environmental Studies",
      impact: "Environmental, Economic",
      lessons: [
        "Waste management limitations",
        "Recycling technology needs",
        "Consumer behavior impact"
      ]
    }
  ];

  const videos = [
    {
      title: "Proper Cup Disposal Guide",
      url: "https://youtu.be/Ccsf0Ewx9b8?si=FuDhJFVfofSUZBNR",
      description: "Learn how to properly dispose of different types of cups"
    },
    {
      title: "How do paper cups get made and recycled?",
      url: "https://youtu.be/AdmqKQOc-0I?si=kXptSOFvTnFIqdgX",
      description: "Understanding the lifecycle impact of disposable cups"
    },
    {
      title: "Paper Cup Recycling",
      url: "https://youtu.be/AdmqKQOc-0I?si=kXptSOFvTnFIqdgX",
      description: "Exploring eco-friendly cup alternatives"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-bold">{study.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{study.description}</p>
            <div className="mb-4">
              <span className="text-sm font-semibold">Source: </span>
              <span className="text-gray-600">{study.source}</span>
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold">Impact: </span>
              <span className="text-gray-600">{study.impact}</span>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Lessons:</h4>
              <ul className="space-y-2">
                {study.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Educational Videos */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Youtube className="w-6 h-6 mr-2 text-red-600" />
          Educational Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-bold mb-2">{video.title}</h4>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;