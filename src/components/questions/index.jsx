import React, { useState } from "react";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",
  },
  {
    question:
      "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="w-[83%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span>Frequently Asked </span>
                <strong className="text-blue-600">Questions</strong>
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className={`border border-gray-200 rounded-lg p-4 shadow transition-all duration-300 ${
                    activeIndex === i ? "bg-blue-50" : "bg-white"
                  }`}
                >
                  <div
                    onClick={() => toggleFAQ(i)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h4 className="text-base font-medium text-gray-800 flex gap-2">
                      <span className="text-blue-600 font-bold">{i + 1}.</span>{" "}
                      {item.question}
                    </h4>
                    <span className="text-blue-600">
                      {activeIndex === i ? "−" : "+"}
                    </span>
                  </div>
                  {activeIndex === i && (
                    <p className="mt-3 text-gray-600 text-sm">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
