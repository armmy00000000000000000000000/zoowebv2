import React from "react";
import "./stream.css";
import Navbar from "../navbarv2/navbar";
import Footer from "../navbarv2/footer";
import { Link } from "react-router-dom";

import moodenglive from "../img/cardlive-moodeng.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function VDOLive() {
  return (
    <div className="App">
      <Navbar />
      <div className="text-center mt-5">
        <p className="text-success fs-1">VDO Live Streaming</p>
        <p className="text-dark fs-4">สวนสัตว์เปิดเขาเขียว</p>
      </div>
      <div className="container-md">
        <div className="row d-flex justify-content-center">
          {/* mapdata */}
          <div className="col-12 col-md-6 col-xl-3">
            <Link to="/Live" className="card-live mx-auto">
              <div className="image">
                <img src={moodenglive} />
              </div>
              <div className="content">
                <p className="fs-3 mb-0">ฮิปโปโปเตมัส(หมูเด้ง)</p>
                <p className="mb-0">สวนสัตว์เปิดเขาเขียว</p>
                <div className=" mt-3 btn shadow-sm ">
                  <FontAwesomeIcon icon={faVideo} className="text-success" />
                </div>
              </div>
            </Link>
          </div>
          {/* mapdata */}
        </div>
      </div>
      <Footer />
      {/* App */}
    </div>
  );
}

export default VDOLive;
