// Membuat array isi klub UCL awal
let klubUCL = ['Barcelona', 'Real Madrid', 'Bayern Munchen']; // 0 , 1 , 2

// Method untuk menambahkan data ke dalam array
function tambahKlub(klub, array) {
  array.push(klub);
}

// Method untuk mengambil data dari dalam array berdasarkan index
function dapatkanKlub(index, array) {
  return array[index];
}

// Method untuk mengganti nilai dari sebuah index pada array
function gantiKlub(index, klub, array) {
  array[index] = klub;
}
console.log('Klub Awal :',klubUCL); // ['Barcelona', 'Real Madrid', 'Bayern Munchen']
console.log('============================================================');
tambahKlub('Liverpool', klubUCL);
console.log('Tambah Klub :',klubUCL); // ['Barcelona', 'Real Madrid', 'Bayern Munchen', 'Liverpool']
console.log('===========================================================================');
let klub = dapatkanKlub([2], klubUCL);
console.log('Klub :',klub); // 'Bayern Munchen'
console.log('=====================');
gantiKlub([1], 'Manchester City', klubUCL);
console.log('Ganti Klub :',klubUCL); // ['Barcelona', 'Manchester City', 'Bayern Munchen', 'Liverpool']
console.log('==============================================================================');