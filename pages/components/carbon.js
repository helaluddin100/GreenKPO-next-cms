import Link from 'next/link'
import React from 'react'

function Carbon() {
    return (
        <div>
            <section>
                <div className="carbon-section" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="container">
                        <div className="carbon-content-wrapper">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="carbon-left">
                                        <h2>
                                            Start your Carbon Accounting journey with GreenKPO for
                                            Free!
                                        </h2>
                                        <p>
                                            Get GreenKPO Lite for $0 and start Carbon accounting
                                            today.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="carbon-btn">
                                        <Link href={'product'}>
                                            <a className="main-custom-btn-alt">
                                                <span>Know How</span>
                                            </a>
                                        </Link>
                                        <Link href={'/faqs/#contact'}>
                                            <a className="main-custom-btn">
                                                <span>Get started</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Carbon