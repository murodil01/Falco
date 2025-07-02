import { Check, Phone } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"
const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-[#fafafa] pt-[150px] px-4 py-20" id="about">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[#09291b] mb-4 text-center">
            About
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-[100px]">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[45px] md:text-[45px] font-bold text-[#09291b] mb-4">
                MORE ABOUT US
              </h3>
              <h1 className="text-xl font-semibold mb-4 text-[#09291b]">
                Voluptas enim suscipit temporibus
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="my-9">
                <nav className="flex items-start gap-12">
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Lorem ipsum
                      dolor sit amet
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Consectetur
                      adipiscing elit
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Sed do eiusmod
                      tempor
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Incididunt ut
                      labore et
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Dolore magna
                      aliqua
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 text-base">
                      <Check className="text-blue-600 w-5 h-5" /> Ut enim ad
                      minim veniam
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between sm:items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="https://avatars.mds.yandex.net/i?id=b5177d19480a694d368bb6f2a6e8e5fafa14f231-10128025-images-thumbs&n=13"
                    alt="Image"
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h3 className="text-[#09291b] font-bold text-base">
                      Foziljon Ruzmamatov
                    </h3>
                    <p className="text-gray-600 text-sm">CEO & Founder</p>
                  </div>
                </div>

                <div className="bg-white group flex items-center gap-3 sm:gap-4 text-blue-700 shadow-md px-4 py-3 sm:py-4 rounded-2xl hover:bg-blue-700 transition duration-300 w-full max-w-xs">
                  <Phone
                    className="text-blue-700 group-hover:text-white transition duration-300 w-6 h-6 "
                    fill="currentColor"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium group-hover:text-white">
                      Call us anytime
                    </p>
                    <a
                      href="tel:+123456789"
                      aria-label="Call us at +123456789"
                      className="text-sm sm:text-base text-gray-400 font-semibold group-hover:text-white"
                    >
                      +123 456-789
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <img
                src="https://avatars.mds.yandex.net/i?id=70c00a164cb08844ff9616123cdcf495_l-9097293-images-thumbs&n=13"
                alt="Falco"
                className="w-full max-w-md md:max-w-lg rounded-2xl object-cover shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
