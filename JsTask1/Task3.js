function getVowelsCount(text){
	return  [...text].reduce((a, b) => a + "aeouiAEOUI".includes(b), 0);
}
console.log(getVowelsCount('o a kak ushakov lil vo kashu kakao'))