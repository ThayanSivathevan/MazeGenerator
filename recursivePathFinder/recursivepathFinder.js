import path from '../general/path.js'
export default class pathFinder {
    constructor(intialX, intialY, finalX, finalY, maze) {
        this.column = finalX;
        this.row = finalY
        this.columnI = intialX;
        this.rowI = intialY;
        this.maze = maze;
        this.length = 0
        console.log(this.row,this.column)
        this.paths = this.generatePath([],intialY, intialX );

    }


    generatePath(paths, curRow, curColumn, prevRow = -10, prevColumn = -10) {
        if (this.length > 100) return []
        this.length += 1
        paths.push(new path(curRow, curColumn))
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
                    console.log(curRow, curColumn, row, column, tcolumn, this.maze.arr[row][tcolumn].east,this.maze.arr[row][tcolumn].south)
                    let final = this.generatePath(temp, row, column, curRow, curColumn)
                    if (final.length > 0) return final
                }
                if (column == curColumn && !this.maze.arr[trow][column].south) {
                    let temp = Array.from(paths)
                    console.log(curRow, curColumn, row, column, trow,this.maze.arr[trow][column].east,this.maze.arr[trow][column].south )
                    let final = this.generatePath(temp, row, column, curRow, curColumn)

                    if (final.length > 0) return final
                }
            }

        }
        return []
    }



    drawPath() {

    }

    visualizePath() {

    }
}