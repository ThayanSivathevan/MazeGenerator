
import depthsearch from './mazecreation/randomizedDepth/RandomizedDepthFirstSearch.js'
import primAlgorithm from './mazecreation/randomizedPrim/primAlgorithm.js'
import kruskalalgorithm from './mazecreation/randomizedKruskalAlgorithm/randomizeKruskal.js'
import aldousBroder from './mazecreation/aldousBroder/aldousBroder.js'
import division from './mazecreation/recursiveDivision/recursiveDivision.js'
import recursivePathFinder from './pathfinder/recursivePathFinder/recursivepathFinder.js'
import breadthFirst from './pathfinder/breadthfirstPathFinder/breadthfirst.js'
import depthfirst from './pathfinder/depthfirstPathFinder/depthfirst.js'


var can = document.getElementById("canvas");
var ct = can.getContext("2d");
var n;

var cont = false;
var generate = document.getElementById("generate");
var visual = document.getElementById("visualize");
var generateP = document.getElementById("generateP");
var visualizeP = document.getElementById("visualizeP");
var selection = document.getElementById("Algorithm-select");
var body = document.getElementById("change");
var range = document.getElementById("Speed");
var Size = document.getElementById("Size");
var speed = parseInt(range.value) * -1
var path;
var size = 20;

var intialX = 0, intialY = 0;
var finalX = 19, finalY = 19;

var dragI = false;
var dragF = false;
const mazeCreation = () => {
	n = findMaze();
	n.drawMaze(ct)
	n.drawPoints(ct, intialX, intialY, finalX, finalY)
}
const pathCreation = () => {
	n.drawMaze(ct, intialX, intialY, finalX, finalY)
	n.drawPoints(ct, intialX, intialY, finalX, finalY)
	path = findPath()
}
mazeCreation();
pathCreation();
generate.onclick = () => {
	mazeCreation()

}

visual.onclick = () => {
	reset()
	n = findMaze();
	n.visualize(ct, intialX, intialY, finalX, finalY)
}

range.onchange = () => {
	n.speed = parseInt(range.value) * -1
	path.speed = parseInt(range.value) * -1
	speed = parseInt(range.value) * -1
	if (n.cont) {

		n.clear()
		n.visualize(ct, intialX, intialY, finalX, finalY)
	}
	if (path.cont) {
		path.clear()
		path.visualizePath(ct)
	}

}

Size.onchange = () => {
	size = parseInt(Size.value)
}

generateP.onclick = () => {
	reset()
	pathCreation()
	path.drawPath(ct)
}

visualizeP.onclick = () => {
	reset()
	pathCreation()
	path.visualizePath(ct)
}
function findMaze() {
	var nameValue = document.getElementById("Algorithm-select").value;
	let m;

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

function findPath() {
	var nameValue = document.getElementById("PathFinder-select").value;
	let m;
	if (nameValue == "r") {
		m = new recursivePathFinder(intialX, intialY, finalX, finalY, n.m, speed);
	}
	else if (nameValue == "b") {
		m = new breadthFirst(intialX, intialY, finalX, finalY, n.m, speed);
	}
	else if (nameValue == "d") {
		m = new depthfirst(intialX, intialY, finalX, finalY, n.m, speed);
	}
	m.findPath()
	return m

}

function reset() {
	n.clear();
	path.clear();
	n.drawMaze(ct, intialX, intialY, finalX, finalY)
	n.drawPoints(ct, intialX, intialY, finalX, finalY)
}
function clearPage() {
	ct.fillStyle = "#000000";
	ct.fillRect(0, 0, 1000, 1000);
}
function drawgrid() {
	for (let i = 0; i < 20; i++) {
		for (let j = 0; j < 20; j++) {
			ct.beginPath()
			ct.rect(i * n.mul + 10, j * n.mul + 10, n.size, n.size)
			ct.stroke();
		}
	}
}
canvas.addEventListener('mousedown', (event) => {
	let x = Math.floor(event.offsetX / n.mul);
	let y = Math.floor(event.offsetY / n.mul);
	if (!n.cont && !path.cont) {
		if (intialX == x && intialY == y) dragI = true
		if (finalX == x && finalY == y) dragF = true
	}

})

canvas.addEventListener('mousemove', (event) => {
	let x = Math.floor(event.offsetX / n.mul);
	let y = Math.floor(event.offsetY / n.mul);
	if (x>=0&& y>=0 && x < size && y < size) {
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



canvas.addEventListener("touchstart",  (event) => {
	var rect = canvas.getBoundingClientRect();
	let x = Math.floor((event.touches[0].clientX - rect.left)/ n.mul);
	let y = Math.floor((event.touches[0].clientY - rect.top)/ n.mul);
	if (!n.cont && !path.cont) {
		if (intialX == x && intialY == y) dragI = true
		if (finalX == x && finalY == y) dragF = true
	}

});
canvas.addEventListener("touchend", 
(event) => {
	dragI = false;
	dragF = false;
}
);
canvas.addEventListener("touchcancel",
(event) => {
	dragI = false;
	dragF = false;
} );
canvas.addEventListener("touchmove",
(event) => {
	var rect = canvas.getBoundingClientRect();
	let x = Math.floor((event.touches[0].clientX - rect.left)/ n.mul);
	let y = Math.floor((event.touches[0].clientY - rect.top)/ n.mul);
	console.log(dragI,event.touches[0].clientX,event.touches[0].clientY)
	if (x>=intialX && y>=intialY && x < size + n.intialX && y < size + n.intialY) {
		if (dragI) {
			intialX = x
			intialY = y
			n.drawMaze(ct, intialX, intialY, finalX, finalY)
			n.drawPoints(ct, intialX, intialY, finalX, finalY)
		}
		else if (dragF) {
			finalX = x
			finalY = y
			n.drawMaze(ct, intialX, intialY, finalX, finalY)
			n.drawPoints(ct, intialX, intialY, finalX, finalY)
			
		}
	}
	
});
