var myGamePiece;

funtion startGame(){
	myGameArea.start();
	myGamePiece = new component (20, 20, "red" , 10, 120);
}
//var c = document.getElementById("myGameArea");
var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 900;
		this.canvas.width = 500;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, docuent.vid,childNodes[0]);
	}

}

function component(width, height, color, x, y){
	this.width = width;
	this.height = height;
	this.x=x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}
