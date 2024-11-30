import React from 'react';
import Navbar from '../navbarv2/navbar';
import Footer from '../navbarv2/footer';
import kk from '../img/KK-zoo.png';
import cm from '../img/CM-zoo.png';
import kn from '../img/KN-zoo.png';
import nm from '../img/NM-zoo.png';
import sk from '../img/SK-zoo.png';
import ub from '../img/UB-zoo.png';
import addpay from '../img/zoptaddpay.png';
import oss from '../img/logo.png';
import './text.css'
function ZooFacebookPage({ name, url }) {
    const zooPages = [
        {logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์เปิดเขาเขียว", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkkopenzoo&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        { logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์อุบลราชธานี", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feduubonzoo&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        { logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์เชียงใหม่", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFanpageChiangMaiZoo&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        { logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์นครราชสีมา", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNakhonratchasimaZoo&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        { logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์ขอนแก่น", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKhonkaenzoo&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        { logo:'../img/KK-zoo.png',sheet:'../img/KK-zoo.png',show_time:'../img/KK-zoo.png', name: "สวนสัตว์สงขลา", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSongkhlaZooPage&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" }
    ];

   
    return (

        <>
            <Navbar></Navbar>
            <div className="py-2">
                <div className="marquee-text">
                    <img src={addpay} alt="SK Zoo" className="marquee-image" />       <img src={oss} alt="UB Zoo" className="marquee-image" />
                   

             
                    <img src={kk} alt="KK Zoo" className="marquee-image" />
                    <img src={cm} alt="CM Zoo" className="marquee-image" />
                    <img src={kn} alt="KN Zoo" className="marquee-image" />
                    <img src={nm} alt="NM Zoo" className="marquee-image" />
                    <img src={sk} alt="SK Zoo" className="marquee-image" />
                    <img src={ub} alt="UB Zoo" className="marquee-image" />



                </div>
            </div>
            <div className="mb-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="embed-responsive embed-responsive-16by9">
                            <div className='row'>

                                {zooPages.map((zoo, index) => (
                                    
                                    <div className="col-12 col-sm-6 col-md-4 py-3" key={index}>
                                        <iframe
                                            src={`${zoo.url}`}
                                            width="100%"
                                            height="600"
                                            style={{ border: 'none', overflow: 'hidden' }}
                                            scrolling="no"
                                            frameBorder="0"
                                            allowFullScreen={true}
                                            title={`Facebook Page - ${name}`}
                                        ></iframe>
                                    </div>

                                    //   <ZooFacebookPage key={index} name={zoo.name} url={zoo.url} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
}

export default ZooFacebookPage;
