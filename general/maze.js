import cell from './cell.js'
import wall from './wall.js'
export default class maze{
	
	constructor(sx,sy){
		this.rows=sx
		this.columns=sy
		this.arr=[[]]
		this.walls=[]
		this.initCells();
	}

	initCells(){
		for(let i=0;i<this.rows;i++){
			this.arr[i]=[]
			for(let j=0;j<this.columns;j++){
				let n=new cell(i,j)
				this.arr[i][j]=n
			}
		}
	}

	addWalls(c){
		let neigh=this.findNeighbours(c)
		for(let i=0;i<neigh.length;i++){
			if(neigh[i][0]>c.getRow()){
				this.walls.push(new wall("south",c.getRow(),c.getColumn(),neigh[i][0]))
			}
			else if(neigh[i][0]<c.getRow()) {
				this.walls.push(new wall("south",neigh[i][0],c.getColumn(),c.getRow()))
			}
			else if(neigh[i][1]>c.getColumn()){
				this.walls.push(new wall("east",c.getRow(),c.getColumn(),neigh[i][1]))
			}
			else if(neigh[i][1]<c.getColumn()){
				this.walls.push(new wall("east",c.getRow(),neigh[i][1],c.getColumn()))

			}
		}
	}
	
	deleteWall(n){
		this.walls[n]=this.walls.pop()
	}
	findNeighbours(c,boole=false){
		let neighbours=[]
		if(c.getRow()-1>=0){
			if((!this.arr[c.getRow()-1][c.getColumn()].getVisited())||boole){
				neighbours.push([c.getRow()-1,c.getColumn()])
			}
		}
		if(c.getRow()+1<this.rows){
			if((!this.arr[c.getRow()+1][c.getColumn()].getVisited())||boole){
				neighbours.push([c.getRow()+1,c.getColumn()])
			}
		}
		if(c.getColumn()-1>=0){
			if((!this.arr[c.getRow()][c.getColumn()-1].getVisited())||boole){
				neighbours.push([c.getRow(),c.getColumn()-1])
			}
		}
		if(c.getColumn()+1<this.columns){
			if((!this.arr[c.getRow()][c.getColumn()+1].getVisited())||boole){
				neighbours.push([c.getRow(),c.getColumn()+1])
			}
		}
		return neighbours
	}

	connect(c1,c2){
		let n;
		
		
			if(c1.getRow()==c2.getRow()){
				if(c1.getColumn()>c2.getColumn()){
					this.arr[c2.getRow()][c2.getColumn()].south=false;
					n=[c2.getRow(),c2.getColumn(),"south"]	
					
				}
				else if(c1.getColumn()<c2.getColumn()){
					this.arr[c1.getRow()][c1.getColumn()].south=false;
					n=[c1.getRow(),c1.getColumn(),"south"]	

				}
			}
			else if (c1.getColumn()==c2.getColumn()){
				if(c1.getRow()>c2.getRow()){
					this.arr[c2.getRow()][c2.getColumn()].east=false;
					n=[c2.getRow(),c2.getColumn(),"east"]	
				}
				else if(c1.getRow()<c2.getRow()){
					this.arr[c1.getRow()][c1.getColumn()].east=false;
					n=[c1.getRow(),c1.getColumn(),"east"]	
					
				}
			}
		
		return n;
	}

	visit(c){
		this.arr[c.getRow()][c.getColumn()].setVisited()
	}
}
