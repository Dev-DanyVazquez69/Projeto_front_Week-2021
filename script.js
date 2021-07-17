var x = 0
function load(){
    return (setInterval(troca,900))
}

function troca(){
    var cores = ["linear-gradient(to bottom,black, rgb(101,189,189),black","linear-gradient(to bottom,black,red,black)"]
    var fundo = document.getElementById("body")
    fundo.style.background = `${cores[x]}`
    x++
    if(x > 1){
        x = 0
    }

}