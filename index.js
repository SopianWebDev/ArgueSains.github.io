const StorageKey = "biodata";

// Mengecek apakah browser didukung oleh local storage atau tidak
if (typeof Storage === "undefined") {
  alert("browser kamu tidak mendukung beberapa fitur, update browser ke versi terbaru!");
}

// Fungsi untuk memuat data dari localStorage
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(StorageKey);
  return JSON.parse(serializedData);
}

// inisialisasi elemen
const buttonLoginSubmit = document.getElementById("loginButton");
const popUp = document.getElementById("popUp");
const popUpLoading = document.getElementById("popUpLoading");
const textPopUp = document.getElementById("textPopUp");

// fungsi untuk mengambil data dari google sheet
let updateToken = null;
const request = async () => {
  popUpLoading.classList.remove("hidden");
  const data = await axios("https://script.google.com/macros/s/AKfycbxpemRDCqvh1nnMdIKkh2RDFnsnlSbWkjn3T0p42ijNBsYLIWJbCEq1SqpqL25-_fQX/exec");
  popUpLoading.classList.add("hidden");
  updateToken = data.data.data[0].Token;
  console.log(updateToken);
};

window.addEventListener("load", function () {
  request();

  // jika biodata sudah di isi, langsung arahkan ke beranda ketika login kembali
  if (localStorage.getItem(StorageKey) !== null) {
    popUpLoading.classList.remove("hidden");
    setTimeout(() => {
      popUpLoading.classList.add("hidden");
      window.location.href = "/src/beranda.html";
    }, 2000);
  }

  // Event untuk mengirim form
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function async(e) {
    const namaSiswa = document.getElementById("namaSiswa").value;
    const kelasSiswa = document.getElementById("Kelas").value;
    const token = document.getElementById("token").value;

    e.preventDefault();
    if (namaSiswa === "" || kelasSiswa === "" || token !== updateToken.toString()) {
      textPopUp.innerText = "Isi Nama, Kelas dan Masukan Token Yang Sesuai";
      popUp.classList.remove("hidden");
      setTimeout(() => {
        popUp.classList.add("hidden");
      }, 3000);
    } else {
      popUpLoading.classList.remove("hidden");
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(function () {
        const biodata = {
          nama: namaSiswa,
          kelas: kelasSiswa,
        };
        localStorage.setItem(StorageKey, JSON.stringify(biodata));
        popUpLoading.classList.remove("hidden");
        window.location.href = "/src/beranda.html";
      });
    }
  });
});
