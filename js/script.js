document.addEventListener("DOMContentLoaded", () => {
  function tampilkanRumusDanHasil(containerId, rumusHTML, hasilText) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <div class="rumus-container">
        <p>Rumus:</p>
        ${rumusHTML}
      </div>
      <p class="hasil"><strong>${hasilText}</strong></p>
    `;
  }

  // Hitung Luas
  document.getElementById("hitungLuas").addEventListener("click", () => {
    const a = parseFloat(document.getElementById("alas").value);
    const t = parseFloat(document.getElementById("tinggi").value);
    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0)
      return alert("Masukkan angka valid untuk alas dan tinggi.");

    const luas = 0.5 * a * t;
    // Rumus dengan MathML:
    const rumusML = `
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mn>½</mn><mo>×</mo><mi>a</mi><mo>×</mo><mi>t</mi>
        </mrow>
      </math>`;
    tampilkanRumusDanHasil(
      "hasilLuas",
      rumusML,
      `L = ½ × ${a} × ${t} = ${luas} cm²`
    );
  });

  // Hitung Keliling
  document.getElementById("hitungKeliling").addEventListener("click", () => {
    const a = parseFloat(document.getElementById("sisi-a").value);
    const b = parseFloat(document.getElementById("sisi-b").value);
    const c = parseFloat(document.getElementById("sisi-c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0)
      return alert("Masukkan angka valid untuk ketiga sisi.");

    const kel = a + b + c;
    const rumusML = `
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mi>c</mi>
        </mrow>
      </math>`;
    tampilkanRumusDanHasil(
      "hasilKeliling",
      rumusML,
      `K = ${a} + ${b} + ${c} = ${kel} cm`
    );
  });
});
