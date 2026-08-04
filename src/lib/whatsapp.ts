// Konfigurasi tautan dan pesan otomatis WhatsApp PowerNET Enterprise
// Sentralisasi ini memudahkan revisi teks dan nomor tujuan di masa depan tanpa mengubah komponen UI individual.

export const WHATSAPP_NUMBER = "6281298192099";

export const getWhatsAppUrl = () => {
  const message = `Saya tertarik untuk berdiskusi lebih lanjut mengenai solusi dan layanan IT/Drone yang ditawarkan oleh PowerNET. Berikut data singkat saya:

Nama Lengkap : 
Email : 
Sektor Bisnis : 
Kebutuhan Solusi : 

Mohon kesediaannya untuk menghubungi saya kembali. Terima kasih!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
