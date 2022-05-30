function basicCalc(operation, a, b) {
  let x;
  switch (operation) {
    case "operation='+'":
      x = a + b;
      break;
    case "operation='-'":
      x = a - b;
      break;
    case "operation='*'":
      x = a * b;
      break;
    case "operation='/'":
      x = a / b;
      break;
  }
 return x;

}

window.basicCalc = basicCalc;

export default basicCalc;
