const container = document.querySelector("#container");

function createGrid(num) {
    for (i = 0; i < num; i++) {
        const column = document.createElement("div");
        container.appendChild(column);
        column.setAttribute("class", "column");
        for (j = 0; j < num; j++) {
            const box = document.createElement("div");
            column.appendChild(box);
            box.setAttribute("class", "box");
        };
    };
};

const column = document.querySelector(".column");

let dimension = 16;

createGrid(dimension);

const box = document.querySelector(".box");

container.addEventListener("mouseover", (event) => {
    const newColor = randomColor();
    console.log(newColor)
    event.target.style.backgroundColor = `${newColor}`;
    event.target.style.opacity -= '-.1';
    console.log(event.target.style.opacity);
});

function randomColor() {
    const randR = Math.floor(Math.random() * 255);
    const randG = Math.floor(Math.random() * 255);
    const randB = Math.floor(Math.random() * 255);
    return `rgb(${randR}, ${randG}, ${randB})`
}

const custom = document.querySelector("#custom");

custom.addEventListener("click", (event) => {
    removeGrid(dimension);
    dimension = prompt("Grid Dimension:", "");
    while (dimension > 100 || dimension < 1) {
        alert("Please select a dimension between 1 - 100")
        dimension = prompt("Grid Dimension:", "");
    };
    // I'm realizing prompts aren't the best way to handle this task,
    // but the assignment was clearly to use a prompt instead of an input. 
    // It might be a problem with my logic, but I don't currently see a way
    // to cancel the prompt or deal with a non-integer.
    createGrid(dimension);
});

function removeGrid(dimension) {
    for (i = 0; i < dimension; i++) {
        container.removeChild(container.lastChild);
    };
};