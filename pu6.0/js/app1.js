var app=angular.module("myApp",[]);
//	var aa=angular.equals(ex,js);
app.controller("myCtrl",function($scope,$http){
	$scope.name2="Aris";
	//加减计算
	$scope.counter=0;
	$scope.add=function(a){$scope.counter+=a;}
	$scope.subtract=function(a){$scope.counter-=a;}
	//对象
	$scope.person=[];
	$scope.person[0]={
		name:"Aris",
		sex:"boy",
		tel:"1587654",
		addr:"江苏",
		hobby:"唱歌"
	};
	$scope.person[1]={
		name:"Aris1",
		sex:"girl",
		tel:"1234654",
		addr:"江苏2",
		hobby:"唱歌2"
	};
	//日期格式
	$scope.today=new Date();
	//angular.equals
	$scope.same=false;
	$scope.compare=function(){
		$scope.same=angular.equals(ex,js);
	}
	//表单
	$scope.submitted=false;
	$scope.form1=function(){
		if($scope.form1.$valid){
			//正常提交
		}else{
			$scope.form1.submitted=true;
		}
	}
$scope.firstname="LI";
$scope.lastname="Sha";
$scope.namelists = ["Google", "Runoob", "Taobao"];
//数组
$scope.sites = [
    {site : "Google", url : "http://www.google.com"},
    {site : "Runoob", url : "http://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
];
//对象
$scope.sites = {
    site01 : "Google",
    site02 : "Runoob",
    site03 : "Taobao"
};

$scope.cars = {
car01 : {brand : "Ford", model : "Mustang", color : "red"},
car02 : {brand : "Fiat", model : "500", color : "white"},
car03 : {brand : "Volvo", model : "XC90", color : "black"}
};

$scope.persons = { 
	persons01:{Name : "丽莎",Country:"zongGUO1"},
    persons02:{Name : "丽莎2",Country:"zongGUO8"},
    persons03 : {Name :"丽莎3",Country:"zongGUO3"}
    };
//myUrl = $location.absUrl();
// $http.get("welcome.htm").then(function (response) {
//      $scope.myWelcome = response.data;
//  }
//隐藏显示
 $scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
//reset
        $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    //
    $scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege', lName:"Pege" },
{id:2, fName:'Kim',  lName:"Pim" },
{id:3, fName:'Sal',  lName:"Smith" },
{id:4, fName:'Jack', lName:"Jones" },
{id:5, fName:'John', lName:"Doe" },
{id:6, fName:'Peter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    } else {
    $scope.edit = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName;
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
  }
};
});
//$rootscope
app.run(function($rootScope){
	$rootScope.somebody='lisha';
});