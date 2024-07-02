import React, { useEffect, useState } from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area ">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="logo-area">
                  <img
                    src="/assets/img/footer-logo.png"
                    alt="Image not found"
                  />
                  <p>
                    Democratising Carbon Accounting for <br /> enterprises of
                    all sizes
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-menu-wrapper">
                      <h4>Product</h4>
                      <ul className="footer-menu">
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Overview</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Features</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Solutions</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="footer-menu-wrapper">
                      <h4>Company</h4>
                      <ul className="footer-menu">
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Our Story</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Careers</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Why Us</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="footer-menu-wrapper">
                      <h4>Knowledge Hub</h4>
                      <ul className="footer-menu">
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Articles</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Tutorials</a>
                          </Link>
                        </li>
                        <li className="footer-li">
                          <Link href="/#product" passHref>
                            <a>Support</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-area">
            <div className="container">
              <div className="footer-copy">
                <p>© 2077 Green KPO . All rights reserved.</p>

                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-angellist"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
