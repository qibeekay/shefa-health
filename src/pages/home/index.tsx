import Hero from "../../components/home/Hero";
import Desc from "../../components/home/Desc";
import ServiceOverview from "../../components/home/ServiceOverview";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Desc />
      <ServiceOverview />
    </div>
  );
};

export default Home;
