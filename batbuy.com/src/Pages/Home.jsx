import React from "react";
import { HeaderCategory } from "../Components/HomePage/HeaderCategory";
import { HeaderImage } from "../Components/HomePage/HeaderImage";
import MidTop from "../Components/HomePage/MidTop";
import MidBatCarousel from "../Components/HomePage/MidBatCarousel";
import MidDetails from "../Components/HomePage/MidDetails";
import MidProductCarousel from "../Components/HomePage/MidProductCarousel";

export const Home = () => {
  return (
    <div>
      <HeaderImage />
      <HeaderCategory />
      <MidTop />
      <MidBatCarousel />
      <MidDetails />
      <MidProductCarousel/>
    </div>
  );
};
