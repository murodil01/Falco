import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

const projects = [
  {
    id: 1,
    title: "Falco Platform",
    description: "Empowering communities through tech and collaboration.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    id: 2,
    title: "Falco App",
    description: "A mobile app to connect and grow together.",
    image: "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg",
  },
  {
    id: 3,
    title: "Community Portal",
    description: "Central hub for all community members.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    id: 4,
    title: "Design System",
    description: "Reusable components for fast UI development.",
    image: "https://images.pexels.com/photos/6476592/pexels-photo-6476592.jpeg",
  },
  {
    id: 5,
    title: "Mentorship Program",
    description: "Helping others grow by sharing experience.",
    image: "https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg",
  },
  {
    id: 6,
    title: "Open Source Hub",
    description: "Join us in building open and inclusive tools.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-[90%] mx-auto pt-[150px] py-16" id="projects">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-[40px]">
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
