/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */




function stringReverse (word) {
  let newMas = [...word];
  console.log(newMas);
  newMas.reverse();
  console.log(newMas);
  let newWord=newMas.join("");
  console.log(newWord);
  return newWord;
}
console.log(stringReverse("t"));
window.stringReverse = stringReverse;

export default stringReverse;