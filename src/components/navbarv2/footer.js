import React from "react";
import "./footer.css"; // ไฟล์ CSS ภายนอก
import { Link } from "react-router-dom";

import ScrollButton from "./ScrollButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope, faLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="App">
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 text-start">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} className="me-3 " />
                องค์การสวนสัตว์แห่งประเทศไทย ในพระบรมราชูปถัมภ์ (สำนักงานชั่วคราว)
                สำนักงานเลขที่ 327 ถนนสุโขทัย แขวงดุสิต เขตดุสิต กรุงเทพฯ 10300
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-3" />
                เบอร์ติดต่อ 021634955
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-3" />
                โทรสาร 02 1634954
              </p>
              {/* <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                addpay@addpay.co.th
              </p> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/">
                หน้าหลัก
              </Link>
              <Link className="btn btn-link" to="">
                ข่าวสาร
              </Link>
              <Link className="btn btn-link" to="">
                จองตั๋วสวนสัตว์
              </Link>
              <Link className="btn btn-link" to="/AboutUs">
                เกี่ยวกับ
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <p className="text-light mb-4 fs-5">สวนสัตว์ 6 แห่ง</p>
              <Link
                className="btn btn-link"
                to="https://khaokheow.zoothailand.org/"
              >
                สวนสัตว์เปิดเขาเขียว
              </Link>
              <Link
                className="btn btn-link"
                to="https://chiangmai.zoothailand.org/"
              >
                สวนสัตว์เชียงใหม่
              </Link>
              <Link
                className="btn btn-link"
                to="https://khonkaen.zoothailand.org/"
              >
                สวนสัตว์ขอนแก่น
              </Link>
              <Link
                className="btn btn-link"
                to="https://korat.zoothailand.org/"
              >
                สวนสัตว์นครราชสีมา
              </Link>
              <Link className="btn btn-link" to="https://ubon.zoothailand.org/">
                สวนสัตว์อุบลราชธานี
              </Link>
              <Link
                className="btn btn-link"
                to="https://songkhla.zoothailand.org/"
              >
                สวนสัตว์สงขลา
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" to="/">
                  Zoo E-Ticket
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By :
                <Link className="border-bottom" to="/">
                  Addpay Service Point Co.,
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      <ScrollButton />
      {/* App */}
    </div>
  );
}

export default Footer;
