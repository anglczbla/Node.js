const fs = require('fs');
const path = require('path');

// Buat readable stream, baca input.txt per 15 karakter
const readableStream = fs.createReadStream(
  path.resolve(__dirname, 'input.txt'),
  {
    highWaterMark: 15, // baca per 15 karakter
    encoding: 'utf-8',
  }
);

// Buat writable stream ke output.txt
const writableStream = fs.createWriteStream(
  path.resolve(__dirname, 'output.txt')
);

// Saat menerima data, tulis ke output.txt dan tambahkan newline
readableStream.on('data', (chunk) => {
  writableStream.write(`${chunk}\n`);
});
