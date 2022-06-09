let qu = "?";

// function queryToObject(str) {
//   let a;
//   if (str === "null") {
//     return null;
//   } else if (str === "true") {
//     return true;
//   } else if (str === "false") {
//     return false;
//   } else if (str === "undefined") {
//     return undefined;
//   } else if (str === "") {
//     return {...str};
//   } else if (str === "queryString") {
//     let qr = str;
//     let qr2= qr.substring(1);
//     console.log(qr2);
//     let parts = qr2.split("&");
//     console.log(parts);
//     let fin = {...parts};
//     return fin;
//   } else {
//     str.split();
//     a = {...str};
//   }
//
//   let z = Number(a);
//   debugger
//   if (z === a) {
//     return z;
//
//   } else {
//     return str;
//   }
//
// }
//







function queryToObject(query) {
  query.substring(1);
  return JSON.parse('{"' + decodeURI(query)
    .replace("?", '')
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g,'":"') + '"}')
}
console.log(queryToObject(qu));
window.queryToObject = queryToObject;

export default queryToObject;
