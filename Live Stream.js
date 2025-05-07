// checkout.js
function proceedPayment() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expDate = document.getElementById("expDate").value;
    const cvv = document.getElementById("cvv").value;
  
    if (cardNumber && expDate && cvv) {
      alert("Pembayaran berhasil! Terima kasih telah membeli layanan kami.");
      window.location.href = "index.html";
    } else {
      alert("Mohon lengkapi semua data pembayaran.");
    }
  }