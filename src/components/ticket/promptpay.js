import { useLocation, Link, useNavigate } from 'react-router-dom';
import Footer from '../navbarv2/footer';
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Navbar from '../navbarv2/navbar';
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2
import { API_ENDPOINT } from '../auth/config';
// import { obfuscateCode } from '../auth/obfuscateCode';

function Promptpay() {
    const location = useLocation();
    const { state } = location;
    const [remainingTime, setRemainingTime] = useState(300); // Initial value of 5 minutes in seconds
    const [isExpired, setIsExpired] = useState(false);
    const [selectedId, setselectedId] = useState(['']);
    const navigate = useNavigate();
    const [isCheckPaymentEnabled, setIsCheckPaymentEnabled] = useState(true);
    useEffect(() => {
        setselectedId(state.idOrder);
    }, [state.idOrder]);
    // เมื่อ selectedId เปลี่ยนแปลง, บันทึกค่าลง localStorage

    const handleCancel = (id) => {
        // console.log(id)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));
        const raw = JSON.stringify({
            "order_id": id
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/online-order-cancel`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "cancel") {
                    Swal.fire({
                        title: 'ยกเลิกการชำระเงิน',
                        text: 'คุณต้องการยกเลิกการชำระเงินนี้หรือไม่?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'ใช่',
                        cancelButtonText: 'ไม่ใช่'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'ยกเลิกแล้ว!',
                                'รายการของคุณถูกยกเลิกแล้ว',
                                'success'
                            ).then(() => {
                                navigate('/OrderList'); // เปลี่ยนเส้นทางไปยังหน้า /OrderList
                            });
                        }
                    });
                } else {


                }
            })
            .catch((error) => console.error(error));
    };
    const autoleCancel = (id) => {
        // console.log(id)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));
        const raw = JSON.stringify({
            "order_id": id
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/online-order-cancel`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "cancel") {
                    Swal.fire({
                        title: 'เกินเวลาที่กำหนด!',
                        text: 'รายการของคุณถูกยกเลิกแล้ว',
                        icon: 'error', // เปลี่ยนเป็น 'error' สำหรับข้อผิดพลาด
                        confirmButtonText: 'ตกลง'
                    }).then(() => {
                        navigate('/OrderList'); // เปลี่ยนเส้นทางไปยังหน้า /OrderList
                    });
                } else {
                    // เรียกใช้ฟังก์ชัน obfuscateCode

                    //  const obfuscatedCode = obfuscateCode('notsuccessful');

                    //  // แสดงผลลัพธ์ในคอนโซล
                    //  console.log('Obfuscated Code:', obfuscatedCode);
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        const calculateRemainingTime = () => {
            const createdAt = new Date(state.createdAt);
            const now = new Date();
            const timeElapsed = Math.floor((now - createdAt) / 1000); // Time elapsed in seconds
            const timeLeft = 300 - timeElapsed; // 300 seconds is the initial countdown duration

            if (timeLeft <= 0) {
                setIsExpired(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));
                const raw = JSON.stringify({
                    "order_id": selectedId
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/online-order-cancel`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.status === "cancel") {

                        } else {

                        }
                    })
                    .catch((error) => console.error(error));
                return 0;
            }

            return timeLeft;
        };



        // const checkPayment = () => {
        //     const myHeaders = new Headers();
        //     myHeaders.append("Content-Type", "application/json");
        //     myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));
        //     const raw = JSON.stringify({
        //         "ref1": state.ref,
        //         "ref2": state.ref2
        //     });

        //     const requestOptions = {
        //         method: "POST",
        //         headers: myHeaders,
        //         body: raw,
        //         redirect: "follow"
        //     };

        //     fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/check_payment`, requestOptions)
        //         .then(response => {
        //             if (response.status === 401) {
        //                 // แสดง SweetAlert2 ถ้าสถานะเป็น 401
        //                 Swal.fire({
        //                     icon: 'error',
        //                     title: 'Unauthorized',
        //                     text: 'พบปัญหาระหว่างตรวจสอบผู้ใช้งาน กรุณาออกจากระบบและเข้าระบบอีกครั้ง',
        //                     confirmButtonText: 'ตกลง'
        //                 }).then(() => {
        //                     navigate('/home'); // เปลี่ยนเส้นทางไปยังหน้าโฮม
        //                 });
        //                 // หยุดการดำเนินการต่อในกรณีที่ได้รับสถานะ 401
        //                 return Promise.reject('Unauthorized');
        //             }

        //             // แปลงการตอบกลับเป็น JSON
        //             return response.json();
        //         })
        //         .then(result => {
        //             if (result.respMsg === "Unsuccess") {
        //                 // ถ้าข้อความตอบกลับเป็น "Unsuccess" ให้แสดงข้อความข้อผิดพลาด (สามารถเพิ่มการจัดการเพิ่มเติมได้ที่นี่)
        //                 // Swal.fire({
        //                 //   title: 'Payment Unsuccessful',
        //                 //   text: 'การชำระเงินไม่สำเร็จ โปรดลองอีกครั้ง',
        //                 //   icon: 'error',
        //                 //   confirmButtonText: 'ตกลง'
        //                 // });
        //             } else {
        //                 // ถ้าการชำระเงินสำเร็จ
        //                 clearInterval(timer); // หยุดตัวจับเวลา

        //                 // แสดงการแจ้งเตือนเมื่อชำระเงินสำเร็จ
        //                 Swal.fire({
        //                     title: 'Payment Successful',
        //                     text: 'Your payment was successful!',
        //                     icon: 'success',
        //                     confirmButtonText: 'OK'
        //                 }).then((result) => {
        //                     if (result.isConfirmed) {
        //                         // เปลี่ยนเส้นทางไปยังหน้า /OrderList
        //                         navigate('/OrderList');
        //                     }
        //                 });
        //             }
        //         })
        //         .catch(error => {
        //             // จัดการข้อผิดพลาดทั่วไป
        //             console.error('Error:', error);
        //             //   Swal.fire({
        //             //     icon: 'error',
        //             //     title: 'Error',
        //             //     text: 'เกิดข้อผิดพลาดในการตรวจสอบการชำระเงิน',
        //             //     confirmButtonText: 'ตกลง'
        //             //   });
        //         });

        // }
        // Set initial remaining time
        setRemainingTime(calculateRemainingTime());

        const timer = setInterval(() => {
            // checkPayment();
            setRemainingTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setIsExpired(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 2000); // Update every second

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [navigate, selectedId, state.createdAt, state.ref, state.ref2]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    if (!isExpired) {

    } else {
        autoleCancel(selectedId);
    }




    const checkPayment = () => {
        if (!isCheckPaymentEnabled) return;

        // Disable the button
        setIsCheckPaymentEnabled(false);

        // Logic to check payment...
        console.log('กำลังตรวจสอบการชำระเงิน');

        // Simulate an API call with setTimeout
        setTimeout(() => {
            // Here you can handle the response and show results

            // Re-enable the button after 5 seconds
            setIsCheckPaymentEnabled(true);
        }, 5000);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));
        const raw = JSON.stringify({
            "ref1": state.ref,
            "ref2": state.ref2
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/check_payment`, requestOptions)
            .then(response => {
                if (response.status === 401) {
                    // แสดง SweetAlert2 ถ้าสถานะเป็น 401
                    Swal.fire({
                        icon: 'error',
                        title: 'Unauthorized',
                        text: 'พบปัญหาระหว่างตรวจสอบผู้ใช้งาน กรุณาออกจากระบบและเข้าระบบอีกครั้ง',
                        confirmButtonText: 'ตกลง'
                    }).then(() => {
                        navigate('/home'); // เปลี่ยนเส้นทางไปยังหน้าโฮม
                    });
                    // หยุดการดำเนินการต่อในกรณีที่ได้รับสถานะ 401
                    return Promise.reject('Unauthorized');
                }

                // แปลงการตอบกลับเป็น JSON
                return response.json();
            })
            .then(result => {
                if (result.respMsg === "Unsuccess") {
                    // ถ้าข้อความตอบกลับเป็น "Unsuccess" ให้แสดงข้อความข้อผิดพลาด (สามารถเพิ่มการจัดการเพิ่มเติมได้ที่นี่)
                    Swal.fire({
                        title: 'Payment Unsuccessful',
                        text: 'ยังไม่มีการชำระเงิน ขออภัยหากชำระเงินแล้วกรุณาแจ้งเจ้าหน้าที่',
                        icon: 'error',
                        confirmButtonText: 'ตกลง'
                    });
                } else {
                    // ถ้าการชำระเงินสำเร็จ
                    // clearInterval(timer); // หยุดตัวจับเวลา

                    // แสดงการแจ้งเตือนเมื่อชำระเงินสำเร็จ
                    Swal.fire({
                        title: 'Payment Successful',
                        text: 'Your payment was successful!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // เปลี่ยนเส้นทางไปยังหน้า /OrderList
                            navigate('/OrderList');
                        }
                    });
                }
            })
            .catch(error => {
                // จัดการข้อผิดพลาดทั่วไป
                console.error('Error:', error);
                //   Swal.fire({
                //     icon: 'error',
                //     title: 'Error',
                //     text: 'เกิดข้อผิดพลาดในการตรวจสอบการชำระเงิน',
                //     confirmButtonText: 'ตกลง'
                //   });
            });

    }

    const Testapprove = (ref1, ref2) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", localStorage.getItem('apikey'));

        const raw = JSON.stringify({
            "ref1": { ref1 },
            "ref2": { ref2 }
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_ENDPOINT}/api/v1/zoo/e-member/test_approve`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }


    return (
        <div>
            <Navbar />
            {/* <p>{state.ref}</p>
            <p>{state.ref2}</p>
      
            <p>{state.qrData}</p>
            <p>{state.total}</p>
            <p>{state.createdAt}</p>  */}
            <div className=" container px-5 mt-5 text-center">
                {!isExpired ? (
                    <>
                        <div className="countdown-container">
                            <p className="countdown-text">เวลาชำระเงิน:</p>
                            <div className="countdown-timer">{formatTime(remainingTime)}</div>
                        </div>

                        <div className='container' >
                            <div className='container' style={{ textAlign: 'center', color: '#0C9331', fontSize: 25, fontFamily: 'Kanit', fontWeight: '400' }}>
                                แสกน QR เพื่อชำระเงิน
                            </div>
                            <div className="mt-3 text-center fs-4 fw-light">
                                เลขที่คำสั่งซื้อ : {state.ref}
                            </div>

                            <div className='container text-center mt-5' >
                                <QRCode size={150} value={state.qrData} />
                            </div>
                            <div className="container mt-3 text-center fs-10 ">
                                <p className='text-danger'>*****กรุณาอย่ากดออกจากหน้าจอนี้ ในระหว่างการชำระงิน เพื่อไม่ให้การชำระเงินเกิดข้อผิดพลาด*******</p>
                            </div>
                            {/* <button onClick={() => Testapprove(state.ref, state.ref2)} className="btn btn-primary mt-3">
                                Test Approve
                            </button> */}
                            <button
                                onClick={checkPayment}
                                className="btn btn-primary mt-3"
                                disabled={!isCheckPaymentEnabled} // Disable if not enabled
                            >
                                ตรวจสอบการชำระเงินของคุณ
                            </button>

                            {/* <div className='container text-center mt-5'>
                            <h3>Ref 1:{state.ref}</h3>
                        
                            </div>
                            <div className='container text-center mt-5'>
                            <h3>Ref 2:{state.ref2}</h3>
                            </div> */}
                            <div className='container mt-5' style={{ textAlign: 'center', color: '#7C7C7C', fontSize: 30, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>
                                ยอดชำระ {state.total} บาท
                            </div>

                            <div className="container mt-5" style={{ textAlign: 'center' }}>
                                <button
                                    className="btn btn-danger  btn-block"
                                    onClick={() => handleCancel(selectedId)}
                                    style={{
                                        background: 'linear-gradient(180deg, #E11010 0%, #C90848 63%)',
                                        borderRadius: 124,
                                        border: '2px #F10E0E solid'
                                    }}
                                >
                                    ยกเลิกการชำระเงิน
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="expired-message">
                        <p>หมดเวลาสำหรับการชำระเงินของรายการนี้</p>
                        <Link to="/addticket" type="button" className="btn  btn-lg btn btn-primary "  >ทำรายการใหม่</Link>
                    </div>
                )}
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Promptpay;
