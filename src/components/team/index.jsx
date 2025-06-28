import { Linkedin, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Olivia Martinez",
    role: "Senior Developer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
  },
  {
    name: "Sophia Johnson",
    role: "Project Manager",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png",
    description:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
    name: "Benjamin Davis",
    role: "Business Analyst",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-[#f8f9fa]">
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
            className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded">
                {member.role}
              </div>
            </div>

            <div className="p-5 text-center">
              <h4 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm mt-2">{member.description}</p>

              <div className="mt-4 flex justify-center gap-4 text-white">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
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
