// This code was written by Almatrass. 
// It is free to use however you wish.

module.exports = {
	removeObjArr
}
function removeObjArr(arr, prop, cond) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i][prop] == cond) {
			arr.splice(i, 1);
		}
	}
	return arr;
}