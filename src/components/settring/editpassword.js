import React, { useState } from "react";
import './settring.css';
import Navbar from "../navbarv2/navbar";
import Footer from '../navbarv2/footer';
import { API_ENDPOINT,API_ENDPOINT_USER } from '../auth/config';

export default function Editpass() {
    const Name = localStorage.getItem('name')
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
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
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("old_password", inputs.CurrentPassword);
        formdata.append("new_password", inputs.NewPassword);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT_USER}/e-member/public/api/update-password`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.error === "Invalid old password") {
                    // console.log(result);
                    setErrorMessage(result.error);
                    setShowErrorMessage(true);
                } else {
                    localStorage.setItem('token', result.access_token)
                    // console.log(result);
                    setErrorMessage(result.message);
                    setShowErrorMessage(true);

                }
            })
            .catch((error) => console.error(error));
        // console.log(inputs);
    }

    return (
        <section className="bg-section">
            <Navbar />
            <div className="container py-5">

                {showErrorMessage && (
                    <div className='container'>  <div class="alert alert-success" role="alert">
                        {errorMessage}
                    </div></div>

                )}
                <form onSubmit={handleSubmit} className="px-md-5 mt-4">
                    <div className="container rounded bg-white mt-5 card">
                        <div className="row">
                            <div className="col-md-4 border-right card">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                    <img
                                        className="rounded-circle mt-5"
                                        src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
                                        width="90"
                                        alt="Profile"
                                    />
                                    <span className="font-weight-bold">{Name}</span>
                                    <span className="text-black-50">{email}</span>
                                    <span>User States</span>
                                </div>
                            </div>
                            <div className="col-md-8 cadr">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex flex-row align-items-center back">
                                            <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                                            <h6>Back to home</h6>
                                        </div>
                                        <h6 className="text-right">Edit Password</h6>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Current Password" name="CurrentPassword"
                                                value={inputs.CurrentPassword || ""}
                                                onChange={handleChange} />

                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <input
                                                type="text"
                                                className="form-control"

                                                placeholder="New Password" name="NewPassword"
                                                value={inputs.NewPassword || ""}
                                                onChange={handleChange} />

                                        </div>






                                    </div>
                                    <div className="mt-5 text-right">
                                        <button
                                            className="btn btn-primary profile-button"
                                            type="submit"

                                        >
                                            Save Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </div>






            <Footer></Footer>
        </section>
    );
    // return (
    //     <>
    //         <section className="bg-section">
    //             <Navbar />
    //             <div className="container py-5">
    //                 <div className="container py-5">
    //                     <div className="container py-5 box-input" style={{ position: 'relative', borderRadius: '6em' }}>
    //              <img className="box-input rounded-circle" style={{ width: '10em', height: '10em', position: 'absolute', top: '-0.2%', left: '50%', transform: 'translate(-50%, -50%)' }}
    //                             src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg" />
    //                         <br />
    //                         <div className="container mt-3 " style={{ textAlign: 'center', color: '#17612F', fontSize: 30, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>{email}</div>
    //                         <div className="container" style={{ textAlign: 'center', color: '#17612F', fontSize: 20, fontFamily: 'Kanit', fontWeight: '275', wordWrap: 'break-word' }}>{Name}</div>


    //                         <div className="container py-md-3 px-md-5  text-center">
    //                             <div style={{ textAlign: 'center', color: '#17612F', fontSize: 30, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>เปลี่ยนรหัสผ่าน</div>
    //                             {showErrorMessage && (
    //                                 <div className='container'>  <div className={`alert ${errorMessage === "Invalid Credentials" ? "alert-danger" : "alert-success"}`} role="alert">
    //                                     {errorMessage}
    //                                 </div></div>

    //                             )}
    //                             <form onSubmit={handleSubmit} className="px-md-5 mt-4">
    //                                 <div className="row px-md-5 ">
    //                                     <div className="input-group mt-3 px-md-4  box-input" style={{ borderRadius: '3em' }}>
    //                                         <div className="input-group-prepend ">
    //                                             <span className="input-group-text mx-md-0 px-md-0" style={{ border: 'none', backgroundColor: 'transparent' }}>
    //                                                 <FontAwesomeIcon icon={faKey} className="icon" size="2x" /></span>
    //                                         </div>
    //                                         <input style={{ color: 'black', fontSize: 26, border: 'none', backgroundColor: 'transparent' }} type="text" className="form-control mx-0 px-0" placeholder="Current Password" name="CurrentPassword"
    //                                             value={inputs.CurrentPassword || ""}
    //                                             onChange={handleChange} />
    //                                     </div>

    //                                 </div>
    //                                 <div className="row px-md-5">
    //                                     <div className="input-group mt-3 px-md-4  box-input" style={{ borderRadius: 32 }}>
    //                                         <div className="input-group-prepend ">
    //                                             <span className="input-group-text mx-md-0 px-md-0" style={{ border: 'none', backgroundColor: 'transparent' }}>
    //                                                 <FontAwesomeIcon icon={faKey} className="icon" size="2x" /></span>
    //                                         </div>
    //                                         <input style={{ color: 'black', fontSize: 26, border: 'none', backgroundColor: 'transparent' }} type="text" className="form-control mx-0 px-0" placeholder="New Password" name="NewPassword"
    //                                             value={inputs.NewPassword || ""}
    //                                             onChange={handleChange} />
    //                                     </div>
    //                                 </div>
    //                                 <button style={{ borderRadius: 103, fontSize: 26 }} className="btn btn-primary col-12 col-md-5 box-button mt-3 p-1 p-md-2" type="submit">บันทึก</button>
    //                             </form>
    //                         </div>


    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </>

    // );
}

