import React, { useState,useEffect } from "react";
import "./Live.css";

import frame from "../img/live0000-01.png";




function Live() {

  const [url, setUrl] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch("https://addpaycrypto.com//addpay_eoffice/user_activity_log/live.php", requestOptions)
        .then((response) => response.json()) // คาดหวังว่า API จะส่ง JSON กลับมา
        .then((result) => {
          setUrl(result[0].url); // ตั้งค่าข้อมูลที่ได้ให้กับ state url
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchData();
  }, []); // เพิ่ม [] เพื่อให้เรียกใช้เพียงครั้งเดียวเมื่อ component ถูกสร้างขึ้น

  return (

    
    <div className="App Live">
      <div className="container">
        <h2>Moo Deng Live</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            id="myVideo"
            src={`${url}?autoplay=1&mute=1`}
            title="หมูเด้ง - Moo Deng Live 🔴" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay; encrypted-media"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="Heading1">
        <img src={frame} alt="" />
      </div>
      <div className="Heading2"></div>
    </div>
  );
}

export default Live;
