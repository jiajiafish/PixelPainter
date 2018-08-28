// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
    var pick = document.getElementById("pixelCanvas");
    for (let i = 0; i < x; i++) {
        var trchild = document.createElement("tr");
        var tr1 = pick.appendChild(trchild);
        for (let j = 0; j < y; j++) {
            tdchild = document.createElement("td");
            var td1 = tr1.appendChild(tdchild);


        }

    }
    for (let index = 0; index < tds.length; index++) {
        tds[index].addEventListener("mouseover", function () {
            console.log("ddddd");
            tds[index].style.background = document.getElementById("colorPicker").value;
        })

    }
}
tds = document.getElementsByTagName("td");



const x = document.getElementById("inputHeight").value;
const y = document.getElementById("inputWidth").value;

const button = document.getElementById("tijiao");
button.addEventListener('click', function (e) {
    e.preventDefault();
    const x1 = document.getElementById("inputHeight").value;
    const y1 = document.getElementById("inputWidth").value;
    makeGrid(x1, y1);
    button.setAttribute("disabled", "disabled")
})



// Your code goes here!


