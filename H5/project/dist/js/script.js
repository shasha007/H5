
function checkWord(obj){
	var str=obj.innerHTML;
	var wn=document.getElementById("wordNum");
	wn.innerHTML=str.length;
}

function uploadImg(obj){
	var text=document.getElementById("text");
	var text2=document.getElementById("text2");
	var file=obj.files[0];
	 if(!/image\/\w+/.test(file.type)){
	    alert("请确保文件为图像类型");
	    return false;
	}
	var read=new FileReader();
	read.readAsDataURL(file);
	read.onload=function(e){
		var img=document.createElement("img");
		img.src=this.result;
		text.appendChild(img);	
	}
}
