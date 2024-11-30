// src/utils/authUtils.js
import bcrypt from 'bcryptjs';

// ฟังก์ชันเพื่อตรวจสอบรหัสผ่านที่แฮช
export const verifyPassword = (password) => {
  return bcrypt.compareSync(password);
};
