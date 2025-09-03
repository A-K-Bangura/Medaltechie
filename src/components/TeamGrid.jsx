import React from "react";
// import { Globe } from "lucide-react";
import bayoh from "../assets/images/team-members/bayoh.png";
import jinjon from "../assets/images/team-members/jinjon.png";
import medal from "../assets/images/team-members/medal.jpg";
import cake from "../assets/images/team-members/cake.png";
import ston from "../assets/images/team-members/ston.png";
import skrilla from "../assets/images/team-members/skrilla.png";
import ShineCard from "./ShineCard";



const teamMembers = [
  {
    name: "Medal",
    skill: "Full Stack Developer",
    image: medal,
    number: 1,
  },
  {
    name: "Jinjon",
    skill: "UX/UI Designer",
    image: jinjon,
    number: 2,
  },
  {
    name: "Cake",
    skill: "Digital Marketer",
      image: cake,
    number: 3,
  },
  {
    name: "Ston",
    skill: "Web Developer",
      image: ston,
    number: 4,
  },
  {
    name: "Skrilla",
      skill: "Server Analysts",
    image: skrilla,
    number: 5,
  },
  {
    name: "Bayoh",
    skill: "App Developer",
      image: bayoh,
    number: 6,
  },
];

// const TeamCard = ({ name, skill, image }) => {
//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Main Card */}
//       <div className="peer relative w-64 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:h-80 cursor-pointer">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>

//       {/* Hidden Details */}
//       <div className="absolute w-64 h-64 rounded-2xl bg-white z-[-1] transition-all duration-500 ease-in-out peer-hover:h-80 peer-hover:rounded-b-none flex flex-col items-center justify-between py-4">
//         {/* Name (top) */}
//         <h3 className="opacity-0 peer-hover:opacity-100 transition-opacity duration-500 text-lg font-semibold">
//           {name}
//         </h3>

//         {/* Spacer (image already covers middle) */}

//         {/* Skill (bottom) */}
//         <p className="opacity-0 peer-hover:opacity-100 transition-opacity duration-500 text-sm">
//           {skill}
//         </p>
//       </div>
//     </div>
//   );
// };

// const TeamGrid = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {teamMembers.map((member, index) => (
//         <TeamCard key={index} {...member} />
//       ))}
//     </div>
//   );
// };

// export default TeamGrid;


const TeamMember = ({ name, skill, image, number}) => {
  return (
    <>
    <ShineCard className="border-none bg-transparent shadow-none">
      <div className={`cardm ${number % 2 === 0 ? "lg:mt-20" : ""}`}>
        <div className="card">
          <div className="main rounded-xl">
            <img src={image}
        alt={name} className="w-full h-full object-cover rounded-xl" />
        </div>
        </div>
        <div className="card2">
          <div className="upper">
           <div className="text-xl font-bold">{name}</div>
          </div>
          <div className="grow-height">a</div>
          <div className="lower">
            <div className="aqi">
              <div className="text-sm font-semibold">{skill}</div>
            </div>
          </div>
        </div>
      </div>
    </ShineCard>
    </>
  );
}

const TeamGrid = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    );
  };

export default TeamGrid;

