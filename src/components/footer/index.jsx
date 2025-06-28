import {
  BsChevronRight,
  BsTwitterX,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import falcologo from "../../assets/falcoLogo.png";

const Footer = () => {
  return (
    <div className="bg-[#09291b] text-[#bca87c] pt-16">
      <div className="w-[83%] mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-8">
            <div className="w-[80px] mb-4">
              <img src={falcologo} alt="Image" className="w-20 h-auto" />
            </div>
            <p className="text-sm">A108 Adam Street</p>
            <p className="text-sm">New York, NY 535022</p>
            <p className="text-sm mt-3">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p className="text-sm">
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 pt-5 px-3 mb-8">
            <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About us", "Services", "Terms of service"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <BsChevronRight />
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                )
              )}
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
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 pt-5 px-3 mb-8">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <p className="text-sm mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex gap-4 text-xl">
              {[BsTwitterX, BsFacebook, BsInstagram, BsLinkedin].map(
                (Icon, i) => (
                  <a key={i} href="#" className="hover:text-blue-400">
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#bca87c]  text-[13px] pt-6 text-center pb-5">
          <h2>© Copyright <span className="font-[700]">Falco community</span> All Rights Reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
