import depthsearch from './randomized-depth/Randomized-depth-first-search'
import primAlgorithm from './randomized-prim/primAlgorithm'
import kruskalalgorithm from './randomized-kruskal-algorithm/randomize-kruskal.js'

var change=document.getElementById("body")

var can = document.getElementById("canvas");
var ct = can.getContext("2d");


// change.onChange(){
// 	ct = can.getContext("2d");
// }
var id;
var cont=false;
var generate=document.getElementById("generate")
generate.onclick= ()=>{
	clearInterval(id);
	var nameValue = document.getElementById("Algorithm-select").value;
	let n;
	cont=false
	if(nameValue=="k"){
		n=new kruskalalgorithm(20,20,0,0)
	}
	else if(nameValue=="p"){
		n=new primAlgorithm(20,20,0,0)
	}
	else if(nameValue=="r"){
		n= new depthsearch(20,20,0,0)
	}
	cont=true
	n.createMaze()
	drawMaze(n)
}

var visual=document.getElementById("visualize")
visual.onclick= ()=>{
	clearInterval(id);
	var nameValue = document.getElementById("Algorithm-select").value;
	let n;
	cont=false
	if(nameValue=="k"){
		n=new kruskalalgorithm(20,20,0,0)
	}
	else if(nameValue=="p"){
		n=new primAlgorithm(20,20,0,0)
	}
	else if(nameValue=="r"){
		n= new depthsearch(20,20,0,0)
	}
	n.createMaze()
	cont=true
	visualize(n)
}


function drawMaze(n){
	ct.fillStyle = "#000000";
	ct.fillRect(0,0,50*n.x,50*n.y)
	ct.fillStyle = "#FFFFFF";
	for(let i=0;i<n.x;i++){
		for(let j=0;j<n.y;j++){
			if(n.m.arr[i][j].getVisited()){
				ct.fillRect(i*50+10,j*50+10,30,30)
				
				if(!n.m.arr[i][j].south){
					ct.fillRect(i*50+10,j*50+10,30,50)
				}
				if(!n.m.arr[i][j].east){
					ct.fillRect(i*50+10,j*50+10,50,30)
				}
			}
		}
	}
	
}

function visualize(d){
	let n=0
	ct.fillStyle = "#000000";
	ct.fillRect(0,0,50*d.x,50*d.y)
	ct.fillStyle = "#FFFFFF";
	id = setInterval(animate, 10);
	let t=d.m
	function animate(){
		if (n == t.visual.length && cont) {
				clearInterval(id);
			}
			else{
			let temp=t.visual[n]
			if(temp.type=="visit"){
				ct.fillRect(temp.x*50+10,temp.y*50+10,30,30)
			}	
			else{
				if(temp.direction=="south"){
					ct.fillRect(temp.x*50+10,temp.y*50+10,30,50)
				}
				else {
					ct.fillRect(temp.x*50+10,temp.y*50+10,50,30)
				}
			}
			n++;
		}

	}
}

canvas.addEventListener('mousedown', (e)=>{

})


 
