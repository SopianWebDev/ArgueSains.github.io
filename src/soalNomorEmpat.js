document.addEventListener("DOMContentLoaded", function () {
  const progresStorageKey = "Progres_Siswa";
  const soalKey = "Nomor_Soal";

  const soalEvaluaasi = {
    soalNomorSatu: false,
    soalNomorDua: false,
    soalNomorTiga: false,
    soalNomorEmpat: false,
    soalNomorLima: false,
  };

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
  if (localStorage.getItem(soalKey) === null) {
    localStorage.setItem(soalKey, JSON.stringify(soalEvaluaasi));
  }

  // Mengendalikan perilaku navlist
  const navList = document.querySelector(".nav-list");
  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
  });

  // ...........Kuis Argumentasi.............//

  // fungsi mengambil biodata dari storage
  function getBio() {
    return JSON.parse(localStorage.getItem("biodata"));
  }

  const kuisForm = document.getElementById("kuisForm");
  document.getElementById("NamaKuis").value = getBio().nama;
  document.getElementById("KelasKuis").value = getBio().kelas;

  kuisForm.addEventListener("submit", function (e) {
    e.preventDefault();

    popUpLoading.classList.remove("hidden");
    const data = new FormData(kuisForm);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      textPopUp.innerText = "Jawaban Anda Terkirim";
      popUpLoading.classList.add("hidden");
      popUp.classList.remove("hidden");

      setTimeout(function () {
        popUp.classList.add("hidden");
        location.reload();
      }, 2000);
    });
  });

  // .............navlist start...................//
  const contentList = document.querySelector(".contentList");
  const openIcon = document.querySelector("#listIcon .openIcon");
  const closeIcon = document.querySelector("#listIcon .closeIcon");
  const listIcon = document.getElementById("listIcon");
  const lebarPerangkat = window.screen.width;

  // mengatur perilaku navlist
  window.addEventListener("load", function () {
    navList.classList.remove("initial-style");
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

  // Ubah tampilan jika sudah mengisi soal
  const soalNomor1 = document.getElementById("soalNomorSatu");
  const soalNomor2 = document.getElementById("soalNomorDua");
  const soalNomor3 = document.getElementById("soalNomorTiga");
  const soalNomor4 = document.getElementById("soalNomorEmpat");
  const soalNomor5 = document.getElementById("soalNomorLima");

  function getDataFromStorage() {
    const dataSoal = localStorage.getItem(soalKey);
    return JSON.parse(dataSoal);
  }

  function renderSoal() {
    if (getDataFromStorage().soalNomorSatu === true) {
      soalNomor1.classList.add("completed");
    }
    if (getDataFromStorage().soalNomorDua === true) {
      soalNomor2.classList.add("completed");
    }
    if (getDataFromStorage().soalNomorTiga === true) {
      soalNomor3.classList.add("completed");
    }
    if (getDataFromStorage().soalNomorEmpat === true) {
      soalNomor4.classList.add("completed");
    }
    if (getDataFromStorage().soalNomorLima === true) {
      soalNomor5.classList.add("completed");
    }
  }

  renderSoal();

  window.addEventListener("load", function () {
    renderSoal();
  });

  const buttonKirim = document.getElementById("tombolSoalNomor1");

  buttonKirim.addEventListener("click", function () {
    const progeresSekarang = getDataFromStorage();
    progeresSekarang.soalNomorEmpat = true;
    localStorage.setItem(soalKey, JSON.stringify(progeresSekarang));
  });
});
