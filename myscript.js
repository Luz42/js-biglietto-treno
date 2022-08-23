//document.writeln('Hello World');

const distance = prompt('Inserire la distanza da percorrere, in Km');
const age = prompt('Inserire l\'età del passeggero');

//const somma = parseInt(distance) + parseInt(age);
//document.writeln(somma);

const full_price = distance * 0.21;

if (age >= 18 && age < 65){
    document.writeln('Costo biglietto ' + full_price);    
}

else if (age < 18){
    minor_price = (full_price * 20) / 100
    document.writeln('Costo biglietto ' + minor_price)
}

else if (age >= 65){
    mayor_price = (full_price * 40) / 100
    document.writeln('Costo biglietto ' + mayor_price)
}


