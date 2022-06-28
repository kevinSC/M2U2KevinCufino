function register_name() {
    name = document.getElementById('student_name').value;
}

function register_nunber() {
    total = 0;
    subjects_n = document.getElementById('subjects_n').value;
    for (let i = 0; i < subjects_n; i++) {
	total += parseFloat(window.prompt('valor de la materia ' + (i + 1) ,"0"));
    }
    discount = total * 20 / 100
    total = 28000 + total - discount
    alert('El total a pagar de su matricula es: $' +  total);
}
const prompts = document.getElementById('student');
var submit_name = document.getElementById('submit_name');

prompts.innerHTML = 'Hola ' + name + ' Por favor ingrese la cantidad de materias';
