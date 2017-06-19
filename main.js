window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	var rand = function(a){
		return Math.floor(Math.random()*a);
	}
		document.addEventListener("mousemove", function(event){
			context.beginPath();
			context.fillStyle = "rgba("+rand(255)+","+rand(255)+","+rand(255)+",.4)";
			for(var i=0;i<3;++i){
				context.arc(Math.random()*event.clientX,Math.random()*event.clientY,5,0,2*Math.PI,false);
			}
			context.fill();
		});

};