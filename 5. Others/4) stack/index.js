/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack extends Array {
  push(item) {
	this[this.length] = (item);
	return this
  }

  size() {
	return this.length
  }

  pop() {
	this.length = this.length - 1
	return this
  }

  isEmpty() {
	return this.length < 1
  }


  print() {
	return `[${this.join(", ")}]`
  }
}

const stack = new Stack();
// stack.push(1);
// stack.print();
// stack.pop();
// stack.print()
stack.push(10).push(14).pop().print()


window.Stack = Stack;

export default Stack;
