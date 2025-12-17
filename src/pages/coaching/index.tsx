import React from "react";
import CoachingHero from "../../components/coaching/CoachingHero";
import CoachingServices from "../../components/coaching/CoachingServices";
import Booking from "../../components/coaching/Booking";

const Coaching = () => {
  return (
    <div>
      <CoachingHero />
      <CoachingServices />
      <Booking />
    </div>
  );
};

export default Coaching;
