import { categories } from "../utils/categoryList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Category({ handleCategoryClick }: { handleCategoryClick: (query: string) => void }) {

  return (
    <>
      <Swiper watchSlidesProgress={true} className="mySwiper text-center mx-4 md:mx-8"
        slidesPerView={8}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.name}
            onClick={() => handleCategoryClick(category.query)}
            className="bg-slate-500 py-2 rounded-lg cursor-pointer hover:opacity-70"
          >
            {category.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
