import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const retrieveHeuristicCost = (currentTile: TileType, endTile: TileType) => {
    const manHattanDistance = 1;
    const row = Math.abs(currentTile.row - endTile.row);
    const col = Math.abs(currentTile.col - endTile.col);
    return manHattanDistance * (row + col);
};

export const initHeuristicCost = (grid: GridType, endTile: TileType) => {
  const heuristicCost = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    const rows = [];
    for (let col = 0; col < MAX_COLS; col++) {
        rows.push(retrieveHeuristicCost(grid[row][col], endTile));
    }
    heuristicCost.push(rows);
  }
  return heuristicCost;
}

export const initFunctionCost = () => {
    const functionCost = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        const rows = [];
        for (let col = 0; col < MAX_COLS; col++) {
            rows.push(Infinity);
        }
        functionCost.push(rows);
    }
    return functionCost;
};