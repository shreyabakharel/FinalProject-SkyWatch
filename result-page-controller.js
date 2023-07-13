class Flight {
  constructor(iata) {
    this._iata = iata;
  }

  get iata() {
    return this._iata;
  }

  saveToLocalStorage() {
    localStorage.setItem("iata", JSON.stringify(this._iata));
  }

  getLocalStorage() {
    if (localStorage.getItem("iata")) {
      return JSON.parse(localStorage.getItem("iata"));
    } else {
      [];
    }
  }
}
