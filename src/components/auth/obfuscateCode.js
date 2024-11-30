// src/utils/obfuscateCode.js
import JavaScriptObfuscator from 'javascript-obfuscator';

/**
 * ฟังก์ชันสำหรับ obfuscate โค้ด JavaScript
 * @param {string} inputCode - โค้ด JavaScript ที่จะ obfuscate
 * @returns {string} - โค้ดที่ obfuscated
 */
export function obfuscateCode(inputCode) {
  try {
    const result = JavaScriptObfuscator.obfuscate(inputCode, {
      compact: true,
      controlFlowFlattening: true,
    }).getObfuscatedCode();
    return result;
  } catch (error) {
    console.error('Error obfuscating code:', error);
    return 'Error obfuscating code.';
  }
}
