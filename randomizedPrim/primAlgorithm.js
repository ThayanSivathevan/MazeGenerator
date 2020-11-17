import cell from '../general/cell'
import maze from './maze'
import visualize from '../general/visualize'
export default class primAlgorithm{
	constructor(x,y,px,py){
		this.m=new maze(x,y)
		this.x=x
		this.y=y
		this.px=px
		this.py=py

	}

	createMaze(){
		this.m.visit(this.m.arr[this.px][this.py])
		this.m.addWalls(this.m.arr[this.px][this.py])
		let l=10000
		while(this.m.walls.length!=0 && l!=0){
			let n=Math.floor(Math.random() * this.m.walls.length);
			let row=this.m.walls[n].row
			let column=this.m.walls[n].column
			let second=this.m.walls[n].second
			if(this.m.walls[n].type=="south"){
				this.m.connect(this.m.arr[row][column],this.m.arr[second][column])
			}
			else{
				this.m.connect(this.m.arr[row][column],this.m.arr[row][second])
			}
			this.m.deleteWall(n) 
			l--;
		}
	}






}
