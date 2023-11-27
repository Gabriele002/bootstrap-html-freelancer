
let sconto = [
    { codiceSconto: "YHDNU32"},
    { codiceSconto: "JANJC63"},
    { codiceSconto: "PWKCN25"},
    { codiceSconto: "SJDPO96"},
    { codiceSconto: "POCIE24"},
]

function offer(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let mail = document.getElementById("mail").value;
    let hours = document.getElementById("hours").value;

    hours = parseFloat(hours);

    if (isNaN(hours)) {
        alert("Inserisci un carattere valido nella sezione ore")
    }

    let work = document.getElementById("tipo_di_lavoro").value;
    work = parseFloat(work);
    let price = work * hours;
    
    let discountCode = document.getElementById("discount").value;
    let discountedPrice = price


    sconto.forEach(function (sconto)  {
        if (sconto.codiceSconto == discountCode) {
            let discountedPrice = price - (price * 25 / 100);      
        }
    })

    document.getElementById("price_for_work").innerHTML = discountedPrice.toFixed(2)
     
}    






function getWorkPrice(work) {
    let workPrice = 0;
    if (work == "Backed") {
        workPrice = 20.50;
    }
    else if (work == "Frontend") {
        workPrice = 15.30;
    }
    else if (work == "Project") {
        workPrice = 33.60;
    }
    return workPrice;
}

