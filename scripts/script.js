    let cases = new Array(256);

    for(i = 0; i<256; i++){
    cases[i] = document.createElement('div');
    container.appendChild(cases[i])
    }
    function addHovered(e){
        e.target.classList.add("hovered");
        console.log(e.target);
    }
    cases.forEach(x => x.addEventListener('mouseover', addHovered));
