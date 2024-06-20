// Ini  Javascript

function Konversi() {
    hitungKonversi();
    tampilkanCalc();
    tampilkanRumus();
}

function ReverseKonversi() {
    const selectedOption = jenisKonversi.value;
    let reversedOption;

    switch(selectedOption) {
        case 'celcius-to-fahrenheit':
            reversedOption = 'fahrenheit-to-celcius';
            break;
        case 'fahrenheit-to-celcius':
            reversedOption = 'celcius-to-fahrenheit';
            break;
    }
}

function Reset() {
    alert('selamat, mesinnya menyala')
}

function Reverse() {

}