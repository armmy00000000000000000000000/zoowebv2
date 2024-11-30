import React, { useState, useEffect } from 'react';
import './news.css'
import Navbar from "../navbarv2/navbar";
import {  API_ENDPOINT } from '../auth/config';
import { Link } from "react-router-dom";
import Footer from '../navbarv2/footer';
export default function News() {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT}/e-member/public/api/news`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // เมื่อได้ข้อมูลจาก API ให้กำหนดค่าให้กับ state
                setNewsData(result);
            })
            .catch(error => console.error(error));
    }, []); // useEffect จะถูกเรียกใช้เมื่อคอมโพเนนต์ถูกโหลดครั้งแรกเท่านั้น

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    return (
        <section
            className=" text-center"
        >
            <Navbar />
            <div className="container py-5">
                <div className="container">
                    {/* <div style={{ textAlign: 'center', color: '#000000', fontSize: 35, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>ข่าวที่น่าสนใจ</div> */}

                    <div className="container text-start">


                        {/* ตรวจสอบว่าข้อมูลมีค่าหรือไม่ก่อนแสดงผล */}
                        {newsData && (
                            <div className="">
                                {/* วนลูปเพื่อแสดงข้อมูลทั้งหมด */}
                                {Object.values(newsData).map(news => (
                                    <>
                                        <div key={news.id} className="row gx-5">
                                            <div className="col-md-6 mb-4">
                                                <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                                    <img src={`${newsData.img_path}${news.thumbnail}`} onError={(e) => {
                                                        e.target.src = 'https://www.seub.or.th/seubweb/wp-content/uploads/2024/01/33.jpg';
                                                    }} className="img-fluid" alt="News" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day {news.created_at}</span>
                                                <h4><strong>{news.title}</strong></h4>
                                                <p className="text-muted">
                                                    {news.title}
                                                </p>
                                                <Link to='/NewsDetail' state={{

                                                    imgurl: `${newsData.img_path}${news.thumbnail}`,
                                                    title: news.title,
                                                    detail: news.detail,
                                                    updatedat: news.updated_at,
                                                    id: news.id
                                                }} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">
                                                    อ่านรายละเอียด
                                                </Link>
                                            </div>
                                        </div>

                                    </>

                                    // <div key={news.id} className="col-12 col-sm-6 col-md-3  py-2 px-3 " >
                                    //     <div style={{ width: '100%' }}>
                                    //         <div className="card-h">
                                    //             <div className="card-covimg">

                                    //                 <img src={`${newsData.img_path}${news.thumbnail}`} onError={(e) => {
                                    //                     e.target.src = 'https://www.seub.or.th/seubweb/wp-content/uploads/2024/01/33.jpg';
                                    //                 }} className="d-flex justify-content-center align-items-center overflow-hidden card-gran " alt="..."
                                    //                     style={{ borderRadius: 38 }} />
                                    //             </div>
                                    //             <div className="card-gran py-3" style={{ width: '100%', height: '60%', borderRadius: 38, position: 'absolute', bottom: 0, left: 0, }}>

                                    //                 <h5 className="card-title text">{news.title}</h5>
                                    //                 {/* <p className="card-text">{news.title}</p> */}
                                    //                 <button style={{ width: 150, height: 40.75, background: 'linear-gradient(180deg, #02F4BD 0%, #0075F4 100%)', borderRadius: 103, border: '1px #0075F4 solid' }} className="btn btn-primary">
                                    //                     <Link style={{ color: 'white', textDecoration: 'none' }} key={news.id}
                                    //                         to='/NewsDetail' state={{

                                    //                             imgurl: `${newsData.img_path}${news.thumbnail}`,
                                    //                             title: news.title,
                                    //                             detail: news.detail,
                                    //                             updatedat: news.updated_at,
                                    //                             id: news.id
                                    //                         }}>
                                    //                         อ่ายรายละเอียด
                                    //                     </Link>

                                    //                 </button>

                                    //             </div>
                                    //         </div>

                                    //     </div>

                                    // </div>

                                ))}
                            </div>
                        )}





                    </div>
                </div>




            </div>








            <Footer></Footer>
        </section>

    );
}

