import { getConfig } from './config.js';

const ASCII_RANGE = [0x0000, 0x007F];

// Calculates the byte length of the input string based on the current configuration
// 根據當前配置計算輸入字符串的字節長度
export function getStringBytes(text) {
  const config = getConfig();
  return Array.from(text).reduce((byteLength, char) => {
    if (isASCII(char)) {
      return byteLength + config.ascii;
    }
    if (isChinese(char, config.specialCharRanges)) {
      return byteLength + config.chinese;
    }
    if (config.other === 'utf8') {
      return byteLength + getCharByteLength(char);
    }
    return byteLength + config.other;
  }, 0);
}

// Checks if the character is an ASCII character
// 檢查字符是否為 ASCII 字符
function isASCII(char) {
  const code = char.charCodeAt(0);
  return code >= ASCII_RANGE[0] && code <= ASCII_RANGE[1];
}

// Checks if the character is a Chinese character or special character
// 檢查字符是否為中文或特殊字符
function isChinese(char, specialCharRanges) {
  const code = char.codePointAt(0);
  
  // Check special character ranges
  // 檢查特殊字符範圍
  for (const [start, end] of specialCharRanges) {
    if (code >= start && code <= end) {
      return true;
    }
  }

  // Check other Chinese and full-width character ranges
  // 檢查其他中文和全角字符範圍
  return (
    (code >= 0x4E00 && code <= 0x9FFF) ||   // CJK Unified Ideographs | CJK統一表意文字
    (code >= 0x3400 && code <= 0x4DBF) ||   // CJK Unified Ideographs Extension A | CJK統一表意文字擴展A
    (code >= 0xF900 && code <= 0xFAFF) ||   // CJK Compatibility Ideographs | CJK兼容表意文字
    (code >= 0x20000 && code <= 0x2A6DF) || // CJK Unified Ideographs Extension B | CJK統一表意文字擴展B
    (code >= 0x2A700 && code <= 0x2B73F) || // CJK Unified Ideographs Extension C | CJK統一表意文字擴展C
    (code >= 0x2B740 && code <= 0x2B81F) || // CJK Unified Ideographs Extension D | CJK統一表意文字擴展D
    (code >= 0x2B820 && code <= 0x2CEAF) || // CJK Unified Ideographs Extension E | CJK統一表意文字擴展E
    (code >= 0x2F800 && code <= 0x2FA1F) || // CJK Compatibility Ideographs Supplement | CJK兼容表意文字補充
    (code >= 0x3100 && code <= 0x312F) ||   // Bopomofo | 注音符號
    (code >= 0x31A0 && code <= 0x31BF) ||   // Bopomofo Extended | 注音符號擴展
    (code >= 0xFF00 && code <= 0xFFEF)      // Fullwidth Forms | 全角字符
  );
}

// Gets the UTF-8 encoded byte length of a character
// 獲取字符的 UTF-8 編碼字節長度
function getCharByteLength(char) {
  return new TextEncoder().encode(char).length;
}
