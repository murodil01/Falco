import { MapPin, Phone, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contact" className="bg-[#f8f9fa] pt-15 pb-14">
      <div className="bg-white text-[#09291b] py-10 px-6 md:px-12 rounded-xl w-[90%] xl:w-[85%] max-w-[1440px] mx-auto space-y-8 shadow-md">
        <div className="text-center">
          <h1 className="text-[35px] font-bold">Contact</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Location</h4>
              <p className="text-xs">A108 Adam Street</p>
              <p className="text-xs">New York, NY 535022</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Phone</h4>
              <p className="text-xs">+1 5589 55488 55</p>
              <p className="text-xs">+1 6678 254445 41</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 mt-1 text-[#09291b]" />
            <div>
              <h4 className="font-semibold text-sm">Email</h4>
              <p className="text-xs">info@example.com</p>
              <p className="text-xs">contact@example.com</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf7PQwcD6aIE0QfQXH50TXYuTDFr7jO-yiA7fbaO8anFOfP2g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#09291b] text-[#8e7d53] font-semibold px-6 py-3 rounded-xl hover:bg-[#8e7d53] hover:text-[#09291b] transition duration-300"
          >
            Contact Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
