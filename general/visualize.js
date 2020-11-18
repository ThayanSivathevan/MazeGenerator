export default class visualize{
	constructor(type,x,y,direction){
			this.type=type
			this.x=x
			this.y=y
			if(type=="connection")this.direction=direction
	}
}