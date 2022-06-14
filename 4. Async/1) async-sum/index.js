
function asyncSum(a, b) {
  return new Promise((resolve, reject) => {

    if (typeof a !== "number" && typeof b !== "number") {
      reject("Ошибка");
    }
    setTimeout(() => {
      resolve("test", a + b)
    }, 1000)


  })
}

window.asyncSum = asyncSum;

export default asyncSum;
