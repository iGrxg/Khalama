function convertir (){
    var valores = parseInt(document.getElementById("valor").value)
    var resultado = 0
    var dolar = 293
    var euro = 313
    if (document.getElementById("cambioDolar").checked){
        resultado = valores / dolar
        alert("El Cambio de Pesos a Dolares es de:$" + resultado.toFixed(2))
    }
    else if (document.getElementById("cambioEuro").checked){
        resultado = valores / euro
        alert("El Cambio de Pesos a Euros es de:$" + resultado.toFixed(2))
    }
    else{
        alert("Tienes que Completar Todos los Requerimientos")
    }
}