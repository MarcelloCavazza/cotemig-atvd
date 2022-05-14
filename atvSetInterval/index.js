window.addEventListener('load', function () {
    //tarefa 1
    const text1 = document.querySelector('#tarefa1');
    const interval1 = this.setTimeout(() =>{
        text1.textContent = "AMO JS"
        clearInterval(interval1);
        return;
    }, 5000);


    //tarefa 2    
    const text2 = document.querySelector('#tarefa2');
    let count2 = 0;
    const interval2 = setInterval(() => {
        count2++
        if (count2 == 5) {
            text2.textContent = "AMO JS"
            clearInterval(interval2);
            return;
        }

    }, 1000);

    //tarefa 3    
    const text3 = document.querySelector('#tarefa3');
    const colors = [
        'blue',
        'red',
        'yellow'
    ]
    let count3 = 0;
    const interval3 = setInterval(() => {
        text3.style.backgroundColor = colors[count3]
        if(count3 == 2){
            count3 = -1
        }
        count3++
    }, 1000);

    //tarefa4
    // !NAO SEI PQ NAO FUNCIONA A QUESTAO 4
    const text4 = document.querySelector('#tarefa4');
    let btnStart = document.querySelector("#start")
    let btnEnd = document.querySelector("#end")

    btnStart.addEventListener("click", iniciar())
    btnEnd.addEventListener("click", finalizar())
    function iniciar(){
        console.log(`oi`)
    }
    // function iniciar(){
    //     alert("VAI INICIAR INVERVALO")
    //     let count4 = 0;
    //     var interval4 = setInterval(() => {
    //         count4++
    //         if (count4 == 5) {
    //             text4.textContent = "AMO JS"
    //             clearInterval(interval4);
    //             return;
    //         }
    //     }, 1000);
    // }
    // function finalizar(){
    //     alert("fim")
    //     clearInterval(interval4);
    //     return;
    // }
    
});



