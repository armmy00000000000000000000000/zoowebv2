import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import {API_ENDPOINT } from '../auth/config';
import bcrypt from 'bcryptjs';
import zooeticket from "../img/logozoo.png";
import "./nav.css";
import { gapi } from 'gapi-script';
function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const Name = localStorage.getItem('name')
  const [url, setUrl] = useState(null);
  const date = new Date();
  const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format
  const timeWithKey = time + '@pay';
  const saltRounds = 10;
  const apikey = localStorage.getItem('apikey');
  const email = localStorage.getItem('email');
  const userid = localStorage.getItem('userid');

  
    if (!apikey) {
      bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return;
        }

        genApiKey(userid, hash)
 
     
      });

   
    } else {


    }

    const genApiKey = async (id,auth) => {
     
      
      const url = new URL(`${API_ENDPOINT}/api/v1/zoo/public/e-member/genApiKey`);
      url.searchParams.append("model", "web");
      url.searchParams.append("member_id", id);
      url.searchParams.append("time", time);
      url.searchParams.append("auth", auth);
    
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    
      try {
        const response = await fetch(url, requestOptions);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json(); // เปลี่ยนเป็น response.text() ถ้าคุณต้องการรับข้อมูลเป็นข้อความ
        localStorage.setItem('apikey', result[0].replace(/^"|"$/g, '')); // เก็บข้อมูลใน localStorage
        localStorage.setItem('credit', result[1].replace(/^"|"$/g, '')); // เก็บข้อมูลใน localStorage
      } catch (error) {

      }
    };
 
  useEffect(() => {
    
    setUrl(location.pathname);
  }, [location]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGapiLoaded, setIsGapiLoaded] = useState(false);
  const CLIENT_ID = '381801295139-qnj77qb40mfo3fi73q99fc3tq59rq6qg.apps.googleusercontent.com';
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array means this effect runs once after the initial render
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'profile email',
      }).then(() => {
        setIsGapiLoaded(true);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleSignOut = () => {
    if (isGapiLoaded) {
      gapi.auth2.getAuthInstance().signOut().then(() => {
        localStorage.clear();
        window.location.href = '/emember/';
      });
    } else {
      console.error('Google API not initialized');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    // localStorage.removeItem('token');
    // setIsLoggedIn(false);
    // navigate('/');
    window.location.href = '/emember/';
  };

  const Logout = () => {
    if (email === 'google') {
      handleSignOut();
    } else {
      handleLogout();
      handleSignOut();
    }
  };

  // ...
  return (
    <div className="App">
      {/* <!-- Navbar Start fixed-top  --> */}
      <nav
        className="navbar bg-body-tertiary navbar-expand-lg bg-white navbar-light py-lg-0 px-4 px-lg-5 wow fadeIn "
        data-wow-delay="0.1s"
        style={{ background: 'rgba(255, 255, 255, 0.60)', boxShadow: '0px 4px 26.600000381469727px rgba(0, 0, 0, 0.25)' }}>
        <Link to="/Home" className="navbar-brand p-0">
          <img
            className="img-fluid me-3"
            src={zooeticket}
            alt="zooeticketlogo"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <Link
              to="/Home"
              className={
                "nav-item fs-5 fw-light nav-link underline" +
                (url === "/" ? " active" : "")
              }
            >
              หน้าหลัก
            </Link>
            <Link
              to="/News"
              className={
                "nav-item fs-5 fw-light nav-link underline" +
                (url === "/" ? " active" : "")
              }
            >
              โปรโมชั่น
            </Link>
            <Link
              to="/ZooList"
              className={
                "nav-item fs-5 fw-light nav-link underline" +
                (url === "/" ? " active" : "")
              }
            >
              กิจกรรม
            </Link>
            <Link
              to="/ZooFacebookPage"
              className={
                "nav-item fs-5 fw-light nav-link underline" +
                (url === "/" ? " active" : "")
              }
            >
              ประชาสัมพันธ์
            </Link>
            <Link
              to="/AboutUs"
              className={
                "nav-item fs-5 fw-light nav-link underline" +
                (url === "/" ? " active" : "")
              }
            >
              เกี่ยวกับ
            </Link>


          </div>
          {isLoggedIn ? (
            <div className="navbar-nav">
              <Link
                to="/addticket"
                className={
                  "nav-item fs-5 fw-light nav-link underline" +
                  (url === "/addticket" ? " active" : "")
                }
              >
                จองตั๋วสวนสัตว์
              </Link>
              <Link
                to="/OrderList"
                className={
                  "nav-item fs-5 fw-light nav-link underline" +
                  (url === "/OrderList" ? " active" : "")
                }
              >
                รายการจอง
              </Link>

            </div>

          ) : (
            <div className="nav-item">

            </div>
          )}

          {/* d-block when sing in success */}
          {isLoggedIn ? (
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link fs-5 fw-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Profile
              </Link>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link to="/" className="dropdown-item fs-5 fw-light">
                  user:{Name}
                </Link>
                <Link to="/editprofile" className="dropdown-item fs-5 fw-light">
                  แก้ไขข้อมูลส่วนตัว
                </Link>
                <Link to="/Editpass" className="dropdown-item fs-5 fw-light">
                  เปลี่ยนรหัสผ่าน
                </Link>
                <a
                  onClick={Logout}
                  className=" text-danger effect effect-signin fs-5 fw-light"
                >
                  Log Out
                </a>
                {/* <button 
              onClick={Logout}
              className="dropdown-item fs-5 fw-light"
            >
              ออกจากระบบ
            </button> */}
              </div>
            </div>

          ) : (
            <div className="nav-item">
              <Link to="/login" className="btn btn-primary effect effect-signin fs-5 fw-light">
                Login
              </Link>
            </div>
          )}
          {isLoggedIn ? (
            <div className="nav-item dropdown">
              <a
                onClick={Logout}
                className=" text-danger effect effect-signin fs-5 fw-light"
              >
                Log Out
              </a>
            </div>

          ) : (
            <div className="nav-item">

            </div>
          )}

          {/* d-none when not singin */}

        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
}


export default Navbar;
