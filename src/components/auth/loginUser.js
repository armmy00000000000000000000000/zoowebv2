
import bcrypt from 'bcryptjs';
import {  API_ENDPOINT } from './config';

export const loginUser = async (email, provider, providerId, name, token) => {
  const date = new Date();
  const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format
  const timeWithKey = time + '@pay';
  const saltRounds = 10;
  const formdata = new FormData();
  formdata.append("email", email);
  formdata.append("provider", provider);
  formdata.append("provider_id", providerId);
  formdata.append("name", name);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };

  try {
    const response = await  fetch(`${API_ENDPOINT}/e-member/public/api/slogin`, requestOptions)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json(); // แปลงการตอบกลับเป็น JSON

    if (result.status === "true") {
      // Hashing
      const hash = await new Promise((resolve, reject) => {
        bcrypt.hash(timeWithKey, saltRounds, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });

      // เรียกใช้ genApiKey
      try {
        await genApiKey(result.msg.id, hash);
      } catch (genApiKeyError) {
        console.error('Error generating API key:', genApiKeyError);
      }

      // เก็บข้อมูลใน localStorage
      localStorage.setItem('email', result.msg.email);
      localStorage.setItem('userid', result.msg.id);
      localStorage.setItem('name', result.msg.name);
      localStorage.setItem('token', token);

    

      // console.log("Success:", result.msg);
    } else {
      // console.error("Error:", result.msg);
      throw new Error(result.msg); // ส่งข้อผิดพลาด
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // ส่งข้อผิดพลาด
  }
};

const genApiKey = (iduset, auth) => {
  const date = new Date();
  const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format

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
        // เปลี่ยนเส้นทาง
        window.location.href = '/emember/Home';
    })
    .catch(error => {
      console.error('Fetch error:', error); // จัดการข้อผิดพลาด
    });
}