import { useState, useEffect } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";
function PostView() {
  const [copyText, setCopyText] = useState("Copy Link");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(currentUrl).then(
        () => {
          setCopyText("Copied!");
          setTimeout(() => setCopyText("Copy Link"), 2000); // Reset the text after 2 seconds
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  return (
    <div>
      <Head>
        <title> Post View | Green KPO</title>
        <meta property="og:site_name" content="Green KPO"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="" />
        <link rel="canonical" href="" />
        <meta name="description" content="Meta description"></meta>
        <meta name="og:description" content="Meta description"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Green KPO" />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta name="keywords" content="Green KPO"></meta>
        <link rel="icon" type="image" href="/favicon.svg"></link>
      </Head>

      {/* Post View */}
      <div className="post-view-area">
        <section>
          <div className="post-top-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="blog-post-content" data-aos="fade-up"
                    data-aos-duration="1000">
                    <h4>Published 20 Jan 2024</h4>
                    <h1>
                      What is the Difference between Carbon Neutral and Net
                      Zero?
                    </h1>
                    <p>
                      In 2019, Amazon announced they’d be net zero carbon by
                      2040. In 2020, Microsoft claimed they’d be carbon negative
                      by 2030. Later that year, Apple declared that it would be
                      carbon neutral for supply chain and products by 2030.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="post-image" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="assets/img/blog/full-view.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="post-full-content" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="post-full-content-inner">
                      <p>
                        But what is the difference between net zero and carbon
                        neutral?
                      </p>
                      <p>
                        When everyone uses different words to describe their
                        climate goals, it’s hard to understand who is doing
                        what.
                      </p>
                      <p>
                        Even though terms like net zero and carbon neutral might
                        have similar meanings, the small differences between
                        them, when considered at scale (especially on the level
                        of world leaders like Apple and Amazon), can mean a very
                        different impact on global warming – and a very
                        different environmental benefit.
                      </p>

                      <h3>First: Let’s break it down</h3>
                      <p>
                        There are enough sustainability terms out there to make
                        your head spin, so let’s run through a few quick
                        definitions before we begin.
                      </p>

                      <h3>What is carbon neutral?</h3>
                      <p>
                        The term carbon neutral refers to an activity or a
                        company which offsets the same amount of carbon or
                        greenhouse gases that they emit. Carbon neutral means
                        that emissions produced and offset are equivalent. On
                        its own, it won’t keep the world under the 1.5°C target,
                        set by the 2015 <a href="">Paris Agreement</a> .
                      </p>
                      <h3>What is net zero carbon?</h3>

                      <p>
                        Net zero (with reference to net zero commitment) means
                        reducing all greenhouse gas emissions as much as humanly
                        possible, and offsetting only the essential emissions
                        that remain. Net zero GHG emissions are designed to keep
                        us on track for a global temperature rise of less than
                        1.5°C – which is in line with pre-industrial levels.
                      </p>
                    </div>

                    <div className="share-link">
                      <ul className="share-ul">
                        <li>
                          <a className="share-link" onClick={copyToClipboard}>
                            <i className="fa-regular fa-copy"></i>
                            <span>{copyText}</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                              currentUrl
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-link"
                          >
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              currentUrl
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-link"
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                              currentUrl
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-link"
                          >
                            <i className="fa-brands fa-linkedin"></i>
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
      </div>
      <Carbon />
    </div>
  );
}
PostView.layout = AppLayout;

export default PostView;
