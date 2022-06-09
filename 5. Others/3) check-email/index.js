/*
  Задача
  Написать функцию которая проверяет, является ли email валидным
  Прмеры
  isValidEmail("tima1702@gmail.com") === true
  isValidEmail("tima1702@gmail") === false
  isValidEmail("tima1702@gmail.") === false
  isValidEmail("tima1702gmail.com") === false
  isValidEmail("example_emai@gmail.com") === true
  isValidEmail("example8@gmail.com") === true
  isValidEmail("e2xample8@gmail.com") === true
  isValidEmail("e2xa.mple8@gmail.com") === true
 */

function isValidEmail(e) {
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let valid = re.test(e);
  if(valid===true) {return valid;}
  else {return false}
}


window.isValidEmail = isValidEmail;

export default isValidEmail;
