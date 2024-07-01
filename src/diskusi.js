document.addEventListener("DOMContentLoaded", function () {
  // inisialisasi local storage jika belum ada
  const progresStorageKey = "Progres_Siswa";

  const dataProgres = {
    argumentasiToulmin: false,
    pemanasanGlobal: false,
    penyebabPemanasanGlobal: false,
    dampakPemanasanGlobal: false,
    solusiPemanasanGlobal: false,
    diskusi: false,
    evaluasi: false,
  };

  if (localStorage.getItem(progresStorageKey) === null) {
    localStorage.setItem(progresStorageKey, JSON.stringify(dataProgres));
  }

  // Elemen
  const evaluasi = document.querySelector(".evaluasiMenu");
  const evaluasiLink = document.querySelector(".evaluasiMenu a");
  const evaluasiIcon = document.querySelector(".evaluasiMenu i");
  const sudahDiskusi = document.querySelector(".sudahDiskusi");
  const navList = document.querySelector(".nav-list");
  const lanjutEvaluasi = document.querySelector(".lanjutEvaluasi");

  // Mengendalikan perilaku navlist
  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
    perbaruiProgres();
  });

  // fungsi untuk mendapatkan data dari storage
  function getDataFromStorage() {
    const data = localStorage.getItem(progresStorageKey);
    return JSON.parse(data);
  }

  sudahDiskusi.addEventListener("click", function () {
    if (getDataFromStorage().evaluasi === false) {
      const updateProgres = getDataFromStorage();
      updateProgres.evaluasi = true;
      localStorage.setItem(progresStorageKey, JSON.stringify(updateProgres));
    }
    perbaruiProgres();
  });

  function perbaruiProgres() {
    //evaluasi
    if (getDataFromStorage().evaluasi === true) {
      evaluasi.classList.remove("opacity-50");
      evaluasi.classList.add("opacity-100");

      evaluasiLink.setAttribute("href", "/src/evaluasi.html");
      evaluasiIcon.classList.add("hidden");
      lanjutEvaluasi.classList.remove("hidden");
      sudahDiskusi.classList.add("hidden");
    }
  }
});
