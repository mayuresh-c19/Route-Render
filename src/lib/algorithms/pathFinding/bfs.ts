import { getUnTraversedNeighbours } from "../../../utils/getUnTraversedNeighbours";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";

export const bfs = (
    grid : GridType,
    startTile : TileType,
    endTile : TileType
) =>{
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTravsersed = [base];

    while(unTravsersed.length){
        const tile = unTravsersed.shift()!;
        if(tile.isWall) continue;
        if(tile.distance === Infinity) break;
        tile.isTraversed = true;
        traversedTiles.push(tile);
        if(isEqual(tile,endTile)) break;

        const neightbours = getUnTraversedNeighbours(grid,tile);
        for(let i = 0; i < neightbours.length; i++){
            if(!isInQueue(neightbours[i],unTravsersed)){
                const neighbour = neightbours[i];
                neighbour.distance = tile.distance + 1;
                neighbour.parent = tile;
                unTravsersed.push(neighbour);
            }    
        }
    }

    const path = [];
    let tile = grid[endTile.row][endTile.col];
    while(tile !== null){
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return {traversedTiles, path};
}