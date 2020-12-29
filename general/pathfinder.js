import path from "./path.js";

export default class pathFinder {
    constructor(intialX, intialY, finalX, finalY, maze, speed) {
        this.column = finalX;
        this.row = finalY
        this.columnI = intialX;
        this.rowI = intialY;
        this.maze = maze;
        this.id;
        this.mul = 50
        this.size = 30
        this.speed = speed
        this.cont = false;
        this.iter = 0
        this.paths = []
        this.allPaths=[]
    }


    drawPath(ct) {
        ct.fillStyle = "#FF0000";
        for (let i = 1; i < this.paths.length; i++) {
            
            let row = Math.min(this.paths[i].prevRow, this.paths[i].row)
            let column = Math.min(this.paths[i].prevColumn, this.paths[i].column)
            
            if (this.paths[i].prevColumn == this.paths[i].column) {
                ct.fillRect(this.paths[i].column * this.mul + 10, row * this.mul + 10, this.size, this.mul)
            }
            if (this.paths[i].prevRow == this.paths[i].row) {
                ct.fillRect(column * this.mul + 10, this.paths[i].row * this.mul + 10, this.mul, this.size)
            }
            ct.fillRect(this.paths[i].column * this.mul + 10, this.paths[i].row * this.mul + 10, this.size, this.size)
        }
        ct.fillStyle = "#0000FF";
        ct.fillRect(this.paths[0].column * this.mul + 10, this.paths[0].row * this.mul + 10, this.size, this.size)
        ct.fillRect(this.paths[this.paths.length-1].column * this.mul + 10, this.paths[this.paths.length-1].row * this.mul + 10, this.size, this.size)
    }

    visualizePath(ct) {
        let n=1;
        this.id = setInterval(animate, this.speed);
        let id = this.id;
        let mul = this.mul
        let size = this.size
        this.cont = true
        let paths=this.allPaths
        let cur = this;
        ct.fillStyle = "#FF0000";
        if (this.iter != 0) {
            while (n != this.iter) {
                animate(true, n)
                n++;
            }
        }
        function animate(redo = false, n = cur.iter+1) {
            if (n == paths.length || (paths[n-1].row==cur.row && paths[n-1].column==cur.column)) {
                clearInterval(id);
                cur.cont = false
                cur.iter = 0
                ct.fillStyle = "#0000FF";
                ct.fillRect(paths[0].column * mul + 10, paths[0].row * mul + 10, size, size)
                ct.fillRect(paths[paths.length-1].column * mul + 10, paths[paths.length-1].row * mul + 10, size, size)
            }
            else {
                let temp;
                let row = Math.min(paths[n].prevRow, paths[n].row)
                let column = Math.min(paths[n].prevColumn, paths[n].column)
                
                if (paths[n].prevColumn ==paths[n].column) {
                    ct.fillRect(paths[n].column * mul + 10, row * mul + 10, size, mul)
                }
                if (paths[n].prevRow == paths[n].row) {
                    ct.fillRect(column * mul + 10, paths[n].row * mul + 10, mul, size)
                }
                
                ct.fillRect(paths[n].column * mul + 10, paths[n].row * mul + 10, size, size)
                if (!redo) cur.iter++;
            }
            ct.fillStyle = "#0000FF";
            ct.fillRect(paths[0].column * mul + 10, paths[0].row * mul + 10, size, size)
            ct.fillRect(paths[paths.length-1].column * mul + 10, paths[paths.length-1].row * mul + 10, size, size)
            ct.fillStyle = "#FF0000";

    }}



    clear() {
        clearInterval(this.id);
        this.cont = false;
    }
}