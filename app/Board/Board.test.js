import Board from "./Board";

describe("Given a method generateCells,", () => {
  describe("when it receives a width of 2 and a height of 2,", () => {
    test("then it should return an array which includes two arrays with two cell instances containing x, y and alive properties each one", () => {
      const width = 2;
      const height = 2;
      const expectedResult = [
        [
          { x: undefined, y: undefined, alive: true },
          { x: undefined, y: undefined, alive: true },
        ],
        [
          { x: undefined, y: undefined, alive: true },
          { x: undefined, y: undefined, alive: true },
        ],
      ];
      const board = new Board(width, height);

      const cells = board.generateCells();

      expect(cells).toEqual(expectedResult);
    });
  });
});
