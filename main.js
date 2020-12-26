
import depthsearch from './randomizedDepth/RandomizedDepthFirstSearch.js'
import primAlgorithm from './randomizedPrim/primAlgorithm.js'
import kruskalalgorithm from './randomizedKruskalAlgorithm/randomizeKruskal.js'
import aldousBroder from './aldousBroder/aldousBroder.js'
import division from './recursiveDivision/recursiveDivision.js'

var can = document.getElementById("canvas");
var ct = can.getContext("2d");
var n;

var cont = false;
var generate = document.getElementById("generate");
var visual = document.getElementById("visualize");
var selection=document.getElementById("Algorithm-select");
var body = document.getElementById("change");
var range = document.getElementById("Speed");
var Size = document.getElementById("Size");
const mazeCreation=()=>{
	n=findMaze();
	n.drawMaze(ct)
}

mazeCreation();

change.onload=()=>{
	mazeCreation()
}

generate.onclick = () => {
	mazeCreation()
	
}

visual.onclick = () => {

	n = findMaze();
	n.cont=true;
	n.visualize(ct)
}

range.onchange=()=>{
	if(n){
		if(n.cont){
			n.speed=parseInt(range.value)*-1
			n.clear()
			n.visualize(ct)
		}
	}
}
function findMaze() {
	var nameValue = document.getElementById("Algorithm-select").value;
	let m;
	let speed=parseInt(range.value)*-1
	let size=parseInt(Size.value)
	if(n){
		n.clear();
	}
	clearPage();
	if (nameValue == "k") {
		m = new kruskalalgorithm(size, size,speed)
	}
	else if (nameValue == "p") {
		m = new primAlgorithm(size, size, 0, 0,speed)
	}
	else if (nameValue == "r") {
		m = new depthsearch(size, size, 0, 0,speed)
	}
	else if (nameValue == "a") {
		m = new aldousBroder(size, size, 0, 0,speed)
	}
	else if(nameValue=="d"){
		m=new division(size,size,speed)
	}
	m.createMaze()
	return m;
}

function clearPage(){
	ct.fillStyle = "#000000";
	ct.fillRect(0,0,1000,1000);
}
canvas.addEventListener('mousedown', (e) => {

})


