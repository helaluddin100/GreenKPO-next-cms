import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    trams: false,
  });

  const inputsHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setInputField({
      ...inputField,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const allInfoSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseuri}/api/contact`, inputField);
      if (res.status === 201) {
        // Check response status
        setLoading(false);
        setSuccessMessage(res.data.message);
        setInputField({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
          trams: false,
        });
      } else if (res.status === 422 && res.data.errors) {
        setLoading(false);
        setErrorMessage(JSON.stringify(res.data.errors));
      } else {
        setLoading(false);
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  return (
    <section>
      <div
        className="contact-area-wrapper"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title-left">
                <h4> Contact us </h4> <h2> Chat with our friendly team </h2>
                <p>
                  We’ d love to hear from you.Please fill out this form or shoot
                  us an email.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="contact-info-card">
                      <div className="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                            stroke="#006666"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h4> Email </h4>
                      <p> Our friendly team is here to help. </p>
                      <a href="mailto:hi@greenkpo.com">hi @greenkpo.com</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-info-card">
                      <div className="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                            stroke="#006666"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h4> Live chat </h4>
                      <p> Our friendly team is here to help. </p>
                      <a href="#"> Start new chat </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-info-card">
                      <div className="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
                            stroke="#006666"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                            stroke="#006666"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h4> Office </h4>
                      <p> Come say hello at our office HQ. </p>
                      <a href="#">100 Smith Street Collingwood VIC 3066 AU</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-info-card">
                      <div className="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                            stroke="#006666"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h4> Phone </h4> <p> Mon - Fri from 8 am to 5 pm. </p>
                      <a href="#"> +1(555) 000 - 0000 </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-form-wrapper">
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  <form onSubmit={allInfoSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label for="first_name"> First name </label>
                          <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            placeholder="First name"
                            name="first_name"
                            onChange={inputsHandler}
                            value={inputField.first_name}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label for="last_name"> Last name </label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            placeholder="Last name"
                            name="last_name"
                            onChange={inputsHandler}
                            value={inputField.last_name}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label for="email"> Email </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="you@company.com"
                            onChange={inputsHandler}
                            value={inputField.email}
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label for="message"> Message </label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows={5}
                            placeholder="Leave us a message..."
                            name="message"
                            onChange={inputsHandler}
                            value={inputField.message}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-check mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="trams"
                            onChange={inputsHandler}
                            value={inputField.trams}
                            name="trams"
                            required
                          />
                          <label className="form-check-label" for="trams">
                            You agree to our friendly privacy policy.
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="custom-btn w-100 text-center"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
