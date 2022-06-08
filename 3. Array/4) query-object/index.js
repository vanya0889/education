let qu = "";

function queryToObject(query) {
  let qr = query;
  let qr2= qr.substring(1);
  console.log(qr2);
  let parts = qr2.split("&");
  console.log(parts);
  let fin = {...parts};
  return fin;
}
console.log(queryToObject(qu));
window.queryToObject = queryToObject;

export default queryToObject;
