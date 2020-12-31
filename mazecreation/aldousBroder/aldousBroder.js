import maze from './maze.js'
import Stack from '../../general/stack.js'
import algorithm from '../../general/algorithm.js'
export default class depthsearch extends algorithm{
	constructor(x,y,px,py,speed=10){
		super(x,y,new maze(x,y),speed)
		this.s=new Stack()
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