import SplashScreen from "../../components/splash";
import Contacts from "../../components/contacts";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Partners from "../../components/partners";
import Questions from "../../components/questions";
import ScrollToTop from "../../components/scroll";
import Team from "../../components/team";
import WhyUs from "../../components/whyUs";

const Home = () => {
  return (
    <div>
      <SplashScreen />
      <Navbar />
      <Hero />
      <Partners />
      <WhyUs />
      <Questions />
      <Team />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
