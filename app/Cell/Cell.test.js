import Cell from "./Cell";

describe("Given a class cell", () => {
  describe("When we create a new instance of Cell with the arguments 2, 4, true", () => {
    test("Then it should return and object with the properties x = 2, y = 4 and alive = true", () => {
      const x = 2;
      const y = 4;
      const alive = true;
      const expectedResult = { x: 2, y: 4, alive: true };

      const cell = new Cell(x, y, alive);

      expect(cell).toEqual(expectedResult);
    });
  });
});

describe("Given a method switchAlive", () => {
  describe("When it's called,", () => {
    test("Then the property alive should switch from true to false", () => {
      const alive = true;
      const expectedResult = false;
      const cell = new Cell(2, 3, alive);

      cell.switchAlive();

      expect(cell.alive).toEqual(expectedResult);
    });
  });
});
