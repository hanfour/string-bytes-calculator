# String Bytes Calculator 字符串字節計算器

A flexible string byte length calculator with customizable configurations for different character types.
一個靈活的字符串字節長度計算器，可為不同字符類型自定義配置。

## Installation 安裝

To install the package, run:
安裝包，請運行：

pnpm add string-bytes-calculator

## Usage 使用方法

Here's a basic example of how to use the package:
以下是如何使用該包的基本示例：

import { 
  getStringBytes, 
  updateConfig, 
  getConfig, 
  addSpecialCharRange, 
  resetSpecialCharRanges,
  defaultSpecialCharRanges
} from 'string-bytes-calculator';

// Use with default configuration
// 使用默認配置
console.log(getStringBytes("Hello, 世界!")); 

// Update configuration
// 更新配置
updateConfig({ 
  ascii: 2, 
  chinese: 3, 
  other: 4,
  specialCharRanges: [[0x3000, 0x303F]] // Only consider CJK symbols and punctuation
                                        // 只考慮 CJK 符號和標點
});

// Use with updated configuration
// 使用更新後的配置
console.log(getStringBytes("Hello, 世界!")); 

// Add a new special character range
// 添加新的特殊字符範圍
addSpecialCharRange(0x2000, 0x206F); 

// Reset special character ranges to default
// 將特殊字符範圍重置為默認值
resetSpecialCharRanges();

// Get current configuration
// 獲取當前配置
console.log(getConfig());

// View default special character ranges
// 查看默認特殊字符範圍
console.log(defaultSpecialCharRanges);

## API

### getStringBytes(text: string): number

Calculates the byte length of the input string based on the current configuration.
根據當前配置計算輸入字符串的字節長度。

### updateConfig(newConfig: object): void

Updates the current configuration. The newConfig object can include:
更新當前配置。newConfig 對象可以包括：
- ascii: Number of bytes for ASCII characters (ASCII 字符的字節數)
- chinese: Number of bytes for Chinese characters (中文字符的字節數)
- other: Number of bytes for other characters, or 'utf8' to use UTF-8 encoding (其他字符的字節數，或使用 'utf8' 進行 UTF-8 編碼)
- specialCharRanges: Array of Unicode ranges to be treated as Chinese characters (被視為中文字符的 Unicode 範圍數組)

### getConfig(): object

Returns the current configuration.
返回當前配置。

### addSpecialCharRange(start: number, end: number): void

Adds a new Unicode range to be treated as Chinese characters.
添加新的 Unicode 範圍，將其視為中文字符。

### resetSpecialCharRanges(): void

Resets the special character ranges to the default set.
將特殊字符範圍重置為默認設置。

### defaultSpecialCharRanges: Array

The default set of special character ranges.
默認的特殊字符範圍集合。

## License 許可證

MIT