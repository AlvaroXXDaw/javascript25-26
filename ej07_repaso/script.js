/* Reto 1
Crea un documento HTML que solicite cuántos caramelos tienes
 y entre cuántas personas quieres repartirlos.
 A continuación el programa escribirá el mensaje:
 "Si tienes __ caramelos y hay __ personas,
 tienes que repartir __ caramelos a cada uno
 y te sobran __ caramelos".
*/


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





})