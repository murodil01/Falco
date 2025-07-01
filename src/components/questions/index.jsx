import { useState } from "react";

const faqs = [
  {
    question: "What is Falco Community?",
    answer:
      "Falco is a growing hybrid community that brings together talented and intelligent individuals across Uzbekistan, aged 15-30, to collaborate, innovate, and grow.",
  },
  {
    question: "Who can join Falco?",
    answer:
      "Anyone between the ages of 15-30 who is passionate, creative, and eager to solve real-world problems — especially in tech, design, science, and innovation.",
  },
  {
    question: "What kind of activities does Falco organize?",
    answer:
      "Currently, Falco hosts internal team meetings and project work. In the future, we plan to launch mentorship sessions, workshops, and public events depending on member engagement.",
  },
  {
    question: "Is Falco free to join?",
    answer:
      "Yes, Falco will be free to join during its initial phase. Our mission is to make opportunity accessible to talented minds.",
  },
  {
    question: "What's the benefit of joining Falco?",
    answer:
      "You'll connect with other top talents in Uzbekistan, collaborate on meaningful projects, learn from peers, and possibly access future mentorship or startup opportunities.",
  },
  {
    question: "How do I stay updated with Falco's activities?",
    answer:
      "Follow us on [Instagram/Telegram/etc.] and join our official channels to get updates on events, openings, and new initiatives.",
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
              <h3 className="text-3xl font-bold text-[#09291b] mb-4">
                <span>Frequently Asked </span>
                <strong className="text-[#8e7d53]">Questions</strong>
              </h3>
              <p className="text-gray-600">
                You can find answers to frequently asked questions below or
                contact us directly for more detailed information.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className={`border border-gray-200 rounded-lg p-4 shadow transition-all duration-300 ${
                    activeIndex === i ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div
                    onClick={() => toggleFAQ(i)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h4 className="text-base font-medium text-[#09291b] flex gap-2">
                      <span className="text-[#8e7d53] font-bold">{i + 1}.</span>{" "}
                      {item.question}
                    </h4>
                    <span className="text-[#8e7d53] text-[18px]">
                      {activeIndex === i ? "-" : "+"}
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
