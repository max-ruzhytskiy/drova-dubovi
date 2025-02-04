import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";

import img1 from "../assets/forSwiper/Photo1.jpg";
import img2 from "../assets/forSwiper/Photo2.jpg";
import img3 from "../assets/forSwiper/Photo3.jpg";
import img4 from "../assets/forSwiper/Photo4.jpg";
import img5 from "../assets/forSwiper/Photo5.jpg";
import img6 from "../assets/forSwiper/Photo6.jpg";
import img7 from "../assets/forSwiper/Photo7.jpg";

const StyledGallery = styled.div`
  width: 100%;
  height: 100%; /* Висота секції дорівнює висоті вікна */
  //   max-width: 1200px;
  margin: 0 auto;
  background-color: #2f190c;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: #b66631;
    text-shadow: 2px 2px 4px rgba(205, 148, 5, 0.595);
  }

  @media (max-width: 768px) {
    height: 100%; /* Те ж саме для мобільних пристроїв */
  }

  .swiper {
    height: 100%; /* Галерея займає всю висоту секції */
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Слайди займають всю висоту галереї */
  }

  .swiper-slide img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Масштабуємо зображення, щоб заповнити слайд */
  }
`;

const Gallery = () => {
  return (
    <StyledGallery id="gallery">
      <h2>Галерея</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCube]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        // effect="cube"
        // cubeEffect={{
        //   shadow: true, // Додає тінь
        //   slideShadows: true, // Тіні на слайдах
        //   shadowOffset: 20, // Відстань тіні
        //   shadowScale: 0.94, // Масштаб тіні
        // }}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 6000 }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            // Від нуля до 768px
            slidesPerView: 1,
            spaceBetween: 10, // Менший відступ між слайдами
            effect: "slide", // Простий ефект для мобільних
          },
          768: {
            // Для екранів ширше 768px (планшети та ПК)
            slidesPerView: 2, // Показувати 2 слайда
          },
          1024: {
            // Для екранів ширше 1024px (ПК)
            slidesPerView: 3, // Показувати 3 слайда
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={img1} alt="Фото 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Фото 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Фото 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Фото 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Фото 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Фото 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Фото 7" />
        </SwiperSlide>
      </Swiper>
    </StyledGallery>
  );
};

export default Gallery;
