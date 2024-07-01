document.addEventListener("DOMContentLoaded", function () {
  const progresStorageKey = "Progres_Siswa";

  // daftar elemen
  const heroButton = document.getElementById("heroButton");
  const menuList1 = document.querySelector(".nav-list .argumentasiToulminLock");
  const tombolLanjutMateri = document.getElementById("tombolLanjutMateri");
  const tombolSudahMenonton = document.getElementById("tombolSudahMenonton");
  const tombolLogout = document.getElementById("logout");
  const popUp = document.getElementById("popUp");
  const navList = document.querySelector(".nav-list");

  const dataProgres = {
    argumentasiToulmin: false,
    pemanasanGlobal: false,
    penyebabPemanasanGlobal: false,
    dampakPemanasanGlobal: false,
    diskusi: false,
    evaluasi: false,
  };

  // inisialisasi local storage jika belum ada
  if (localStorage.getItem(progresStorageKey) === null) {
    localStorage.setItem(progresStorageKey, JSON.stringify(dataProgres));
  }

  // Animasi pada layar lebih dari 1024px
  function setAosAttribute() {
    const elements = document.querySelectorAll(".hero-fitur [data-aos]");
    elements.forEach(function (element) {
      element.setAttribute("data-aos", "fade-up");
    });
  }

  function checkScreenWidth() {
    let screenWidth = window.innerWidth;
    let thresholdWidth = 1024;

    if (screenWidth >= thresholdWidth) {
      setAosAttribute();
    }
  }
  checkScreenWidth();

  // mengendalikan perilaku navlist
  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
  });

  // memperbarui progres ketika pertama kali dibuka
  perbaruiProgres();

  // logout
  tombolLogout.addEventListener("click", function () {
    popUp.classList.remove("hidden");
  });
  const yesConfirmation = document.querySelector(".buttonYesConfirmation");
  const noConfirmation = document.querySelector(".buttonNoConfirmation");

  yesConfirmation.addEventListener("click", function () {
    popUp.classList.add("hidden");
    localStorage.removeItem("biodata");
    localStorage.removeItem("Progres_Siswa");
    window.location.href = "../index.html";
  });

  noConfirmation.addEventListener("click", function () {
    popUp.classList.add("hidden");
    location.reload();
  });

  // Greeting user
  try {
    const greetingSiswa = document.querySelectorAll(".greetingSiswa");
    greetingSiswa.forEach(function (elemen) {
      elemen.innerText = JSON.parse(localStorage.getItem("biodata")).nama;
      elemen.classList.add("text-amber-400");
    });
  } catch (err) {
    console.log(err);
  }

  // Apakah user sudah menonton tutorial?
  tombolSudahMenonton.addEventListener("click", function () {
    if (getDataFromStorage().argumentasiToulmin === false) {
      const data = getDataFromStorage();
      data.argumentasiToulmin = true;
      console.log(data);
      localStorage.setItem(progresStorageKey, JSON.stringify(data));
    }
    location.reload();
    setTimeout(function () {
      perbaruiProgres();
    }, 1500);
  });

  // fungsi untuk mendapatkan data dari storage
  function getDataFromStorage() {
    const data = localStorage.getItem(progresStorageKey);
    return JSON.parse(data);
  }

  // fungsi untuk memperbarui progres dan tampilan
  function perbaruiProgres() {
    // argumentasi toulmin
    if (getDataFromStorage().argumentasiToulmin === true) {
      const argumentasiToulminLock = document.querySelectorAll(".argumentasiToulminLock i");
      const argumentasiToilminLink = document.querySelectorAll(".argumentasiToulminLock");
      argumentasiToulminLock.forEach(function (element) {
        element.classList.add("hidden");
      });

      heroButton.classList.remove("opacity-50");
      heroButton.classList.add("opacity-100");

      menuList1.classList.remove("opacity-50");
      menuList1.classList.add("opacity-100");

      argumentasiToilminLink.forEach(function (elemen) {
        elemen.setAttribute("href", "Argumentasi/Argumentasi.html");
      });

      tombolSudahMenonton.classList.add("hidden");
      tombolLanjutMateri.classList.remove("hidden");
    }

    //  Diskusi
    if (getDataFromStorage().diskusi === true) {
      const diskusi = document.querySelector(".diskusiMenu");
      const diskusiLink = document.querySelector(".diskusiMenu a");
      const diskusiIcon = document.querySelector(".diskusiMenu i");

      diskusi.classList.remove("opacity-50");
      diskusi.classList.add("opacity-100");

      diskusiLink.setAttribute("href", "/src/diskusi.html");
      diskusiIcon.classList.add("hidden");
    }

    //evaluasi
    if (getDataFromStorage().evaluasi === true) {
      const evaluasi = document.querySelector(".evaluasiMenu");
      const evaluasiLink = document.querySelector(".evaluasiMenu a");
      const evaluasiIcon = document.querySelector(".evaluasiMenu i");

      evaluasi.classList.remove("opacity-50");
      evaluasi.classList.add("opacity-100");

      evaluasiLink.setAttribute("href", "/src/evaluasi.html");
      evaluasiIcon.classList.add("hidden");
    }
  }
});
