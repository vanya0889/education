let testArr = [[3, 2, 1], [1, 4, 5], [-1, -3, -4]];



function arraysSort(arr) {

  let arr2 = arr.slice().sort( (a,b) => {
     let mA = Math.max(...a);
     let mB = Math.max(...b);
    return mB-mA;
  } )

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length;) {
//
//   }
//}

  // arr.sort(sorting);
  //
  // function sorting(a, b) {
  //   if (a === b) return 0;
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //return arr2
  }







console.log(arraysSort(testArr))
window.arraysSort = arraysSort;

export default arraysSort;
