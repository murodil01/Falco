import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Agroboost from "../../assets/about/Agroboost.png";
import FoodQuest from "../../assets/about/FoodQuest.png";
import FreshLine from "../../assets/about/FreshLine.png";
import Robo3 from "../../assets/about/Robo3.png";
import coming from "../../assets/about/coming.jpg";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Agroboost",
    description:
      "Scans agricultural lands using drones to detect issues and optimize crop health.",
    image: Agroboost,
  },
  {
    id: 2,
    title: "FoodQuest",
    description:
      "A platform that reduces food waste by offering surplus meals from restaurants and cafes at discounted prices.",
    image: FoodQuest,
  },
  {
    id: 3,
    title: "Fresh Line",
    description:
      "Connects farmers directly with consumers, eliminating middlemen and ensuring fair trade.",
    image: FreshLine,
  },
  {
    id: 4,
    title: "RoboContest.uz",
    description:
      "An educational platform for robotics competitions and hands-on learning experiences.",
    image: Robo3,
  },
  {
    id: 5,
    title: "Coming",
    description:
      "Reserved for upcoming innovative projects and new initiatives.",
    image: coming,
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fafafa]">
      <Navbar />

      <main className="pt-[150px] pb-20 px-4" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#09291b]">
            Our Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full sm:w-[48%] lg:w-[30%]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-[#09291b]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
