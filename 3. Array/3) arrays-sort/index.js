let testArr = [[3, 2, 1], [1, 4, 5], [-1, -3, -4]];


function arraysSort(arr) {

  let arr2 = arr.slice().sort((a, b) => {
	let mA = Math.max(...a);
	let mB = Math.max(...b);
	return mB - mA;
  })


}


console.log(arraysSort(testArr))
window.arraysSort = arraysSort;

export default arraysSort;
