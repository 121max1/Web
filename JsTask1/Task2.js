function convertToBytes(text){
	return text.split('').map(symbol=>{
		return symbol.charCodeAt(0).toString(2).padStart(8,'0')
	})
}
console.log(convertToBytes("man"))