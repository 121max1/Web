function getBinom(n){
	var errorMessage = "Invalid input";
	if(!Number.isInteger(n) || n<-200 || n > 200)
		return errorMessage;
	var result = "";
	var flagNeg = false;
	if(n == 0){
		return "1"
	}else if(n<0){
		result = result +"1/(";
		flagNeg = true;
		n*=-1;
	}
	for (var i = n; i >= 0; i--) {
		var result =  result + getBinomKoeff(BigInt(n), BigInt(n-i)).toString() +
		getBaseInBinom(n,i).toString() + (i == 0?"":"+") + (flagNeg && i == 0?")":"")
	}
	return result
}

function getBaseInBinom(n,i){
	var secondInd = n-i
	var first = ""
	var second = ""
	if(i == 0){
		first = "";
	}else if(i == 1){
		first = "a";
	}else{
		first = `a^${i}`;
	}
	if(secondInd == 0){
		second = "";
	}else if(secondInd == 1){
		second = "b";
	}else{
		second = `b^${secondInd}`
	}
	return first + second;

}

function getBinomKoeff(n,k){
	var value = factorial(n)/(factorial(k)*factorial(n-k))
	return value == 1?"":value;
}

function factorial(n) {
  return n ? n * factorial(n - 1n) : 1n;
}
console.log(getBinom(0))
console.log(getBinom(1))
console.log(getBinom(2))
console.log(getBinom(-2))
console.log(getBinom(3))
console.log(getBinom(5))
console.log(getBinom(201))
console.log(getBinom(3.14))