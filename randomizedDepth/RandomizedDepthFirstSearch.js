import cell from '../general/cell.js'
import maze from './createMaze.js'
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
