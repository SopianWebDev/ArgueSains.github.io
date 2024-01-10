document.addEventListener("DOMContentLoaded", function () {
  const AktivitasEvaluasiKey = "AKTIVITASEVALUASIKEY";
  const AktivitasEvaluasi = localStorage.getItem(AktivitasEvaluasiKey);
  const sudahDiskusi = document.querySelector(".sudahDiskusi");
  const lanjutEvaluasi = document.querySelector(".lanjutEvaluasi");
  const menuDiskusi = document.querySelector(".diskusiMenu");
  const menuDiskusiLockIcon = document.querySelector(".diskusiMenu i");

  const navList = document.querySelector(".nav-list");

  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
    renderEvaluasi();
    if (localStorage.getItem(AktivitasEvaluasiKey) === null) {
      localStorage.setItem(AktivitasEvaluasiKey, false);
    }

    sudahDiskusi.addEventListener("click", function () {
      if (localStorage.getItem(AktivitasEvaluasiKey) === "false") {
        localStorage.setItem(AktivitasEvaluasiKey, true);
      }
      renderEvaluasi();
    });
  });

  function renderEvaluasi() {
    if (localStorage.getItem(AktivitasEvaluasiKey) === "true") {
      sudahDiskusi.classList.add("hidden");
      lanjutEvaluasi.classList.remove("hidden");
      menuDiskusi.classList.remove("opacity-50");
      menuDiskusi.classList.add("opacity-100");
      menuDiskusiLockIcon.classList.add("hidden");
      menuDiskusi.setAttribute('href', '/src/Evaluasi.html')
    }
  }
});
