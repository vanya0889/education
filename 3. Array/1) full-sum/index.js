function fullSum(...args) {
  let arr = [...args];
  let result = 0;


  try {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "number") {
        throw new Error("Wrong Argument Type");
      } else if (arr[i] === undefined) {
        return 0;
      } else {
        result += arr[i];
      }

    }
  } catch (e) {
    console.log(e)
  }


  return result;
}

window.fullSum = fullSum;

export default fullSum;
