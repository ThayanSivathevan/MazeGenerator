import cell from '../general/cell.js'
import maze from './maze.js'
import Stack from '../general/stack.js'
import visualize from '../general/visualize.js'
import algorithm from '../general/algorithm.js'
import wall from './wall.js'
export default class recursiveDivision extends algorithm {

    constructor(x, y, speed = 0) {
        super(x, y, new maze(x, y), speed + 30)
        this.s = new Stack()

    }

    createMaze() {
        this.m.divideMaze(0, this.x, 0, this.y);
        this.m.convertMaze()

    }

    //not used
    drawMazeAlt(ct) {
        ct.fillStyle = "#FFFFFF";
        ct.fillRect(0, 0, this.mul * this.x, this.mul * this.y)
        ct.fillStyle = "#000000";
        for (let i = 0; i < this.m.walls.length; i++) {
            let n = this.m.walls[i];
            if (n.orientation === "h") {
                ct.fillRect(n.pos * this.mul, n.loc * this.mul, n.size * this.mul, 20)
                ct.fillStyle = "#FFFFFF";
                ct.fillRect(n.open * this.mul + 20, n.loc * this.mul, this.size, 20)
                ct.fillStyle = "#000000";

            }
            else {
                ct.fillRect(n.loc * this.mul, n.pos * this.mul, 20, n.size * this.mul)

                ct.fillStyle = "#FFFFFF";
                ct.fillRect(n.loc * this.mul, n.open * this.mul + 20, 20, this.size)
                ct.fillStyle = "#000000";

            }
        }
        ct.fillRect(0, 0, this.x * this.mul, 10)
        ct.fillRect(0, 0, 10, this.y * this.mul)
        ct.fillRect(this.x * this.mul - 10, 0, 10, this.y * this.mul)
        ct.fillRect(0, this.y * this.mul - 10, this.x * this.mul, 10)
    }

    drawMaze(ct) {
        super.drawMaze(ct)
    }

    visualize(ct, intialX, intialY, finalX, finalY) {
        let i = 0
        ct.fillStyle = "#FFFFFF";
        ct.fillRect(0, 0, this.mul * this.x, this.mul * this.y)
        ct.fillStyle = "#FFFFFF";
        this.id = setInterval(animate, this.speed);
        let id = this.id;
        let t = this.m
        let mul = this.mul
        let size = this.size
        let cur = this;
        this.cont = true
        if (this.iter != 0) {
            while (i != this.iter) {
                animate(true, i)
                i++;
            }
        }
        function animate(redo = false, i = cur.iter) {
            if (cur.iter == t.walls.length) {
                clearInterval(id);
                cur.iter = true
                cur.cont = false;
                cur.drawMaze(ct)
                cur.drawPoints(ct,intialX, intialY, finalX, finalY)
            }
            else {
                let n = t.walls[i];
                if (n.orientation === "h") {
                    ct.fillRect(n.pos * mul, n.loc * mul, n.size * mul, 20)
                    ct.fillStyle = "#FFFFFF";
                    ct.fillRect(n.open * mul + 20, n.loc * mul, size, 20)
                    ct.fillStyle = "#000000";

                }
                else {
                    ct.fillRect(n.loc * mul, n.pos * mul, 20, n.size * mul)

                    ct.fillStyle = "#FFFFFF";
                    ct.fillRect(n.loc * mul, n.open * mul + 20, 20, size)
                    ct.fillStyle = "#000000";

                }
                if (!redo) cur.iter++;

            }

        }
    }


    clear() {
        clearInterval(this.id);
        this.cont = false;
    }
}