
import depthsearch from './randomizedDepth/RandomizedDepthFirstSearch.js'
import primAlgorithm from './randomizedPrim/primAlgorithm.js'
import kruskalalgorithm from './randomizedKruskalAlgorithm/randomizeKruskal.js'
import aldousBroder from './aldousBroder/aldousBroder.js'
import division from './recursiveDivision/recursiveDivision.js'

var can = document.getElementById("canvas");
var ct = can.getContext("2d");
var n;

var cont = false;
var generate = document.getElementById("generate")
var visual = document.getElementById("visualize")
var selection=document.getElementById("Algorithm-select")
var body = document.getElementById("change");

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
	n.visualize(ct)
}

function findMaze() {
	var nameValue = document.getElementById("Algorithm-select").value;
	let m
	if(n){
		n.clear();
	}
	cont = false
	if (nameValue == "k") {
		m = new kruskalalgorithm(20, 20, 0, 0)
	}
	else if (nameValue == "p") {
		m = new primAlgorithm(20, 20, 0, 0)
	}
	else if (nameValue == "r") {
		m = new depthsearch(20, 20, 0, 0)
	}
	else if (nameValue == "a") {
		m = new aldousBroder(20, 20, 0, 0)
	}
	else if(nameValue=="d"){
		m=new division(20,20)
	}
	m.createMaze()
	return m;
}

canvas.addEventListener('mousedown', (e) => {

})


