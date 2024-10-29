import React, { useEffect, useState } from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Herofirstsection = () => {
  const offerBanner = [
    {
      _id: 1,
      imageURL: "https://pintola.in/cdn/shop/files/Website_Banner-4_1800x650_1783ac72-3589-4885-a437-536ab0b805fc_2000x.jpg?v=1717571458",
    },
    {
      _id: 2,
      imageURL: "https://pintola.in/cdn/shop/files/Website_Banner_1_2000x.jpg?v=1709183995",
    },
    {
      _id: 3,
      imageURL: "https://pintola.in/cdn/shop/files/Website-Banner-copy3_2000x.jpg?v=1708516056",
    },
  ];

  return (
    <>
      <div className="henlyhomebanner">
        <Swiper
          // spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // Mobile small (smaller than 500px)
            320: {
              slidesPerView: 1, // 1 slide on very small screens
              // spaceBetween: 5,
            },
            // Mobile medium (around 500px)
            500: {
              slidesPerView: 1,
              // spaceBetween: 10,
            },
            // Tablets (around 768px)
            768: {
              slidesPerView: 1, // Can show partial next slide
              // spaceBetween: 15,
            },
            // Tablets large (around 1024px)
            1024: {
              slidesPerView: 1, // Showing 2 slides
              // spaceBetween: 20,
            },
            // Laptops (around 1300px)
            1300: {
              slidesPerView: 1, // Show 2.5 slides
              // spaceBetween: 25,
            },
            // Desktop (larger than 1500px)
            1500: {
              slidesPerView: 1, // Show 3 full slides
              // spaceBetween: 30,
            },
          }}
          navigation={true}
          //  modules={[Autoplay, Pagination, Navigation]}
          modules={[Autoplay, Navigation, A11y]}
          className="swiper-wrapper"
        >
          {offerBanner.map((banner) => (
            <SwiperSlide key={banner._id}>
              <img
                key={banner._id}
                src={
                  banner.imageURL
                    ? banner.imageURL
                    : "/assets/eng-bud-banner-demo.png"
                }
                alt="offer-banner-image"
                // className="w-full lg:h-[400px] md:h-[300] max-sm:h-[200]"
                className="h-[auto] lg:max-h-[600px] md:max-h-[300px] max-sm:max-h-[200px] mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Herofirstsection;
