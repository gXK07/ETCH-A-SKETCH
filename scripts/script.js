let arrayCases = new Array;
let mode = "color";
let currentCasesInLine = 0

let blackShade = new Array;

function hovered(e){
    if(mode === "color"){
    let randomColor = [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255), 0.5];
    e.target.style.cssText = `background-color : rgba(${randomColor})`;
    }
    if(mode === "blackShade"){
        let div = e.path[0];
        let id = div.getAttribute('id');
        let caseNumber = parseInt(id, 10);
        console.log(caseNumber);
        blackShade[caseNumber] = blackShade[caseNumber] + 1;
        e.target.style.cssText = `background-color : rgba(0, 0, 0, ${blackShade[caseNumber]/10})`;
    }
}

function getNumber(string){  
    console.log(typeof(string)); 
    let id = ""
    for(i=0; i<string.length; i++){
        console.log(string.charAt(i));
        console.log(i);
            if(string.charAt(i) >= '0' && string.charAt(i) <= '9'){
                id = id + string.charAt(i);
            }
    }
    return(id);
}

function createGrid(nbCases, nbCasesLines, chosenMode){
    mode = chosenMode;
    arrayCases = new Array(nbCases);
    blackShade = new Array(arrayCases.length);
    for(i = 0; i< arrayCases.length; i++){
        arrayCases[i] = document.createElement('div');
        arrayCases[i].id = i;
        blackShade[i] = 0;
        container.appendChild(arrayCases[i]);
    }
    container.style.cssText = `grid-template : repeat(${nbCasesLines}, 1fr) / repeat(${nbCasesLines}, 1fr)`;
    arrayCases.forEach(cases => cases.addEventListener('mouseover', hovered));
    currentCasesInLine = nbCasesLines;
}

function suppGrid(){
    for(i=0; i<arrayCases.length; i++){
        container.removeChild(arrayCases[i]);
    }
}

function doReset(){
    suppGrid();
    let squareWanted = prompt("how many square do you want ?");
    if(squareWanted < 1 || squareWanted > 100){
        squareWanted = prompt('between 1 and 100. How many square do you want ?');
    }
    else if(squareWanted > 0 && squareWanted <= 100){
        createGrid(Math.pow(squareWanted, 2), squareWanted, mode);
    }
    else{
        alert("something went wrong");
        createGrid(256,16, mode);
        return;
    }
}
 function doClear(){
     suppGrid();
     createGrid(Math.pow(currentCasesInLine, 2), currentCasesInLine, mode);
 }
createGrid(256, 16, mode);
reset.addEventListener("click", doReset);
clear.addEventListener("click", doClear);
blackshade.addEventListener("click", () => {mode = "blackShade"; doClear()})
color.addEventListener("click", () => {mode = "color"; doClear(), console.log(mode);})
