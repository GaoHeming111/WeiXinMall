//购物车
$(document).ready(function(){
	//获取购物车的数量
	var allNum = $(".contents_num").find(".mui-content").length;
	$(".mui-title").find(".num").text(allNum);
	//商品加减
	$(".up").click(function(){
		var Num = $(this).next().val();
		//alert(Num);
		Num++;
		$(this).next().val(Num);
	})
	$(".down").click(function(){
		var Num = $(this).prev().val();
		//alert(Num);
		Num--;
		if(Num<=0){
			Num=1;
		}
		$(this).prev().val(Num);
	})
	//单个全选按钮
	$(".title").find("input").click(function(){
		var checkAll_num = $(this).prop("checked");
		$(this).parents(".title").next().find("input").prop("checked",checkAll_num);
    });
    //全选按钮
    $(".allPrice-wrap").find(".allselect").click(function(){
    	var checkAll = $(this).prop("checked");
    	$(this).parents(".allPrice-wrap").siblings(".goods_wrap").find("input").prop("checked",checkAll);
    })
    //删除按钮
    $(".dele").click(function(){
    	if(nums<=1){
    		$(this).parents(".mui-row").remove();
    		$(this).parents(".contents").siblings(".title").remove();
    	}
    	else{
    		$(this).parents(".mui-row").remove();
    	}	
    	var nums = $(this).parents(".mui-content").length;
    	//alert(nums)
    })
    //总价
    if(num_price==true){
    	var num_price = $(".contents-num").find("input:first").prop("checked");
    	$(".contents-num").find("input:first").each(
    		function(){
    			var sig_price = $(this).children(".mui-content").find(".goods_num").val()
    			*$(this).children(".mui-content").find("em");
    			$(".allPrice-wrap").find(".allPrice").text(sig_price);
    		}
    	)
	}
})

function change1(){
	var ad=document.getElementById("ad");
	ad.style.color="#e8004c";
	var tent=document.getElementById("tent");
	tent.style.color="black";
	var baby=document.getElementById("baby");
	baby.style.color="black";
}
function change2(){
	var tent=document.getElementById("tent");
	tent.style.color="#e8004c";
	var ad=document.getElementById("ad");
	ad.style.color="black";
	var baby=document.getElementById("baby");
	baby.style.color="black";
}
function change3(){
	var ad=document.getElementById("ad");
	ad.style.color="black";
	var tent=document.getElementById("tent");
	tent.style.color="black";
	var baby=document.getElementById("baby");
	baby.style.color="#E8004C";
}
$(window).scroll(function(){
	var top=$(window).scrollTop();//这里后面一定记得加括号
    var height=$(window).height();//指的是屏幕高度 因为电脑和电脑不一样 都用 $(window) 来取
    if(top>620-height){
    	$("#trad").css("display","block");
    }else{
    	$("#trad").css("display","none");
    }
})

$(window).scroll(function(){
    var top=$(window).scrollTop();//这里后面一定记得加括号
    var height=$(window).height();//指的是屏幕高度 因为电脑和电脑不一样 都用 $(window) 来取
    if(top>=1530-height){
        $("#smallMenu").css("position","fixed");
        $("#smallMenu").css("width","80%");
        $("#smallMenu").css("left","8.6rem");
        $("#smallMenu").css("border","none");
        $("#smallMenu").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu").css("position","");
    	$("#smallMenu").css("width","100%");
        $("#smallMenu").css("left","8.6rem");
        $("#smallMenu").css("border-top","1px solid #ecebeb");
        $("#smallMenu").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu1").css("position","fixed");
        $("#smallMenu1").css("width","80%");
        $("#smallMenu1").css("left","8.6rem");
        $("#smallMenu1").css("border","none");
        $("#smallMenu1").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu1").css("position","");
    	$("#smallMenu1").css("width","100%");
        $("#smallMenu1").css("left","8.6rem");
        $("#smallMenu1").css("border-top","1px solid #ecebeb");
        $("#smallMenu1").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu1").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu2").css("position","fixed");
        $("#smallMenu2").css("width","80%");
        $("#smallMenu2").css("left","8.6rem");
        $("#smallMenu2").css("border","none");
        $("#smallMenu2").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu2").css("position","");
    	$("#smallMenu2").css("width","100%");
        $("#smallMenu2").css("left","8.6rem");
        $("#smallMenu2").css("border-top","1px solid #ecebeb");
        $("#smallMenu2").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu2").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu3").css("position","fixed");
        $("#smallMenu3").css("width","80%");
        $("#smallMenu3").css("left","8.6rem");
        $("#smallMenu3").css("border","none");
        $("#smallMenu3").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu3").css("position","");
    	$("#smallMenu3").css("width","100%");
        $("#smallMenu3").css("left","8.6rem");
        $("#smallMenu3").css("border-top","1px solid #ecebeb");
        $("#smallMenu3").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu3").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu4").css("position","fixed");
        $("#smallMenu4").css("width","80%");
        $("#smallMenu4").css("left","8.6rem");
        $("#smallMenu4").css("border","none");
        $("#smallMenu4").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu4").css("position","");
    	$("#smallMenu4").css("width","100%");
        $("#smallMenu4").css("left","8.6rem");
        $("#smallMenu4").css("border-top","1px solid #ecebeb");
        $("#smallMenu4").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu4").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu5").css("position","fixed");
        $("#smallMenu5").css("width","80%");
        $("#smallMenu5").css("left","8.6rem");
        $("#smallMenu5").css("border","none");
        $("#smallMenu5").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu5").css("position","");
    	$("#smallMenu5").css("width","100%");
        $("#smallMenu5").css("left","8.6rem");
        $("#smallMenu5").css("border-top","1px solid #ecebeb");
        $("#smallMenu5").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu5").css("box-shadow","none");
    }
    
    if(top>=1530-height){
        $("#smallMenu6").css("position","fixed");
        $("#smallMenu6").css("width","80%");
        $("#smallMenu6").css("left","8.6rem");
        $("#smallMenu6").css("border","none");
        $("#smallMenu6").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu6").css("position","");
    	$("#smallMenu6").css("width","100%");
        $("#smallMenu6").css("left","8.6rem");
        $("#smallMenu6").css("border-top","1px solid #ecebeb");
        $("#smallMenu6").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu6").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu7").css("position","fixed");
        $("#smallMenu7").css("width","80%");
        $("#smallMenu7").css("left","8.6rem");
        $("#smallMenu7").css("border","none");
        $("#smallMenu7").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu7").css("position","");
    	$("#smallMenu7").css("width","100%");
        $("#smallMenu7").css("left","8.6rem");
        $("#smallMenu7").css("border-top","1px solid #ecebeb");
        $("#smallMenu7").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu7").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu8").css("position","fixed");
        $("#smallMenu8").css("width","80%");
        $("#smallMenu8").css("left","8.6rem");
        $("#smallMenu8").css("border","none");
        $("#smallMenu8").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu8").css("position","");
    	$("#smallMenu8").css("width","100%");
        $("#smallMenu8").css("left","8.6rem");
        $("#smallMenu8").css("border-top","1px solid #ecebeb");
        $("#smallMenu8").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu8").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu9").css("position","fixed");
        $("#smallMenu9").css("width","80%");
        $("#smallMenu9").css("left","8.6rem");
        $("#smallMenu9").css("border","none");
        $("#smallMenu9").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu9").css("position","");
    	$("#smallMenu9").css("width","100%");
        $("#smallMenu9").css("left","8.6rem");
        $("#smallMenu9").css("border-top","1px solid #ecebeb");
        $("#smallMenu9").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu9").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu10").css("position","fixed");
        $("#smallMenu10").css("width","80%");
        $("#smallMenu10").css("left","8.6rem");
        $("#smallMenu10").css("border","none");
        $("#smallMenu10").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu10").css("position","");
    	$("#smallMenu10").css("width","100%");
        $("#smallMenu10").css("left","8.6rem");
        $("#smallMenu10").css("border-top","1px solid #ecebeb");
        $("#smallMenu10").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu10").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu11").css("position","fixed");
        $("#smallMenu11").css("width","80%");
        $("#smallMenu11").css("left","8.6rem");
        $("#smallMenu11").css("border","none");
        $("#smallMenu11").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu11").css("position","");
    	$("#smallMenu11").css("width","100%");
        $("#smallMenu11").css("left","8.6rem");
        $("#smallMenu11").css("border-top","1px solid #ecebeb");
        $("#smallMenu11").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu11").css("box-shadow","none");
    }
    if(top>=1530-height){
        $("#smallMenu12").css("position","fixed");
        $("#smallMenu12").css("width","80%");
        $("#smallMenu12").css("left","8.6rem");
        $("#smallMenu12").css("border","none");
        $("#smallMenu12").css("box-shadow","1px 1px 2px #ecebeb");
       
    }else{
    	$("#smallMenu12").css("position","");
    	$("#smallMenu12").css("width","100%");
        $("#smallMenu12").css("left","8.6rem");
        $("#smallMenu12").css("border-top","1px solid #ecebeb");
        $("#smallMenu12").css("border-bottom","1px solid #ecebeb");
        $("#smallMenu12").css("box-shadow","none");
    }
    
})
//分类选项卡
$(function(){
	var DL=document.getElementById("DL");
	var dls=DL.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL1");
	var dls=DL1.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu1").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL2");
	var dls=DL2.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu2").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL3");
	var dls=DL3.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu3").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL4");
	var dls=DL4.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu4").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL5");
	var dls=DL5.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu5").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL6");
	var dls=DL6.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu6").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL7");
	var dls=DL7.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu7").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL8");
	var dls=DL8.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu8").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL9");
	var dls=DL9.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu9").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL10");
	var dls=DL10.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu10").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL11");
	var dls=DL11.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu11").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})
$(function(){
	var DL=document.getElementById("DL12");
	var dls=DL.getElementsByClassName("dls");
	var pp=document.getElementById("smallMenu12").getElementsByTagName("p");
	for(var i=0;i<pp.length;i++){
		pp[i].index=i;
		pp[i].onclick=function(){
			for(var j=0;j<pp.length;j++){
				dls[j].style.display="none";
				pp[j].style.color="black";
			}
			dls[this.index].style.display="block";
			pp[this.index].style.color="#e8004c";
		}
	}
})

