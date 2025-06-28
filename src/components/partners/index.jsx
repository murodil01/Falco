import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://avatars.mds.yandex.net/i?id=c034dd081b542ee2f5d9a336cb236cf7c2ff7d0e-8454246-images-thumbs&n=13",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Telegram.svg",
  "https://loverust.ru/wp-content/uploads/2023/01/3-2-1536x1086.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://avatars.mds.yandex.net/i?id=ad775e3d93afd8f6f04475a18738c09262fe0350-5233382-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=da0e3df1e6631d6bcb754eacbc5555b3_l-5887546-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=667ad906b34fa6ca3fe8687e22cb02d62b4687d1-5858269-images-thumbs&n=13",
  "https://banner2.cleanpng.com/20180420/plw/kisspng-logo-company-afacere-corporate-identity-brand-5ada8df7688633.3700216915242726314281.jpg",
  "https://avatars.mds.yandex.net/i?id=2d18c59cda8dd029e74248206983de44cb6ce6c8-5211644-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=51780ee028a3716739c07ef2cb233a17_l-5231699-images-thumbs&n=13",
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
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
    <div className="w-full py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#09291b]">
        Our Partners
      </h2>
      <Slider {...settings} className="mt-12">
        {duplicatedLogos.map((logo, index) => (
          <div key={index}>
            <div className="h-[150px] w-full flex items-center justify-center border border-gray-300">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-[60px] w-[100px] object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
