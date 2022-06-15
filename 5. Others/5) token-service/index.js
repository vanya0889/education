/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  constructor() {
	this.observers = [];
  }

  subscribe(observer) {
	this.observers.push(observer);
  }

  setToken(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }

  removeToken(observer) {
	this.observers.filter(obs => obs !== observer)
  }

  getToken(observer) {
	this.observers.forEach(subscriber => subscriber(observer))
  }


}

window.TokenService = TokenService;

export default TokenService;
