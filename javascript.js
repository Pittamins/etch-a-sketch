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
    event.target.style.backgroundColor = "salmon";
});

const custom = document.querySelector("#custom");

custom.addEventListener("click", (event) => {
    removeGrid(dimension);
    dimension = prompt("Grid Dimension:", "");
    if (dimension > 100 || dimension < 1) {
        alert("Please select a dimension between 1 - 100")
        dimension = prompt("Grid Dimension:", "");
    };
    createGrid(dimension);
});

function removeGrid(dimension) {
    for (i = 0; i < dimension; i++) {
        container.removeChild(container.lastChild);
    };
};