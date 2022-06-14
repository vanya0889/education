function findPair(arr) {
  arr.sort(function(a, b) {
    return arr[b] - arr[a];
  });

  return null;
}

window.findPair = findPair;

export default findPair;
