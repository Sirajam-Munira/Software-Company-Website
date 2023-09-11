var project1 = setInterval(projectDone1, 5);
var project2 = setInterval(projectDone2, 5);
var project3 = setInterval(projectDone3, 5);
var project4 = setInterval(projectDone4, 5);

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function projectDone1() {
    count1++;
    document.querySelector("#counter1").innerHTML = count1;
    var last = parseInt(document.querySelector("#counter1").getAttribute("data-target"));
    if (count1 == last) {
        clearInterval(project1);
    }
}
function projectDone2() {
    count2++;
    document.querySelector("#counter2").innerHTML = count2;
    var last = parseInt(document.querySelector("#counter2").getAttribute("data-target"));
    if (count2 == last) {
        clearInterval(project2);
    }
}
function projectDone3() {
    count3++;
    document.querySelector("#counter3").innerHTML = count3;
    var last = parseInt(document.querySelector("#counter3").getAttribute("data-target"));
    if (count3 == last) {
        clearInterval(project3);
    }
}
function projectDone4() {
    count4++;
    document.querySelector("#counter4").innerHTML = count4;
    var last = parseInt(document.querySelector("#counter4").getAttribute("data-target"));
    if (count4 == last) {
        clearInterval(project4);
    }
}