let qu = "?";

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
