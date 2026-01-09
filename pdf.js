function generatePDF() {
  const element = document.getElementById("content");

  const opt = {
    margin: 0.5,
    filename: "whatsapp-business-api-guide.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(element).save();
}
