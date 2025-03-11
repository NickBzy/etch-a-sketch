const grid = document.querySelector(".grid");
const displayGridSize = document.querySelector("#display-grid-size");
const gridSize = document.querySelector("#current-grid-size");
const rainbowToggle = document.querySelector("#rainbow-mode");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = 0;

function createGrid(size) {
    //clear the grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    const heightOfDiv = (1/gridSize.value) * 100;
    const widthOfDiv = (1/gridSize.value) * 100;
    for (let row=0; row<gridSize.value; row++){
        for(let col=0; col<gridSize.value; col++){
            const div = document.createElement("div")
            div.classList.add("grid-item")
            div.style.height = heightOfDiv+'%'
            div.style.width = widthOfDiv+'%'

            //Changes color of grid items if user hovers over them
            div.addEventListener("mouseover", function(e){
                if (rainbowToggle.checked){
                    e.target.style.backgroundColor = colors[colorIndex % colors.length];
                    colorIndex++;
                } else {
                    e.target.style.backgroundColor = "black";
                } 
            });

            grid.appendChild(div);
        }
    }
}

createGrid(10);

gridSize.addEventListener("input", function() {
    displayGridSize.innerText = gridSize.value +" x "+gridSize.value;
    createGrid(gridSize.value);
});

//Clears the grid from drawing if user presses clear button
const clearButton = document.querySelector(".reset button");
clearButton.addEventListener("click", function(e){
    const allItems = document.querySelectorAll(".grid-item");
    allItems.forEach(div => {
        div.style.backgroundColor = "white"
    })
})

const toggleGridLines = document.querySelector("#grid-lines");
toggleGridLines.addEventListener("change", function() {
    const allItems = document.querySelectorAll(".grid-item");
    if (toggleGridLines.checked){
        allItems.forEach(div => {
            div.style.border = "0px"
        });
    } else {
        allItems.forEach(div => {
            div.style.borderTop = "1px solid black"
            div.style.borderLeft = "1px solid black"
        });
    }
    
});



