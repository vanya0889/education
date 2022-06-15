
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
    this.observers.filter(obs => obs !== observer);
  }

  getToken(observer) {
    this.observers.forEach(subscriber => subscriber(observer))
  }


}

window.TokenService = TokenService;

export default TokenService;
