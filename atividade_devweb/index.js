// exercicio 1
function somar() {
    var x = parseInt(document.getElementById("primeironum").value);
    var y = parseInt(document.getElementById("segundonum").value);
    let z = x + y;
    alert("A soma dos dois numeros é: " + z);
}

// exercicio 2

function azul() {
    document.getElementById('ex2').style.backgroundColor = "#0317fc"
}

function verde() {
    document.getElementById('ex2').style.backgroundColor = "#08F628"
}

function vermelho() {
    document.getElementById('ex2').style.backgroundColor = "#F60808"
}

function amarelo() {
    document.getElementById('ex2').style.backgroundColor = "#F6E608"
}

function branco() {
    document.getElementById('ex2').style.backgroundColor = "#ffffff"
}
// exe 3

function func() {
    var cor = document.getElementById("cor").value;

    switch (cor) {
        case "azul":
            document.getElementById('exe3').style.backgroundColor = "#0317fc"
            break;
        case "verde":
            document.getElementById('exe3').style.backgroundColor = "#08F628"
            break;

        case "amarelo":
            document.getElementById('exe3').style.backgroundColor = "#F6E608"
            break;

        case "vermelho":
            document.getElementById('exe3').style.backgroundColor = "#F60808"
            break;

    }
}

function exe4() {
    document.getElementById('prg').style.display = "none";
}

function ex4() {
    document.getElementById('prg').style.display = "block";
}

