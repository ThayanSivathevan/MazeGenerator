import superMaze from '../general/maze.js'
import wall from '../general/wall.js'
import visuals from '../general/visualize.js'
export default class maze extends superMaze{
	
	constructor(sx,sy){
		super(sx,sy)
		this.visual=[]
	}


	
	

	connect(c1,c2){
		if(c1.getVisited()!=c2.getVisited() && (c1.getVisited() || c2.getVisited())){
			if(c1.getVisited()){
				this.visit(c2)
				this.addWalls(c2)
			}
			else{
				this.visit(c1)
				this.addWalls(c1)
			}
			let m=super.connect(c1,c2)
			this.visual.push(new visuals("connection",m[0],m[1],m[2]))
		}
	}

	visit(c){
		super.visit(c)
		this.visual.push(new visuals("visit",c.getRow(),c.getColumn()))
	}


}

