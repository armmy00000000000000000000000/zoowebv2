import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import FacebookLogin from "react-facebook-login";
import Logo from '../img/logo.png'; // นำเข้าภาพพื้นหลัง
import lineLogo from '../img/line.png'; // นำเข้าภาพพื้นหลัง
import bcrypt from 'bcryptjs';
import Navbar from "../navbarv2/navbar";
import Footer from "../navbarv2/footer";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import liff from '@line/liff';
import { LIFF_ID, API_ENDPOINT, API_ENDPOINT_USER } from '../auth/config';
import Swal from 'sweetalert2';
function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะ isLoggedIn เพื่อเก็บสถานะการล็อกอินของผู้ใช้
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);



  const date = new Date();
  const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format
  const timeWithKey = time + '@pay';
  const saltRounds = 10;
  const clientId = "381801295139-qnj77qb40mfo3fi73q99fc3tq59rq6qg.apps.googleusercontent.com";


  // line login ///
  useEffect(() => {
    liff.init({ liffId: `${LIFF_ID}` })
  }, [])

  const handleLogin = (event) => {
    try {
      liff.login();
    } catch (err) {
      console.log(err);
    }
  }
  // line login ///



  // google login ///
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  const onSuccess = (res) => {


    Slogin(res.profileObj.email, "google", res.profileObj.googleId.slice(0, 10), res.profileObj.name, res.profileObj.googleId);
    //  console.log(res);
    // bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
    //   if (err) {
    //     console.error('Error hashing password:', err);
    //     return;
    //   }
    //   const shortGoogleId = res.profileObj.googleId.slice(0, 10); // ตัดให้เหลือ 10 ตัวอักษ
    //   genApiKey(shortGoogleId, hash)
    //   setHashedPassword(hash);
    //   console.log(hash);
    //   console.log(timeWithKey);
    // });

    // localStorage.setItem('email', res.tokenObj.idpId)
    // localStorage.setItem('userid', res.profileObj.googleId.slice(0, 10))
    // localStorage.setItem('name', res.profileObj.name)
    // localStorage.setItem('token', res.profileObj.googleId)
    // navigate('/Home');

  }
  const onFailure = (res) => {
    console.log('failed', res);
  }
  // google login ///

  // facbook login ///
  // const componentClicked = (data) => {
  //   // console.log("data", data);
  // };

  // const responseFacebook = (response) => {
  //   // console.log(response);
  //   // setAccessToken(response.accessToken);
  //   // setAccessname(response.name);
  //   // setAccessid(response.id);
  //   bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
  //     if (err) {
  //       console.error('Error hashing password:', err);
  //       return;
  //     }
  //     genApiKey(response.id, hash)
  //     // setHashedPassword(hash);
  //     // console.log(hash);
  //     // console.log(timeWithKey);
  //   });
  //   localStorage.setItem('email', response.graphDomain)
  //   localStorage.setItem('userid', response.id)
  //   localStorage.setItem('name', response.name)
  //   localStorage.setItem('token', response.accessToken)
  //   navigate('/Home');
  // };

  // facbook login ///




  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      setIsLoggedIn(true);
      navigate('/Home'); // นำทางไปยังหน้าหลักโดยตรงหากผู้ใช้ล็อกอินอยู่แล้ว
    }
  }, [navigate]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formdata = new FormData();
  //   formdata.append("email", inputs.email);
  //   formdata.append("password", inputs.password);

  //   const requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow"
  //   };

  //   fetch(`${API_ENDPOINT_USER}/e-member/public/api/login`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.staus === true) {

  //            // console.log(result);
  //            setErrorMessage("Login successful");
  //            setShowErrorMessage(true);
  //            setIsLoggedIn(true); // ตั้งค่า isLoggedIn เป็น true เมื่อล็อกอินสำเร็จ
  //            bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
  //              if (err) {
  //                console.error('Error hashing password:', err);
  //                return;
  //              }
  //              genApiKey(result.user_id, hash)

  //            });

  //            localStorage.setItem('email', result.email)
  //            localStorage.setItem('userid', result.user_id)
  //            localStorage.setItem('name', result.name)
  //            localStorage.setItem('token', result.access_token)
  //            navigate('/Home');

  //       } else {

  //       }
  //     })
  //     .catch((error) => console.error(error));

  // }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formdata = new FormData();
    formdata.append("email", inputs.email);
    formdata.append("password", inputs.password);
  
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
  
    fetch(`${API_ENDPOINT_USER}/e-member/public/api/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          // แสดง SweetAlert สำหรับความสำเร็จ
          Swal.fire({
            title: 'Login Successful',
            text: `Welcome, ${result.name}`,
            icon: 'success',
            confirmButtonText: 'Continue',
          }).then(() => {
            // ดำเนินการหลังจากผู้ใช้กดปุ่ม
            localStorage.setItem("email", result.email);
            localStorage.setItem("userid", result.user_id);
            localStorage.setItem("name", result.name);
            localStorage.setItem("token", result.access_token);
            navigate('/Home');
          });
        } else {
          // แสดง SweetAlert สำหรับข้อผิดพลาด
          Swal.fire({
            title: 'Login Failed',
            text: 'Please check your credentials and try again.',
            icon: 'error',
            confirmButtonText: 'Retry',
          });
        }
      })
      .catch((error) => {
        // แสดง SweetAlert สำหรับข้อผิดพลาดระบบ
        console.error("Error during login process:", error);
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };


  const Slogin = (email, provider, provider_id, name, token) => {
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("provider", provider);
    formdata.append("provider_id", provider_id);
    formdata.append("name", name);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch(`${API_ENDPOINT_USER}/e-member/public/api/slogin`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "true") {
          bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
            if (err) {
              console.error('Error hashing password:', err);
              return;
            }
            genApiKey(result.msg.id, hash)
            // console.log(hash);
            // console.log(timeWithKey);
          });
          localStorage.setItem('email', result.msg.email);
          localStorage.setItem('userid', result.msg.id);
          localStorage.setItem('name', result.msg.name);
          localStorage.setItem('token', token);

          // window.location = "/Home";
          navigate('/Home');
        }
      })
      .catch((error) => console.error(error));

  }

  const genApiKey = (iduset, auth) => {


    // สร้าง URL พร้อม query parameters
    const url = new URL(`${API_ENDPOINT}/api/v1/zoo/public/e-member/genApiKey`);
    url.searchParams.append("model", "web");
    url.searchParams.append("member_id", iduset);
    url.searchParams.append("time", time);
    url.searchParams.append("auth", auth);

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // เปลี่ยนเป็น response.text() ถ้าคุณต้องการรับข้อมูลเป็นข้อความ
      })
      .then(result => {
        // console.log(result[0]); // แสดงผลลัพธ์ใน console
        // console.log(result[1]); // แสดงผลลัพธ์ใน console
        localStorage.setItem('apikey', result[0].replace(/^"|"$/g, '')); // เก็บข้อมูลใน localStorage
        localStorage.setItem('credit', result[1].replace(/^"|"$/g, '')); // เก็บข้อมูลใน localStorage
      })
      .catch(error => {
        console.error('Fetch error:', error); // จัดการข้อผิดพลาด
      });
  }





  return (

    <>

      <Navbar></Navbar>
      <section className="background-radial-gradient overflow-hidden full-height">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '150px' }} />
              <h1 className="my-2 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Welcome Sing in<br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>To Zoo e-Ticket</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                องค์การสวนสัตว์แห่งประเทศไทย ในพระบรมราชูปถัมภ์
                The Zoological Park Organization under The Royal Patronage of H.M. The King
                เลขที่ 327 ถนนสุโชทัย แขวงดุสิต เขตดุสิต กรุงเทพมหานคร 10300
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  {/* {showErrorMessage && (
                    <div className='container'>  <div className={`alert ${errorMessage === "Invalid Credentials" ? "alert-danger" : "alert-success"}`} role="alert">
                      {errorMessage}
                    </div></div>

                  )} */}
                  <form onSubmit={handleSubmit}>
                    {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div> */}

                    <div className="form-outline mb-4">
                      <input type="email" id="emain" name='email' className="form-control" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" name='password' className="form-control" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      เข้าสู่ระบบ
                    </button>

                    <div className="text-center py-3">
                      {/* <FacebookLogin
                        appId="936346908304074"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        onClick={componentClicked}
                        icon={<i className="fab fa-facebook-f"></i>}
                        cssClass="btn btn-link btn-primary btn-floating mx-1 btn-facebook-blue"
                      /> */}
                      <GoogleLogin
                        clientId={clientId} // ใส่ Client ID ของคุณที่นี่
                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                      />
                      <button
                        onClick={handleLogin}
                        type="button"
                        className="btn btn-link btn-success btn-floating mx-1 btn-line-success mt-2"
                      >
                        <img src={lineLogo} alt="LINE Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                        Login with LINE
                      </button>
                      {/* <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button> */}
                    </div>
                    <div className='text-center'>
                      <Link to="/regis" style={{ fontSize: 25, fontWeight: '275', border: 'none', color: '#17612F' }} >สมัครสมาชิก!!</Link>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default LoginForm;
