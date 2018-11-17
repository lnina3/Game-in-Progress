var myGamePiece;
window.addEventListener('keydown', moving);
window.addEventListener('keyup', moving);
var moveSpeed=5;

	
function startGame() {   
    myGamePiece = new component(30, 30, "hobbit.png", 10, 400, "image");
    myGameArea.start();	
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 550;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	this.interval = setInterval(updateGameArea, 20);
    },
	clear: function(){
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	}
}
function component(width, height, color, x, y, type) {
    this.type = type;
	if (type == "image") {
		this.image = new Image();
		this.image.src = color;
	}
	this.width = width;
    this.height = height;  
	this.x=x;
	this.y=y;
	
	this.update = function(){
   	 ctx = myGameArea.context;
    	if (type == "image") {
	ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	} else {
	ctx.fillStyle = color;
	cts.fillRect(this.x, this.y, this.width, this.height);
	}
	}
}
function updateGameArea(){
	myGameArea.clear();
	//myGamePiece.newPos();
	myGamePiece.update();
	gravity();
}
function moveUp(){
	if(myGamePiece.y==0){
		myGamePiece.y+=0;
	}
	else{
		myGamePiece.y -=moveSpeed;
	}
	
}
function moveDown(){
	
	if(myGamePiece.y==550){
		myGamePiece.y+=0;
	}
	else{
		myGamePiece.y +=moveSpeed;
	}
}
function moveLeft(){
	
	if(myGamePiece.x==0){
		myGamePiece.x-=0;
	}
	else{
		myGamePiece.x -= moveSpeed;
	}	
}
function moveRight(){
	if(myGamePiece.x==1200){
		myGamePiece.x-=0;
	}
	else{
		myGamePiece.x += moveSpeed;
	}
}
function jump(){
	console.log("it hpapaend");
	
	for(var i=0; i< 10; i++){
		myGamePiece.y-=i;
	}
}		
function moving(event){
	switch (event.keyCode){
		case 37:
			moveLeft();
			break;
		case 39:
			moveRight();
			break;
		case 38:
			jump();	
			break;
		}
}
function gravity(){
		
	if(myGamePiece.y <= 400){
		myGamePiece.y +=10;
	}
}