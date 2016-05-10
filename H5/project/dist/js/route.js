//声明模块
var noticeDetail=angular.module("noticeDetail",["ngRoute","ngAnimate","swipe"]);
var friend=angular.module("friend",[]);
var recharge=angular.module("recharge",[]);
//路由配置
noticeDetail.config(function($routeProvider){
	$routeProvider.
		when("/",{
			templateUrl:"noticeShow.html",
			controller:"noticeshow"
		}).when("/noticeEdit",{
			templateUrl:"noticeEdit.html",
			controller:"noticeedit"
		})
});

//控制器
noticeDetail.controller("noticedetail",function($scope,$location,$timeout){
	$scope.routePage="noticeHome";
	$scope.bar="公告";
	$scope.operat="编辑";
	$scope.jump=function($event){
		if($location.url()=="/"){
			$scope.bar="编辑公告";
			$scope.operat="提交";
			
		}
		else{
//			$scope.bar="公告";
//			$scope.operat="编辑";
//			$event.preventDefault();
		}
	}
	$scope.downData=function($event){
		$event.target.style.animation="fadeIn 1s";
		$event.target.style.webkitAnimation="fadeIn 1s";
		$timeout(function(){
			$event.target.style.animation="";
			$event.target.style.webkitAnimation="";
		},1000);
	}
	$scope.upData=function($event){
		$event.target.style.animation="fadeOut 1s";
		$event.target.style.webkitAnimation="fadeOut 1s";
		$timeout(function(){
			$event.target.style.animation="";
			$event.target.style.webkitAnimation="";
		},1000);
	}
});
noticeDetail.controller("noticeshow",function($scope){
	$scope.routePage="noticeShow";
});
noticeDetail.controller("noticeedit",function($scope){
	$scope.routePage="noticeEdit";
	$scope.title="新闻标题";
	$scope.bool=false;
	$scope.alignM=function(){
		$scope.bool=true;
	}
	$scope.alignL=function(){
		$scope.bool=false;
	}
});
friend.controller("searchbar",function($scope){
	$scope.bool=false;
	$scope.setBool=function(){
		if(!$scope.bool){
			$scope.bool=true;
		}
		else{
			$scope.bool=false;
		}
	}
});

recharge.controller("rechargeCtrl",function($scope){
	$scope.changeSum=function(sum){
		$scope.sum=sum;
//		$scope.bool=true;
	}
});

recharge.directive('setFocus', function(){
    return function(scope, element){
    	var sum=document.getElementById("rechargeSum");
    	scope.otherSum=function(){
			sum.focus();
		}  
    };
});
recharge.directive("setBorder",function(){
	return function(scope,elem,attr){
		elem[0].onfocus=function(){
			this.className="selected";
		}
		elem[0].onblur=function(){
			this.className="";
		}
	}
});
