import cell from '../general/cell.js'
import wall from '../general/wall.js'
import superMaze from '../general/maze.js'
import visualize from '../general/visualize.js'
export default class maze extends superMaze{
    
    constructor(sx,sy){
       super(sx,sy)
       this.unvisited=sx*sy; 
       this.visual=[]
    }


    visit(c){
        super.visit(c)
        this.visual.push(new visualize("visit",c.getRow(),c.getColumn()))
        this.unvisited-=1
    }

    chooseNeighbour(c){
        let n = super.findNeighbours(c,true);
        let x =Math.floor(Math.random()*n.length);
        if(!this.arr[n[x][0]][n[x][1]].getVisited()){
            this.visit(this.arr[n[x][0]][n[x][1]])
            this.connect(c,this.arr[n[x][0]][n[x][1]])
        }
        return this.arr[n[x][0]][n[x][1]]

    }

    connect(c1,c2){
		let n=super.connect(c1,c2)
		this.visual.push(new visualize("connection",n[0],n[1],n[2]))
	}

}