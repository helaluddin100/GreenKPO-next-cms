import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
import CarbonFaq from "./components/carbonfaq";
import Consider from "./components/Consider";
import ProductFaq from "./components/ProductFaq";
import Contact from "./components/Contact";

function Faq() {
  return (
    <div>
      <Head>
        <title> Green KPO Next.js website </title>
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
      <div className="faq-wrapper">
        <section>
          <div className="faq-head" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <div className="section-title-left text-center">
                    <h4> FAQs </h4> <h2> Frequently asked questions </h2>
                    <p> Have questions ? We’ re here to help. </p>
                  </div>
                  <div className="search-box-wrapper">
                    <form action="">
                      <div className="search-input">
                        <i className="fa-solid fa-magnifying-glass"> </i>
                        <input
                          type="text"
                          placeholder="Search"
                          className="search-box"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarbonFaq />
        <Consider />
        <ProductFaq />
        <Carbon />
        <section>
          <div className="container">
            <div
              className="hero-slider-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-slider">
                    <div className="hero-slider-item">
                      <div className="slider-content">
                        <p>
                          Did you know you could start your carbon journey and
                          get
                        </p>
                        <h2 className="faq-gov"> Government grants ? </h2>
                      </div>
                      <img src="/assets/img/inner/faq.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============contact area================ */}
        <Contact />
      </div>
    </div>
  );
}
Faq.layout = AppLayout;

export default Faq;
