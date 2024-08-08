console.log("Hola desde script externo")
let script = document.createElement("script")
script.src = "dynamic_script.js"
document.body.appendChild(script)

function variable(){
    var edad = 10;
    if (edad <= 10){
        let edad = 5;
        console.log(edad);
    }
    console.log(edad)

    const IVA = 0.12;
}

function condiconales(){
    let edad = 17;
    if (edad < 18){
        console.log("Es menor de edad")
    }
    else{
        console.log("Es mayor de edad")
    }

    switch(edad){
        case 17:
            console.log("Es menor de edad")
            break;
    }
}

function loops(){
    for (let i = 0; i <10; i++){
        console.log(i);
    }
    let continueLoop = true;
    let count = 0 ;
    while (continueLoop){
        console.log("Dentro del while")
        count ++;
        if (count === 10){
            continueLoop = false;
        }
    }

    let numbers = [1,3,5,6,"5","6"]
    numbers.forEach(function (element){
    console.log(element)

    let por_cada_iteracion_hacer
})
}

function objects(){
    let car ={
        color : "Azul",
        marca : "Nissan",
        modelo : "2020",
        "cantidad-de-puertas" : 5,
        Array: [
            1,2,5,6
        ],
        otras_caracteristicas: {
            "Estereo": "Dolby Surround",
            "Polarizado" : "Oscuro"
        },
        function: function(datos){
            console.log(datos)
        },
        name : "CARRO 1"
    }

    console.log(car.color)
    console.log(car["color"])
    let {marca,modelo} = car;
    console.log(car.otras_caracteristicas.Estereo)

    //spread operators
    let mi_otro_carro = {
        ... car,
        Array : [... car.Array],
        otras_caracteristicas : {
            ... car.otras_caracteristicas
        }
    };
    mi_otro_carro.name = "CARRO 2"
    console.log(car.name)
    console.log(mi_otro_carro.name)
}

variable()
condiconales()
loops()
objects()