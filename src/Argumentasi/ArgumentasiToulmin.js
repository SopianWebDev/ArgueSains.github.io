document.addEventListener("DOMContentLoaded", function () {
  // Lock Aktivtas
  const aktivitas1Key = "AKTIVITAS1KEY";
  const localAktivitas1 = localStorage.getItem(aktivitas1Key);
  const aktivitas2Key = "AKTIVITAS2KEY";
  const localAktivitas2 = localStorage.getItem(aktivitas2Key);
  const aktivitas3Key = "AKTIVITAS3KEY";
  const localAktivitas3 = localStorage.getItem(aktivitas3Key);
  const aktivitas4Key = "AKTIVITAS4KEY";
  const localAktivitas4 = localStorage.getItem(aktivitas4Key);
  const aktivitas5Key = "AKTIVITAS5KEY";
  const localAktivitas5 = localStorage.getItem(aktivitas5Key);

  const navList = document.querySelector(".nav-list");

  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");

    // Render Lock Aktivitas
    renderAktivitas();
    if (localAktivitas1 === null) {
      localStorage.setItem(aktivitas1Key, false);
    }

    if (localAktivitas2 === null) {
      localStorage.setItem(aktivitas2Key, false);
    }

    if (localAktivitas3 === null) {
      localStorage.setItem(aktivitas3Key, false);
    }
    if (localAktivitas4 === null) {
      localStorage.setItem(aktivitas4Key, false);
    }
    if (localAktivitas5 === null) {
      localStorage.setItem(aktivitas5Key, false);
    }

    // List Materi
    // Memunculkan materi ketika list-icon di klik
    const listIcon = document.querySelector("#listIcon");
    const openIcon = document.querySelector("#listIcon .openIcon");
    const closeIcon = document.querySelector("#listIcon .closeIcon");
    const contentList = document.querySelector(".contentList");

    listIcon.addEventListener("click", function () {
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      contentList.classList.toggle("active");
    });

    // Mendengarkan klik pada semua tombol dropdown
    const buttons = document.querySelectorAll(".dropdown-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        toggleDropdown(`dropdown${index}`);
      });
    });

    // Fungsi untuk menampilkan/menyembunyikan dropdown yang sesuai
    function toggleDropdown(className) {
      const dropdown = document.querySelector(`.${className}`);
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

  function renderAktivitas() {
    // Aktivitas 1
    if (localStorage.getItem(aktivitas1Key) === "true") {
      const aktivitas1IconLock = document.querySelectorAll(".aktivitas1Lock i");
      aktivitas1IconLock.forEach(function (element) {
        element.classList.add("hidden");
      });

      const menuList1 = document.querySelector(".nav-list .aktivitas1Lock");

      menuList1.classList.remove("opacity-50");
      menuList1.classList.add("opacity-100");

      const aktivitas1Open = document.querySelectorAll(".aktivitas1Lock");
      aktivitas1Open.forEach(function (element) {
        element.setAttribute("href", "/src/Argumentasi/Argumentasi.html");
      });
    }

    // Aktivitas 2
    if (localStorage.getItem(aktivitas2Key) === "true") {
      const kelas10 = document.getElementById("kelas10");
      const lockKelas10 = document.getElementById("lockKelas10");
      kelas10.classList.remove("opacity-50");
      kelas10.classList.add("opacity-100", "dropdown-button", "putar-icon");
      lockKelas10.classList.add("hidden");
    }

    // Aktivitas 3
    if (localStorage.getItem(aktivitas3Key) === "true") {
      const PenyebabPemanasanGlobalList = document.getElementById("PenyebabPemanasanGlobalList");
      const lockIcon = document.querySelector("#PenyebabPemanasanGlobalList i");

      PenyebabPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/PenyebabPemanasanGlobal.html");
      PenyebabPemanasanGlobalList.classList.remove("opacity-50");
      PenyebabPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //  Aktivitas 4
    if (localStorage.getItem(aktivitas4Key) === "true") {
      const DampakPemanasanGlobalList = document.getElementById("DampakPemanasanGlobalList");
      const lockIcon = document.querySelector("#DampakPemanasanGlobalList i");

      DampakPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/DampakPemanasanGlobal.html");
      DampakPemanasanGlobalList.classList.remove("opacity-50");
      DampakPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");
    }

    //  Aktivitas 5
    if (localStorage.getItem(aktivitas5Key) === "true") {
      const SolusiPemanasanGlobalList = document.getElementById("SolusiPemanasanGlobalList");
      const lockIcon = document.querySelector("#SolusiPemanasanGlobalList i");

      SolusiPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/SolusiPemanasanGlobal.html");
      SolusiPemanasanGlobalList.classList.remove("opacity-50");
      SolusiPemanasanGlobalList.classList.add("opacity-100");
      lockIcon.classList.add("hidden");

      const diskusi = document.querySelector(".diskusiMenu");
      const diskusiLink = document.querySelector(".diskusiMenu a");
      const diskusiIcon = document.querySelector(".diskusiMenu i");

      diskusi.classList.remove("opacity-50");
      diskusi.classList.add("opacity-100");

      diskusiLink.setAttribute("href", "/src/diskusi.html");
      diskusiIcon.classList.add("hidden");
    }
  }

  // zoom gambar
  const gambar = document.querySelectorAll(".gambar");
  // event zoom
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
});
