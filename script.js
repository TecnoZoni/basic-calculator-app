let input = document.getElementById("input");

function sum(value){
    input.value += value;
}

function ce(){
    input.value = '';
}

function igual(){
    input.value = eval(input.value)
}