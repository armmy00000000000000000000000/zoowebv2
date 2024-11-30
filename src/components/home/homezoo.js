import React, { useState, useEffect } from 'react';

import zoo002 from '../img/zoo002.png'; // นำเข้าภาพพื้นหลัง
import Navbar from '../navbar/navbar';
import './hover.css';
import { Link } from 'react-router-dom';
import imgzoos from '../model/imgmodel';
import Logo010 from '../img/img010.png'; // นำเข้าภาพพื้นหลัง
function Homezoo() {
    const [zoos, setZoos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",

        };

        fetch("https://addpay.net/api/v1/zoo/e-member/all-zoo", requestOptions)
            .then((response) => response.json()) // แปลงข้อมูลเป็น JSON
            .then((data) => {
                const filteredZoos = data.filter(zoo => zoo.code != null && zoo.code != undefined);
                // console.log(newsData);
                // console.log(zoosData);

                setZoos(filteredZoos); // กำหนดค่า zoos ด้วยข้อมูลที่ได้รับมา
                setLoading(false); // เมื่อโหลดเสร็จสิ้น
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // ถ้าเกิดข้อผิดพลาดก็เปลี่ยน loading เป็น false
            });
    }, []);

    return (
        <div>
            <section
                className="text-center"
                style={{

                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Navbar />
                <div className="mt-3" style={{ textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kanit', fontWeight: '275', wordWrap: 'break-word' }}>BUY ZOO TICKET</div>
                <img style={{}} src={zoo002} alt="Card image cap" />
                {loading ? (
                    <div className="containar text-center">
                        <span class="loader">Load&nbsp;ng</span>
                    </div>
                ) : (



                    <div className=" py-5 text-center mt-5 " style={{
                        // height: '100vh', // ความสูงเท่ากับขนาดหน้าจอ
                        backgroundColor: 'white', /* สีพื้นหลังโปร่งใส */
                        backgroundSize: 'cover', // ปรับขนาดรูปภาพให้เต็มพื้นที่
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '80px 80px 0px 0px',
                        padding: '60px', /* ระยะห่างของข้อความกับขอบ */

                    }}>
                        <div className="text-center py-5 mt-5 overflow-auto" style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '24px',
                            color: '#333', /* สีข้อความ */
                            backgroundImage: `url(${Logo010})`, // ใช้ backgroundImage เพื่อกำหนดพื้นหลัง

                            padding: '60px', /* ระยะห่างของข้อความกับขอบ */
                            borderRadius: '60px', /* ทำให้มีมุมโค้ง */
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)', /* เงา */
                            border: '3px #0075F4 solid'
                        }}>
                            <div id="" className="overflow-auto" >
                                <div className="">



                                    <div className="row">
                                        {zoos.length > 0 ? (
                                            zoos.map((zoo, index) => (
                                                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-3" key={zoo.id}>
                                                    <Link
                                                        to="/addticket"
                                                        state={{
                                                            imageUrl: imgzoos.find(item => item.id === zoo.id)?.img || 'default-image.png',
                                                            name: zoo.name,
                                                            id: zoo.id
                                                        }}
                                                    >
                                                        <div className="container card-with-shadow text-center py-3" style={{ borderRadius: 22, border: '2px #0075F4 solid' }}>
                                                            <div className="card-with-shadow" style={{ width: '100%', maxWidth: 114, height: 'auto', background: 'white', borderRadius: 17, border: '1px #007DF1 solid', display: 'inline-block', marginBottom: 10 }}>
                                                                <img className="card-img-top" style={{ width: '100%', height: 'auto', borderRadius: '17px' }} src={imgzoos.find(item => item.id === zoo.id)?.img || 'default-image.png'} alt="Card image cap" />
                                                            </div>
                                                            <div className="mt-2" style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Kanit', fontWeight: 400, wordWrap: 'break-word' }}>{zoo.name}</div>
                                                            <div style={{ textAlign: 'center', color: '#17612F', fontSize: '0.75rem', fontFamily: 'Kanit', fontWeight: 300, wordWrap: 'break-word' }}>เปิดทุกวัน เวลา 09.00 น.-17.00น.</div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        ) : (
                                            <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>ไม่มีข้อมูลที่จะแสดง</div>
                                        )}



                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    // <div className="row">
                    //     {zoos.map((zoo) => (
                    //         <div className="col-lg-4 col-md-4 py-3" key={zoo.id}>
                    //             <Link
                    //                 key={zoo.id}
                    //                 to="/addticket" state={{
                    //                     imageUrl: imgzoos.find(item => item.id === zoo.id).img,
                    //                     name: zoo.name,
                    //                     id: zoo.id
                    //                 }}

                    //             >


                    //                 <div className="container card-with-shadow text-center py-5 " style={{ width: 193, height: 278, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.30)', borderRadius: 22, border: '2px #0075F4 solid' }} >
                    //                     <div className='card-with-shadow' style={{ width: 130, height: 139, background: 'white', borderRadius: 17, border: '1px #007DF1 solid', display: 'inline-block', }}>
                    //                         <img className="card-img-top" style={{ height: 120, borderRadius: '120px' }} src={imgzoos.find(item => item.id === zoo.id).img} alt="Card image cap" />
                    //                     </div>
                    //                     <div className='mt-3' style={{ textAlign: 'center', fontSize: 16, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>{zoo.name}</div>
                    //                     <div style={{ textAlign: 'center', color: '#17612F', fontSize: 11, fontFamily: 'Kanit', fontWeight: '300', wordWrap: 'break-word' }}>เปิดทุกวัน เวลา 09.00 น.-17.00น.</div>
                    //                 </div>



                    //             </Link>
                    //         </div>
                    //     ))}
                    // </div>

                )}

            </section>
        </div>
    );
}

export default Homezoo;
