//document.writeln('Hello World');
/*
const distanceToDo = prompt('Inserire la distanza da percorrere, in Km');
const agePassenger = prompt('Inserire l\'età del passeggero');

console.log('Questa è la distanza inserita: ',distanceToDo)
console.log('Questa è l\'età inserita: ',agePassenger)

// .trim() funziona solo sulle STRINGHE !!!NON INSERIRE SUL PROMPT altrimenti in caso di valore nullo da ERRORE!!!
const distance = distanceToDo.trim()
const age = agePassenger.trim()

console.log('Questa è la distanza inserita trimmata: ',distance)
console.log('Questa è l\'età inserita trimmata: ',age)

//il parseInt arrotonda ad un intero il numero al suo interno e nel caso non fosse un numero darebbe come risultato NaN (Not a Number)
const numberDistance = parseInt(distance)
const numberAge = parseInt(age)

console.log('Questa è la distanza inserita trimmata e verificata che sia un numero: ', numberDistance)
console.log('Questa è l\'età inserita trimmata e verificata che sia un numero: ', numberAge)
*/


//CHIEDO I DATI E LI CONVERTO IN NUMERI
const distanceToDo = parseInt(prompt('Inserire la distanza da percorrere, in Km'));
const agePassenger = parseInt(prompt('Inserire l\'età del passeggero'));

console.log('Questa è la distanza inserita: ',distanceToDo)
console.log('Questa è l\'età inserita: ',agePassenger)

//SE I DATI INSERITI 
if (!isNaN(distanceToDo) && !isNaN(agePassenger) && distanceToDo >= 0 && agePassenger >= 0){

    console.log('dati corretti');

    let fullPrice = distanceToDo * 0.21;

    let discount = 0;

    if(agePassenger < 18){
        console.log('minorenne');
        discount = (fullPrice*20/100);

    }else if (agePassenger > 65) {
        console.log('anziano');
        discount = (fullPrice*40/100);
    }
    
    console.log('questo è il prezzo standard', fullPrice);
    console.log('questo è lo sconto da applicare', discount);

    const finalPrice = fullPrice - discount;

    console.log(finalPrice);
    const ticketHTML = document.getElementById('ticket');
    ticketHTML.style.display = 'inline-block';
    ticketHTML.style.width = '100%'
    ticketHTML.style.textAlign = 'center'
    ticketHTML.innerHTML = 'Il costo del biglietto è ' + finalPrice.toFixed(2) + ' &euro;';


}
else{
    alert('inserisci i dati corretti');
}






/*
    {   
        const full_price = distanceToDo * 0.21;

        if (agePassenger >= 18 && agePassenger < 65){
            const final_price = full_price.toFixed(2)
            document.writeln('Il costo del biglietto è ' + final_price);    
        }
        
        else if (agePassenger < 18){
            minor_price = (full_price - ((full_price * 20) / 100))
            const final_price = minor_price.toFixed(2)    
            document.writeln('Il costo del biglietto è ' + final_price)
        }
        
        else if (agePassenger >= 65){
            mayor_price = (full_price - ((full_price * 40) / 100))
            const final_price = mayor_price.toFixed(2)
            document.writeln('Il costo del biglietto è ' + final_price)
        }
    }
    else{
        alert('Inserisci i dati corretti')
    }
*/


