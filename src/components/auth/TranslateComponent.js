// import React, { useState } from 'react';
// import axios from 'axios';

// const TranslateComponent = () => {
//   const [text, setText] = useState('Hello, how are you?');
//   const [translatedText, setTranslatedText] = useState('');
//   const [language, setLanguage] = useState('th'); // ค่าเริ่มต้นเป็นไทย

//   const API_KEY = 'YOUR_API_KEY'; // แทนที่ด้วย API Key ของคุณ

//   const translateText = async (text, targetLanguage) => {
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

//     try {
//       const response = await axios.post(url, {
//         q: text,
//         target: targetLanguage,
//       });
//       return response.data.data.translations[0].translatedText;
//     } catch (error) {
//       console.error('Error translating text:', error);
//       return text; // คืนค่าข้อความเดิมหากมีข้อผิดพลาด
//     }
//   };

//   const handleTranslate = async () => {
//     const result = await translateText(text, language);
//     setTranslatedText(result);
//   };

//   return (
//     <div>
//       <h1>Text Translator</h1>
//       <textarea 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         rows="4" 
//         cols="50" 
//       />
//       <br />
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="en">English</option>
//         <option value="th">ไทย</option>
//       </select>
//       <br />
//       <button onClick={handleTranslate}>Translate</button>
//       <h2>Translated Text:</h2>
//       <p>{translatedText}</p>
//     </div>
//   );
// };

// export default TranslateComponent;
