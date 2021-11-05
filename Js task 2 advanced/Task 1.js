function validateNumberFromArray(array){
	var errorMessage = "Invalid input"
	if(!Array.isArray(array))
		return errorMessage;
	if(array.length != 10)
		return errorMessage;
	for(var element of array){
		if(!Number.isInteger(element) || element < 0 || element>9)
			return errorMessage;
	}
	var baseNumber = "+7 "
	var nums = array.join('')
	return baseNumber + "(" + nums.slice(0,3) + ") " + nums.slice(3,6) + "-" + nums.slice(6,8) + "-" + nums.slice(8,10);

}

console.log(validateNumberFromArray([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))
console.log(validateNumberFromArray([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))
console.log(validateNumberFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))
console.log(validateNumberFromArray([]))
console.log(validateNumberFromArray("aw93fha="))
