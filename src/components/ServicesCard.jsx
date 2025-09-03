import React from "react";

// Example data
// const cardData = [
//   {
//     id: 1,
//     icon: "📱",
//     title: "Mobile App",
//     description: "Cross-platform mobile app development.",
//     features: ["React Native", "iOS & Android", "Fast Performance"],
//   },
//   {
//     id: 2,
//     icon: "🌐",
//     title: "Web Development",
//     description: "Modern responsive web solutions.",
//     features: ["React.js", "Next.js", "TailwindCSS"],
//   },
//   {
//     id: 3,
//     icon: "☁️",
//     title: "Cloud Services",
//     description: "Scalable cloud infrastructure.",
//     features: ["AWS", "Docker", "CI/CD Pipelines"],
//   },
// ];

const ServicesCard = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-4 perspective-1000 preserve-3d">
      {items.map((item) => (
        <div
          key={item.id}
          className="card-item relative flex-shrink-0 w-56 p-4 bg-white rounded-xl shadow-md text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
          <ul className="text-sm text-gray-800 space-y-1">
            {item.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard
// export default function ServicesCard() {
//   return <Cards items={cardData} />;
// }
