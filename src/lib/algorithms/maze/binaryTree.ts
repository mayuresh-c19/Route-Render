import { MAX_COLS, MAX_ROWS } from "../../../utils/constants";
import { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
    ) => {
    setIsDisabled(true);
    const newGrid = grid.slice();
    for (let row = 0; row < MAX_ROWS; row++) {
        for (let col = 0; col < MAX_COLS; col++) {
        const currentTile = newGrid[row][col];
        if (currentTile.isStart || currentTile.isEnd) {
            continue;
        }
        if (row % 2 === 0 || col % 2 === 0) {
            currentTile.isWall = true;
            await sleep(10 / speed);
            continue;
        }
        if (row === MAX_ROWS - 1 || col === MAX_COLS - 1) {
            continue;
        }
        if (Math.random() > 0.5) {
            currentTile.isWall = true;
            await sleep(10 / speed);
        }
        }
    }
    setIsDisabled(false);
    };
    
function sleep(arg0: number) {
    throw new Error("Function not implemented.");
}

