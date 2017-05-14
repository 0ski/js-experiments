class Point {
  constructor(x = 0, y = 0) {
    if (Array.isArray(x)) {
      [x, y] = x;
    }

    if (x instanceof Point) {
      y = x.y;
      x = x.x;
    }

    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  inspect() {
    return this.toString();
  }

  toString() {
    return '[' + this._x + ', ' + this._y + ']';
  }
};

module.exports = Point;
