document.addEventListener("DOMContentLoaded", function () {
  // Lock Aktivitas
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
  const AktivitasDiskusiKey = "AKTIVITASDISKUSIKEY";
  const AktivitasDiskusi = localStorage.getItem(AktivitasDiskusiKey);
  const AktivitasEvaluasiKey = "AKTIVITASEVALUASIKEY";
  const AktivitasEvaluasi = localStorage.getItem(AktivitasEvaluasiKey);

  const heroButton = document.getElementById("heroButton");
  const menuList1 = document.querySelector(".nav-list .aktivitas1Lock");
  const tombolLanjutMateri = document.getElementById("tombolLanjutMateri");
  const tombolSudahMenonton = document.getElementById("tombolSudahMenonton");
  const tombolLogout = document.getElementById("logout");
  const popUp = document.getElementById("popUp");
  const navList = document.querySelector(".nav-list");

  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");

    tombolLogout.addEventListener("click", function () {
      popUp.classList.remove("hidden");
    });

    const yesConfirmation = document.querySelector(".buttonYesConfirmation");
    const noConfirmation = document.querySelector(".buttonNoConfirmation");

    yesConfirmation.addEventListener("click", function () {
      popUp.classList.add("hidden");
      localStorage.clear();
      window.location.href = "/index.html";
    });

    noConfirmation.addEventListener("click", function () {
      popUp.classList.add("hidden");
      location.reload();
    });

    // Greeting Siswa
    const greetingSiswa = document.querySelectorAll(".greetingSiswa");
    greetingSiswa.forEach(function (elemen) {
      elemen.innerText = localStorage.getItem("DATA-NAMA-SISWA-KEY");
      elemen.classList.add("text-amber-400");
    });

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
    if (AktivitasDiskusi === null) {
      localStorage.setItem(AktivitasDiskusiKey, false);
    }
    if (AktivitasEvaluasi === null) {
      localStorage.setItem(AktivitasEvaluasiKey, false);
    }

    tombolSudahMenonton.addEventListener("click", function () {
      if (localStorage.getItem(aktivitas1Key) === "false") {
        localStorage.setItem(aktivitas1Key, true);
        renderAktivitas();
      }
    });
  });

  function renderAktivitas() {
    if (localStorage.getItem(aktivitas1Key) === "true") {
      const aktivitas1IconLock = document.querySelectorAll(".aktivitas1Lock i");
      const aktivitas1Link = document.querySelectorAll(".aktivitas1Lock");
      aktivitas1IconLock.forEach(function (element) {
        element.classList.add("hidden");
      });

      heroButton.classList.remove("opacity-50");
      heroButton.classList.add("opacity-100");

      menuList1.classList.remove("opacity-50");
      menuList1.classList.add("opacity-100");

      aktivitas1Link.forEach(function (elemen) {
        elemen.setAttribute("href", "Argumentasi/Argumentasi.html");
      });

      tombolSudahMenonton.classList.add("hidden");
      tombolLanjutMateri.classList.remove("hidden");
    }

    //  Diskusi
    if (localStorage.getItem(AktivitasDiskusiKey) === "true") {
      const diskusi = document.querySelector(".diskusiMenu");
      const diskusiLink = document.querySelector(".diskusiMenu a");
      const diskusiIcon = document.querySelector(".diskusiMenu i");

      diskusi.classList.remove("opacity-50");
      diskusi.classList.add("opacity-100");

      diskusiLink.setAttribute("href", "/src/diskusi.html");
      diskusiIcon.classList.add("hidden");
    }

    //evaluasi
    if (localStorage.getItem(AktivitasEvaluasiKey) === "true") {
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
