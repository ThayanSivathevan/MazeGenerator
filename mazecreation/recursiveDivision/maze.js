import superMaze from '../../general/maze.js'
import wall from './wall.js'
export default class maze extends superMaze {
    constructor(sx, sy) {
        super(sx, sy)
        this.visual = []
        this.walls = []
        this.visitAll()
    }
    visitAll() {
        this.arr.forEach((e, i) => {
            e.forEach((d,j)=> {
                super.visit(d)
                if(i!=this.rows-1)d.south=false
                if(j!=this.columns-1)d.east=false

            })
        })
    }
    divideMaze(row, height, column, width) {
        if (width < 2 || height < 2 || row > this.rows || column > this.columns) return;
        let p, w;

        let horizontal = this.chooseOrientation(width, height)
        if (horizontal) {
            p = this.getRndInteger(row + 1, row + height)
            w = this.getRndInteger(0, width)
            this.walls.push(new wall("h", p, column, width, column + w))
            this.divideMaze(row, p - row, column, width)
            this.divideMaze(p, row + height - p, column, width)
        }
        else {
            p = this.getRndInteger(column + 1, column + width)
            w = this.getRndInteger(0, height)
            this.walls.push(new wall("v", p, row, height, row + w))
            this.divideMaze(row, height, column, p - column)
            this.divideMaze(row, height, p, column + width - p)
        }
    }

    chooseOrientation(width, height) {
        if (width < height) {
            return true
        }
        else if (width > height) {
            return false;
        }
        return Math.floor(Math.random() * 2) == 1
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    convertMaze() {
        this.walls.forEach((w) => {
            if (w.orientation === "h") {
                for(let i=w.pos;i<w.pos+w.size;i++){
                    if(w.open!=i)this.arr[w.loc-1][i].south=true
                }
            }
            else {
                for(let i=w.pos;i<w.pos+w.size;i++){
                    if(w.open!=i)this.arr[i][w.loc-1].east=true
                }
            }
        })
    }
}

