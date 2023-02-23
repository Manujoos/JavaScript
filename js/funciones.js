function limpiar(){
    document.getElementById("myForm").reset();
}
function sumar(){
    var x = parseInt(document.getElementById('variable1').value);
    var y = parseInt(document.getElementById('variable2').value);
    document.getElementById('result').innerHTML = x + y; 
}
function restar(){
    var x = parseInt(document.getElementById('variable1').value);
    var y = parseInt(document.getElementById('variable2').value);
    document.getElementById('result').innerHTML = x - y; 
}
function multiplicar(){
    var x = parseInt(document.getElementById('variable1').value);
    var y = parseInt(document.getElementById('variable2').value);
    document.getElementById('result').innerHTML = x * y; 
}
function dividir(){
    var x = parseInt(document.getElementById('variable1').value);
    var y = parseInt(document.getElementById('variable2').value);
    document.getElementById('result').innerHTML = x / y; 
}