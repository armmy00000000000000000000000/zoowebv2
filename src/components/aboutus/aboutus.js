import React from "react";
import "./aboutus.css"; // ไฟล์ CSS ภายนอก
import { Link } from "react-router-dom";

import Navbar from "../navbarv2/navbar";
import Footer from "../navbarv2/footer";

import logo from "../img/zooE-ticket-logo.png";
import iconlogo from "../img/zooE-ticket-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos,faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faAward, faTicket } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <div className="App">
      <Navbar />
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-start py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="col-lg-6 wow fadeInUp mx-auto" data-wow-delay="0.1s">
            <div className="zooe-ticket mb-4">
              <img src={logo} alt=""/>
            </div>

            <p className="display-5 mb-4 ">
              Zoo
              <span className="text-primary"> E-Tickets</span>
            </p>
            <p className="fs-5">
              การจำหน่ายบัตรเข้าชมสวนสัตว์ ผ่านช่องทางออนไลน์
              <br />
              ได้ทั้งเว็บแอปพลิเคชันและแอปพลิเคชั่นบนมือถือ
              <br />
              (Web Application & Mobile Application)
            </p>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      {/* <!-- function Start --> */}
      <div className="container-fluid py-5 bg-light">
        <div className="container wow fadeInUp mx-auto" data-wow-delay="0.1s">
          <div className="row px-0 px-md-5">
            <div className="col-12 col-md-4 p-2 p-xl-5">
              <FontAwesomeIcon icon={faTicket} size="4x" />

              <p className="fs-5 mt-4">รวมบัตรเข้าชม</p>
              <p>ไม่ว่าจะเที่ยวสวนสัตว์ไหนก็ซื้อบัตรเข้าชมได้เลย</p>
            </div>
            <div className="col-12 col-md-4 p-2 p-xl-5">
              <FontAwesomeIcon icon={faNewspaper} size="4x" />

              <p className="fs-5 mt-4">รวมข่าวสาร</p>
              <p>สิทธิประโยชน์และความน่าสนใจของสัตว์ที่คุณชื่นชอบ</p>
            </div>
            <div className="col-12 col-md-4 p-2 p-xl-5">
              <FontAwesomeIcon icon={faAward} size="4x" />

              <p className="fs-5 mt-4">รวมสิทธิพิเศษ</p>
              <p>สมัครสมาชิก เพื่อรับสิทธิพิเศษก่อนใคร</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- function End --> */}
      {/* <!-- app download Start --> */}
      <div className="container-xxl py-5">
        
          <div className="wow fadeInUp mx-auto" data-wow-delay="0.1s">
            <p className="display-6 mt-2 mt-sm-5 mb-5">Zoo E-ticket Application</p>
            <div className="zooe-ticket mb-4">
              <img src={iconlogo} alt=""/>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center">
              <div className="p-0 py-2 p-md-2 px-1 px-md-3">
                <Link to="" className="btn btn-primary px-5 fs-5 fw-light ">
                  <FontAwesomeIcon icon={faGooglePlay} className="pe-2" />
                  aOS
                </Link>
              </div>
              <div className="p-0 py-2 p-md-2 px-1 px-md-3">
                <Link to="" className="btn btn-primary px-5 fs-5 fw-light">
                  <FontAwesomeIcon icon={faAppStoreIos} className="pe-3" />
                  iOS
                </Link>
              </div>
            </div>
          </div>
      
      </div>
      {/* <!-- app download End --> */}

      <Footer />

      {/* App */}
    </div>
  );
}

export default AboutUs;
