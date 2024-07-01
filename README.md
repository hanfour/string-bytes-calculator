# String Bytes Calculator 字符串字節計算器

A flexible string byte length calculator with customizable configurations for different character types.
一個靈活的字符串字節長度計算器，可為不同字符類型自定義配置。

## Installation 安裝

To install the package, run:

```pnpm add string-bytes-calculator```

## Usage 使用方法

Here's a basic example of how to use the package:

```
import { 
  getStringBytes, 
  updateConfig, 
  getConfig, 
  addSpecialCharRange, 
  resetSpecialCharRanges,
  defaultSpecialCharRanges
} from 'string-bytes-calculator';
```

Use with default configuration

```
console.log(getStringBytes("Hello, 世界!"));
```

Update configuration

```
updateConfig({ 
  ascii: 2, 
  chinese: 3, 
  other: 4,
  specialCharRanges: [[0x3000, 0x303F]] // Only consider CJK symbols and punctuation
});
```

Use with updated configuration

```
console.log(getStringBytes("Hello, 世界!"));
```

Add a new special character range

```
addSpecialCharRange(0x2000, 0x206F);
```

Reset special character ranges to default

```
resetSpecialCharRanges();
```

Get current configuration

```
console.log(getConfig());
```

View default special character ranges

```
console.log(defaultSpecialCharRanges);
```

## API

### getStringBytes(text: string): number

Calculates the byte length of the input string based on the current configuration.

### updateConfig(newConfig: object): void

Updates the current configuration. The newConfig object can include:
- ascii: Number of bytes for ASCII characters (ASCII 字符的字節數)
- chinese: Number of bytes for Chinese characters (中文字符的字節數)
- other: Number of bytes for other characters, or 'utf8' to use UTF-8 encoding (其他字符的字節數，或使用 'utf8' 進行 UTF-8 編碼)
- specialCharRanges: Array of Unicode ranges to be treated as Chinese characters (被視為中文字符的 Unicode 範圍數組)

### getConfig(): object

Returns the current configuration.

### addSpecialCharRange(start: number, end: number): void

Adds a new Unicode range to be treated as Chinese characters.

### resetSpecialCharRanges(): void

Resets the special character ranges to the default set.

### defaultSpecialCharRanges: Array

The default set of special character ranges.

## License 許可證

MIT
