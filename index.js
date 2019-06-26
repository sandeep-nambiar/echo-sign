"use strict";
let myClass 		=	class {
	/*constructor(getVar){
		this.params 	=	{
			signLength : (getVar.signLength !=undefined)?getVar.signLength:null,
			canvas 	   : (getVar.canvas !=undefined)?getVar.canvas:null,
			linecolor  : (getVar.linecolor !=undefined)?getVar.linecolor:null,
			pointSize  : (getVar.pointSize !=undefined)?getVar.pointSize:null,
			xstarting  : '',
			ystarting  : ''
		};
		//console.log(this.params);
	}*/
	test(){
		console.log(1111);
	}
	draw(e){
		if(e.buttons==1){
			var ctx 			=	e.srcElement.getContext("2d");
			ctx.beginPath();
			if(this.params.xstarting && this.params.ystarting){
				ctx.moveTo(this.params.xstarting, this.params.ystarting);
				ctx.lineTo(e.clientX, e.clientY);
				ctx.lineWidth 	=	this.params.pointSize;
				ctx.strokeStyle =	this.params.linecolor;
				ctx.stroke();
				this.params.signLength 		=	this.params.signLength + this.getLength(this.params.xstarting,this.params.ystarting,e.clientX,e.clientY);
				this.params.xstarting 		=	e.clientX;
				this.params.ystarting 		=	e.clientY;
			}else{
				this.params.xstarting 		=	e.clientX;
				this.params.ystarting 		=	e.clientY;
			}
		}else{
			this.params.xstarting 			=	'';
			this.params.ystarting 			=	'';
		}
	}
	getLength(x1,y1,x2,y2){
		var a 		=	x1 - x2;
		var b 		=	y1 - y2;
		var c 		=	Math.sqrt( a*a + b*b );
		return c;
	}
	save(){
		//console.log("hhhhhh");
		var image = this.params.canvas.toDataURL("image/png");
		//console.log(image);
	}
	clear(){
		var ctx 	=	this.params.canvas.getContext("2d");
		ctx.clearRect(0, 0, this.params.canvas.width, this.params.canvas.height);
		this.params.xstarting 	=	'';
		this.params.ystarting 	=	'';
		this.params.signLength 	=	0;
	}
}
module.exports = myClass;