function getPassword(){
	let symbols = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
	let numbers = "1234567890"
	let symbolsLowerCase = "qwertyuiopasdfghjklzxcvbnm"
	let symbolsUpperCase = "QWERTYUIOPASGHJKLZXCVBNM"
	let symbolsArray = []
	let passwordLength = getRandomInt(6,18)
	for (var i = 0; i < passwordLength; i++) {
		let index = getRandomInt(0,symbols.length)
		symbolsArray.push(symbols[index])
	}
	if(!isLetterInLowerCaseExists(symbolsArray)){
		symbolsArray.push(symbolsLowerCase[getRandomInt(0,symbolsLowerCase.length)])
	}
	if(!isLetterInUpperCaseExists(symbolsArray)){
		symbolsArray.push(symbolsUpperCase[getRandomInt(0,symbolsUpperCase.length)])
	}
	if(!isNumberExists(symbolsArray)){
		symbolsArray.push(numbers[getRandomInt(0,numbers.length)])
	}
	return symbolsArray.join('')

}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isLetterInLowerCaseExists(array){
	for (var i = 0; i < array.length; i++) {
		if(array[i].toLowerCase() == array[i]){
			return true
		}
	}
	return false
}

function isLetterInUpperCaseExists(array){
	for (var i = 0; i < array.length; i++) {
		if(array[i].toUpperCase() == array[i]){
			return true
		}
	}
	return false
}

function isLetterInUpperCaseExists(array){
	for (var i = 0; i < array.length; i++) {
		if(array[i].toUpperCase() == array[i]){
			return true
		}
	}
	return false
}

function isNumberExists(array){
	let numbers = "1234567890"
	for (var i = 0; i < array.length; i++) {
		if(numbers.indexOf(array[i]) !== -1){
			return true;
		}
	}
	return false;
}

console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())
console.log(getPassword())