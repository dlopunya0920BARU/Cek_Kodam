function cekKhodam() {
    // Daftar 10 macam khodam
    const khodamList = [
        "Batu", "Air", "Api", "Angin", "Tanah", 
        "Cahaya", "Kegelapan", "Listrik", "Es", "Logam"
    ];

    // Generate angka acak antara 0 dan 9 (indeks array khodamList)
    const randomIndex = Math.floor(Math.random() * khodamList.length);

    // Ambil nilai dari input nama
    const nama = document.getElementById("nama").value;

    // Tampilkan hasil
    const hasilElement = document.getElementById("hasil");
    hasilElement.innerHTML = `Halo ${nama}, Khodam Anda: ${khodamList[randomIndex]}`;
}
