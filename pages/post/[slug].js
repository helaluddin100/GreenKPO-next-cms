import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import Carbon from "../components/carbon";
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
          setTimeout(() => setCopyText("Copy Link"), 2000);
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  //post query
  const router = useRouter();
  const { slug } = router.query;
  const [postData, setPostData] = useState(null);
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`${baseuri}/api/posts/${slug}`);
        const data = await response.json();
        setPostData(data);

        console.log("data", data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (slug) {
      fetchPostData();
    }
  }, [slug]);

  if (!postData) {
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
  console.log("image", postData.image);
  return (
    <div>
      <Head>
        <title>{postData.meta_title}</title>
        <meta property="og:site_name" content="Green KPO"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="" />
        <meta name="description" content={postData.meta_description}></meta>
        <meta name="og:description" content={postData.meta_description}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.meta_title} />
        <meta property="og:image" content={`${baseuri}/${postData.image}`} />
        <meta property="image" content={`${baseuri}/${postData.image}`} />
        <meta name="keywords" content={postData.meta_keywords}></meta>
        <link rel="icon" type="image" href="/favicon.svg"></link>
      </Head>

      {/* Post View */}
      <div className="post-view-area">
        <section>
          <div className="post-top-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div
                    className="blog-post-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4>
                      Published{" "}
                      {new Date(postData.created_at).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </h4>
                    <h1>{postData.title}</h1>
                    <p>{postData.small_title}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div
                    className="post-image"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {postData.image && (
                      <img
                        src={`${baseuri}/${postData.image}`}
                        alt={postData.title}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="post-full-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="post-full-content-inner">
                      <div
                        className=""
                        dangerouslySetInnerHTML={{
                          __html: postData.description,
                        }}
                      ></div>
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
