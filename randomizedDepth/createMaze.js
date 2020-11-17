
export default class maze extends superMaze{
	
	constructor(sx,sy){
		super(sx,sy)
		this.visual=[]
	}


	

	connect(c1,c2){
		let n=super.connect(c1,c2)
		this.visual.push(new visualize("connection",n[0],n[1],n[2]))
	}


	visit(c){
		super.visit(c)
		this.visual.push(new visualize("visit",c.getRow(),c.getColumn()))
	}
}

