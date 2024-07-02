import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
function ProductDetails() {
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

      <div className="product-details-wrapper">
        <section>
          <div className="product-details-page-title">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="section-title-left py-56"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2>Organisational Details</h2>
                    <p>
                      Your carbon reduction journey starts here with the story
                      of your business and by inputting your data
                    </p>
                  </div>

                  <div
                    className="product-image"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <img src="assets/img/product/product-details.png" alt="" />
                  </div>

                  <div
                    className="product-details-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <p>
                      We start with the administrative data of your business.
                      Company name, address, sites, regions etc. This data is
                      needed for 2 reasons:
                    </p>

                    <ul className="product-details-list">
                      <li>
                        <p>To make your final report compliant</p>
                      </li>
                      <li>
                        <p>
                          Entering your data here helps us to plan out your
                          approach and requirements for the project
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="product-page-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img
                        src="assets/img/product/5.jpg"
                        alt="Image not found"
                      />
                    </div>
                    <div className="margin-border-wrap">
                      <div className="product-title">
                        <a href="">Value</a>
                      </div>

                      <div className="product-facility-list">
                        <ul className="product-facility-ul">
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Connected dynamic data</p>
                            </div>
                          </li>
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>
                                Your data only needs to be entered in one
                                location
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img
                        src="assets/img/product/6.jpg"
                        alt="Image not found"
                      />
                    </div>
                    <div className="margin-border-wrap">
                      <div className="product-title">
                        <a href="">USP</a>
                      </div>

                      <div className="product-facility-list">
                        <ul className="product-facility-ul">
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Connected dynamic data</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img
                        src="assets/img/product/6.jpg"
                        alt="Image not found"
                      />
                    </div>
                    <div className="margin-border-wrap">
                      <div className="product-title">
                        <a href="">Preparation</a>
                      </div>

                      <div className="product-facility-list">
                        <ul className="product-facility-ul">
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>
                                Pre-populate data fields with information that
                                GreenKPO has
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>
                                Personalisation with client's name and industry
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Carbon />
      </div>
    </div>
  );
}
ProductDetails.layout = AppLayout;

export default ProductDetails;
