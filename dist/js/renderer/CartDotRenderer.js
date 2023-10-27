import { Product } from "../class/Product.js";

const templatePath = "./templates/cartDot.html.inc";


fetch(templatePath)
    .then((response) => response.text())
    .then((data) => (selectTemplate = data));

let selectTemplate = "";



let render = function (cart) {

    fetch(templatePath)
        .then((response) => response.text())
        .then((data) => (selectTemplate = data));

    let target = document.querySelector('.navbar__subitem--cart')


    selectTemplate = selectTemplate.replace("{{cartDot}}", cart.length);
    target.innerHTML += selectTemplate;

};

export { render as cartDotRenderer };


