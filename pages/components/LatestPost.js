import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function LatestPost() {

    const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

    const { data, error } = useSWR(`${baseuri}/api/latest-posts`, fetcher);

    if (error) return <div>Failed to load posts</div>;
    if (!data) return (
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

        <section>
            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="section-title-left">
                                <h4>Knowledge Hub</h4>
                                <h2>Know everything about carbon emission and reduction</h2>
                                <p>
                                    The latest industry news, interviews, technologies, and
                                    resources.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="blog-button">
                                <a href="#" className="custom-btn">
                                    <span>View all posts</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="latest-blog">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper reporting-slider"
                        >

                            {data.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div
                                        className="blog-post-card"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="blog-card-img">
                                            <img src={`${baseuri}/${post.image}`}
                                                alt={post.title} />
                                        </div>

                                        <div className="post-type-time">
                                            <p>Business</p>
                                            <p>8 min read</p>
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
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
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
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestPost