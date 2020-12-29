
import depthsearch from './randomizedDepth/RandomizedDepthFirstSearch.js'
import primAlgorithm from './randomizedPrim/primAlgorithm.js'
import kruskalalgorithm from './randomizedKruskalAlgorithm/randomizeKruskal.js'
import aldousBroder from './aldousBroder/aldousBroder.js'
import division from './recursiveDivision/recursiveDivision.js'
import rPath from './recursivePathFinder/recursivepathFinder.js'
import pathFinder from './recursivePathFinder/recursivepathFinder.js'


var can = document.getElementById("canvas");
var ct = can.getContext("2d");
var n;

var cont = false;
var generate = document.getElementById("generate");
var visual = document.getElementById("visualize");
var generateP = document.getElementById("generateP");
var selection = document.getElementById("Algorithm-select");
var body = document.getElementById("change");
var range = document.getElementById("Speed");
var Size = document.getElementById("Size");
var path;
var size;

var intialX = 0, intialY = 0;
var finalX = 19, finalY = 19;

var dragI = false;
var dragF = false;
const mazeCreation = () => {
	n = findMaze();
	n.drawMaze(ct)
	n.drawPoints(ct, intialX, intialY, finalX, finalY)
}

mazeCreation();

change.onload = () => {
	mazeCreation()
}

generate.onclick = () => {
	mazeCreation()

}

visual.onclick = () => {

	n = findMaze();
	n.cont = true;
	n.visualize(ct, intialX, intialY, finalX, finalY)
}

range.onchange = () => {

		if (n.cont) {
			n.speed = parseInt(range.value) * -1
			n.clear()
			n.visualize(ct, intialX, intialY, finalX, finalY)
		}
	
}

generateP.onclick=()=>{
	n.clear()
	console.log(n.m.arr)
	n.drawMaze(ct, intialX, intialY, finalX, finalY)
	n.drawPoints(ct, intialX, intialY, finalX, finalY)
	
	drawgrid()
	path=new pathFinder(intialX,intialY,finalX,finalY,n.m)
	
	console.log(path.paths)

}
function findMaze() {
	var nameValue = document.getElementById("Algorithm-select").value;
	let m;
	let speed = parseInt(range.value) * -1
	size = parseInt(Size.value)

	finalX = Math.min(finalX, size - 1)
	finalY = Math.min(finalY, size - 1)
	intialX = Math.min(intialX, size - 1)
	intialY = Math.min(intialY, size - 1)
	if (n) {
		n.clear();
	}
	clearPage();
	if (nameValue == "k") {
		m = new kruskalalgorithm(size, size, speed)
	}
	else if (nameValue == "p") {
		m = new primAlgorithm(size, size, 0, 0, speed)
	}
	else if (nameValue == "r") {
		m = new depthsearch(size, size, 0, 0, speed)
	}
	else if (nameValue == "a") {
		m = new aldousBroder(size, size, 0, 0, speed)
	}
	else if (nameValue == "d") {
		m = new division(size, size, speed)
	}
	m.createMaze()
	return m;
}

function clearPage() {
	ct.fillStyle = "#000000";
	ct.fillRect(0, 0, 1000, 1000);
}
function drawgrid(){
	for(let i=0;i<20;i++){
		for(let j=0;j<20;j++){
			ct.beginPath()
			ct.rect(i * n.mul + 10, j * n.mul + 10, n.size, n.size)
			ct.stroke();
		}
	}
}
canvas.addEventListener('mousedown', (event) => {
	let x = Math.floor(event.offsetX / n.mul);
	let y = Math.floor(event.offsetY / n.mul);
	if (n) {
		if (!n.cont) {
			if (intialX == x && intialY == y) dragI = true
			if (finalX == x && finalY == y) dragF = true
		}
	}

})

canvas.addEventListener('mousemove', (event) => {
	let x = Math.floor(event.offsetX / n.mul);
	let y = Math.floor(event.offsetY / n.mul);
	if (x < size && y < size) {
		if (dragI) {
			intialX = x
			intialY = y

			n.drawMaze(ct)
			n.drawPoints(ct, intialX, intialY, finalX, finalY)
		}
		else if (dragF) {
			finalX = x
			finalY = y
			n.drawMaze(ct)
			n.drawPoints(ct, intialX, intialY, finalX, finalY)
		}
	}
})
canvas.addEventListener('mouseup', (event) => {
	dragI = false;
	dragF = false;
})

canvas.addEventListener('mouseover', (event) => {
	dragI = false;
	dragF = false;
})