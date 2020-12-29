import path from '../general/path.js'
import pathFinder from '../general/pathFinder.js'
export default class recursivepathFinder extends pathFinder{
    constructor(intialX, intialY, finalX, finalY, maze,speed) {
        super(intialX, intialY, finalX, finalY, maze,speed)
        this.paths = this.generatePath([],intialY, intialX );

    }

    findPath(){
        this.paths=this.generatePath([],this.rowI,this.columnI)
    }
    generatePath(paths, curRow, curColumn, prevRow = -10, prevColumn = -10) {
        paths.push(new path(curRow, curColumn,prevRow,prevColumn))
        this.allPaths.push(new path(curRow, curColumn,prevRow,prevColumn))
        if (curRow == this.row && curColumn == this.column) {
            return paths
        }

        let neighbours = this.maze.findNeighbours(this.maze.arr[curRow][curColumn], true)
        for (let i = 0; i < neighbours.length; i++) {

            let [row, column] = neighbours[i]
            if (!(row == prevRow && column == prevColumn)) {
                let trow = Math.min(row, curRow)
                let tcolumn = Math.min(column, curColumn)
                if (row == curRow && !(this.maze.arr[row][tcolumn].east)) {
                    let temp = Array.from(paths)

                    let final = this.generatePath(temp, row, column, curRow, curColumn)
                    if (final.length > 0) return final
                }
                if (column == curColumn && !this.maze.arr[trow][column].south) {
                    let temp = Array.from(paths)
                    
                    let final = this.generatePath(temp, row, column, curRow, curColumn)

                    if (final.length > 0) return final
                }
            }

        }
        return []
    }



}