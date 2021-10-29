function getStringWithultipleLetters(text){
	let result =  text.split('').reduce((res,current,index)=>{
		res += "-"+current.toUpperCase()+current.toLowerCase().repeat(index)
		return res
	})
	result = result[0].toUpperCase() + result.slice(1);
	return result;
}
console.log(getStringWithultipleLetters("abcd"))