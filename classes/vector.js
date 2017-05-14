let Point = require('./point');

class Vector {
  constructor(start = new Point(), end = new Point()) {
    if (!(start instanceof Point)) {
      start = new Point(start);
    }

    if (!(end instanceof Point)) {
      end = new Point(end);
    }

    this._start = start;
    this._end = end;
  }

  inspect() {
    return this._start + ' -> ' + this._end + '[' + this.length + ']';
  }

  get start() {
    return this._start;
  }

  get end() {
    return this._end;
  }

  get length() {
    return Math.sqrt(
      Math.pow(this.start.x - this.end.x, 2) +
      Math.pow(this.start.y - this.end.y, 2)
    );
  }
}

module.exports = Vector;
