/* Reto 1
Crea un documento HTML que solicite cuántos caramelos tienes
 y entre cuántas personas quieres repartirlos.
 A continuación el programa escribirá el mensaje:
 "Si tienes __ caramelos y hay __ personas,
 tienes que repartir __ caramelos a cada uno
 y te sobran __ caramelos".
*/

<<<<<<< HEAD

let caja = document.querySelector("#numCaramelosInput");
let personas = document.querySelector("#numPersonasInput");
let boton = document.querySelector("button.btn-primary");
let resultado = document.querySelector("#resultadoTA");


boton.addEventListener("click",function()
{
    if(isNaN(caja.value) || isNaN(personas.value))
{
resultado.textContent = "Añada un numero entero";

}   
     else
{
        let operacion = Math.floor(caja.value) / Math.floor(personas.value);
        resultado.textContent = operacion;
}
=======
//datos entrada
const numCaramelosInput = document.querySelector("#numCaramelosInput")
const numPersonasInput = document.querySelector("#numPersonasInput")
//mensaje de salida
const resultadoTA = document.querySelector("#resultadoTA")
//disparador
const boton = document.querySelector("button")

boton.addEventListener("click",function(){
    let caramelos = numCaramelosInput.value.trim()
    let personas = numPersonasInput.value.trim()

    if (Number.isInteger(parseInt(caramelos)) && caramelos > 0) {
        if (Number.isInteger(parseInt(personas)) && personas > 0) {
            //repartir caramelos
            let repartir = Math.floor(caramelos/personas)
            let sobran = caramelos % personas
            //mostrar mensaje
            //resultadoTA.value = "Repartes " + repartir + " caramelos. Sobran " + sobran + " caramelos."
            resultadoTA.value = `Repartes ${repartir} caramelos. Sobran ${sobran} caramelos.`
        } else {
            resultadoTA.value = "Has escrito un nº incorrecto de personas"
        }
    } else {
        resultadoTA.value = "Has escrito un nº incorrecto de caramelos"
    }
})






>>>>>>> 49d357e470bf9d59ab0b026ba6e851d8f7d648f0





<<<<<<< HEAD
})
=======
>>>>>>> 49d357e470bf9d59ab0b026ba6e851d8f7d648f0
