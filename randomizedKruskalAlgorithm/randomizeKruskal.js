
export default class kruskal{
	constructor(x,y){
		this.m=new maze(x,y)
		this.x=x
		this.y=y

	}

	createMaze(){
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
