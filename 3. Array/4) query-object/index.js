let qu = "";

function queryToObject(query) {
  let gavno = query;
  let gavno2= gavno.substring(1);
  console.log(gavno2);
  let parts = gavno2.split("&");
  console.log(parts);
  let fin = {...parts};
  return fin;
}
console.log(queryToObject(qu));
window.queryToObject = queryToObject;

export default queryToObject;
