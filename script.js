const registrationForm = document.getElementById('registrationForm');
const whatsappNumber = '6287747924570';

registrationForm.addEventListener('submit', function(event){
event.preventDefault();

const nama = document.getElementById('nama').value.trim();
const tanggalLahir = document.getElementById('tanggalLahir').value;
const jenisKelamin = document.getElementById('jenisKelamin').value;
const alamat = document.getElementById('alamat').value.trim();
const orangTua = document.getElementById('orangTua').value.trim();
const telepon = document.getElementById('telepon').value.trim();
const email = document.getElementById('email').value.trim();
const kebutuhanKhusus = document.getElementById('kebutuhanKhusus').value.trim() || '-';

const message = `Halo, saya ingin mendaftar di Sekolah Inklusi Indonesia.

Biodata Pendaftar:
Nama Lengkap: ${nama}
Tanggal Lahir: ${tanggalLahir}
Jenis Kelamin: ${jenisKelamin}
Alamat: ${alamat}
Nama Orang Tua / Wali: ${orangTua}
Nomor Telepon: ${telepon}
Email: ${email}
Kebutuhan Khusus: ${kebutuhanKhusus}`;

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
});
