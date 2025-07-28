import {
  BsChevronRight,
  BsTwitterX,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import falcologo from "../../assets/falcoLogo.png";

const socialLinks = [
  { icon: BsTwitterX, href: "#" },
  { icon: BsFacebook, href: "#" },
  { icon: BsInstagram, href: "https://www.instagram.com/falco_uz/" },
  { icon: BsLinkedin, href: "#" },
];

const Footer = () => {
  return (
    <div className="bg-[#09291b] text-[#bca87c] pt-16">
      <div className="max-w-[1350px] w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-8">
            <div className="w-[80px] mb-4">
              <img src={falcologo} alt="Image" className="w-20 h-auto" />
            </div>
            <a
              href="https://maps.app.goo.gl/uWMwkSMMZnvdKLsX7"
              className="text-sm block"
            >
              108 Amir Temur Avenue
            </a>
            <a
              href="https://maps.app.goo.gl/uWMwkSMMZnvdKLsX7"
              className="text-sm block"
            >
              Tashkent 100200, Uzbekistan
            </a>
            <a href="tel:+998908086383" className="text-sm mt-3 block">
              <strong>Phone:</strong> +998 90 808 63 83
            </a>
            <a
              href="mailto:fozilruzmamatoz@gmail.com"
              className="text-sm block"
            >
              <strong>Email:</strong> fozilruzmamatoz@gmail.com
            </a>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 pt-5 px-3 mb-8">
            <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About us", "Projects", "Team"].map((item, i) => {
                const routeMap = {
                  Home: "/",
                  "About us": "/about",
                  Projects: "/projects",
                  Team: "/#team",
                };

                const path = routeMap[item];
                const isHash = path.includes("#");

                return (
                  <li key={i} className="flex items-center gap-2">
                    <BsChevronRight />
                    {isHash ? (
                      <HashLink
                        smooth
                        to={path}
                        className="hover:text-[#8e7d53] transition-colors duration-200"
                      >
                        {item}
                      </HashLink>
                    ) : (
                      <Link
                        to={path}
                        className="hover:text-[#8e7d53] transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 pt-5 mb-8">
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Design",
                "Web Development",
                "Product Management",
                "Marketing",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <BsChevronRight />
                  <a
                    href="#"
                    className="hover:text-[#8e7d53] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 pt-5 px-3 mb-8">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <p className="text-sm mb-4">
              Follow us on social media to stay updated.
            </p>
            <div className="flex gap-4 text-xl">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8e7d53] transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t-[1px] border-[#bca87c] text-[13px] pt-6 text-center pb-5">
          <h2>
            © Copyright <span className="font-[700]">Falco community</span> All
            Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
