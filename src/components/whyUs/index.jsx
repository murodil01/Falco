const cardItems = [
  {
    number: "01",
    title: "Love to Travel",
    text: "If you love to travel, FALCO lets you explore new places while working on exciting projects. You’ll meet people from different cultures and learn new things everywhere you go. Turn your adventures into valuable experiences with us.",
    delay: 200,
  },
  {
    number: "02",
    title: "Into IT",
    text: "Are you curious about technology? At FALCO, you can learn and work with the latest tools and ideas in IT. We help you build real skills and grow your knowledge in a fun, supportive team.",
    delay: 300,
  },
  {
    number: "03",
    title: "Real Work",
    text: "At FALCO, you won't just study—you'll do real work. You'll join real projects, solve real problems, and see how your ideas make a difference. It's the best way to learn and get experience.",
    delay: 400,
  },
  {
    number: "04",
    title: "Grow Your Career",
    text: "We care about your future. At FALCO, you'll find chances to grow your career, learn new things, and reach your goals. Join us and build a path to the job you dream about.",
    delay: 500,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-[#fafafa] py-20">
      <div className="w-[70%] mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Us</h2>
        <p className="text-gray-600 text-lg">
          At FALCO, we help people grow by matching their interests and goals
          with real opportunities. Whether you love travel, technology, hands-on
          work, or building your career, we're here to support you.
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
              <div className="text-[#8e7d53] text-2xl font-bold mb-2">
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
