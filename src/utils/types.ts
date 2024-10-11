export type AlgorithmType = "Dijkstra" | "AStar" | "BreadthFirst" | "DepthFirst";
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export interface MazeSelectType{
    name: string;
    value: MazeType;
}   

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isTraversed: boolean;
    // totalDistance: number;
    // heuristic: number;
    // weight: number;
    // direction: string;
    parent: TileType | null; 
}

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;