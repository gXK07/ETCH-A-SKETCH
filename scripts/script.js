    let arrayGrid = new Array(256);
    let currentSizeGrid = arrayGrid.length;
    let reset = document.querySelector("#reset");

    function createGrid(nbCases, nbCasesInLine){
        for(i = 0; i < nbCases.length; i++){
            //create divs inside the array
            nbCases[i] = document.createElement('div');
            //place the divs inside the container div
            container.appendChild(nbCases[i])
            //make a square grid 
            document.querySelector('#container').style.cssText = `display : grid;
                    grid-template : repeat(${nbCasesInLine}, 1fr) /
                        repeat(${nbCasesInLine}, 1fr) ;`;
            //round the corners
            /*
            if (i===0){
                nbCases[i].classList.add("cornerTopLeft");
            }
            if (i=== nbCases.length-1){
                nbCases[i].classList.add("cornerbottomRight");
            }
            if (i === nbCases.length-nbCasesInLine){
                nbCases[i].classList.add("cornerbottomLeft");
            }
            if (i === nbCasesInLine-1){
                nbCases[i].classList.add("cornerTopRight");
            }
            */
            }
            // add event for colorise the cases
            nbCases.forEach(x => x.addEventListener('mouseover', addHovered));
            currentSizeGrid = nbCases.length;
            arrayGrid = nbCases;
            console.log(currentSizeGrid);
    }
    
    

    function addHovered(e){
        e.target.classList.add("hovered");
    }
    
    // redifined the number of square in the grid (lenght of the array "cases")
    function reSize(string){
        let squareWanted = Math.floor(Number(string));
        if (squareWanted > 100 || squareWanted < 1){
            squareWanted = prompt(
                "Please enter a number between 1 and 100. How many square on each line do you want ?"
                )
        }
        else if (squareWanted === NaN){
            squareWanted = prompt(
                "Please, enter a real number. How many square on each line do you want ? "
                )
        }
        else if(squareWanted > 0 && squareWanted <= 100){
            newCases = new Array(Math.pow(squareWanted, 2)); 
            createGrid(newCases, squareWanted);
        }
        else{
            alert("something went wrong");
            return 0;
        }
    }
    /* 
    Remove the class "hovered" from all the div, 
    and create another grid with the number of cases wanted
    */
    function doReset(){
        for(i=0; i<currentSizeGrid; i++){
            arrayGrid[i].classList.remove("hovered");
        }
        /*
        for(i=0; i<cases.length; i++){
            cases[i].parentNode.removeChild(nbCases[i]);
        }
        */
            let squareWanted = prompt("How many square do you want ?");
            reSize(squareWanted);

    }


    createGrid(arrayGrid, 16);
    reset.addEventListener('click', doReset);