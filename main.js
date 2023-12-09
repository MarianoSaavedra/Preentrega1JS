let numero = Number(prompt("Ingrese un numero para multiplicar"));

const multiplicar = (num) => {
    if(num != 0){
        for(let i = 1; i <= 10 ; i++){
            let resultado = num * i;
            alert(`${num} * ${i} = ${resultado}`)
        }
    }
    else{
        return alert("El numero indicado es incorrecto")
    }
}

multiplicar(numero)