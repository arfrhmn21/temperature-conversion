let buttonOK = document.querySelector(".buttonOK");
let inputSuhuAsal = document.querySelector(".suhuAsal");
let inputSuhuTujuan = document.querySelector(".suhuTujuan");
let inputNilaiAwal = document.querySelector(".nilaiAwal");
let teksOutput = document.querySelector(".teks-output");

const suhuAsal = document.querySelector(".suhuAsal");
const suhuTujuan = document.querySelector(".suhuTujuan");

let hasil;

inputNilaiAwal.addEventListener("input", () => {
    if (inputNilaiAwal.value.trim() === "") {
        buttonOK.disabled = true;
    } else {
        buttonOK.disabled = false;
    }
});

buttonOK.disabled = true;

buttonOK.addEventListener("click", function () {
    let suhuAsal = inputSuhuAsal.value.toUpperCase();
    let suhuTujuan = inputSuhuTujuan.value.toUpperCase();
    let nilaiAwal = parseFloat(inputNilaiAwal.value);

    let c, k, f;

    switch (suhuAsal[0]) {
        case "C":
            c = nilaiAwal;
            k = c + 273.15;
            f = (c * 9) / 5 + 32;
            break;
        case "K":
            k = nilaiAwal;
            c = k - 273.15;
            f = (k - 273.15) * (9 / 5) + 32;
            break;
        case "F":
            f = nilaiAwal;
            c = (f - 32) * (5 / 9);
            k = (f - 32) * (5 / 9) + 273.15;
            break;
    }

    suhuTujuan[0] == "C"
        ? (hasil = c)
        : suhuTujuan[0] == "K"
        ? (hasil = k)
        : (hasil = f);

    teksOutput.innerHTML = `Hasil konversi dari ${nilaiAwal}° ${suhuAsal[0]} ke ${suhuTujuan[0]} adalah ${hasil}° ${suhuTujuan[0]}`;
});

function updateSuhuTujuan() {
    const selectedValue = suhuAsal.value;

    for (let option of suhuTujuan.options) {
        option.disabled = false;
        if (option.value === selectedValue) {
            option.disabled = true;
        }
    }

    if (suhuTujuan.value === selectedValue) {
        suhuTujuan.value = [...suhuTujuan.options].find(
            (opt) => !opt.disabled
        ).value;
    }
}

suhuAsal.addEventListener("change", updateSuhuTujuan);
document.addEventListener("DOMContentLoaded", updateSuhuTujuan);
