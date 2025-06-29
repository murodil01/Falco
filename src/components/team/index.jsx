import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
      "Junior at Tashkent University of Infomation Technologies named after Muhammad al-Khwarizmi",
    telegram: "@Foziljon_Ruzmamatov",
    linkedin: "Not found",
    instagram: "_mr.fozil_",
  },
  {
    name: "Mushtariybegim Muxammadova",
    role: "Representer",
    image: Mushtariy,
    description:
      "Senior at Tashkent University of Infomation Technologies named after Muhammad al-Khwarizmi.",
    telegram: "@Mushtariybegim_Otabekovna",
    linkedin: "Not found",
    instagram: "begim_otabekovna",
  },
  {
    name: "Behruz Nutfillayev",
    role: "AI expert",
    image: Behruz,
    description:
      "Alumnai of Tashkent University of Infomation Technologies named after Muhammad al-Khwarizmi",
    telegram: "@bnutfilloyev",
    linkedin: "Not found",
    instagram: "Not found",
  },
  {
    name: "Allayoruv Boburjon",
    role: "Backend developer",
    image: Bobur,
    description:
      "Junior at Tashkent University of Infomation Technologies named after Muhammad al-Khwarizmi",
    telegram: "@allayorovbobur21",
    linkedin: "https://www.linkedin.com/in/bobur-allayorov-66b0622a6/",
    instagram: "Not found",
  },
];

const Team = () => {
  return (
    <section id="team" className="pt-20 bg-[#fafafa]">
      <div className="w-[90%] mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Team</h2>
        <p className="text-gray-600 text-lg">
          Meet the dedicated part of our professionals whose collaboration, creativity, and commitment are driving our mission forward.
        </p>
      </div>

      <div className="w-[84%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative w-full h-[400px]">
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
                  href={
                    member.telegram !== "Not found"
                      ? `https://t.me/${member.telegram.replace("@", "")}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <FaTelegramPlane size={18} />
                </a>
                <a
                  href={member.linkedin !== "Not found" ? member.linkedin : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href={
                    member.instagram !== "Not found"
                      ? `https://instagram.com/${member.instagram}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition"
                >
                  <FaInstagram size={18} />
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
