class Cell {
  constructor(x, y, alive) {
    this.x = x;
    this.y = y;
    this.alive = alive;
  }

  switchAlive() {
    this.alive = !this.alive;
  }
}

export default Cell;
