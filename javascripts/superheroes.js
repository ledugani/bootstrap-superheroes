const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = fancyArray => {
    let domString = "";
    fancyArray.forEach((hero) => {
        domString += `<div class="col-md-4">`;
        domString += `<img src="${hero.image}">`;
        domString += `<h2>${hero.name}</h2>`;
        domString += `<p><em>${hero.gender}</em></p>`;
        domString += `<p>${hero.description}</p>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
}

function executeThisCodeIfXHRFails () {
    console.log("something broke")
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "/db/superheroes.json");
    myRequest.send();
}

startApplication();