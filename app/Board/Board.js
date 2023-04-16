import Cell from "../Cell/Cell.js";

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = this.generateCells;
  }

  generateCells(x, y) {
    const cells = [];
    for (let rows = 0; rows < this.height; rows++) {
      const row = [];
      for (let cells = 0; cells < this.width; cells++) {
        row.push(new Cell(x, y, Math.random() < 0.5));
      }

      cells.push(row);
    }

    return cells;
  }
}

export default Board;
