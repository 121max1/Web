function callTask1(){
	let value = document.getElementById('task1_input').value
	let answer = getBinom(Number(value));
	document.getElementById('answerBox').value = answer
}

function callTask2(){
	let value = document.getElementById('task2_input').value
	let answer = convertToBytes(value);
	document.getElementById('answerBox2').value = answer
}

function callTask3(){
	let answer = getPassword();
	document.getElementById('answerBox3').value = answer
}
