
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
    work = parseFloat(work)

    let price = work * hours;

    console.log(price)
    

   

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