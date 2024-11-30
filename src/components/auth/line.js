
import React, { useEffect } from 'react'
import liff from '@line/liff'
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { LIFF_ID, API_ENDPOINT ,API_ENDPOINT_USER} from './config';
function Line() {
  const navigate = useNavigate();
  const date = new Date();
  const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format
  const timeWithKey = time + '@pay';
  const saltRounds = 10;
  useEffect(() => {
    liff.init({ liffId: `${LIFF_ID}` , withLoginOnExternalBrowser: true})
      .then(() => {
        handleLogin();
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async () => {
    try {
      const profile = await liff.getProfile();
      // console.log(profile);

      Slogin("", "line", profile.userId, profile.displayName, profile.userId);
      // bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
      //     if (err) {
      //       console.error('Error hashing password:', err);
      //       return;
      //     }
      //     // const lineId = profile.userId.slice(0, 10).replace(/\D/g, ''); // ตัดให้เหลือ 10 ตัวอักษ
      //     // genApiKey(lineId, hash)

      //     // console.log(hash);
      //     // console.log(timeWithKey);
      //   });

      // localStorage.setItem('email', profile.statusMessage)
      // localStorage.setItem('userid', profile.userId.slice(0, 10).replace(/\D/g, ''))
      // localStorage.setItem('name', profile.displayName)
      // localStorage.setItem('token',profile.userId)
      // navigate('/Home');
      // console.log(profile);
      // console.log(profile.userId);
      // console.log(profile);
    } catch (err) {
      console.log(err);
    }
  }

  const Slogin = (email, provider, provider_id, name, token) => {
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("provider", provider);
    formdata.append("provider_id", provider_id);
    formdata.append("name", name);
    formdata.append("line_token", token);

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
        navigate('/Home');
      })
      .catch(error => {
        console.error('Fetch error:', error); // จัดการข้อผิดพลาด
      });
  }

  return (
    <div style={styles.container}>
            <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary btn-rounded btn-lg"
            >
                ดำเนินการต่อ
            </button>
        </div>
  )
}
const styles = {
  container: {
      display: 'flex',
      justifyContent: 'center', // จัดแนวแนวนอน
      alignItems: 'center', // จัดแนวแนวตั้ง
      height: '100vh', // ความสูงเต็มหน้าจอ
  },
};
export default Line
