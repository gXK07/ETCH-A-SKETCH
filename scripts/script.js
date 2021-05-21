    let cases = new Array(256);
    let reset = document.querySelector("#reset");

    for(i = 0; i<256; i++){
    cases[i] = document.createElement('div');
    container.appendChild(cases[i])
    }
    function addHovered(e){
        e.target.classList.add("hovered");
    }
    /*
    // redifined the number of quare in the grid (lenght of the array "cases")
    function reSize(string){
        //instruction
    }
    */
    function doReset(){
        for(i=0; i<cases.length; i++){
            cases[i].classList.remove("hovered");
            /*let squareWanted = prompt("How many scare do you want ?");
            reSize(squareWanted);
            */
        }
    }
    cases.forEach(x => x.addEventListener('mouseover', addHovered));
    reset.addEventListener('click', doReset);