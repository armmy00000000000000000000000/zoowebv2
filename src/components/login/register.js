
import './login.css';

import Logo from '../img/logo.png'; // นำเข้าภาพพื้นหลัง
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  API_ENDPOINT,API_ENDPOINT_USER } from '../auth/config';
import Navbar from "../navbarv2/navbar";
import Footer from "../navbarv2/footer";
import Swal from 'sweetalert2';
function RegisterPage() {

  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("email", inputs.email);
    formdata.append("password", inputs.password);
    formdata.append("name", inputs.name);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    for (let [key, value] of formdata.entries()) {
      console.log(`${key}: ${value}`);
  }
    fetch(`${API_ENDPOINT_USER}/e-member/public/api/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.status === 'true') {
          // setErrorMessage("Invalid Credentials");
          // setShowErrorMessage(true);
          Swal.fire({
              icon: 'success',
              title: 'ลงทะเบียนสำเร็จ!',
              text: 'คุณได้ลงทะเบียนสำเร็จแล้ว',
              confirmButtonText: 'ตกลง'
          }).then(() => {
            window.location.href = '/emember/login';
             
          });
      } else {
        setShowErrorMessage(true);
          // จัดการกับกรณีที่ไม่สำเร็จ
          Swal.fire({
              icon: 'error',
              title: 'เกิดข้อผิดพลาด!',
              text: result.error,
              confirmButtonText: 'ตกลง'
          });
      }
        // if (result.message === "User Created ") {
        //   // console.log(result);
        //   setErrorMessage("Invalid Credentials");
        //   setShowErrorMessage(true);
        // } else {
        //   // console.log(result);
        //   setErrorMessage("User Created successful");
        //   setShowErrorMessage(true);
        // }
      })
      .catch((error) => console.error(error));

    // alert(inputs);
  }


  return (
    <>
      <Navbar></Navbar>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '150px' }} />
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Welcome Sing up <br />
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


                    <div className="form-outline mb-4">
                      <input type="text" id="name" name='name' className="form-control" onChange={handleChange} />
                      <label className="form-label">Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="email" name='email' className="form-control" onChange={handleChange} />
                      <label className="form-label">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" name="password" id="password" className="form-control" onChange={handleChange} />
                      <label className="form-label" >Password</label>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      สมัครสมาชิก
                    </button>

                    <div className="text-center">
                      มีบัญชีผู้ใช้งานแล้ว?
                      <Link to="/login" style={{ fontSize: 25, fontWeight: '275', border: 'none', color: '#17612F' }} >เข้าสู่ระบบ!!</Link>
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
    // <section className="bg-section">

    //   <div className='py-5' ></div>
    //   <div className="container py-5  r">
    //     <div className="container py-5 box-input fadeInDown" style={{  position: 'relative', borderRadius:  '6em' }}>
    //       <img className=" fadeIn first" style={{ width: '10em', height: '10em', position: 'absolute', top: '-0.2%', left: '50%', transform: 'translate(-50%, -50%)'}} src={Logo} id="icon" alt="User Icon"/>
    //           <br />
    //       <div className="container py-3 py-md-3 px-md-5 fadeIn second text-center" id="formContent">

    //         <div style={{textAlign: 'center', color: '#17612F', fontSize: 35, fontWeight: '400', wordWrap: 'break-word'}}>สมัครสมาชิก</div>
    //         <div style={{textAlign: 'center', color: '#17612F', fontSize: 25, fontWeight: '275', wordWrap: 'break-word'}}>Zoo E-Ticket</div>
    //         {showErrorMessage && (
    //           <div className='container'>  <div className={`alert ${errorMessage === "Invalid Credentials" ? "alert-danger" : "alert-success"}`} role="alert">
    //             {errorMessage}
    //           </div></div>

    //         )}

    //         <form onSubmit={handleSubmit} className="px-md-5 py-2">
    //           <div className="row px-md-5 ">
    //             <div className="input-group mt-3 px-md-4  box-input" style={{borderRadius:  '3em'}}>
    //                 <input style={{  color: 'black', fontSize: 25 ,fontWeight:'275',border: 'none',backgroundColor:'transparent' }}  type="text" id="name" className="form-control fadeIn third pl-4 pl-md-0 py-3" name="name" placeholder="ชื่อ" value={inputs.name || ""}
    //             onChange={handleChange}/>   
    //             </div>
    //           </div>

    //           <div className="row px-md-5 ">
    //             <div className="input-group mt-3 px-md-4  box-input" style={{borderRadius:  '3em'}}>
    //                 <input style={{  color: 'black', fontSize: 25 ,fontWeight:'275',border: 'none',backgroundColor:'transparent' }}  type="email" id="email" className="form-control fadeIn third pl-4 pl-md-0 py-3" name="email"  placeholder="อีเมล" value={inputs.email || ""}
    //             onChange={handleChange}/>   
    //             </div>
    //           </div>

    //           <div className="row px-md-5 ">
    //             <div className="input-group mt-3 px-md-4  box-input" style={{borderRadius:  '3em'}}>
    //                 <input style={{  color: 'black', fontSize: 25 ,fontWeight:'275',border: 'none',backgroundColor:'transparent' }}  type="password" id="password" className="form-control fadeIn third pl-4 pl-md-0 py-3" name="password"  placeholder="รหัสผ่าน"  value={inputs.password || ""}
    //             onChange={handleChange}/>   
    //             </div>
    //           </div>

    //           <button  style={{borderRadius: 103, fontSize: 26}} className="btn btn-primary col-12 col-md-5 box-button mt-3 p-1 p-md-2 fadeIn third" type="submit" value="Sing Up">สมัครสมาชิก</button>

    //         </form>
    //         <div id="formFooter" className="fadeIn fourth" style={{ fontSize: 25 ,fontWeight:'275',}}>
    //           มีบัญชีผู้ใช้งานแล้ว?
    //           <Link  to="/login"  style={{ fontSize: 25 ,fontWeight:'275',border: 'none', color: '#17612F'}} >เข้าสู่ระบบ!!</Link>
    //         </div>

    //       </div>
    //     </div>
    //   </div>

    // </section>
  );
}

export default RegisterPage;
