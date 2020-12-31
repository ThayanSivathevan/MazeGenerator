export default class queue{
    constructor(){
        this.arr=[]
        this.i=0
    }

    push(data){
        this.arr.push(data)
    }

    pop(){
        let x=this.arr.shift()
        return x
    }

    length(){
        return this.arr.length;
    }
}