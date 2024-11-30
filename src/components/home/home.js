import React, { useState, useEffect } from "react";
import "./homepage.css"; // ไฟล์ CSS ภายนอก
import { Link, useNavigate } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Navbar from "../navbarv2/navbar";
import Footer from "../navbarv2/footer";

import ZPOTADDPAY from "../img/zoptaddpay.png";

import KKlogo from "../img/KK-zoo.png";
import CMlogo from "../img/CM-zoo.png";
import NMlogo from "../img/NM-zoo.png";
import UBlogo from "../img/UB-zoo.png";
import KNlogo from "../img/KN-zoo.png";
import SKlogo from "../img/SK-zoo.png";

import caroselkk from "../img/caroselkk.jpg";
import caroselcm from "../img/caroselcm.jpg";
import caroselnm from "../img/caroselnm.jpg";
import caroselub from "../img/caroselub.jpg";
import caroselkn from "../img/caroselkn.jpg";
import caroselsk from "../img/caroselsk.jpg";


import CManimal from "../img/00cm-animal.jpg";
import NManimal from "../img/00nm-animal.jpg";
import UBanimal from "../img/00ub-animal.jpg";
import KNanimal from "../img/00kn-animal.jpg";
import SKanimal from "../img/00sk-animal.jpg";

import kkcarosel from "../img/00kk-animal-moo.jpg";
import kkcarosel1 from "../img/00kk-animal-ele.jpg";
import kkcarosel2 from "../img/00kk-animal-moo2.jpg";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token)
    setIsLoggedIn(token); // ตรวจสอบสถานะการเข้าสู่ระบบ
  }, []);

  const handleClick1 = () => {
    if (!token) {
      // console.log('5555')
      navigate("/login"); // ไปยังหน้า Login ถ้ายังไม่เข้าสู่ระบบ
    } else {
      navigate("/addticket"); // ไปยังหน้า Addticket ถ้าเข้าสู่ระบบแล้ว
    }
  };
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateout: "slideOutUp",
    nav: false,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],

    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: true,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
              <div className="zpotaddpay text-start">
                <img alt="" src={ZPOTADDPAY} />
              </div>

              <p className="text-start display-4 text-light ">
                องค์การสวนสัตว์แห่งประเทศไทย
              </p>
              <p className="text-start display-4 text-light mb-5">
                ในพระบรมราชูปถัมภ์
              </p>
              <div className="d-flex align-items-center pt-4 slideInDown">
                <Link
                  to="/ZooList"
                  className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                >
                  กิจกรรม
                </Link>
                <Link to="/VDOLive">
                  <button
                    type="button"
                    className="btn-play"
                  >
                    <span></span>
                  </button>
                </Link>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">
                  Animal Streaming
                </h6>
                {/* <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=GeeVsS2ozJQ"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">
                  Watch Video
                </h6> */}
              </div>
            </div>
          </div>
          {/* carosel */}
          <div className="col-lg-6 wow fadeIn " data-wow-delay="0.5s">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselkk} alt="..." />
                </div>
              </div>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselcm} alt="..." />
                </div>
              </div>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselkn} alt="..." />
                </div>
              </div>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselnm} alt="..." />
                </div>
              </div>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselub} alt="..." />
                </div>
              </div>
              <div className="carousel-head">
                <div className="item">
                  <img src={caroselsk} alt="..." />
                </div>
              </div>
            </OwlCarousel>

            {/* <OwlCarousel
              className="owl-theme owl-carousel header-carousel"
              loop
              margin={10}
              nav
            >
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel1}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel1}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel2}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel2}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel3}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        src={carousel3}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel> */}
            {/* <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carousel1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carousel2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carousel3} className="d-block w-100" alt="..." />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
          </div>

          {/* <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    Transform: "translate3d(-1894px, 0px, 0px)",
                    Transition: "1s",
                    minWidth: "4421px",
                  }}
                >
                  
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        className="img-fluid"
                        src={carousel1}
                        alt="Carousel 1"
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        className="img-fluid"
                        src={carousel2}
                        alt="Carousel 2"
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="owl-carousel-item">
                      <img
                        className="img-fluid"
                        src={carousel3}
                        alt="Carousel 3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-nav">
                <div className="owl-prev">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="owl-next">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
              <div className="owl-dots">
                <div className="owl-dot">
                  <span></span>
                </div>
                <div className="owl-dot active">
                  <span></span>
                </div>
                <div className="owl-dot">
                  <span></span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <!-- Video Modal Start --> */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabindex="0"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="video-container">
                <iframe
                  width={800}
                  height={800}
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/GeeVsS2ozJQ?autoplay=1"
                  id="video"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  title="YouTube video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      {/* Zoo Detail */}

      {/* <!-- kk --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={KKlogo} alt=""/>
                </div>
              </div>

              <p className="fs-1">สวนสัตว์เปิดเขาเขียว</p>
              <p className="fs-4">
                ที่อยู่: 235 ม.7 ต.บางพระ อ.ศรีราชา จ.ชลบุรี 20110
              </p>
              <p className="fs-4">โทร: 038 318 444</p>
              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 18.00น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <OwlCarousel className="owl-theme" {...options}>
                <div className="carousel-content">
                  <div className="item">
                    <img className="img-fluid" src={kkcarosel} alt="..." />
                  </div>
                </div>
                <div className="carousel-content">
                  <div className="item">
                    <img className="img-fluid" src={kkcarosel1} alt="..." />
                  </div>
                </div>
                <div className="carousel-content">
                  <div className="item">
                    <img className="img-fluid" src={kkcarosel2} alt="..." />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- kk --> */}
      {/* <!-- cm --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5 ">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row g-5 ">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={CManimal} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={CMlogo} alt=""/>
                </div>
              </div>
              <p className="fs-1">สวนสัตว์เชียงใหม่</p>
              <p className="fs-4">
                ที่อยู่: 100 ถ.ห้วยแก้ว ต.เชียงใหม่่ อ.เมืองเชียงใหม่่
                จ.เชียงใหม่่ 50200
              </p>
              <p className="fs-4">โทร: 053 221 179</p>

              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 17.00น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cm --> */}
      {/* <!-- kn --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={KNlogo} alt=""/>
                </div>
              </div>

              <p className="fs-1">สวนสัตว์ขอนแก่น</p>
              <p className="fs-4">
                ที่อยู่: 88 ม. 8 ต.คำม่วง อ.เขาสวนกวาง จ.ขอนแก่น 40280
              </p>
              <p className="fs-4">โทร: 086 459 4192</p>
              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 16.30น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="img-border img-border2">
                <img className="img-fluid" src={KNanimal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- kn --> */}
      {/* <!-- nm --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row g-5 ">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={NManimal} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={NMlogo} alt=""/>
                </div>
              </div>
              <p className="fs-1">สวนสัตว์นครราชสีมา</p>
              <p className="fs-4">
                ที่อยู่: 111 ม.1 ต.ไชยมงคล อ.เมืองนครราชสีมา จ.นครราชสีมา 30000
              </p>
              <p className="fs-4">โทร: 083 372 0404</p>

              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 17.00น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- nm --> */}
      {/* <!-- ub --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={UBlogo} alt=""/>
                </div>
              </div>

              <p className="fs-1">สวนสัตว์อุบลราชธานี</p>
              <p className="fs-4">
                ที่อยู่: 112 ม.17 ต.ขามใหญ่ อ.เมืองอุบลราชธานี จ.อุบลราชธานี
                34000
              </p>
              <p className="fs-4">โทร: 045 252 761</p>
              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 16.30น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="img-border img-border2">
                <img className="img-fluid" src={UBanimal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ub --> */}
      {/* <!-- sk --> */}
      <div className="container-xxl py-5 text-dark mt-0 mt-sm-2 mt-lg-5">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row g-5 ">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={SKanimal} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp text-center"
              data-wow-delay="0.1s"
            >
              <div className="zoodetail">
                <div className="zooimg">
                  <img src={SKlogo} alt=""/>
                </div>
              </div>
              <p className="fs-1">สวนสัตว์สงขลา</p>
              <p className="fs-4">
                ที่อยู่: 189 ม.5 ถ.สงขลา-นาทวี ต.เขารูปช้าง อ.เมืองสงขลา จ.สงขลา
                90000
              </p>
              <p className="fs-4">โทร: 074 598 555</p>

              <p className="fs-4 fw-light">เปิดทุกวัน เวลา 08.00น. - 16.30น.</p>
              <button
                onClick={handleClick1}
                className="btn py-2 px-5 mt-3 btn-primary  fs-4 fw-light"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sk --> */}
      {/* End Zoo Detail */}

      <Footer />
      {/* App */}
    </div>
  );
}

export default Home;
