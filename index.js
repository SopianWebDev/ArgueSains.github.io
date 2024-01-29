const dataNamaSiswaKey = "DATA-NAMA-SISWA-KEY";
const dataKelasSiswaKey = "DATA-KELAS-SISWA-KEY";
const buttonLoginSubmit = document.getElementById("loginButton");
const popUp = document.getElementById("popUp");
const popUpLoading = document.getElementById("popUpLoading");
const textPopUp = document.getElementById("textPopUp");

let updateToken = null;
const request = async () => {
  popUpLoading.classList.remove("hidden");
  const data = await axios("https://script.google.com/macros/s/AKfycbxpemRDCqvh1nnMdIKkh2RDFnsnlSbWkjn3T0p42ijNBsYLIWJbCEq1SqpqL25-_fQX/exec");
  popUpLoading.classList.add("hidden");
  console.log(data.data.data[0].Token);
  updateToken =  data.data.data[0].Token;
  console.log(`cek:${updateToken}`)
};


window.addEventListener("load", function () {
  request()

  if (localStorage.getItem(dataNamaSiswaKey) === null) {
    localStorage.setItem(dataNamaSiswaKey, "");
  }

  if (localStorage.getItem(dataKelasSiswaKey) === null) {
    localStorage.setItem(dataKelasSiswaKey, "");
  }

  if (localStorage.getItem(dataNamaSiswaKey) !== "") {
    popUpLoading.classList.remove("hidden");
    setTimeout(() => {
      popUpLoading.classList.add("hidden");
      window.location.href = "/src/beranda.html";
    }, 2000);
  }

  // Event untuk mengirim form
  const form = document.getElementById("my-form");

  form.addEventListener("submit", function async (e) {
    console.log(`form: ${updateToken}`)
    const namaSiswa = document.getElementById("namaSiswa").value;
    const kelasSiswa = document.getElementById("Kelas").value;
    const token = document.getElementById("token").value;

    e.preventDefault();
    if (namaSiswa === "" || kelasSiswa === "" || token !== updateToken.toString()) {
      textPopUp.innerText = "Isi Nama, Kelas dan Masukan Token Yang Sesuai";
      popUp.classList.remove("hidden");
      setTimeout(() => {
        popUp.classList.add("hidden");
      }, 3000);
    } else {
      popUpLoading.classList.remove("hidden");
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(function () {
        localStorage.setItem(dataNamaSiswaKey, namaSiswa);
        localStorage.setItem(dataKelasSiswaKey, kelasSiswa);
        popUpLoading.classList.remove("hidden");
        window.location.href = "/src/beranda.html";
      });
    }
  });
});
