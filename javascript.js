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

createGrid(16);

const box = document.querySelector(".box");

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "salmon";
    });

