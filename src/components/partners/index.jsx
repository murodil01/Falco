import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import robcont from "../../assets/robcont.png";
import foodquest from "../../assets/foodquest.png";
import agrobust from "../../assets/agrobust.png";
import freshline from "../../assets/freshline.png";

const partnerLogos = [robcont, foodquest, agrobust, freshline];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 5000, 
    autoplay: true,
    autoplaySpeed: 1, 
    cssEase: "linear", 
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full py-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#09291b]">
        Our Projects
      </h2>
      <Slider {...settings} className="mt-8">
        {duplicatedLogos.map((logo, index) => (
          <div key={index}>
            <div className="h-[180px] w-full flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-auto w-[45%] object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
