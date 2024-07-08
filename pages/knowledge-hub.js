import { useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Carbon from "./components/carbon";

import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);
function KnowledgeHub() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [page, setPage] = useState(1);
  const { data: lastPost, error: lastPostError } = useSWR(
    `${baseuri}/api/last-post`,
    fetcher
  );
  const { data: posts, error: postsError } = useSWR(
    `${baseuri}/api/posts?page=${page}&perPage=6`,
    fetcher
  );

  if (lastPostError || postsError) return <div>Failed to load</div>;
  if (!lastPost || !posts)
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

  console.log("Last Post:", lastPost);
  console.log("Posts:", posts);
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

      <div className="blog-page-wrapper">
        <section>
          <div
            className="blog-latest-post"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="section-title-left py-56">
                    <h4>Our blog</h4>
                    <h2>Resources and insights</h2>
                    <p>
                      The latest industry news, interviews, technologies, and
                      resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* latest blog */}

        <section>
          <div
            className="last-news"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="last-news">
                    <div className="last-news-img">
                      {lastPost.image && (
                        <img
                          src={`${baseuri}/${lastPost.image}`}
                          alt={lastPost.title}
                        />
                      )}
                    </div>
                    <div className="last-blog-content">
                      <Link href={`/post/${lastPost.slug}`}>
                        <a className="last-post-title">
                          <span>
                            {lastPost.title.length > 50
                              ? `${lastPost.title.slice(0, 50)}...`
                              : lastPost.title}
                          </span>
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
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </Link>
                      <p>{lastPost.small_title}</p>
                      <div className="post-publish-tag">
                        <div className="post-publish">
                          <p className="publish-title">Published on</p>
                          <p>
                            {new Date(lastPost.created_at).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                        <div className="post-tag">
                          <p className="publish-title">File under</p>
                          <ul className="post-tag-ul">
                            {lastPost.tag_names &&
                              lastPost.tag_names.map((tag, index) => (
                                <li key={index}>
                                  <a href="" className="post-tag-link">
                                    {tag}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* all blog post */}
        <section>
          <div
            className="all-blog-post"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="my-64">
                <div className="row">
                  {posts.data.map((post, index) => (
                    <div
                      className={`col-lg-4 mb-56 ${
                        index >= posts.data.length + 6 ? "col-lg-6" : ""
                      }`}
                      key={post.id}
                    >
                      <div className="blog-post-card">
                        <div className="blog-card-img">
                          <img
                            src={`${baseuri}/${post.image}`}
                            alt={post.title}
                          />
                        </div>

                        <div className="post-type-time">
                          <p>{post.category}</p>
                          <p>{post.read_time}</p>
                        </div>

                        <Link href={`/post/${post.slug}`}>
                          <a className="post-title">
                            <h3>
                              {post.title.length > 50
                                ? `${post.title.slice(0, 50)}...`
                                : post.title}
                            </h3>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="#101828"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </Link>

                        <p>
                          {post.small_title.length > 100
                            ? `${post.small_title.slice(0, 100)}...`
                            : post.small_title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => setPage((page) => Math.max(page - 1, 1))}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPage((page) => page + 1)}
                    disabled={!posts.next_page_url}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* carbon section */}
        <Carbon />
      </div>
    </>
  );
}
KnowledgeHub.layout = AppLayout;

export default KnowledgeHub;
