import { useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Product() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/products`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div className="preloader d-flex align-items-center justify-content-center vh-100">
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
      <Head>
        <title>Product View | Green KPO</title>
        {/* Meta tags and other head elements */}
      </Head>
      <div className="product-page-wrapper">
        <section>
          <div className="product-page-title-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div
                    className="product-page-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img src="/favicon.svg" alt="" className="page-head-img" />

                    <h1>
                      GreenKPO Lite, your FREE gateway to the world of Carbon
                      Accounting
                    </h1>
                    <p>
                      Our process flow simplified especially for SMEs in the
                      following chart
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="free-gateway-card-area"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="row">
                  {data.map((product) => (
                    <div className="col-xl-3 col-md-6 mb-4" key={product.id}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <img
                            src={`${baseuri}/${product.image}`}
                            alt={product.name}
                          />
                        </div>
                        <div className="margin-border-wrap-small">
                          <div className="product-title">
                            <Link href={`/product/${product.id}`}>
                              <a>{product.name}</a>
                            </Link>
                          </div>
                          <div className="product-facility-list">
                            {product.feature_list && (
                              <ul className="product-facility-ul">
                                {JSON.parse(product.feature_list).map(
                                  (feature, index) => (
                                    <li key={index}>
                                      <div className="right-mark-area">
                                        <img
                                          src="/assets/img/icon/mark.svg"
                                          alt=""
                                        />
                                        <p>{feature}</p>
                                      </div>
                                      <img
                                        src="/assets/img/icon/chevron-right-double.svg"
                                        alt="image not found"
                                      />
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="plateform">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div
                    className="product-page-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h1>
                      Why choose GreenKPO when there are a number of other
                      platforms available?
                    </h1>
                    <p>
                      We are here to simplify. We are here to democratise. We
                      are here for you.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="plateform-card-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="plateform-card mb-4">
                      <div className="plateform-img">
                        <img src="assets/img/product/p1.png" alt="" />
                      </div>

                      <div className="plateform-content">
                        <h3>YOU CENTRIC </h3>
                        <div className="plateform-f-content">
                          <p>GreenKPO platform with you in mind</p>
                        </div>
                        <ul className="plategorm-ul">
                          <li>
                            <p>
                              It is easy to use e.g. the UI, ease of process,
                              dynamic data
                            </p>
                          </li>
                          <li>
                            <p>Easy to integrate with e.g. API capability</p>
                          </li>
                          <li>
                            <p>
                              Automates work flows e.g. task management, survey
                              reminders
                            </p>
                          </li>
                          <li>
                            <p>
                              Saves you time e.g. survey tracking, dynamic data
                              population
                            </p>
                          </li>
                          <li>
                            <p>
                              Designed to encourage adoption e.g. ease of use,
                              prompts
                            </p>
                          </li>
                          <li>
                            <p>
                              Team of carbon consultants always available to
                              guide you along your carbon reduction journey
                            </p>
                          </li>
                          <li>
                            <p>
                              The platform is there to motivate you to move onto
                              the next phase
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="plateform-card mb-4">
                      <div className="plateform-img">
                        <img src="assets/img/product/p2.png" alt="" />
                      </div>

                      <div className="plateform-content">
                        <h3>TECHNOLOGY </h3>
                        <div className="plateform-f-content">
                          <p>
                            AI enabled, flexible, dynamic, agile and
                            customisable especially for SMEs
                          </p>
                        </div>
                        <ul className="plategorm-ul">
                          <li>
                            <p>
                              We understand that carbon reduction can be a
                              complex process so we have designed the GreenKPO
                              platform with you in mind, irrespective of the
                              size of your enterprise, but also to make it
                              simpler especially for the small and medium sized.
                            </p>
                          </li>
                          <li>
                            <p>
                              It is easy to use e.g. the UI, ease of process,
                              dynamic data
                            </p>
                          </li>
                          <li>
                            <p>Easy to integrate with e.g. API capability</p>
                          </li>
                          <li>
                            <p>
                              Automates work flows e.g. task management, survey
                              reminders
                            </p>
                          </li>
                          <li>
                            <p>
                              Saves you time e.g. survey tracking, dynamic data
                              population
                            </p>
                          </li>
                          <li>
                            <p>
                              Designed to encourage adoption e.g. ease of use,
                              prompts
                            </p>
                          </li>
                          <li>
                            <p>
                              Team of carbon consultants always available to
                              guide you along your carbon reduction journey
                            </p>
                          </li>
                          <li>
                            <p>
                              The platform is there to motivate you to move onto
                              the next phase
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="plateform-card mb-4">
                      <div className="plateform-img">
                        <img src="assets/img/product/p3.png" alt="" />
                      </div>

                      <div className="plateform-content">
                        <h3>CONNECTED DATA</h3>
                        <div className="plateform-f-content">
                          <p>Carbon reduction is all about data</p>
                        </div>
                        <ul className="plategorm-ul">
                          <li>
                            <p>
                              The GreenKPO is built on the premise of connecting
                              data to make your life easier and to provide rich
                              and meaningful insights in your final report
                            </p>
                          </li>
                          <li>
                            <p>
                              This means that by entering data in one area of
                              the platform, we can easily use this data in
                              another area of the platform
                            </p>
                          </li>
                          <li>
                            <p>
                              Connected data also enables to platform to create
                              digital workflows e.g. task management
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="plateform-card mb-4">
                      <div className="plateform-img">
                        <img src="assets/img/product/p4.png" alt="" />
                      </div>

                      <div className="plateform-content">
                        <h3>CARBON EXPERTS </h3>
                        <div className="plateform-f-content">
                          <p>Carbon reduction is all about data</p>
                        </div>
                        <ul className="plategorm-ul">
                          <li>
                            <p>
                              We understand that carbon reduction can be a
                              daunting process so we have assembled a team of
                              carbon experts who are also the creators of our AI
                              engine
                            </p>
                          </li>
                          <li>
                            <p>
                              They will be always available to guide and help
                              you at every step of the way as you embark on your
                              carbon reduction journey
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="plateform-card mb-4">
                      <div className="plateform-img">
                        <img src="assets/img/product/p5.png" alt="" />
                      </div>

                      <div className="plateform-content">
                        <h3>COMPLIANCE</h3>
                        <div className="plateform-f-content">
                          <p>They will be always available to guide</p>
                        </div>
                        <ul className="plategorm-ul">
                          <li>
                            <p>
                              ISO Standard compliance enabled in the platform
                            </p>
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

        <section>
          <div
            className="product-page-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img
                        src="assets/img/product/5.jpg"
                        alt="Image not found"
                      />
                    </div>
                    <div className="margin-border-wrap">
                      <div className="product-title">
                        <a href="">Our USP's</a>
                      </div>

                      <div className="product-facility-list">
                        <ul className="product-facility-ul">
                          {/* <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Connected dynamic data</p>
                            </div>
                          </li> */}
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>
                                Ease of integrating with your existing
                                infrastructure, especially if you are an SME
                                owner
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Multilingual - available in 20 languages</p>
                            </div>
                          </li>
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Can be branded to your branding </p>
                            </div>
                          </li>
                          {/* <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Compliance - ISO Level</p>
                            </div>
                          </li>
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Democratic pricing and access</p>
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img
                        src="assets/img/product/6.jpg"
                        alt="Image not found"
                      />
                    </div>
                    <div className="margin-border-wrap">
                      <div className="product-title">
                        <a href="">The tangible value you get</a>
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
                                Connected Data - You enter your data once, the
                                platform will then use it in multiple locations
                                to automate workflows and create rich insights
                                in your report
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
                                Time - The platform has been designed to remove
                                manual tasks and effort, automating as much as a
                                possible to save all users time
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
Product.layout = AppLayout;

export default Product;
