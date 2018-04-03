const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (heroes) => {
    let domString = "";
    for (let i=0; i < heroes.length; i++) {
        domString += `<div class='col-sm-3'>`;
        domString +=    `<div class="panel panel-default ">`;
        domString +=        `<div class="panel-heading">`;
        domString +=            `<h3 class='panel-title'>${heroes[i].name}</h3>`;
        domString +=        `</div>`;
        domString +=        `<div class='panel-body'>`;
        if (heroes[i].gender === 'Male') {
            domString += `<img src='${heroes[i].image} class='charImage maleImage'>`;
        } else {
            domString += `<img src='${heroes[i].image} class='charImage femaleImage'>`;
        }
        domString +=            `<p class='charDescription'>${heroes[i].description}</p>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    };
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