let zn1 = 3;
let zn2 = 4;


function sumCheck(a, b) {

  try {
    if (typeof a === "number" && typeof b === "number") {
      return a+b;
    }
    throw new Error("Wrong arguments type!");



  }
  catch (e) {
    alert(e.message);
  }

}

console.log(sumCheck(zn1,zn2))
window.sumCheck = sumCheck;

export default sumCheck;
