import React from "react";
import classes from "./HeroSection.module.scss";
import Image from "next/image";
import profileImg from "../../images/profile.png";
import Heading from "../typography/Heading";
import Text from "../typography/Text";

const HeroSection = (props) => {
  return (
    <div className={classes.heroSection}>
      <div className={classes.profileImg}>
        <Image src={profileImg} height="200" width="200" alt="Avatar"></Image>
      </div>
      <Heading className={classes.name}>Tien Thinh</Heading>
      <Text className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  );
};

export default HeroSection;
