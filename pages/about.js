import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
import AboutSlider from "./components/AboutSlider";
function About() {
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
        <link rel="icon" type="image" href="/favicon.svg"></link>
      </Head>
      <div className="about-page-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div
                className="section-title-center"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img src="/favicon.svg" alt="" className="page-head-img" />
                <h4>Why we’re different</h4>
                <h2>Why do we need to <br /> democratise Carbon Accounting?</h2>
                <p>
                  With more and more countries making Carbon scores mandatory
                  for  businesses of all sizes, it's critical to have a
                  platform that's made for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="about-main-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>
                  Carbon accounting quantifies the climate impact of an organization’s business.  Carbon accounting is essential for businesses to understand their environmental impact, meet reporting requirements, and identify opportunities for carbon reduction. These capabilities lay the foundation for the various business benefits. Many businesses are already required to disclose their carbon emissions – and legislative requirements are continuously increasing. Regulations like the Corporate Sustainability Reporting Directive (CSRD) in the EU and Streamlined Energy and Carbon Reporting (SECR) in the UK mandate emissions reporting for businesses of various sizes and across various sectors. This makes comprehensive carbon accounting a compliance necessity for businesses.
                  </p>
                  <p>
                  However, there are benefits beyond just compliance for businesses to start their carbon accounting journey; like minimising risks, reducing inefficiency and building brand equity.
                  </p>
                 
                </div>
              </div>

              <div className="col-md-12">
                <div
                  className="about-image"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                 <AboutSlider />
                </div>
              </div>
            </div>
          </div>

          <div
            className="about-full-width-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="about-full-content">
                  <h2>Our Story</h2>
                  <p>
                    Given the push-pull effect created by governments demanding
                    compliance and consumers preferring sustainable
                    companies/brands/services, and the apprehension of Carbon
                    Accounting being a costly affair which tends to push small
                    and medium sized enterprises away, we at GreenKPO felt the
                    need for democratisation of Carbon Accounting.
                  </p>
                  <p>
                    Our aim at GreenKPO is to make it easy, convenient and
                    entirely possible for you to take the first step towards
                    your Carbon Journey. Our free Lite version is carefully
                    designed to suffice this aim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tema section */}
      <section>
        <div
          className="team-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="section-title-left text-center">
                  <h4>Our story</h4>
                  <h2>Why GreenKPO? Who are we?</h2>
                  <p>
                    A collective of software experts and industry specialists
                    bounded by the same ambition: A Zero Carbon Future
                  </p>
                </div>
              </div>
            </div>
            <div className="team-wrapper">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/1.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Alisa Hester</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Founder & CEO</h4>
                      <p>
                        Former co-founder of Opendoor. Early staff at Spotify
                        and Clearbit.
                      </p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/2.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Rich Wilson</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Engineering Manager</h4>
                      <p>
                        Lead engineering teams at Figma, Pitch, and Protocol
                        Labs.
                      </p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/3.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Annie Stanley</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Product Manager</h4>
                      <p>Former PM for Airtable, Medium, Ghost, and Lumi.</p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/4.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Johnny Bell</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Frontend Developer</h4>
                      <p>
                        Former frontend dev for Linear, Coinbase, and
                        Postscript.
                      </p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/5.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Mia Ward</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Backend Developer</h4>
                      <p>
                        Lead backend dev at Clearbit. Former Clearbit and Loom.
                      </p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="team-img">
                      <img src="assets/img/team/6.png" alt="Image not found" />
                    </div>
                    <div className="team-member-details">
                      <a href="" className="team-name">
                        <span>Archie Young</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M7.66663 17L17.6666 7M17.6666 7H7.66663M17.6666 7V17"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <h4 className="team-title">Product Designer</h4>
                      <p>
                        Founding design team at Figma. Former Pleo, Stripe, and
                        Tile.
                      </p>

                      <ul className="team-social">
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="fa-brands fa-dribbble"></i>
                          </a>
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

      {/* tema section end */}
      <section>
        <div
          className="story-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="story-content">
                  <h2>The Story of our Origin</h2>
                  <p>
                    We are a team of engineers who dream of an emission-free,
                    clean, green climate. We are driven to use our passion for
                    technology and data to bring meaningful, purpose-driven
                    solutions.
                  </p>
                  <p>
                    Concerned by climate change and the challenges it poses, we
                    decided to research and learn more about the causes and
                    changes needed.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="story-img">
                  <img src="assets/img/inner/about-buttom.png" alt="" />
                </div>
              </div>
            </div>

            <div className="story-full-content-wrapper">
              <div className="row">
                <div className="col-lg-11">
                  <div className="full-story-content">
                    <p>
                      We saw how and where we could help which led us to create
                      GreenKPO with the mission of empowering businesses to
                      drive constructuve change in their carbon habits.
                    </p>
                    <p>
                      We can apply our engineering skills to your data and
                      transform it into carbon insights with practical
                      strategies and plans to address key areas which help you
                      initiate your carbon reduction journey.
                    </p>
                    <p>
                      We believe in the power of collective actions to address
                      big problems and bringing necessary changes. Are you ready
                      to join us?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carbon />
    </>
  );
}
About.layout = AppLayout;
export default About;
