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

  // elemen
  const lanjutAktivitasDiskusi = document.getElementById("lanjutAktvitasDiskusi");
  const notifTidakLulus = document.getElementById("notifTidakLulus");
  const textPopUp = document.getElementById("textPopUp");
  const popUpLoading = document.getElementById("popUpLoading");
  const popUp = document.getElementById("popUp");
  const navList = document.querySelector(".nav-list");
  const lebarPerangkat = window.screen.width;

  const contentList = document.querySelector(".contentList");
  const openIcon = document.querySelector("#listIcon .openIcon");
  const closeIcon = document.querySelector("#listIcon .closeIcon");
  const listIcon = document.getElementById("listIcon");

  // Mengendalikan perilaku navlist
  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
    perbaruiProgres();

    // Mengatur perilaku dropdown list materi
    const dropdownButton = document.querySelectorAll(".dropdown-button");
    dropdownButton.forEach((button) => {
      button.addEventListener("click", () => {
        const namaDropdown = button.getAttribute("dropdown");
        toggleDropdown(`dropdown${namaDropdown}`);
      });
    });

    // Fungsi untuk menampilkan/menyembunyikan dropdown yang sesuai
    function toggleDropdown(dropdownKelas) {
      const dropdown = document.querySelector(`.${dropdownKelas}`);
      if (dropdown) {
        dropdown.classList.toggle("hidden");
      }
    }

    // Putar tanda plus
    const putarIcon = document.querySelectorAll(".putar-icon");
    for (let i = 0; i < putarIcon.length; i++) {
      const elemen = putarIcon[i];
      elemen.addEventListener("click", function () {
        const icon = document.getElementById(`icon${i}`);
        icon.classList.toggle("rotate-[225deg]");
      });
    }
  });

  if (lebarPerangkat >= 1024) {
    contentList.classList.add("active");
  } else {
    listIcon.addEventListener("click", function () {
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      contentList.classList.toggle("active");
    });
  }

  // fungsi untuk mendapatkan data dari storage
  function getDataFromStorage() {
    const data = localStorage.getItem(progresStorageKey);
    return JSON.parse(data);
  }

  // fungsi mengambil biodata dari storage
  function getBio() {
    return JSON.parse(localStorage.getItem("biodata"));
  }

    // cek skor
    function cekSkor() {
      let jumlah = 0;
      for (let i = 0; i < refleksiInput.length; i++) {
        const elemen = refleksiInput[i];
  
        jumlah += parseInt(elemen.value);
      }
      const skor = jumlah / refleksiInput.length;
  
      if (skor >= 3) {
        return true;
      } else {
        return false;
      }
    }

  function perbaruiProgres() {
    // Argumentasi Toulmin
    if (getDataFromStorage().argumentasiToulmin === true) {
      const argumentassiToulminIconLock = document.querySelectorAll(".argumentasiToulminLock i");
      argumentassiToulminIconLock.forEach(function (element) {
        element.classList.add("hidden");
      });

      const menuList1 = document.querySelector(".nav-list .argumentasiToulminLock");

      menuList1.classList.remove("opacity-50");
      menuList1.classList.add("opacity-100");

      const argumentasiToulminOpen = document.querySelectorAll(".argumentasiToulminLock");
      argumentasiToulminOpen.forEach(function (element) {
        element.setAttribute("href", "/src/Argumentasi/Argumentasi.html");
      });
    }

    // Pemanasan Global
    if (getDataFromStorage().pemanasanGlobal === true) {
      const kelas10 = document.getElementById("kelas10");
      const lockKelas10 = document.getElementById("lockKelas10");
      kelas10.classList.remove("opacity-50");
      kelas10.classList.add("opacity-100");
      kelas10.classList.add("dropdown-button");
      kelas10.classList.add("putar-icon");
      lockKelas10.classList.add("hidden");
    }

    // Penyebab Pemanasan Global
    if (getDataFromStorage().penyebabPemanasanGlobal === true) {
      const PenyebabPemanasanGlobalList = document.getElementById("PenyebabPemanasanGlobalList");
      const lockIcon = document.querySelector("#DampakPemanasanGlobalList i");

      PenyebabPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/PenyebabPemanasanGlobal.html");
      PenyebabPemanasanGlobalList.classList.remove("opacity-50");
      PenyebabPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //  Dampak Pemanasan Global
    if (getDataFromStorage().dampakPemanasanGlobal === true) {
      const DampakPemanasanGlobalList = document.getElementById("DampakPemanasanGlobalList");
      const lockIcon = document.querySelector("#PenyebabPemanasanGlobalList i");

      DampakPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/DampakPemanasanGlobal.html");
      DampakPemanasanGlobalList.classList.remove("opacity-50");
      DampakPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //Solusi Pemanasan Global
    if (getDataFromStorage().solusiPemanasanGlobal == true) {
      const SolusiPemanasanGlobalList = document.getElementById("SolusiPemanasanGlobalList");
      const lockIcon = document.querySelector("#SolusiPemanasanGlobalList i");

      SolusiPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/SolusiPemanasanGlobal.html");
      SolusiPemanasanGlobalList.classList.remove("opacity-50");
      SolusiPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //  Diskusi
    if (getDataFromStorage().diskusi === true) {
      lanjutAktivitasDiskusi.classList.remove("hidden");

      const diskusi = document.querySelector(".diskusiMenu");
      const diskusiLink = document.querySelector(".diskusiMenu a");
      const diskusiIcon = document.querySelector(".diskusiMenu i");

      diskusi.classList.remove("opacity-50");
      diskusi.classList.add("opacity-100");

      diskusiLink.setAttribute("href", "/src/diskusi.html");
      diskusiIcon.classList.add("hidden");

      const nextButtonLink = document.getElementById("nextButton");
      const nextButton = document.querySelector("#nextButton i");

      nextButton.classList.remove("fa-lock", "opacity-50");
      nextButton.classList.add("fa-circle-chevron-right");
      nextButtonLink.setAttribute("href", "/src/diskusi.html");
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

  // ...............Refleksi..................//

  // Kirim Refleksi dan Tampilkan Pop-Up
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popUpLoading.classList.remove("hidden");
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(function () {
      textPopUp.innerText = "Jawaban Anda Terkirim";
      popUpLoading.classList.add("hidden");

      if (getDataFromStorage().diskusi === false) {
        if (cekSkor() === true) {
          const updateProgres = getDataFromStorage();
          updateProgres.diskusi = true;
          localStorage.setItem(progresStorageKey, JSON.stringify(updateProgres));

          notifTidakLulus.classList.add("hidden");
          popUp.classList.remove("hidden");
        } else {
          notifTidakLulus.classList.remove("hidden");
          popUp.classList.add("hidden");
        }
      } else {
        textPopUp.innerText = "Kamus sudah lulus bab ini, silahkan lanjut ke bab berikutnya!";
        popUp.classList.remove("hidden");
      }

      setTimeout(function () {
        notifTidakLulus.classList.add("hidden");
        popUp.classList.add("hidden");
        location.reload();
      }, 4000);
    });
  });

  document.getElementById("NamaSiswa").value = getBio().nama;
  document.getElementById("Kelas").value = getBio().kelas;

  // Atur icon refleksi
  const refleksiIcon = document.querySelectorAll(".refleksiIcon");
  const refleksiInput = document.querySelectorAll(".refleksiInput");
  const refleksiText = document.querySelectorAll(".textRefleksi");

  for (let i = 0; i < refleksiInput.length; i++) {
    const elemen = refleksiInput[i];

    elemen.addEventListener("input", function () {
      const nilaiInput = elemen.value;
      const IconElement = refleksiIcon[i];
      const textElement = refleksiText[i];

      Array.from(IconElement.classList).forEach((className) => {
        if (className.startsWith("text-") || className.startsWith("fa-face-")) {
          IconElement.classList.remove(className);
        }
      });

      if (nilaiInput === "2") {
        IconElement.classList.add("text-orange-500");
        IconElement.classList.add("fa-face-frown");
        textElement.innerText = "Kurang Mengerti";
      } else if (nilaiInput === "3") {
        IconElement.classList.add("text-yellow-500");
        IconElement.classList.add("fa-face-meh");
        textElement.innerText = "Cukup Mengerti";
      } else if (nilaiInput === "4") {
        IconElement.classList.add("text-green-500");
        IconElement.classList.add("fa-face-smile-beam");
        textElement.innerText = "Mengerti";
      } else if (nilaiInput === "5") {
        IconElement.classList.add("text-cyan-500");
        IconElement.classList.add("fa-face-laugh-squint");
        textElement.innerText = "Sangat Mengerti";
      } else {
        IconElement.classList.add("text-red-500");
        IconElement.classList.add("fa-face-dizzy");
        textElement.innerText = "Tidak Mengerti";
      }
    });
  }

});
