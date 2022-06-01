let obb = {
  a: 3,
  b: undefined,
  c: "",
  d: false
};

function searchString(obj) {
  let arr = [];

  for (let key in obj) {
    if (obj[key] == null || undefined) {

    }  else if (obj[key] === "") {

    } else {
      arr.push(`${key}` + "=" + `${obj[key]}`)
      arr.push("&")
    }

    console.log(arr);

  }
  arr.unshift("?")
  arr.pop();
  return arr.join("");

}

console.log(searchString(obb))
window.searchString = searchString;

export default searchString;


