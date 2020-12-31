import superMaze from '../../general/maze.js'
import visuals from '../../general/visualize.js'
export default class maze extends superMaze{
	constructor(sx,sy){
		super(sx,sy,"none")
		this.sets=[[]]
		this.visual=[]
		this.createSets()
	}

	createSets(){
		for(let i=0;i<this.rows;i++){
			for(let j=0;j<this.columns;j++){
					this.arr[i][j].setSet(this.sets.length)
					this.sets.push([this.arr[i][j]])
					super.addWalls(this.arr[i][j])
			}
		}
	}

	connect(c1,c2){
		if(c1.getSet()!=c2.getSet()){
			this.visit(c1)
			this.visit(c2)
			if(this.sets[c1.getSet()].length>this.sets[c2.getSet()].length){
				this.combineSets(c1.getSet(),c2.getSet())
			}
			else{
				this.combineSets(c2.getSet(),c1.getSet())
			}
			let m=super.connect(c1,c2)
			this.visual.push(new visuals("connection",m[0],m[1],m[2]))
		}
	}

	visit(c){
		if(!c.getVisited())this.visual.push(new visuals("visit",c.getRow(),c.getColumn()))
		super.visit(c)
	}

	combineSets(set,set2){
		for(let i=0;i<this.sets[set2].length;i++){
			let n=this.sets[set2][i]
			this.sets[set].push(this.arr[n.getRow()][n.getColumn()])
			this.arr[n.getRow()][n.getColumn()].setSet(set)
		}
	}

	

}
