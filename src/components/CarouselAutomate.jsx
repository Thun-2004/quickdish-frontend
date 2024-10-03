import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "./Banner";

const CarouselAutomate = () => {
  const carouselItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const responsive = {
    // Define responsive settings for different screen sizes
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    //   slidesToSlide: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1,
    // },
  };

  const customAnimation = {
    // Define your custom animation styles here
    transform: 'translateX(-50%)',
    transition: 'transform .5s ease-in-out',
  };

  return (
    <Carousel
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={500}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={["desktop"]}
      autoPlaySpeed={3000}
      showDots={true}
    >
      {carouselItems.map((item) => (
          <Banner key={item.id} />
      ))}
    </Carousel>
  );
};

export default CarouselAutomate;