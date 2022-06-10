let arr = "1010001001";

function rowZero(str) {
  let arr = str.split("1");
  let result = 0;
  arr.forEach(function (el) {
	if (el.length > result) {
	  result = el.length
	}

  })
  return result;
}

console.log(rowZero(arr));
window.rowZero = rowZero;

export default rowZero;
