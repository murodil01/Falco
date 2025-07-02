import { useEffect } from "react";
import { MapPin, Phone, Mail, Tally1 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleFormRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfRHguEMypnJXz_YQJhj-PKg7wUf5W4FdAKwn_DCOLWXzpcFA/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-[#f8f9fa] pt-15 pb-14 scroll-mt-[100px]">
      <div
        className="bg-white text-[#09291b] py-10 px-6 md:px-12 rounded-xl w-[90%] xl:w-[85%] max-w-[1440px] mx-auto space-y-8 shadow-md"
        data-aos="fade-up"
      >
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-[35px] font-bold">Contact</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3" data-aos="fade-right">
            <MapPin className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Location</h4>
              <a href="https://maps.app.goo.gl/uWMwkSMMZnvdKLsX7" className="text-xs block">
                108 Amir Temur Avenue
              </a>
              <a href="https://maps.app.goo.gl/uWMwkSMMZnvdKLsX7" className="text-xs block">
                Tashkent 100200, Uzbekistan
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3" data-aos="fade-up">
            <Phone className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Phone</h4>
              <a href="tel:+998908086383" className="text-xs block">
                +998 90 808 63 83
              </a>
              <a href="tel:+998991292614" className="text-xs block">
                +998 99 129 26 14
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3" data-aos="fade-left">
            <Mail className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Email</h4>
              <a href="mailto:hamrayev-2000@mail.ru" className="text-xs block">
                hamrayev-2000@mail.ru
              </a>
              <a href="mailto:fozilruzmamatoz@gmail.com" className="text-xs block">
                fozilruzmamatoz@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="w-full flex flex-wrap justify-center items-center gap-4 text-center mt-4"
          data-aos="zoom-in-up"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf7PQwcD6aIE0QfQXH50TXYuTDFr7jO-yiA7fbaO8anFOfP2g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#09291b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#8e7d53] transition duration-300"
          >
            Contact Form
          </a>

          <div className="hidden sm:block">
            <Tally1 className="text-[#8e7d53] w-[38px] h-[58px] ml-4" />
          </div>

          <button
            onClick={handleFormRedirect}
            className="bg-[#09291b] text-white font-semibold px-9 py-3 rounded-xl hover:bg-[#8e7d53] transition duration-300"
          >
            Join Form
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
