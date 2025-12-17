import Hero from "../../components/home/Hero";
import Desc from "../../components/home/Desc";
import ServiceOverview from "../../components/home/ServiceOverview";
import GetInTouch from "../../components/home/GetInTouch";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Desc />
      <ServiceOverview />
      <GetInTouch />
    </div>
  );
};

export default Home;
