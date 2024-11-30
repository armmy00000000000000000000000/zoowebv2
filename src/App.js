import RegisterPage from './components/login/register';
import LoginForm from './components/login/login';
import Homezoo from './components/home/homezoo';
import Homepage from './components/home/Home_page';
import Settring from './components/settring/settring';
import Home from './components/home/home';
import News from './components/news/news';
import Addticket  from './components/ticket/add_ticket';
import Paymentlist from './components/ticket/payment_list';
import Makepayment from './components/reserve/makepayment';
import Ticketpostpone from './components/reserve/ticketpostpone';
import ReservationCancellation from './components/Dialog/ReservationCancellation';
import OrderList from './components/reserve/OrderItem';
import CancelDialog from './components/Dialog/CancelDialog';
import Lineoa from './components/auth/Lineoa';
import Editprofile from './components/settring/editprofile';
import Editpass from './components/settring/editpassword';
import NewsDetail from './components/news/newsdetall';
import Promptpay from './components/ticket/promptpay';
import Payment from './components/ticket/Payment';
import AboutUs from './components/aboutus/aboutus';
import ZooList from './components/zoodetalls/zoodetalls';
import AuthComponent from './verify';
import ZooFacebookPage from './components/zooPages/ZooFacebookPage';
import Line from './components/auth/line';
import PDFViewer from './components/PDFViewer/PDFViewer';

import VDOLive from './components/stream/vdoLive';
import Live from './components/stream/Live';
import Listticket from './components/reserve/Listticket';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactFacebookLogin from './ReactFacebookLogin';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NotFoundPage from './NotFoundPage';  // นำเข้า NotFoundPage component
const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isClosed = (time) => {
    const hours = time.getHours(); // กำหนด hours จาก time.getHours()
    const minutes = time.getMinutes(); // กำหนด minutes จาก time.getMinutes()
    return (hours === 22 && minutes >= 30) || (hours === 23) || (hours === 0 && minutes < 60);
  };
  
  useEffect(() => {
      // ตรวจสอบว่าเส้นทางปัจจุบันคือ '/addticket'
      if (location.pathname === '/addticket') {
          const validRoutes = [ '/OrderList', '/addticket']; // เส้นทางที่ถูกต้อง
          if (!validRoutes.includes(location.pathname)) {
              window.location.reload(); // รีเฟรชหน้าเมื่อไม่พบเส้นทาง
          }
      }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // อัปเดตเวลาเป็นวินาที

    return () => clearInterval(interval);
  }, []);
 
    const token = localStorage.getItem('token');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

// ตรวจสอบเวลาเปิดปิดระบบ
  if (isClosed(new Date())) {
    return (
      <div className="notificationtime">
        <h2>เวลาปัจจุบัน: {currentTime}</h2>
        <p className='text-danger'>เวลานี้ระบบปิดให้บริการ เปิดให้บริการอีกในเวลา 01:00 น.</p>
      </div>
    );
  }
    // หากการเข้าสู่ระบบไม่ถูกต้องหรือถูกลบ ให้เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
    if (!token) {
    
      return (
        <div>
          <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/Lineoa" element={<Lineoa />} />
              <Route path="/line" element={<Line />} />
              <Route path="/VDOLive" element={<VDOLive />} />
              <Route path="/Live" element={<Live />} />
              <Route path="/regis" element={<RegisterPage />} />
              <Route path="/news" element={<News />} />
              <Route path="/NewsDetail" element={<NewsDetail />} />
              <Route path="/home" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ZooFacebookPage" element={<ZooFacebookPage />} />
              <Route path="/AuthComponent" element={<AuthComponent />} />
              <Route
                path="/ReactFacebookLogin"
                element={<ReactFacebookLogin />}
              />
              <Route path="/ZooList" element={<ZooList />} />
            </>
          </Routes>
        </div>
      );
 
      }
  return (
    <div>
      <Routes>
        <>
          {/* Routes for logged-in users */}
          <Route path="/PDFViewer" element={<PDFViewer />} />
          <Route path="/AuthComponent" element={<AuthComponent />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/VDOLive" element={<VDOLive />} />
          <Route path="/Live" element={<Live />} />
          <Route path="/homezoo" element={<Homezoo />} />
          <Route path="/settring" element={<Settring />} />
          <Route path="/Addticket" element={<Addticket />} />
          <Route path="/paymentlist" element={<Paymentlist />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/ticketpostpone" element={<Ticketpostpone />} />
          <Route
            path="/ReservationCancellation"
            element={<ReservationCancellation />}
          />
          <Route path="/OrderList" element={<OrderList />} />
          <Route path="/CancelDialog" element={<CancelDialog />} />
          <Route path="/Editprofile" element={<Editprofile />} />
          <Route path="/Editpass" element={<Editpass />} />
          <Route path="/Promptpay" element={<Promptpay />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/news" element={<News />} />
          <Route path="/NewsDetail" element={<NewsDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ZooFacebookPage" element={<ZooFacebookPage />} />
          <Route path="/ZooList" element={<ZooList />} />
          <Route path="/Listticket" element={<Listticket />} />
          <Route path="/" element={<Home />} />
        </>
      </Routes>
    </div>
  );

};

export default App;
