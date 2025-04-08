// Import module bawaan
const fs = require('fs');
const path = require('path');

// Menentukan path absolut ke notes.txt
const filePath = path.resolve(__dirname, 'notes.txt');

// Baca isi file secara asynchronous
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Gagal membaca file:', err);
    return;
  }

  // Tampilkan isi file ke console
  console.log(data);
});
