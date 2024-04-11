const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol]() {
    const { _brand, _motor, _color } = this;
    return new this.constructor(_brand, _motor, _color);
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}

export default Car;
