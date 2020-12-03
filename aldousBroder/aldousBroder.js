import cell from '../general/cell.js'
import maze from './maze.js'
import Stack from '../general/stack.js'
import visualize from '../general/visualize.js'
export default class depthsearch{
	constructor(x,y,px,py){
		this.m=new maze(x,y)
		this.s=new Stack()
		this.x=x
		this.y=y
		this.px=px
		this.py=py
        this.chosen;
	}

	createMaze(){
        this.m.visit(this.m.arr[this.px][this.py])
        this.chosen=this.m.arr[this.px][this.py]
        while(this.m.unvisited!=0){
            this.chosen=this.m.chooseNeighbour(this.chosen);
        }
	}





}