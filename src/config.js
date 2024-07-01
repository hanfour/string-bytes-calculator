export const defaultSpecialCharRanges = [
  [0x00B0, 0x00B0], // ° degree symbol | 度數符號
  [0x0300, 0x036F], // Combining diacritical marks | 組合變音標記
  [0x1AB0, 0x1AFF], // Combining diacritical marks extended | 組合變音標記擴展
  [0x1DC0, 0x1DFF], // Combining diacritical marks supplement | 組合變音標記補充
  [0x2000, 0x206F], // General punctuation | 常用標點
  [0x201C, 0x201D], // " " double quotation marks | 雙引號
  [0x2100, 0x214F], // Letterlike symbols | 字母式符號
  [0x2190, 0x21FF], // Arrows | 箭頭符號
  [0x2200, 0x22FF], // Mathematical operators | 數學運算符
  [0x2300, 0x23FF], // Miscellaneous technical | 其他技術符號
  [0x2460, 0x24FF], // Enclosed alphanumerics | 帶圈或括號的字母數字
  [0x25A0, 0x25FF], // Geometric shapes | 幾何圖形
  [0x25B2, 0x25B2], // ▲ Black up-pointing triangle | 實心上三角形
  [0x2600, 0x26FF], // Miscellaneous symbols (partial overlap with emoji) | 雜項符號 (部分與 emoji 重疊)
  [0x2700, 0x27BF], // Dingbats (partial overlap with emoji) | 裝飾符號 (部分與 emoji 重疊)
  [0x27C0, 0x27EF], // Miscellaneous mathematical symbols-A | 雜項數學符號-A
  [0x27F0, 0x27FF], // Supplemental arrows-A | 補充箭頭-A
  [0x2900, 0x297F], // Supplemental arrows-B | 補充箭頭-B
  [0x2B00, 0x2BFF], // Miscellaneous symbols and arrows | 雜項符號和箭頭，其他箭頭和幾何形狀
  [0x3000, 0x300F], // CJK symbols and punctuation | 包含 　、・、〈、〉、《、》、「、」、『、』
  [0x3010, 0x3017], // CJK brackets and punctuation | 包含 【、】、〖、〗、〔、〕
  [0x30FB, 0x30FB], // ・ Katakana middle dot | 全形中點
  [0x20D0, 0x20FF], // Combining diacritical marks for symbols | 組合變音標記for符號
  [0xFE00, 0xFE0F], // Variation selectors | 變體選擇符
  [0xFE4B, 0xFE4B], // ﹋ Wavy low line | 下波浪線
  [0xE0100, 0xE01EF], // Variation selectors supplement | 變體選擇符補充
];

export const defaultConfig = {
  ascii: 1,
  chinese: 2,
  other: 'utf8',
  specialCharRanges: defaultSpecialCharRanges
};

let currentConfig = { ...defaultConfig };

// Updates the current configuration
// 更新當前配置
export function updateConfig(newConfig) {
  if (newConfig.specialCharRanges) {
    newConfig.specialCharRanges = newConfig.specialCharRanges.filter(range => 
      Array.isArray(range) && range.length === 2 && 
      typeof range[0] === 'number' && typeof range[1] === 'number'
    );
  }
  currentConfig = { ...currentConfig, ...newConfig };
}

// Returns the current configuration
// 返回當前配置
export function getConfig() {
  return { ...currentConfig };
}

// Adds a new special character range
// 添加新的特殊字符範圍
export function addSpecialCharRange(start, end) {
  if (typeof start === 'number' && typeof end === 'number') {
    currentConfig.specialCharRanges.push([start, end]);
  }
}

// Resets special character ranges to default
// 將特殊字符範圍重置為默認值
export function resetSpecialCharRanges() {
  currentConfig.specialCharRanges = [...defaultSpecialCharRanges];
}
