import { Check, Phone } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import about_f from "../../assets/about_f.jpg";

const About = () => {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />

      <main className="pt-[150px] pb-20 px-4">
        <div className="max-w-[1350px] mx-auto px-5">
          <h1 className="text-4xl md:text-6xl font-bold text-[#09291b] mb-4 text-center">
            About
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
            Falco is not just a community — it's a movement for change
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between lg:px-5 px-[1px] gap-10 mt-[100px]">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[45px] font-bold text-[#09291b] mb-4">
                MORE ABOUT US
              </h3>
              <h1 className="text-xl font-semibold mb-4 text-[#09291b]">
                Empowering Talent, Building Futures
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Falco is a growing community where ambitious minds gather to
                learn, build, and thrive. We believe that talent is
                everywhere—but opportunity is not. That’s why we’ve created a
                platform that empowers young people to showcase their skills,
                connect with like-minded individuals, and launch real-world
                projects that matter.
                <br />
                <br />
                We are more than a tech hub or a learning center—we are a
                Startup Factory where ideas are born, filtered, and built into
                innovative products. Whether you're a developer, designer,
                strategist, or creative thinker, Falco is the launchpad for your
                growth and impact.
              </p>
              

              <div className="my-9">
                <nav className="flex flex-col sm:flex-row items-start gap-12">
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      Open to talents from all fields and backgrounds
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      Supporting real collaboration and peer growth
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      Turning ideas into action through projects and mentorship
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      Building a strong national and global network
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      Providing workspace, resources, and opportunities to rise
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" />
                      A final destination for misunderstood but gifted youth
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="https://avatars.mds.yandex.net/i?id=b5177d19480a694d368bb6f2a6e8e5fafa14f231-10128025-images-thumbs&n=13"
                    alt="Founder"
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h3 className="text-[#09291b] font-bold text-base">
                      Foziljon Ruzmamatov
                    </h3>
                    <p className="text-gray-600 text-sm">CEO & Founder</p>
                  </div>
                </div>

                <div className="bg-white group flex items-center gap-4 text-blue-700 shadow-md px-4 py-3 rounded-2xl hover:bg-blue-700 transition duration-300 w-full max-w-xs">
                  <Phone
                    className="text-blue-700 group-hover:text-white transition duration-300 w-6 h-6"
                    fill="currentColor"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium group-hover:text-white">
                      Call us anytime
                    </p>
                    <a
                      href="tel:+998991292614"
                      aria-label="Call us"
                      className="text-sm sm:text-base text-gray-400 font-semibold group-hover:text-white"
                    >
                      +998 99 129-26-14
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <img
                src={about_f}
                alt="Falco"
                className="w-full max-w-md md:max-w-lg rounded-2xl object-cover shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
