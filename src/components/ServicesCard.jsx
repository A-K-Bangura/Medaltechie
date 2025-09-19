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
    <>
      {items.map((item) => (
        <>
        <div
          key={item.number}
          className={`card-item  ${item.number === 1 ? "ml-0" : "md:-ml-30 -ml-40"} 
          relative hidden md:block flex-shrink-1 w-56 p-4 pb-0 bg-secondary-200 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]`}
        >
          <div className="hover-preview text-left">
            <div
              className="absolute inset-0 rounded-xl z-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.95)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-3xl mb-2 text-white font-bold">{`#${item.number}`}</div>
            </div>
          </div>
          {/* <ShineCard className="border-none bg-transparent shadow-none"> */}
          <div className="hover-hide">
          <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4 mt-10" />
          <h3 className="text-lg text-neutral-900 font-semibold mb-1 text-left">{item.title}</h3>
          <p className="text-left text-neutral-600 text-sm mb-3">{item.description}</p>
          <ul className="text-[0.7em] text-neutral-700 space-y-1 text-left ml-2">
            {item.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
          {/* </ShineCard> */}
        </div>

        {item.number < 4 && <div
          key={item.title}
          className={`card-item  ${item.number === 1 ? "ml-0" : "md:-ml-30 -ml-40"} 
          relative  md:hidden flex-shrink-1 w-56 p-4 pb-0 bg-secondary-200 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]`}
        >
          <div className="hover-preview text-left">
            <div
              className="absolute inset-0 rounded-xl z-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.95)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-3xl mb-2 text-white font-bold">{`#${item.number}`}</div>
            </div>
          </div>
          {/* <ShineCard className="border-none bg-transparent shadow-none"> */}
          <div className="hover-hide">
          <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4 mt-10" />
          <h3 className="text-lg text-neutral-900 font-semibold mb-1 text-left">{item.title}</h3>
          <p className="text-left text-neutral-600 text-sm mb-3">{item.description}</p>
          <ul className="text-[0.7em] text-neutral-700 space-y-1 text-left ml-2">
            {item.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
          {/* </ShineCard> */}
        
        </div>}

        {item.number > 3 && <div
          key={item.title}
          className={`card-item  ${item.number === 4 ? "ml-0" : "md:-ml-30 -ml-40"} 
          relative mt-8  md:hidden flex-shrink-1 w-56 p-4 pb-0 bg-secondary-200 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]`}
        >
          <div className="hover-preview text-left">
            <div
              className="absolute inset-0 rounded-xl z-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.95)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-3xl mb-2 text-white font-bold">{`#${item.number}`}</div>
            </div>
          </div>
          {/* <ShineCard className="border-none bg-transparent shadow-none"> */}
          <div className="hover-hide">
          <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4 mt-10" />
          <h3 className="text-lg text-neutral-900 font-semibold mb-1 text-left">{item.title}</h3>
          <p className="text-left text-neutral-600 text-sm mb-3">{item.description}</p>
          <ul className="text-[0.7em] text-neutral-700 space-y-1 text-left ml-2">
            {item.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
          {/* </ShineCard> */}
        
        </div>}
</>
        
      ))}
    </>
  );
};

export default ServicesCard
// export default function ServicesCard() {
//   return <Cards items={cardData} />;
// }
