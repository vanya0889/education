function findPair(arr) {
  let sorting = arr.sort();
  console.log(sorting);


  for (let i = 1; i < sorting.length; i++) {
    if (sorting[i-1] === sorting[i]) {
      return sorting[i];

    }
  }
  return null;
}

window.findPair = findPair;

export default findPair;
