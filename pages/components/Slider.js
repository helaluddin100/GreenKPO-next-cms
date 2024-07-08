import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Slider() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/sliders`, fetcher);

  if (error) return <div>Failed to load posts</div>;
  if (!data)
    return (
      <div className="preloader d-flex align-items-center justify-content-center ">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img
              className="mb-10"
              src="/assets/img/spinner.svg"
              alt="Green KPO"
            />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div
        className="hero-slider-wrapper"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <div className="row">
          <div className="col-md-12">
            <Swiper
              centeredSlides={true}
              // pagination={{
              //   clickable: true,
              // }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper hero-slider-border"
            >
              <div className="hero-slider">
                {data.map((slider) => (
                  <SwiperSlide>
                    <div className="hero-slider-item">
                      <div className="slider-content">
                        <p>{slider.small_title}</p>
                        <h2>{slider.title}</h2>
                      </div>
                      <img
                        src={`${baseuri}/${slider.image}`}
                        alt={slider.title}
                        className="desktop-slider-img"
                      />

                      <img
                        src={`${baseuri}/${slider.mobile_image}`}
                        alt={slider.title}
                        className="mobile-slider-img"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
