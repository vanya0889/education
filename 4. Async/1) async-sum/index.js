let per1 = 2;
let per2 = {fgdfgdfg: "a"};


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

console.log(asyncSum(per1, per2))
window.asyncSum = asyncSum;

export default asyncSum;
