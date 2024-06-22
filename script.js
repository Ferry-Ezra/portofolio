// Menjalankan kode ketika DOM telah selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Memilih elemen dengan kelas ".dropdown-toggle" untuk dropdown
  var dropdown = document.querySelector(".dropdown-toggle");
  // Memilih elemen dengan kelas ".dropdown-menu" untuk dropdown menu
  var dropdownMenu = document.querySelector(".dropdown-menu");

  // Menambahkan event listener untuk menampilkan atau menyembunyikan dropdown menu saat elemen dropdown di-klik
  dropdown.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show"); // Toggle class "show" pada dropdown menu
  });

  // Menutup dropdown menu saat mengklik di luar dropdown
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-toggle")) { // Memeriksa apakah target klik bukan elemen dropdown
      if (dropdownMenu.classList.contains("show")) { // Memeriksa apakah dropdown menu sedang ditampilkan
        dropdownMenu.classList.remove("show"); // Menghapus class "show" dari dropdown menu
      }
    }
  });
});

// Fungsi untuk menggulir halaman ke bagian proyek dengan efek smooth scrolling
function scrollToProjects() {
  document.querySelector("#project").scrollIntoView({ behavior: "smooth" });
}
