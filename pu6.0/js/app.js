var visitApp=angular.module("visitApp",[]);
var topicApp=angular.module("topicApp",[]);
var likemefreindApp=angular.module("likemefreindApp",[]);
var collectListApp=angular.module("collectListApp",[]);
var prizeDetailApp=angular.module("prizeDetailApp",[]);
var awardDetailApp=angular.module("awardDetailApp",[]);
var allCommentApp=angular.module("allCommentApp",[]);
//我的访客列表
visitApp.controller("myCtrl",function($scope,$http){
	$scope.visitor=[];
    //我的访客列表
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/visitor.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.visitor.push({
                name: data[i].name,
                icon: data[i].icon,
                school: data[i].school,
                subSchool: data[i].subSchool,
                sex : data[i].sex,
                time : data[i].time
            });
        }
        console.log($scope.visitor);
    }, function (msg) {
//      console.log(resp);
    });
});
//我的话题列表
topicApp.controller("myCtrl",function($scope,$http){
	$scope.topicList=[];
    //我的访客列表
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/topic.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        var map=[];
        for (var i = 0; i < data.length; i++) {
        	map.name=data[i].name,
        	map.icon=data[i].icon,
        	map.school=data[i].school,
        	map.subSchool=data[i].subSchool,
        	map.sex=data[i].sex,
        	map.time=data[i].time,
        	map.content=data[i].content,
        	map.praiseNum=data[i].praiseNum,
        	map.commentNum=data[i].commentNum,
        	map.giftNum=data[i].giftNum
//          $scope.topicList.push({
//              name: data[i].name,
//              icon: data[i].icon,
//              school: data[i].school,
//              subSchool: data[i].subSchool,
//              sex : data[i].sex,
//              time : data[i].time,
//              content:data[i].content,
//              praiseNum:data[i].praiseNum,
//              commentNum:data[i].commentNum,
//              giftNum:data[i].giftNum
////              imgs[0]:data[i].imgs[0],
////              imgs[1]:data[i].imgs[1],
////              imgs[2]:data[i].imgs[2]
//          });
//          for (var j = 0; j < imgs.length; j++) {
//          $scope.topicList.push({
//          	 imgs[j]:data[i].imgs[j],
//          });
        }
         $scope.topicList.push(map);
        console.log(map);
    }, function (msg) {
//      console.log(resp);
    });
});
//喜欢我的好友列表
likemefreindApp.controller("myCtrl",function($scope,$http){
	$scope.likemefreind=[];
    //我的访客列表
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/likemefreind.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.likemefreind.push({
                name: data[i].name,
                icon: data[i].icon,
                school: data[i].school,
                subSchool: data[i].subSchool,
                sex : data[i].sex,
                isFriend:data[i].isFriend
            });
        }
        console.log($scope.likemefreind);
    }, function (msg) {
//      console.log(resp);
    });
});
//学校活动列表
collectListApp.controller("myCtrl1",function($scope,$http){
	$scope.schoolActivity=[];
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/schoolActivity.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.schoolActivity.push({
                icon: data[i].icon,
                school: data[i].school,
                starttime: data[i].starttime,
                endtime : data[i].endtime,
                place:data[i].place
            });
        }
        console.log($scope.schoolActivity);
    }, function (msg) {
//      console.log(resp);
    });
});
//	兴趣活动列表
collectListApp.controller("myCtrl2",function($scope,$http){
	$scope.hobbyActivity=[];
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/hobbyActivity.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.hobbyActivity.push({
            	paytype:data[i].paytype,
            	limit:data[i].limit,
                icon: data[i].icon,
                school: data[i].school,
                starttime: data[i].starttime,
                endtime : data[i].endtime,
                place:data[i].place
            });
        }
        console.log($scope.hobbyActivity);
    }, function (msg) {
//      console.log(resp);
    });
});
//	部落列表
collectListApp.controller("myCtrl3",function($scope,$http){
	$scope.hobbyActivity=[];
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/hobbyActivity.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.hobbyActivity.push({
            	paytype:data[i].paytype,
            	limit:data[i].limit,
                icon: data[i].icon,
                school: data[i].school,
                starttime: data[i].starttime,
                endtime : data[i].endtime,
                place:data[i].place
            });
        }
        console.log($scope.hobbyActivity);
    }, function (msg) {
//      console.log(resp);
    });
});
//	话题列表
collectListApp.controller("myCtrl4",function($scope,$http){

});
//奖品详情
prizeDetailApp.controller("myCtrl",function($scope,$http){

	$scope.save = function () {
            //获取到表单是否验证通过
            if($scope.form1.addr.$valid && $scope.form1.telPhone.$valid){
            	document.getElementById("L-prizereal").style.display ="block";
//              alert('通过验证可以提交表单');
            }else{
                alert('请填写完整才可提交');
            }
        }
	$scope.phoneNumber= function(){
			//作手机输入正确判断（失去光标）
			var telPhone = $('#telPhone').val(); 
            var patrn = /^1[3|4|5|7|8]\d{9}$/;     
            if (!patrn.exec(telPhone)&&telPhone!=='') {
            	$scope.bool=true;
            }
           else{
           	$scope.bool=false;
           }
	}
});
//可用奖品明细
awardDetailApp.controller("myCtrl",function($scope,$http){
	//可用券集合
	$scope.awardDetail=[];
	
	$scope.today=new Date();
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/awardDetail.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.awardDetail.push({
				name:data[i].name,
                icon: data[i].icon,
                awardname: data[i].awardname,
                money: data[i].money,
                time : data[i].time
            });
        }
        console.log($scope.awardDetail);
    }, function (msg) {
//      console.log(resp);
    });
});
//不可用奖品明细
awardDetailApp.controller("myCtrl2",function($scope,$http){
	//不可用券集合
	$scope.notUsedDetail=[];
	
	$scope.today=new Date();
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/notUsedAward.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.notUsedDetail.push({
				name:data[i].name,
                icon: data[i].icon,
                awardname: data[i].awardname,
                money: data[i].money,
                time : data[i].time,
                isExpired:data[i].isExpired,
                isUsed:data[i].isUsed
            });
        }
        console.log($scope.notUsedDetail);
    }, function (msg) {
//      console.log(resp);
    });
});
//评论列表
allCommentApp.controller("myCtrl",function($scope,$http){
	
	$scope.allComment=[];
	
    var promise = $http({
//          method: 'POST',
            //url: url + "user/queryCampusStar"
            url: "json/allComment.json",
//          data:{"token":"1","param":"1"}
        }
    );
    promise.then(function (resp) {
        var data = resp.data;
        for (var i = 0; i < data.length; i++) {
        	
            $scope.allComment.push({
				usernickName:data[i].usernickName,
                usericon: data[i].usericon,
                userschoolName: data[i].userschoolName,
                useruserId: data[i].useruserId,
                content : data[i].content,
                commentUser:data[i].commentUser,
                time:data[i].time,
                blogimgUrl:data[i].blogimgUrl,
                blogUser:data[i].blogUser,
                blogcontent:data[i].blogcontent,
                commentContent:data[i].commentContent,
                businessType:data[i].businessType
            });
        }
        console.log($scope.notUsedDetail);
    }, function (msg) {
//      console.log(resp);
    });
});