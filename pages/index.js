import React from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";
import LatestPost from "./components/LatestPost";
import Slider from "./components/Slider";
function Home() {
  return (
    <>
      <Head>
        <title>Green KPO Next.js website</title>
        <meta property="og:site_name" content="Green KPO"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="" />
        <link rel="canonical" href="" />
        <meta name="description" content="Meta description"></meta>
        <meta name="og:description" content="Meta description"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Green KPO Next.js website" />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta name="keywords" content="Green KPO Next.js website"></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <div>
        <section>
          <div className="hero-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-content">
                    <h1 data-aos="fade-up" data-aos-duration="1000">
                      Democratising Carbon Accounting <br /> One Business{" "}
                      <a href="">At A Time</a>
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="1500">
                      Carbon Accounting is easy, it's meant for businesses of
                      all sizes and with GreenKPO it takes only a few steps to
                      understand how to assess, manage and take action about
                      your business's Carbon emission.
                    </p>

                    <div
                      className="hero-button"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      {/* <button className="video-btn">
                        <i className="fa-regular fa-circle-play"></i>{" "}
                        <span>Watch Demo</span>
                      </button> */}

                      <a href="#" className="custom-btn">
                        <i className="fa-regular fa-circle-play"></i>{" "}
                        <span>Watch Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Slider />
            </div>
          </div>
        </section>

        {/* End Hero section */}
        <section>
          <div className="democrati">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="section-title">
                    <h2>
                      Who are we democratising <br /> Carbon Accounting for?
                    </h2>
                    <p>
                      Our solutions are meant for businesses of all sizes;
                      however we especially want to help smaller businesses to
                      set and reach their Carbon commitments in easy,
                      understandable steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="democrati-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="democrati-content"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <div className="democrati-content-title">
                        <h4 className="sm-title">You too can start NOW!</h4>
                        <h2>
                          Businesses with <a href="">0-10 employees</a> who want
                          to kickstart their Carbon reporting journey
                        </h2>
                        <p>
                          Running a small business isn't easy. Unlike bigger
                          corporations, it's likely that you won't have
                          resources to invest in Carbon accounting. However,
                          it's simpler if you take the process one step at a
                          time. And we are here to help:
                        </p>
                      </div>
                      <ul className="democrati-ul">
                        <li>
                          <h3>Analyze Preparedness</h3>
                          <p>
                            it all comes down to data and it's accuracy. Let us
                            help you.{" "}
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>

                        <li>
                          <h3>Choose a Carbon Accounting Standard </h3>
                          <p>
                            There are multiple protocols, know which one suits
                            best your business. We can help!
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>

                        <li>
                          <h3>Use the Right Tools</h3>
                          <p>
                            Our Lite product is absolutely free of cost which
                            helps you take the first steps in your Carbon
                            Accounting journey
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="democrati-img"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <img src="assets/img/inner/democrati.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="democrati-wrapper pmt-20">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="democrati-img-alt"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <img src="assets/img/inner/business.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div
                      className="democrati-content"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <div className="democrati-content-title">
                        <h4 className="sm-title">
                          This is the RIGHT time to start!
                        </h4>
                        <h2>
                          Businesses with <a href="">50+ employees</a> who want
                          to kickstart their Carbon reporting journey
                        </h2>
                        <p>
                          As a medium sized enterprise, you probably can stay
                          out of the radars of the government mandates till
                          date. However, to gain more customers who are looking
                          for sustainable businesses and to build trust it's
                          paramount you start your Carbon Accounting journey
                          right away!
                        </p>
                      </div>
                      <ul className="democrati-ul">
                        <li>
                          <h3>Analyze Preparedness</h3>
                          <p>
                            it all comes down to data and it's accuracy. Let us
                            help you.{" "}
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>

                        <li>
                          <h3>Choose a Carbon Accounting Standard </h3>
                          <p>
                            There are multiple protocols, know which one suits
                            best your business. We can help!
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>

                        <li>
                          <h3>Designate an ESG Manager</h3>
                          <p>
                            You can upgrade an existing employee with additional
                            responsibilities or hire a new resource. We can be
                            your ESG management arm too!
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>

                        <li>
                          <h3>Use the Right Tools</h3>
                          <p>
                            Our Lite product is absolutely free of cost which
                            helps you take the first steps in your Carbon
                            Accounting journey
                          </p>
                          <a href="">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Democrati end  */}

        <Carbon />

        {/* Reporting section start */}
        <section>
          <div className="reporting-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <div className="section-title-left">
                    <h2>
                      Reporting is only the first step in your Carbon neutral
                      goals
                    </h2>
                    <p>Our friendly team is always here to chat.</p>
                  </div>
                </div>
              </div>

              <div className="reporting-card-area">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper reporting-slider"
                >
                  <SwiperSlide>
                    <div
                      className="reporting-card"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <div className="reporting-card-content">
                        <div className="reporting-icon">
                          <img
                            src="assets/img/icon/message.svg"
                            alt="Image not found"
                          />
                        </div>
                        <div className="reporting-text">
                          <h3>Easy Reporting for Compliance</h3>
                        </div>

                        <div className="reporting-email">
                          <a href="" class="main-custom-btn">
                            <span>Click to Connect</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="reporting-card"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="reporting-card-content">
                        <div className="reporting-icon">
                          <img
                            src="assets/img/icon/message.svg"
                            alt="Image not found"
                          />
                        </div>
                        <div className="reporting-text">
                          <h3>AI Based Reduction Insights & Strategies</h3>
                        </div>

                        <div className="reporting-email">
                          <a href="" class="main-custom-btn">
                            <span>Click to Connect</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="reporting-card"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="reporting-card-content">
                        <div className="reporting-icon">
                          <img
                            src="assets/img/icon/message.svg"
                            alt="Image not found"
                          />
                        </div>
                        <div className="reporting-text">
                          <h3>Integrate Scope 1, 2 & 3</h3>
                        </div>

                        <div className="reporting-email">
                          <a href="" class="main-custom-btn">
                            <span>Click to Connect</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="reporting-card"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <div className="reporting-card-content">
                        <div className="reporting-icon">
                          <img
                            src="assets/img/icon/message.svg"
                            alt="Image not found"
                          />
                        </div>
                        <div className="reporting-text">
                          <h3>Real-Time Dashboard & Tracking</h3>
                        </div>

                        <div className="reporting-email">
                          <a href="" class="main-custom-btn">
                            <span>Click to Connect</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting section start end */}

        {/* Carbon accounting start */}
        <section>
          <div className="carbon-section-second">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="section-title-center">
                    <h2>
                      Why Carbon accounting and reduction should be top on your
                      business priority list?
                    </h2>
                    <p>
                      Carbon Accounting is not the future, it's the present.
                      More and more governments are making it mandatory for
                      businesses of any size. Some governments are also
                      encouraging Carbon accounting by incentivising businesses
                      that take up the journey. You shouldn't be left behind!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Carbon />

        {/* Blog section */}
        <LatestPost />
      </div>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
