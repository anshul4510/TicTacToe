let count = 0;
let result=false;
function select(event) {
    if (count != 9 && result != true) {
        if (event.target.innerHTML === "") {
            if (count % 2 === 0) {
                event.target.innerHTML = "X";
            } else {
                event.target.innerHTML = "O";
            }
            
        }
        result = check();
        if (result == true) {
            document.querySelector(".result").innerHTML = "Game Over";
        }
        count++;
    }
    else {
        alert("Game over")
    }

}
function check() {
    let i = 0;
    let marks = document.querySelectorAll(".mark");
    for (let i = 0; i < 7; i += 1) {
        if(i<2){
        if ((marks[i].innerHTML == marks[i + 1].innerHTML && marks[i + 1].innerHTML == marks[i + 2].innerHTML && marks[i].innerHTML != "")) {
            marks[i].style.color = marks[i + 1].style.color = marks[i + 2].style.color = "green";
            return true;
        }
    }
    if(i>=3 && i<5){
        if ((marks[i].innerHTML == marks[i + 1].innerHTML && marks[i + 1].innerHTML == marks[i + 2].innerHTML && marks[i].innerHTML != "")) {
            marks[i].style.color = marks[i + 1].style.color = marks[i + 2].style.color = "green";
            return true;
        }
    }
    if(i>=6){
        if ((marks[i].innerHTML == marks[i + 1].innerHTML && marks[i + 1].innerHTML == marks[i + 2].innerHTML && marks[i].innerHTML != "")) {
            marks[i].style.color = marks[i + 1].style.color = marks[i + 2].style.color = "green";
            return true;
        }
    }
        if (i < 3) {
            if ((marks[i].innerHTML == marks[i + 3].innerHTML && marks[i + 3].innerHTML == marks[i + 6].innerHTML && marks[i].innerHTML != "")) {
                marks[i].style.color = marks[i + 3].style.color = marks[i + 6].style.color = "green";
                return true;
            }
            if (i == 3) {
                if ((marks[i].innerHTML == marks[i + 1].innerHTML && marks[i + 1].innerHTML == marks[i - 1].innerHTML && marks[i].innerHTML != "")) {
                    marks[i].style.color = marks[i - 1].style.color = marks[i + 1].style.color = "green";
                    return true;
                }
            }
            if ((marks[0].innerHTML == marks[4].innerHTML && marks[4].innerHTML == marks[8].innerHTML && marks[0].innerHTML != "")) {
                marks[0].style.color = marks[4].style.color = marks[8].style.color = "green";
                return true;
            }
            if ((marks[2].innerHTML == marks[4].innerHTML && marks[4].innerHTML == marks[6].innerHTML && marks[2].innerHTML != "")) {
                marks[2].style.color = marks[4].style.color = marks[6].style.color = "green";
                return true;
            }

        }
    }

}