let obb = {
  a: 3,
  b: "qw",
  c: false,
  d: 0
};

function searchString(obj) {
  let x = [];
  let a = [];

  for (let key in obj) {
    x.push(key);
    x.push(obj[key]);
    console.log(x);
  }

 // return `?${x[0]}=${x[1]}&${x[2]}=${x[3]}&${x[4]}=${x[5]}&${x[6]}=${x[7]}`;

}
