import Cell from "./Cell";

describe("Given a class cell", () => {
  describe("When it receives de values 2, 2, true", () => {
    test("Then it should return and object with x, y and alive properties", () => {
      const expectedResult = { x: 2, y: 2, alive: true };

      const cell = new Cell(2, 2, true);

      expect(cell).toEqual(expectedResult);
    });
  });

  describe("When it receives de values 2, 2, true", () => {
    test("Then it should return and object with x, y and opposite alive property value", () => {
      const expectedResult = { x: 2, y: 2, alive: false };

      const cell = new Cell(2, 2, true);
      cell.switchAlive();

      expect(cell).toEqual(expectedResult);
    });
  });
});
