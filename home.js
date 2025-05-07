// home.js
console.log("Home page loaded");

document.addEventListener("DOMContentLoaded", () => {
  const kategoriItems = document.querySelectorAll(".kategori-item");

  kategoriItems.forEach(item => {
    item.addEventListener("click", () => {
      alert(`Kamu memilih kategori: ${item.textContent}`);
    });
  });

  const buttons = document.querySelectorAll(".produk-card button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Pindah kehalaman pembayaran.");
    });
  });
});
if (cardNumber && expDate && cvv) {
  alert("Pembayaran berhasil! Terima kasih telah membeli layanan kami.");
  window.location.href = "bundle.html";
  window.location.href = "hosting.html";
  window.location.href = "Live Stream.html";
} else {
  alert("Mohon lengkapi semua data pembayaran.");
}