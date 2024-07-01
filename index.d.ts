declare module 'string-bytes-calculator' {
  export function getStringBytes(text: string): number;
  
  export function updateConfig(config: {
    ascii?: number;
    chinese?: number;
    other?: number | 'utf8';
    specialCharRanges?: [number, number][];
  }): void;
  
  export function getConfig(): {
    ascii: number;
    chinese: number;
    other: number | 'utf8';
    specialCharRanges: [number, number][];
  };
  
  export function addSpecialCharRange(start: number, end: number): void;
  
  export function resetSpecialCharRanges(): void;
  
  export const defaultSpecialCharRanges: [number, number][];
}
