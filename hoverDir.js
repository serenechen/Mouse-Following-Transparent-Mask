function hoverDir(obj,ev){
	var w=obj.offsetWidth;
	var h=obj.offsetHeight;
	
	var x=obj.offsetLeft+w/2-ev.clientX;
	var y=obj.offsetTop+h/2-ev.clientY;
	
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}