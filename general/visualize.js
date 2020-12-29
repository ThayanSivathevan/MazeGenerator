export default class visualize{
	constructor(type,row,column,direction){
			this.type=type
			this.row=row
			this.column=column
			if(type=="connection")this.direction=direction
	}
}