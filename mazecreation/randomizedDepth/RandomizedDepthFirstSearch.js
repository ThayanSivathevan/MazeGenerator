import maze from './maze.js'
import Stack from '../../general/stack.js'
import algorithm from '../../general/algorithm.js'
export default class depthsearch extends algorithm{
	constructor(x,y,px,py,speed=10){
		super(x,y,new maze(x,y),speed)
		this.s=new Stack()
		this.px=px
		this.py=py
		
	}

	createMaze(){
		this.s=new Stack()
		this.s.push(this.m.arr[this.px][this.py])


		this.m.visit(this.m.arr[this.px][this.py])
		while (! this.s.isEmpty()){
			let t=this.s.pop()
			let temp=[t.getRow(),t.getColumn()]
			let arr=this.m.findNeighbours(this.m.arr[temp[0]][temp[1]])
			if(arr.length>0){
				let n=Math.floor(Math.random() * arr.length); 

				for(let i=0;i<arr.length;i++){
					this.m.visit(this.m.arr[arr[i][0]][arr[i][1]])
					this.m.connect(this.m.arr[temp[0]][temp[1]],this.m.arr[arr[i][0]][arr[i][1]])
					if(i!=n){
						this.s.push(this.m.arr[arr[i][0]][arr[i][1]])
					}
				}
				this.s.push(this.m.arr[arr[n][0]][arr[n][1]])		
			}
		}
	}





}
