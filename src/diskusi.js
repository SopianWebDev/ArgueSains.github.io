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

  // Zoom gambar
  const lebarPerangkat = window.screen.width;
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

  // hilangkan petunjuk diskusi!
  const diskusiKontainer = document.querySelector(".diskusiKontainer");
  const petunjukDiskusi = document.querySelector(".petunjukDiskusi");
  const buttonPetunjuk = document.getElementById("buttonPetunjuk");

  buttonPetunjuk.addEventListener("click", function () {
    diskusiKontainer.classList.remove("hidden");
    petunjukDiskusi.classList.add("hidden");
    console.log("ok");
  });
});
