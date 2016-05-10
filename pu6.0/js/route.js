//声明模块
var noticeDetail=angular.module("noticeDetail",["ngRoute","ngAnimate"]);
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
noticeDetail.controller("noticedetail",function($scope,$location){
	$scope.routePage="noticeHome";
	$scope.bar="公告";
	$scope.jump=function(){
		if($location.url()=="/"){
			$scope.bar="编辑公告";
		}
		else{
			$scope.bar="公告";
		}
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
		$scope.bool=true;
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
