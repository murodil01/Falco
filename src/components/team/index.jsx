import { Linkedin, Twitter, Instagram } from "lucide-react";
import Bobur from "../../assets/Bobur.jpg";
import Fozil from "../../assets/Fozil.jpg";
import Mushtariy from "../../assets/Mushtariy.jpg";
import Behruz from "../../assets/Behruz.jpg";

const teamMembers = [
  {
    name: "Ruzmamatov Foziljon",
    role: "CEO",
    image: Fozil,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
  },
  {
    name: "Mushtariybegim Muxammadova",
    role: "Representer",
    image: Mushtariy,
    description:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
    name: "Behruz Nutfillayev",
    role: "AI expert",
    image: Behruz,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    name: "Allayoruv Boburjon",
    role: "Team Leader",
    image: Bobur,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-[#fafafa]">
      <div className="w-[90%] mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Team</h2>
        <p className="text-gray-600 text-lg">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="w-[84%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative w-full h-[350px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#09291b] text-white text-sm font-semibold px-3 py-1 rounded">
                {member.role}
              </div>
            </div>

            <div className="p-6 text-center space-y-2">
              <h4 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm">{member.description}</p>

              <div className="pt-4 flex justify-center gap-4 text-white">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
