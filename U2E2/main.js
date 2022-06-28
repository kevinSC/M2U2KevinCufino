document.write('<h1>por favor ingrse los siguentes valores</h1>');

document.write('<form action=""><label for="A"><span>varibale A: </span><input type="number" id="A"></label><label for="B"><span>varibale B: </span><input type="number" id="B"></label><label for="C"><span>varibale C: </span><input type="number" id="C"></label><label for="D"><span>varibale D: </span><input type="number" id="D"></label><button onclick="run()">Guardar</button></form>');

function run() {
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    D = document.getElementById('D').value;

    const valores = new Set();
    valores.add(A);
    valores.add(B);
    valores.add(C);
    valores.add(D);
    if (valores.size < 4) {
	document.body.innerHTML = "";
	document.write('<h1>Hay elementos repetidos en la lista, por favor cargar nuevamente la página para comenzar de nuevo</h1>')
    }
    else {
	document.write('<h2>El número mayor es: ' + Math.max(...Array.from(valores)) + '</h2>')
	document.write('<h2>El número menor es: ' + Math.min(...Array.from(valores)) + '</h2>')
    }  
}

