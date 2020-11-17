export default class Stack {
    constructor(){
        this.data = [];

    }

    peek(){
    	return this.data[this.data.length-1]
    }

    pop(){
    	let t=this.data.pop()
    	return t
    }

    push(x){
    	this.data.push(x)
    }

    isEmpty(){
    	return this.data.length==0 ? true : false
    }

    length(){
    	return this.data.length
    }
}