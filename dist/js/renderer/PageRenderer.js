
let templateAccueil = "./templates/accueil.html.inc";
let templateCheckout = "./templates/payment.html.inc";

let htmlAccueil = "";
let htmlCheckout = "";

let target = document.querySelector('.main')



fetch(templateAccueil)
    .then((response) => response.text())
    .then((data) => (htmlAccueil = data));


fetch(templateCheckout)
    .then((response) => response.text())
    .then((data) => (htmlCheckout = data));

let renderAccueil = function () {
    target.innerHTML = htmlAccueil;
};

let renderCheckout = function () {
    target.innerHTML = htmlCheckout;
};


export { renderAccueil, renderCheckout };


