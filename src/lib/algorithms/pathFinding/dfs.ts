import { getUnTraversedNeighbours } from "../../../utils/getUnTraversedNeighbours";
import { checkStack, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types"

export const dfs = (grid:GridType,startTile: TileType,endTile: TileType) => {
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTravsersed = [base];

    while(unTravsersed.length > 0){
        const currentTile = unTravsersed.pop();
        if(currentTile){
            if(currentTile.isWall) continue;
            if(currentTile.distance === Infinity) break;
            currentTile.isTraversed = true;
            traversedTiles.push(currentTile);
            if(isEqual(currentTile,endTile)) break;

            const neighbours = getUnTraversedNeighbours(grid,currentTile);
            for(let i = 0; i< neighbours.length; i++){
                if(!checkStack(neighbours[i],unTravsersed)){
                    neighbours[i].distance = currentTile.distance + 1;
                    neighbours[i].parent = currentTile;
                    unTravsersed.push(neighbours[i]);
                }

            }
        }
    }

    const path = []; 
    let current = grid[endTile.row][endTile.col];
    while(current !== null){
        current.isPath = true;
        path.unshift(current);
        current = current.parent!;
    }

    return {traversedTiles,path};
}