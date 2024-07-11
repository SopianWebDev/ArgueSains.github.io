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
  const lebarPerangkat = window.screen.width;
  const contentList = document.querySelector(".contentList");
  const openIcon = document.querySelector("#listIcon .openIcon");
  const closeIcon = document.querySelector("#listIcon .closeIcon");
  const listIcon = document.getElementById("listIcon");

  // Mengendalikan perilaku nav-list
  const navList = document.querySelector(".nav-list");
  window.addEventListener("load", function () {
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

    navList.classList.remove("initial-style");
  });

  // Mengatur tampilan pada lebar layar 1024
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

  // fungsi untuk memperbarui progres dan ubah tampilan
  function perbaruiProgres() {
    // Argumentasi toulmin
    if (getDataFromStorage().argumentasiToulmin === true) {
      const argumetasiToulminLock = document.querySelectorAll(".argumentasiToulminLock i");
      argumetasiToulminLock.forEach(function (element) {
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
      kelas10.classList.add("opacity-100", "dropdown-button", "putar-icon");
      lockKelas10.classList.add("hidden");
    }

    //Penyebab Pemanasan Global
    if (getDataFromStorage().penyebabPemanasanGlobal === true) {
      const PenyebabPemanasanGlobalList = document.getElementById("PenyebabPemanasanGlobalList");
      const lockIcon = document.querySelector("#PenyebabPemanasanGlobalList i");

      PenyebabPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/PenyebabPemanasanGlobal.html");
      PenyebabPemanasanGlobalList.classList.remove("opacity-50");
      PenyebabPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //  Dampak Pemanasan Global
    if (getDataFromStorage().dampakPemanasanGlobal === true) {
      const DampakPemanasanGlobalList = document.getElementById("DampakPemanasanGlobalList");
      const lockIcon = document.querySelector("#DampakPemanasanGlobalList i");

      DampakPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/DampakPemanasanGlobal.html");
      DampakPemanasanGlobalList.classList.remove("opacity-50");
      DampakPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
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

  // zoom gambar
  const gambar = document.querySelectorAll(".gambar");
  // event zoom
  if (lebarPerangkat < 1024) {
    console.log(lebarPerangkat);
    gambar.forEach((element) => {
      element.addEventListener("click", function () {
        const currentPicturePath = element.getAttribute("src");
        const newElementContainer = document.createElement("div");
        const zoomImage = document.createElement("img");
        zoomImage.setAttribute("src", currentPicturePath);
        newElementContainer.appendChild(zoomImage);
        document.body.appendChild(newElementContainer);

        newElementContainer.classList.add("zoomImageCnt");
        zoomImage.classList.add("zoomImage");

        newElementContainer.addEventListener("click", function () {
          zoomImage.remove();
          newElementContainer.remove();
        });

        newElementContainer.classList.add("scale-0");
        setTimeout(() => {
          newElementContainer.classList.remove("scale-0");
          newElementContainer.classList.add("scale-100");
        }, 1);
      });
    });
  }
});
