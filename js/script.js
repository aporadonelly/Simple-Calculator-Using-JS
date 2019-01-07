
// Addition
document.getElementById('addition').onclick = function addition() {
	var a = parseInt(document.getElementById('input1').value);
	var b = parseInt(document.getElementById('input2').value);
	
	var ans = (a) + (b);

	document.getElementById('result').innerHTML = ans;
}



// Subtraction
document.getElementById('subtract').onclick = function subtract() {
	var a = parseInt(document.getElementById('input1').value);
	var b = parseInt(document.getElementById('input2').value);
	
	var ans = (a) - (b);

	document.getElementById('result').innerHTML = ans;
}	


// Multiplication
document.getElementById('multiply').onclick = function multiply() {
	var a = parseInt(document.getElementById('input1').value);
	var b = parseInt(document.getElementById('input2').value);
	
	var ans = (a) * (b);

	document.getElementById('result').innerHTML = ans;
}	


// Division
document.getElementById('division').onclick = function division() {
	var a = parseInt(document.getElementById('input1').value);
	var b = parseInt(document.getElementById('input2').value);
	
	var ans = (a) / (b);

	document.getElementById('result').innerHTML = ans;
}	



// Modulo
document.getElementById('modulo').onclick = function modulo() {
	var a = parseInt(document.getElementById('input1').value);
	var b = parseInt(document.getElementById('input2').value);
	
	var ans = (a) % (b);

	document.getElementById('result').innerHTML = ans;
}	