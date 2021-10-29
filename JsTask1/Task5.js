function isUniqueSymbols(text){
	let letters = text.toLowerCase().split('')
    return letters.every((letter, index) => index == letters.indexOf(letter));
}
console.log(isUniqueSymbols("Dermatoglyphics"))