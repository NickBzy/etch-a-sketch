const grid = document.querySelector(".grid")
const heightOfDiv = (1/16) * 100;
const widthOfDiv = (1/16) * 100;

for (let row=0; row<16; row++){
    for(let col=0; col<16; col++){
        const div = document.createElement("div")
        div.classList.add("test")
        div.style.height = heightOfDiv+'%'
        div.style.width = widthOfDiv+'%'
        grid.appendChild(div);
    }
}
