export default class algorithm {
    constructor(x, y, m, speed = 10) {
        this.x = x
        this.y = y
        this.m = m
        this.id;
        this.mul = 50
        this.size = 30
        this.speed = speed
        this.cont = false;
        this.iter = 0
    }

    drawMaze(ct) {
        ct.fillStyle = "#000000";
        ct.fillRect(0, 0, this.mul * this.x, this.mul * this.y)
        ct.fillStyle = "#FFFFFF";
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                ct.fillRect(i * this.mul + 10, j * this.mul + 10, this.size, this.size)

                if (!this.m.arr[i][j].south) {
                    ct.fillRect(j * this.mul + 10, i * this.mul + 10, this.size, this.mul)
                }
                if (!this.m.arr[i][j].east) {
                    ct.fillRect(j* this.mul + 10, i * this.mul + 10, this.mul, this.size)
                }

            }
        }

    }

    visualize(ct, intialX, intialY, finalX, finalY) {
        let n = 0;
        ct.fillStyle = "#000000";
        ct.fillRect(0, 0, this.mul * this.x, this.mul * this.y)
        ct.fillStyle = "#FFFFFF";
        this.id = setInterval(animate, this.speed);
        let id = this.id;
        let t = this.m
        let mul = this.mul
        let size = this.size
        this.cont = true
        let cur = this;
        if (this.iter != 0) {
            while (n != this.iter) {
                animate(true, n)
                n++;
            }
        }
        function animate(redo = false, n = cur.iter) {
            if (cur.iter == t.visual.length + 1) {
                clearInterval(id);
                cur.cont = false
                cur.iter = 0
                cur.drawMaze(ct)
                cur.drawPoints(ct, intialX, intialY, finalX, finalY)
            }
            else {
                let temp;
                if (n != t.visual.length) {
                    temp = t.visual[n]
                    drawVisual(ct, temp, "#0000FF", mul, size)
                }
                if (n > 0) {
                    temp = t.visual[n - 1]
                    drawVisual(ct, temp, "#FFFFFF", mul, size)
                }
                if (!redo) cur.iter++;
            }

            function drawVisual(ct, temp, style, mul, size) {
                ct.fillStyle = style;
                if (temp.type == "visit") {
                    ct.fillRect(temp.column * mul + 10, temp.row * mul + 10, size, size)
                }
                else {
                    if (temp.direction == "south") {
                        ct.fillRect(temp.column * mul + 10, temp.row * mul + 10, size, mul)
                    }
                    else {
                        ct.fillRect(temp.column * mul + 10, temp.row * mul + 10, mul, size)
                    }
                }
            }

        }
    }

    drawPoints(ct, intialX, intialY, finalX, finalY) {
        ct.fillStyle = "#0000FF"
        ct.fillRect(intialX * this.mul + 10, intialY * this.mul + 10, this.size, this.size)
        ct.fillRect(finalX * this.mul + 10, finalY * this.mul + 10, this.size, this.size)
    }


    clear() {
        clearInterval(this.id);
        this.cont = false;
    }
}