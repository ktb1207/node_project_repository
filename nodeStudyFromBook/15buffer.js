import { Buffer } from 'buffer';

const buf1 = Buffer.allocUnsafe(26)

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值。
  buf1[i] = i + 97;
}

console.log(buf1.toString())

