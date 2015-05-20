window.onload=function(){
	var oUl=document.getElementById('ul1');
	var aLi=oUl.children;
	var aSpan=oUl.getElementsByTagName('span');
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(ev){
			var oEvent=ev || event;
			var n=hoverDir(this,oEvent);
			
			var from=oEvent.fromElement || oEvent.relatedTarget;  
			if(this.contains(from))return;     
			
			var oSpan=aSpan[this.index];
			
			switch(n){    //Make <span> mask ready for the move 
				case 0:                       //cursor moves right to left 
					oSpan.style.left='200px';  
					oSpan.style.top=0;
					break;
				case 1:                       //cursor moves upward
					oSpan.style.left=0;
					oSpan.style.top='200px'; 
					break; 
				case 2:                      //cursor moves left to right
					oSpan.style.left='-200px'; 
					oSpan.style.top=0;
					break;
				case 3:                       //cursor moves downward
					oSpan.style.left=0;
					oSpan.style.top='-200px';
					break;
			}
			
			move(oSpan,{left:0, top:0});
		};
		
		aLi[i].onmouseout=function(ev){
			var oEvent=ev || event;
			var n=hoverDir(this,oEvent);
			var to=oEvent.toElement || oEvent.relatedTarget;
			if(this.contains(to))return;
			
			var oSpan=aSpan[this.index];
			switch(n){          
				case 0:
					move(oSpan,{left:200,top:0});
					break;
				case 1:
					move(oSpan,{left:0,top:200});
					break;
				case 2:
					move(oSpan,{left:-200,top:0});
					break;
				case 3:
					move(oSpan,{left:0,top:-200});
					break;
			}
		};
	}
};