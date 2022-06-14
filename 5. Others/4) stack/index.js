
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




window.Stack = Stack;

export default Stack;
