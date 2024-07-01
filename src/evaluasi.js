document.addEventListener("DOMContentLoaded", function () {
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

  const diskusiButton = document.querySelector(".diskusiButton");
  const imageChar = document.querySelector(".imageCharacter img");
  const textBubbleChatCharacter = document.querySelector(".textBubbleChatCharacter p");
  const diskusi1 = document.getElementById("Diskusi1");
  const diskusi2 = document.getElementById("Diskusi2");
  const diskusi3 = document.getElementById("Diskusi3");
  const diskusi4 = document.getElementById("Diskusi4");

  let clickCount = 0;

  diskusiButton.addEventListener("click", function () {
    clickCount++;

    const defaultText = "Apakah kamu sudah membaca artikel di atas?";

    if (clickCount === 1) {
      imageChar.setAttribute("src", "/img/pian2.png");
      textBubbleChatCharacter.innerText = "Disini Pertanyaan 1";
      diskusiButton.innerText = "Lanjut";
      diskusi1.classList.remove("hidden");
      diskusiButton.setAttribute("type", "button");
    } else if (clickCount === 2) {
      imageChar.setAttribute("src", "/img/confused.png");
      textBubbleChatCharacter.innerText = "Disini Pertanyaan 2?";
      diskusi1.classList.add("hidden");
      diskusi2.classList.remove("hidden");
    } else if (clickCount === 3) {
      imageChar.setAttribute("src", "/img/pian2.png");
      textBubbleChatCharacter.innerText = "Disini pertanyaan 3.";
      diskusi2.classList.add("hidden");
      diskusi3.classList.remove("hidden");
    } else if (clickCount === 4) {
      imageChar.setAttribute("src", "/img/confused.png");
      textBubbleChatCharacter.innerText = "Disini pertanyaan 4";
      diskusiButton.innerText = "kirim argumenmu";
      diskusi3.classList.add("hidden");
      diskusi4.classList.remove("hidden");
    } else if (clickCount === 5) {
      imageChar.setAttribute("src", "/img/dance.gif");
      textBubbleChatCharacter.innerText = "Kirim argumenmu \n Setelah kamu menjawab tunggu sampai pop up terkirim muncul";
      diskusiButton.innerText = "kirim argumenmu";
      diskusi4.classList.add("hidden");
    } else if (clickCount === 6) {
      imageChar.setAttribute("src", "/img/pian.png");
      textBubbleChatCharacter.innerText = defaultText;
      diskusiButton.innerText = "Mau jawab lagi?";
      diskusiButton.setAttribute("type", "submit");
      clickCount = 0;
    }
  });

  const form = document.getElementById("kuisForm");
  document.getElementById("NamaKuis").value = getBio().nama;
  document.getElementById("KelasKuis").value = getBio().kelas;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    popUpLoading.classList.remove("hidden");
    const data = new FormData(form);
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
});
