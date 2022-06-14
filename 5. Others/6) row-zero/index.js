
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


window.rowZero = rowZero;

export default rowZero;
