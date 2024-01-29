document.addEventListener("DOMContentLoaded", function () {
  const AktivitasEvaluasiKey = "AKTIVITASEVALUASIKEY";
  const sudahDiskusi = document.querySelector(".sudahDiskusi");
  const lanjutEvaluasi = document.querySelector(".lanjutEvaluasi");

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
    //evaluasi
    if (localStorage.getItem(AktivitasEvaluasiKey) === "true") {
      const evaluasi = document.querySelector(".evaluasiMenu");
      const evaluasiLink = document.querySelector(".evaluasiMenu a");
      const evaluasiIcon = document.querySelector(".evaluasiMenu i");
      const sudahDiskusi = document.querySelector('.sudahDiskusi');
      const lanjutEvaluasi = document.querySelector('.lanjutEvaluasi');


      evaluasi.classList.remove("opacity-50");
      evaluasi.classList.add("opacity-100");

      evaluasiLink.setAttribute("href", "/src/evaluasi.html");
      evaluasiIcon.classList.add("hidden");
      lanjutEvaluasi.classList.remove("hidden");
      sudahDiskusi.classList.add("hidden")
    }
  }
});
