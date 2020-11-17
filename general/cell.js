
export default class cell{
	constructor( row,  column,set){
		this.row=row
		this.column=column
		this.visited=false
		this.south=true
		this.east=true
		if(arguments.length){
			this.set=set
		}
	}
	 getRow(){
		return this.row

	}
	 getColumn(){
		return this.column
	}
	 getVisited(){
		return this.visited
	}
	setVisited(){
		this.visited=true
	}
	getEast(){
		return this.east
	}
	getSouth(){
		return this.south
	}

	getSet(){
		return this.set
	}

	setSet(set){
		this.set=set
	}
}

