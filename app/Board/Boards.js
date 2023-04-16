import { Cells } from "../Cell/Cell.js";

class Board {
  constructor(totalRows, totalColumns) {
    this.totalRows = totalRows;
    this.totalColumns = totalColumns;
    this.cells = this.createCells;
    const cells = [];
  }

  createCells() {
    for (let rows = 0; rows < totalRows; rows++) {
      const row = [];

      for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
        row.push(new Cell(x, y, Math.random() < 0.5));
      }
      cells.push(row);
    }
    return cells;
  }
}

export default Board;
