function getNumber(jakaLiczba) {
    const liczba = prompt("Liczba " + jakaLiczba + ": ");
    return parseInt(liczba);
}

function dodaj(x, y) {
    return x + y;
}

function odejmij(x, y) {
    return x - y;
}

function pomnoz(x, y) {
    return x * y;
}

function podziel(x,y) {
    return x / y;
}

let dzialanie;

for(;dzialanie !== "0";) {
    dzialanie = prompt("1= dodawanmie 2=odejmowanie 3=mnożenie 4=dzielenie");

    const numberX = getNumber("X");
    const numberY = getNumber("Y");

    // if (dzialanie === "1") {
    //     alert(dodaj(numberX, numberY));

    // } else if (dzialanie === "2") {
    //     alert(odejmij(numberX, numberY));

    // } else if (dzialanie === "3") {
    //     alert(pomnoz(numberX, numberY));

    // } else if (dzialanie === "4") {
    //     alert(podziel(numberX, numberY));

    // } else {
    //     alert("Zły wybór");
    // }

    switch(dzialanie) {
        case "1":
            alert(dodaj(numberX, numberY));
            break;
        case "2":
            alert(odejmij(numberX, numberY));
            break;
        case "3":
            alert(pomnoz(numberX, numberY));
            break;
        case "4":
        case "podziel":
            alert(podziel(numberX, numberY));
            break;
        default:
            alert("Zły wybór"); 
    }
}




 






 