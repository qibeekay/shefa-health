import Hero from "../../components/home/Hero";
import Desc from "../../components/home/Desc";
import ServiceOverview from "../../components/home/ServiceOverview";
import GetInTouch from "../../components/home/GetInTouch";
import Credential from "../../components/home/Credential";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Desc />
      <ServiceOverview />
      <GetInTouch />
      <Credential />
    </div>
  );
};

export default Home;
