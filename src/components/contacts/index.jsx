import { MapPin, Phone, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contact" className="bg-[#f8f9fa] py-20">
      <div className="w-[90%] xl:w-[85%] max-w-[1440px] mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-600 text-lg">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="w-[90%] xl:w-[85%] max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 xl:gap-16">

        <div className="w-full lg:w-1/2 h-auto lg:h-[640px] bg-blue-600 text-white p-8 rounded-2xl space-y-4 flex flex-col">
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi.
          </p>

          <div className="flex items-start gap-3 pt-2 pl-6">
            <MapPin className="text-white w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Our Location</h4>
              <p className="text-sm">A108 Adam Street</p>
              <p className="text-sm">New York, NY 535022</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2 pl-6">
            <Phone className="text-white w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p className="text-sm">+1 5589 55488 55</p>
              <p className="text-sm">+1 6678 254445 41</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2 pl-6">
            <Mail className="text-white w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-sm">info@example.com</p>
              <p className="text-sm">contact@example.com</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-auto lg:h-[640px] bg-white border border-gray-200 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi.
          </p>

          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold 
              px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
