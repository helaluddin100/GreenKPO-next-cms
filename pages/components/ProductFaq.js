import React from 'react';
import Faq from 'react-faq-component';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

function ConsiderGreenKpoFaq() {
    const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

    const { data: faqs, error } = useSWR(`${baseuri}/api/faqs/product`, fetcher);

    if (error) return <div>Failed to load FAQs</div>;
    if (!faqs) return (
        <div className="preloader d-flex align-items-center justify-content-center vh-100">
            <div className="preloader-inner position-relative">
                <div className="text-center">
                    <img
                        className="mb-10"
                        src="/assets/img/spinner.svg"
                        alt="Loading..."
                    />
                    <div className="preloader-dots"></div>
                </div>
            </div>
        </div>
    );

    // Map faqs data to the format required by react-faq-component
    const data = {
        rows: faqs.map(faq => ({
            title: faq.question,
            content: faq.answer,
        })),
    };

    const styles = {
        // Customize your styles here if needed
    };

    const config = {
        animate: true,
        tabFocus: true,
        openOnStart: [0],
        expandIcon: <i className="fa-solid fa-plus"></i>,
        collapseIcon: <i className="fa-solid fa-minus"></i>,
        openOnload: 0,
    };

    return (
        <section>
            <div className="faq-wrapper" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="faq-title">
                                <h2>FAQs: Why should I consider Green KPO?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="faq-content wrapper">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="faq-content">
                                    <Faq data={data} styles={styles} config={config} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConsiderGreenKpoFaq;
