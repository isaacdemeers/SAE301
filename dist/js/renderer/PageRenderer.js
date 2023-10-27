
const templatePath = "./templates/accueil.html.inc";


fetch(templatePath)
    .then((response) => response.text())
    .then((data) => (selectTemplate = data));

let selectTemplate = "";



let render = function () {

    fetch(templatePath)
        .then((response) => response.text())
        .then((data) => (selectTemplate = data));

    let target = document.querySelector('.main')



    target.innerHTML = selectTemplate;

};

export { render as pageRenderer };


