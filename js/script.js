
//gestione click su li(ingredienti)
var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {

    var li = lis[i];

    li.addEventListener('click', function() {
        
        //seleziona e deseleziona al click
        var clickedLi = this; //elemento stesso selezionato
        var clickedLiChildrens = clickedLi.children; //figli di li
        var clickedCheckbox = clickedLiChildrens[4]; //selezione figlio li (input)

        clickedCheckbox.checked = !clickedCheckbox.checked; //deseleziono l'input selezionato 
    });
}


//CALCULATE
var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

    var burgerName = document.getElementById('burger-name').value;

    if (burgerName.length < 1) { //nome panino non inserito

        alert('Inserire nome del panino');

    } else {

        var finalPrice = 10; // prezzo base

        //gestione checkbox 
        var checkboxs = document.getElementsByClassName('ingred'); //richiamo tutti i .ingred (tutti gli ingredienti)

        for (var i = 0; i < checkboxs.length; i++) { //ciclo per trovare ingredienti checkati e calcolarne il sovrapprezzo 

            var checkbox = checkboxs[i];
            var isChecked = checkbox.checked;
            var price = parseInt(checkbox.dataset.price); //prezzo in input (data-price)

            if (isChecked) {
                finalPrice += price; //prezzo + sovrapprezzo
            }
        }

        //gestione coupon
        var coupons = [ 123, 456, 789 ]; //coupons ipotetici
        var burgerCoupon = document.getElementById('coupon').value; //recupero coupon scritto in html

        if (coupons.includes(burgerCoupon)) { //se corrisponde fai lo sconto del 20%
            finalPrice = finalPrice + .8;
        }

        var spanPrice = document.getElementById('price');
        spanPrice.innerHTML = finalPrice; //stampa prezzo finale
    }
});