
function isValidEmail(e) {
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let valid = re.test(e);
  if(valid===true) {return valid;}
  else {return false}
}


window.isValidEmail = isValidEmail;

export default isValidEmail;
