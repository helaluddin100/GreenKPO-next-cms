import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import Carbon from "../components/carbon";
function ProductDetails() {
  //post query
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState(null);
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${baseuri}/api/product/${id}`);
        const data = await response.json();
        setProductData(data);

        console.log("data", data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (!productData) {
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
  }
  console.log("image", productData.image);

  return (
    <div>
      <Head>
        <title>{productData.meta_title} </title>
        <meta property="og:site_name" content="Green KPO"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="" />
        <link rel="canonical" href="" />
        <meta name="description" content={productData.meta_description}></meta>
        <meta
          name="og:description"
          content={productData.meta_description}
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={productData.meta_title} />
        <meta property="og:image" content={`${baseuri}/${productData.image}`} />
        <meta property="image" content={`${baseuri}/${productData.image}`} />
        <meta name="keywords" content={productData.meta_keyword}></meta>
        <link rel="icon" type="image" href="/favicon.svg"></link>
      </Head>

      <div className="product-details-wrapper">
        <section>
          <div className="product-details-page-title">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div
                    className="section-title-left py-56"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="text-center">
                    <img src="/favicon.svg" alt="" className="page-head-img" />

                    <h2>{productData.name}</h2>
                    <p>{productData.small_description}</p>
                    </div>
                  </div>

                  {/* <div
                                        className="product-image"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <img src={`${baseuri}/${productData.image}`} alt={productData.name} />
                                    </div> */}

                  <div
                    className="product-details-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: productData.description,
                      }}
                    ></div>
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
                        src="/assets/img/product/5.jpg"
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
                                src="/assets/img/icon/check-circle.svg"
                                alt=""
                              />
                              <p>Connected dynamic data</p>
                            </div>
                          </li>
                          <li>
                            <div className="right-mark-area">
                              <img
                                src="/assets/img/icon/check-circle.svg"
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
                        src="/assets/img/product/6.jpg"
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
                                src="/assets/img/icon/check-circle.svg"
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
                        src="/assets/img/product/6.jpg"
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
                                src="/assets/img/icon/check-circle.svg"
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
                                src="/assets/img/icon/check-circle.svg"
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
