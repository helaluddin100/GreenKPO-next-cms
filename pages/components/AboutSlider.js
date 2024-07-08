import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function AboutSlider() {
  return (
    <div>
      <div className="pt-56" data-aos="fade-up" data-aos-duration="2000">
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
                <SwiperSlide>
                  <div className="hero-slider-item">
                    <div className="slider-content ">
                      <h2 className="about-slider-content">
                        77% of consumers say it’s at least moderately important
                        that brands are sustainable and environmentally
                        responsible.
                      </h2>
                    </div>
                    <img
                      src="assets/img/about/1.png"
                      alt="Image not found"
                      className="desktop-slider-img"
                    />

                    <img
                      src="assets/img/about/1mobile.png"
                      alt="image not found"
                      className="mobile-slider-img"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="hero-slider-item">
                    <div className="slider-content ">
                      <h2 className="about-slider-content">
                        2 in 3 employees are more likely to work for a company
                        with strong environmental policies.
                      </h2>
                    </div>
                    <img
                      src="assets/img/about/2.png"
                      alt="Image not found"
                      className="desktop-slider-img"
                    />

                    <img
                      src="assets/img/about/2mobile.png"
                      alt="image not found"
                      className="mobile-slider-img"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="hero-slider-item">
                    <div className="slider-content ">
                      <h2 className="about-slider-content">
                        Investors will pay a 10% premium for a company with a
                        positive ESG record.
                      </h2>
                    </div>
                    <img
                      src="assets/img/about/3.png"
                      alt="Image not found"
                      className="desktop-slider-img"
                    />

                    <img
                      src="assets/img/about/3mobile.png"
                      alt="image not found"
                      className="mobile-slider-img"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSlider;
