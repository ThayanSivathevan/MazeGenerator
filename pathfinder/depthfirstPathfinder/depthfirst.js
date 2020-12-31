import path from '../../general/path.js'
import pathFinder from '../../general/pathfinder.js'
import stack from '../../general/stack.js'
import tree from '../../general/tree.js'
export default class depthFirst extends pathFinder {
    constructor(intialX, intialY, finalX, finalY, maze, speed) {
        super(intialX, intialY, finalX, finalY, maze, speed)
        this.cells = []
        this.stack = new stack()
        this.stack.push(new tree(this.rowI, this.columnI))
        this.intializeMaze()
    }

    intializeMaze() {
        for (let i = 0; i < this.maze.rows; i++) {
            this.cells[i] = []
            for (let j = 0; j < this.maze.columns; j++) {
                let n = false
                this.cells[i][j] = n
            }
        }
    }

    findPath() {
        while (true) {
            let n = this.stack.pop()
            if (n.parent) {
                this.allPaths.push(new path(n.row, n.column, n.parent.row, n.parent.column))
            }
            else this.allPaths.push(new path(n.row, n.column))

            if (n.row == this.row && n.column == this.column) {
                this.generatePath(n);
                break;
            }
            this.cells[n.row][n.column] = true
            let paths = this.maze.findNeighbours(this.maze.arr[n.row][n.column], true)
            for (let i = 0; i < paths.length; i++) {
                let [row, column] = paths[i]
                if (!this.cells[row][column]) {
                    let trow = Math.min(row, n.row)
                    let tcolumn = Math.min(column, n.column)
                    if ((row == n.row && !(this.maze.arr[row][tcolumn].east)) || (column == n.column && !this.maze.arr[trow][column].south))
                        this.stack.push(new tree(row, column, n))
                }
            }
        }
    }


    generatePath(child) {
        while (child.parent) {
            this.paths.unshift(new path(child.row, child.column, child.parent.row, child.parent.column))
            child = child.parent
        }
        this.paths.unshift(new path(child.row, child.column))
    }

}