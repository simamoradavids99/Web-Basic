console.log ("Terimakasih sudah berkunjung");
alert("Selamat datang di website Go Health :)");


// hilangkan komentar untuk melihat hasil
const artikel = document.getElementById("artikel-kesehatan");
//artikel.innerHTML = 'Artikel Kesehatan Terbaru'; //mengganti isi elemen

//artikel.style.color= 'lightblue';// mengganti font color pada class artikel-kesehatan.


// manipulasi DOM dilakukan pada console
const dokter = document.getElementsByTagName('h2')[1];
dokter.classList.add('doctor');  //menambah kelas baru pada tag h2 indeks ke 1
dokter.classList // mengecek kelas dan value pada tag h2 indeks ke 1

dokter.classList.remove('doctor'); //menghapus kelas doctor pada tag h2 indeks ke 1 


//menggunakan toggle 
dokter.classList.toggle('doctor'); //melakukan pengecekan kelas doctor pada h2 indeks ke 1 dan akan mengembalikan nilai false
//karena sebelumnya sudah di hapus 

dokter.classList.toggle('doctor'); //mengembalikan nilai true, karena secara otomatis menambah kelas doctor yang baru.

//menggunakan event sederhana
const text = document.querySelector(".update-covid");
const tombol = document.querySelector(".selengkapnya");

tombol.addEventListener('click', function() {//menambah event klik ketika tombol di klik
    text.classList.toggle("change-color");//memanggil fungsi ketika event di klik.
});

//menambahkan elemen baru 
const newParagraph = document.createElement('p');
const newTeks = document.createTextNode('Teks ini tidak ada di berkas HTML Berhasil memanipulasi DOM');

newParagraph.appendChild(newTeks);
//hilangkan komentar untuk melihat hasil

const sectionCovid = document.getElementById('dokter');
//sectionCovid.appendChild(newParagraph);


//menambahkan paragraph baru berisi teks sebelum tag 
const newP = document.createElement('p');// membuat elemen yang ingin ditambah
const newT = document.createTextNode('200mg');//membuat isi elemen

//hilangkan komentar untuk melihat hasil
//newP.appendChild(newT);//memasukkan isi elemen
const div = document.querySelector('div.keterangan-obat');//memanggil div dengan kelas .keterangan-obat
const p = div.querySelector('p:nth-child(2)');// mencari anak kedua dari kelas parent

div.insertBefore(newP,p);//memasukkan elemen baru.










