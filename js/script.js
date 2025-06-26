// Selamat datang di Calthics!
alert("Welcome to Calthics");

// Fungsi untuk menampilkan hasil di dalam kontainer target
function tampilkanHasil(idContainer, teksRumus, teksHasil) {
  const container = document.getElementById(idContainer);
  container.innerHTML = `
    <p style="text-align:left">${teksRumus}</p>
    <p style="text-align:left"><strong>${teksHasil}</strong></p>`;
}

// --- Event untuk Hitung Luas Segitiga ---
function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
    return;
  }

  const luas = 0.5 * alas * tinggi;
  const rumus = `Rumus: ½ × ${alas} × ${tinggi}`;
  const hasil = `Luas Segitiga = ${luas} cm²`;

  tampilkanHasil("hasilLuas", rumus, hasil);
}

// --- Event untuk Hitung Keliling Segitiga ---
function hitungKeliling() {
  const sisiA = parseFloat(document.getElementById("sisi-a").value);
  const sisiB = parseFloat(document.getElementById("sisi-b").value);
  const sisiC = parseFloat(document.getElementById("sisi-c").value);

  if (
    isNaN(sisiA) ||
    isNaN(sisiB) ||
    isNaN(sisiC) ||
    sisiA <= 0 ||
    sisiB <= 0 ||
    sisiC <= 0
  ) {
    alert("Masukkan angka yang valid untuk ketiga sisi.");
    return;
  }

  const keliling = sisiA + sisiB + sisiC;
  const rumus = `Rumus: ${sisiA} + ${sisiB} + ${sisiC}`;
  const hasil = `Keliling Segitiga = ${keliling} cm`;

  tampilkanHasil("hasilKeliling", rumus, hasil);
}

// --- Pasang Event Listener setelah DOM siap ---
document.addEventListener("DOMContentLoaded", function () {
  // Pastikan ada wadah untuk hasil
  let divL = document.createElement("div");
  divL.id = "hasilLuas";
  document.getElementById("hitungLuas").parentElement.appendChild(divL);

  let divK = document.createElement("div");
  divK.id = "hasilKeliling";
  document.getElementById("hitungKeliling").parentElement.appendChild(divK);

  // Hubungkan tombol ke fungsi
  document.getElementById("hitungLuas").addEventListener("click", hitungLuas);
  document
    .getElementById("hitungKeliling")
    .addEventListener("click", hitungKeliling);
});
