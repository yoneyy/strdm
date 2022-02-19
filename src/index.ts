/*
 * @Author: Yoney Y (YuTianyuan)
 * @Date: 2022-02-16 22:39:51
 * @Last Modified by: YoneyY (YuTianyuan)
 * @Last Modified time: 2022-02-19 19:53:07
 */

const NUMBERS = '0123456789';
const SYMBOLS = '~!@#$%^*()_+-=[]{}|;:,./<>?';
const STRINGS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export interface StrdmOptions {
  numbers?: string | boolean;
  symbols?: string | boolean;
  strings?: string | boolean;
}

/**
 * Generate random string.
 * @param length generated length `default: 6`
 * @param options generate options `default type: boolean; default value: true`
 * @example
 * ```js
 *  console.log(strdm());          // dZUYsl
 *  console.log(strdm(32));        // ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q
 *  console.log(strdm(32, { numbers: false }));       // iwhfOOHlEFNIbuTGHseCyCYnppCXoraZ
 *  console.log(strdm(32, { strings: false }));       // 56124247096321521961829045800161
 *  console.log(strdm(32, { strings: 'ABCDEFG' }));   // 8EE9B8GFF79CF28AADA9A2G439242211
 *  console.log(strdm(32, { symbols: true }));        // HccU8vM)1,TVHi$=J,::V^wiMxY(tG-j
 *  console.log(strdm(32, { symbols: true, numbers: false, strings: false }));    // ,|+;%]@;,_+#(%.~;[@!{}-<~?@=;;??
 *  console.log(strdm(32, { symbols: ':;', numbers: false, strings: false }));    // :;;;::;;:::::;::::;:;::;:;::;;;:
 *  console.log(strdm(32, true)); // 8AMl$2+8jC25u}>DXjjo9p]n.,vWhzVU
 * ```
 * @returns
 */
export function strdm(length: number = 6, options: StrdmOptions | boolean | string = {}): string {

  let size: number = length;
  let chars: string = '';
  let result: string = '';

  if (typeof options === 'boolean' && options === true) chars += (NUMBERS + STRINGS + SYMBOLS);
  else if (typeof options === 'string') chars = options;
  else {
    let opts: StrdmOptions = <StrdmOptions>options;
    if (opts.numbers !== false) chars += (typeof opts.numbers === 'string') ? opts.numbers : NUMBERS;
    if (opts.strings !== false) chars += (typeof opts.strings === 'string') ? opts.strings : STRINGS;
    if (opts.symbols) chars += (typeof opts.symbols === 'string') ? opts.symbols : SYMBOLS;
  };

  while (size > 0) {
    size--;
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
};