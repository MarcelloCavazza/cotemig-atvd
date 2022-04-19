window.addEventListener("change", changeBackGround);

var inputR;
var inputG;
var inputB;




function changeBackGround(event) {
    var inputR = document.querySelector("#R");
    var inputG = document.querySelector("#G");
    var inputB = document.querySelector("#B");
    document.querySelector("#inputR").textContent=inputR.value;
    document.querySelector("#inputG").textContent=inputG.value;
    document.querySelector("#inputB").textContent=inputB.value;
    document.body.style.backgroundColor = 'rgb(' + inputR.value + ',' + inputG.value + ',' + inputB.value + ')';
}