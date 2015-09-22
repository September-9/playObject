'use strict'
function autoTab(obj1,obj2,obj3){
	var iNow=0;
	var timer=null;
	for(var i=0;i<obj2.length;i++){
		(function(index){
			obj2[i].onclick=function(){
				iNow=index;
				tab();
			}
		})(i);
	}
	function tab(){
		for(var i=0;i<obj2.length;i++){
			obj2[i].className='';
			obj3[i].style.display='none';
		}
		obj2[iNow].className='active';
		obj3[iNow].style.display='block';
	}
	function toRight(){
		iNow++;
		if(iNow==obj2.length){
			iNow=0;
		}
		tab();
	}
	timer=setInterval(toRight,1000);
	obj1.onmouseover=function(){
		clearInterval(timer);
	}
	obj1.onmouseout=function(){
		timer=setInterval(toRight,1000);
	}
}

