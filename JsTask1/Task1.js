function concatArrays(arrays){
	let result = [];
    for (const item of arrays) {
    	result.push(...item);
    }
    return result.sort()
}
console.log(concatArrays([[3,2,1],[6,4,5]]))