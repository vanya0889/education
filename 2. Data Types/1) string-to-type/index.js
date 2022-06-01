let per = "100ab";

function stringToType(str) {
  let a;
  if (str === "null") {
    return null;
  } else if (str === "true") {
    return true;
  } else if (str === "false") {
    return false;
  } else if (str === "undefined") {
    return undefined;
  } else if (str === "") {
    return str;
  } else {
    a = str;
  }

  let z = Number(a);
  debugger
  if (z == a) {
    return z;

  } else {
    return str;
  }

}

console.log(stringToType(per));
window.stringToType = stringToType;

export default stringToType;
