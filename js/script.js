// Pada bagian ini berisi fungsi menghitung luas dan fungs reset hasil pada luas segitiga
function hitungLuas() {
    // Ambil nilai tinggi dan alas dari input
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let alas = parseFloat(document.getElementById("alas").value);

    // Validasi input
    if (isNaN(tinggi) || isNaN(alas) || tinggi <= 0 || alas <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'Mohon isi semua kolom formulir.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Rumus Hitung luas segitiga
    let luas = 0.5 * tinggi * alas;

    // Tampilkan hasil
    document.getElementById("hasilLuas").innerHTML = "Luas dari Segitiga adalah: " + luas.toFixed();
}

function resetHasilLuas() {
    // Fungsi reset disini
    document.getElementById("hasilLuas").innerHTML = "";
    Swal.fire({
        title: 'Berhasil mereset hasil',
        text: 'Berhasil Mereset.',
        icon: 'success',
        confirmButtonText: 'Tutup'
    });
}

// Pada bagian ini berisi fungsi menghitung keliling dan fungsi reset hasil pada keliling segitiga

function hitungKeliling(){
    // Mengambil nilai atau value

    let sisi1 = parseFloat(document.getElementById("sisi1").value);
    let sisi2 = parseFloat(document.getElementById("sisi2").value);
    let sisi3 = parseFloat(document.getElementById("sisi3").value);

    // Validasi input 
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'Mohon isi semua kolom formulir.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Rumus Hitung Keliling Segitiga
     let keliling = sisi1 + sisi2 + sisi3;

    //  Menampilkan hasil
    document.getElementById("hasilKeliling").innerHTML = "Keliling Dari Segitiga adalah: " + keliling.toFixed();
}

function resetHasilKeliling(){
    document.getElementById("hasilKeliling").innerHTML = "";
    Swal.fire({
        title: 'Berhasil mereset hasil',
        text: 'Berhasil Mereset.',
        icon: 'success',
        confirmButtonText: 'Tutup'
    });
    
}

// Fungsi Tanggal
document.getElementById("tahun").innerText = new Date().getFullYear();