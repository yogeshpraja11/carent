"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const scrollHandler = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find ,Book or Rent a Luxury Car-Quickly and Easily
        </h1>
        <p>
          Streamline your car renting experince with effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={scrollHandler}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
