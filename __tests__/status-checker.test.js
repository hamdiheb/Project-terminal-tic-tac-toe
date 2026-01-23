import { checkRow, checkDiagonal, checkColumn } from "../status-checker.js";

describe("Check if the status of the game", () => {
  it("should return true if the game won by row 3", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "O"],
    ];
    const checking = checkRow(board, "O", 2);
    const expected = true;
    expect(checking).toBe(expected);
  });
  it("should return true if the game won by column 1", () => {
    const board = [
      ["X", "_", "_"],
      ["X", "X", "_"],
      ["X", "O", "O"],
    ];
    const checking = checkColumn(board, "X", 0);
    const expected = true;
    expect(checking).toBe(expected);
  });
  it("should return true if the game won by diagonal", () => {
    let board = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const checking = checkDiagonal(board, "X");
    const expected = true;
    expect(checking).toBe(expected);
  });
});
