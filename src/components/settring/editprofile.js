import React, { useState } from "react";
import './settring.css';
import Navbar from "../navbarv2/navbar";
import {  API_ENDPOINT ,API_ENDPOINT_USER} from '../auth/config';
import Footer from '../navbarv2/footer';
export default function Editprofile() {
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
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);


        const raw = JSON.stringify({
            "name": inputs.Name
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT_USER}/e-member/public/api/update-profile`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                setErrorMessage(result.message);
                setShowErrorMessage(true)
                localStorage.setItem('name', result.name)
            })
            .catch((error) => console.error(error));
        // console.log(inputs);
    }

    // State สำหรับข้อมูลผู้ใช้



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
                                        <h6 className="text-right">Edit Profile</h6>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name="Name" value={inputs.Name || Name}
                                                onChange={handleChange} />

                                        </div>






                                    </div>
                                    <div className="mt-5 text-right">
                                        <button
                                            className="btn btn-primary profile-button"
                                            type="submit"

                                        >
                                            Save Profile
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
}