
const cardItems = [
  {
    number: "01",
    title: "Primus contactus",
    text: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum. Morbi fermentum quam nec nunc varius bibendum.",
    delay: 200,
  },
  {
    number: "02",
    title: "Quaestio investigatio",
    text: "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
    delay: 300,
  },
  {
    number: "03",
    title: "Consilium evolutio",
    text: "Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue.",
    delay: 400,
  },
  {
    number: "04",
    title: "Executio",
    text: "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
    delay: 500,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="w-[90%] mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Us</h2>
        <p className="text-gray-600 text-lg">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div
        className="w-[84%] mx-auto flex flex-col lg:flex-row gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="text-blue-600 text-2xl font-bold mb-2">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-5/12" data-aos="zoom-out" data-aos-delay="300">
          <img
            src="https://i.vuzopedia.ru/storage/app/uploads/public/65e/6d0/25a/65e6d025aff7e170876633.jpeg"
            alt="Why Us"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
