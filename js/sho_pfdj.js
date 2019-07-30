window.onload =function(){
		var mirr  = new Mirr;
		mirr.initMouse();
		mirr.bindMouse();
	}
	function Mirr(){
		this.box =$id("left");
		this.small = $id("small");
		this.smallImg = this.small.children[0];
		this.mask = $id("mask");
		this.big =$id("big");
		this.bigImg = $id("bigImg");
		
		this.initMouse =function(){
			//入口方法 鼠标移入小图标的时候 和移出 显示 影藏mask 和big
			this.small.onmouseenter = function(){
				this.mask.style.display = "block";
				this.big.style.display = "block";
			}.bind(this);
			this.small.onmouseleave = function(){
				this.mask.style.display ="none"
				this.big.style.display ="none"
			}.bind(this)
			return this;
		}
		
		this.bindMouse =function(){
			this.small.onmousemove = function(e){
				var e = e||event;
				//获取mask相对于父元素的left 和top值
				let x = e.pageX-this.box.offsetLeft-this.mask.offsetWidth/2;
				let y = e.pageY-this.box.offsetTop-this.mask.offsetHeight/2;
				//获取mask的最大left和top值
				let maxL = this.small.offsetWidth-this.mask.offsetWidth;
				let maxT = this.small.offsetHeight-this.mask.offsetHeight-3;
				//边界处理
				
				x=x<0?0:(x>maxL?maxL:x);
				y=y<0?0:(y>maxT?maxT:y);
				//设置mask 的left和top值
				this.mask.style.left = x+"px";
				this.mask.style.top = y+"px";
				
				//获取大图的left和top值
				let bigImgLeft = x*(this.bigImg.offsetWidth)/(this.smallImg.offsetWidth);
				let bigImgTop = y*(this.bigImg.offsetHeight)/(this.smallImg.offsetHeight);
				//设置大图的left和top值
				this.bigImg.style.left = -bigImgLeft+"px";
				this.bigImg.style.top = -bigImgTop+"px";
			}.bind(this);
		}
	}
	

  /*function Show(){
  	this.box = document.getElementById("box");
  	this.small = document.getElementById("small");
  	this.smallImg = this.small.getElementsByTagName("img");
  	this.big = document.getElementById("big");
  	this.bigImg = document.getElementById("big").children;
  	this.bot = document.getElementById("bottom").children;
  	this.center= document.getElementById("center");
  	this.mask= document.getElementById("mask");
  	this.index = 0;
  
	this.tab = function(){
	  	for(let i= 0;i<this.bot.length;i++){
	  		this.bot[i].onmouseenter = function(){
				this.index = i; 
				this.clearAll();
				this.small.children[i].style.display="block";
				this.bigImg[i].style.display="block";
				this.mask.style.backgroundImage=`url(images/${this.index+1}m.jpg)`;
	  		}.bind(this)
	  	}
	  	
	}
  	this.clearAll = function(){
  		for (let j = 0;j<this.bigImg.length;j++) {
  			this.small.children[j].style.display="none";
			this.bigImg[j].style.display ="none";
  		}
  	}	
  	this.bindnM = function(){
  		this.small.onmouseenter = function(){
  			this.big.style.display ="block";
			this.mask.style.display="block";
  		}.bind(this)
  		this.small.onmouseleave = function(){
  			this.big.style.display ="none";
			this.mask.style.display="none";
  		}.bind(this)
  	}
  	this.loupeMove = function(){
  		this.small.onmousemove = function(e){
  			var e = e||event;
			//获取mask的left 和top
			let x =e.pageX-this.mask.offsetWidth/2-this.box.offsetLeft;
			let y =e.pageY-this.mask.offsetHeight/2-this.box.offsetTop;
			//获取mask的最大left和top值
			let maskL = this.small.offsetWidth-this.mask.offsetWidth;
			let maskT = this.small.offsetHeight-this.mask.offsetHeight;
			x = Math.min(Math.max(0,x),maskL);
			y = Math.min(Math.max(0,y),maskT);
			//设置mask的值
			this.mask.style.left = x+"px";
			this.mask.style.top = y+"px";
			this.mask.style.backgroundPositionX = -x + "px";
			this.mask.style.backgroundPositionY = -y + "px";
			
			for (let i = 0;i<this.bigImg.length;i++) {
				if(this.bigImg[i].className = "bigImage"){
					//获取每一个大图的left和top值
					let bigImgX= x*(this.bigImg[i].offsetWidth)/(this.smallImg[i].offsetWidth);
					let bigImgY= y*(this.bigImg[i].offsetHeight)/(this.smallImg[i].offsetHeight);
					this.bigImg[i].style.left =-bigImgX+"px"; 
					this.bigImg[i].style.top =-bigImgY+"px"; 
				}
			}
			
  		}.bind(this)
  	}
  	
}
  
  window.onload =function(){
  	var show = new Show();
  	show.tab();
  	show.bindnM();
  	show.loupeMove();
  }*/