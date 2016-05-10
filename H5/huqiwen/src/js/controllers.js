/**
 * Created by huqiwen on 16/3/1.
 */
var PuWebApp = angular.module('pucontroller', []);

var url = "http://192.168.1.126:8080/pu/";
var zjurl = "https://192.168.1.3:8443/svn/java/code/pu"
var pic_404 = "img/404.jpg";

PuWebApp.factory('helloserver', ['$http', function ($http) {
    var doRequest = function (username, path) {
        return $http({
            method: "get",
            url: "json/test.json"
        });
    }
    return {
        userlist: function (username) {
            return doRequest(username, 'userlist');
        }
    }
}]);

PuWebApp.controller('helloctrl', ['$scope', '$timeout', 'helloserver', function ($scope, $timeout, helloserver) {
    $scope.greeting = {
        text: 'hello'
    }
    $scope.user = {
        name: "1123",
        id: "111"
    }
    $scope.watchs = '';
    var timeout;
    var i = 0;
    //$scope.username = "huqiwen";
    $scope.doalert = function () {
        helloserver.userlist("1").success(function (data) {
            console.log(data);
            $scope.user = data;
            console.log($scope.user);
        });

    };
    $scope.$watch('watchs', function (newwatchs, oldwatchs) {
        console.log(newwatchs);
        console.log(oldwatchs);
        console.log(i++);
        if (newwatchs != oldwatchs) {
            if (timeout) {
                $timeout.cancel(timeout);
            }
            timeout = $timeout(function () {
                helloserver.userlist(newwatchs).success(function (data) {
                    $scope.user = data;
                });
            }, 500);
        }
    });
    $scope.reset = function () {
        $scope.user = {
            name: "abc",
            id: "000"
        }
    }
}]);

//发现首页
PuWebApp.controller('discoverctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.star = [];
    $scope.event = [];
    $scope.tribe = [];
    $scope.test = [];
    $scope.test1 = [];
    $scope.showapp = function () {
        $('#discover-app').modal('show');
    }

    //红人
    $scope.star = discover('post', 'json/test.json', {}, '', $scope.star, $http, "4");

    //热门活动
    $scope.event = discover('post', 'json/discover_event.json', {}, '', $scope.event, $http, "");

    //明星部落
    $scope.tribe = discover('post', 'json/discover_tribe.json', {}, '', $scope.tribe, $http, "");


    $scope.test = setswiper('post', 'json/test1.json', {}, '', $scope.test, $http);


}]);



function doswiper(callback) {
    var back = [];
    for (var i = 0; i < callback.length; i = i + 3) {
        var call = {};
        var call1 = [];
        for (var j = 0; j < 3; j++) {
            call1.push (callback[i + j]);
        }
        call["itmes"] = call1;
        back.push(call);
    }
    console.log(back);
    callback = back;
    console.log(callback);
    return callback;
}
PuWebApp.controller('eventctrl', function ($scope, Reddit) {
    $scope.reddit = new Reddit();
});
PuWebApp.factory('Reddit', function ($http) {
    var Reddit = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        getnext('post', 'json/rankAssnThisWeek.json', {}, '', this, $http);

    };
    return Reddit;
});

//更多部落排行
PuWebApp.controller('weektribectrl', ['$scope', '$http', function ($scope, $http) {
    $scope.items = [];
    //$scope.event = discover('post', 'json/discover_event.json', {}, '', $scope.event, $http, "");

}])

////发现首页
//PuWebApp.controller('discoverctrl', ['$scope', '$http', function ($scope, $http) {
//    $scope.star = [];
//    $scope.event = [];
//    $scope.tribe = [];
//    $scope.showapp = function () {
//        $('#discover-app').modal('show');
//    }
//
//    //红人
//    $scope.star = discover('post', 'json/test.json', {}, '', $scope.star, $http, "4");
//
//    //热门活动
//    $scope.event = discover('post', 'json/discover_event.json', {}, '', $scope.event, $http, "");
//
//    //明星部落
//    $scope.tribe = discover('post', 'json/discover_tribe.json', {}, '', $scope.tribe, $http, "");
//
//}]);


PuWebApp.controller('squirectrl', function ($scope, squire) {
    $scope.squire = new squire();

    $scope.squire_delete = function () {
        $('#squire-delete').modal('show');
    }
});
PuWebApp.factory('squire', function ($http) {
    var squire = function () {
        this.items = [
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "true",
                school: "四川外语大学重庆南方翻译学院",
                isme: "true",
                isfirend: "true",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"}
                ],
                liked: "true",
                like: "11",
                presented: "true",
                present: "11",
                commented: "true",
                comment: "11",
                istop: "true"
            },
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "false",
                school: "四川外语大学重庆南方翻译学院",
                isme: "false",
                isfirend: "false",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                ],
                liked: "false",
                like: "11",
                presented: "false",
                present: "11",
                commented: "false",
                comment: "11",
                istop: "false"
            },
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "true",
                school: "四川外语大学重庆南方翻译学院",
                isme: "false",
                isfirend: "true",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                ],
                liked: "true",
                like: "11",
                presented: "true",
                present: "11",
                commented: "false",
                comment: "11",
                istop: "true"
            }
        ];
        this.busy = false;
        this.after = '';
        this.topicflag = [
            {
                img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg",
                name: "测试测试测试测试测试测测试",
                describe: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            }
        ]
    };

    squire.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                    content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                    id: "1",
                    userid: "1",
                    time: "2016.12.31",
                    username: "hahah",
                    sex: "true",
                    school: "四川外语大学重庆南方翻译学院",
                    isme: "true",
                    pics: [
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    ],
                    liked: "true",
                    like: "11",
                    presented: "true",
                    present: "11",
                    commented: "false",
                    comment: "11",
                    istop: "true"
                });
            }
            this.busy = false;

        }.bind(this));
    };
    return squire;
});


PuWebApp.controller('topicctrl', function ($scope) {

});
PuWebApp.controller('topicctrl', function ($scope, topic) {
    $scope.topic = new topic();

    $scope.topic_delete = function () {
        $('#topic-delete').modal('show');
    }
});
PuWebApp.factory('topic', function ($http) {
    var topic = function () {
        this.items = [
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "true",
                school: "四川外语大学重庆南方翻译学院",
                isme: "true",
                isfirend: "true",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"}
                ],
                liked: "true",
                like: "11",
                presented: "true",
                present: "11",
                commented: "true",
                comment: "11",
                istop: "true"
            },
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "false",
                school: "四川外语大学重庆南方翻译学院",
                isme: "false",
                isfirend: "false",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                ],
                liked: "false",
                like: "11",
                presented: "false",
                present: "11",
                commented: "false",
                comment: "11",
                istop: "false"
            },
            {
                content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                id: "1",
                userid: "1",
                time: "2016.12.31",
                username: "hahah",
                sex: "true",
                school: "四川外语大学重庆南方翻译学院",
                isme: "false",
                isfirend: "true",
                pics: [
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                ],
                liked: "true",
                like: "11",
                presented: "true",
                present: "11",
                commented: "false",
                comment: "11",
                istop: "true"
            }
        ];
        this.busy = false;
        this.after = '';
    };

    topic.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                    content: "电流学院“猜谜送福”迎新年猜灯谜活动",
                    id: "1",
                    userid: "1",
                    time: "2016.12.31",
                    username: "hahah",
                    sex: "true",
                    school: "四川外语大学重庆南方翻译学院",
                    isme: "true",
                    pics: [
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                        {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
                    ],
                    liked: "true",
                    like: "11",
                    presented: "true",
                    present: "11",
                    commented: "false",
                    comment: "11",
                    istop: "true"
                });
            }
            this.busy = false;

        }.bind(this));
    };
    return topic;
});


PuWebApp.controller('weiboctrl', function ($scope, $routeParams, $http, $location) {
    var id = $routeParams.id;
    var param = {
        "id": id
    }
    $scope.pic_404 = pic_404;
    $scope.items = [];
    $scope.items = getweibo('', param, $http, $scope.items);
    //console.log($routeParams);
    //if (id == "1") {
    //    console.log("ok");
    //} else {
    //    console.log("no");
    //    //$location.path('/event');
    //}
})


PuWebApp.controller('tribectrl', function ($scope, $routeParams, $location, tribe) {
    $scope.tribe = new tribe();
    var type = $routeParams.type;
    console.log($routeParams.type);
    if (type == "1") {
        console.log("ok");
    } else {
        console.log("no");
        //$location.path('/event');
    }
})

PuWebApp.factory('tribe', function ($http) {
    var tribe = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.id = "8";
        this.tribeimgs = [
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"}
        ];
    };
    tribe.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        getnext('post', 'json/tribe.json', {}, '', this, $http);

    };
    return tribe;
});


//红人
PuWebApp.controller('starctrl', function ($scope, $routeParams, $location, star) {
    $scope.star = new star();
})

PuWebApp.factory('star', function ($http) {
    var star = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.id = "8";
        this.starimgs = [
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
            {img: "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201602/24150005b6auc05z.jpg"},
        ];
    };
    star.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        getnext('post', 'json/test.json', {}, '', this, $http);
    };
    return star;
});



PuWebApp.controller('entertainmentctrl', function ($scope, $routeParams, $location, game) {
    $scope.game = new game();
    $scope.search = false;
    $scope.setsearch = function () {
        if ($scope.search) {
            $scope.search = false;
        } else {
            $scope.search = true;
        }

    }
})

PuWebApp.factory('game', function ($http) {
    var game = function () {
        this.items = [
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: true
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: true
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: false
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: false
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: true
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: false
            },
            {
                personimg: "img/testimg.jpg",
                id: "1",
                name: "融合堂大厅及东门至隧道主干道",
                school: "融合堂大厅及东门至隧道主",
                lvl: "2015",
                isadd: true
            }
        ];
        this.busy = false;
        this.after = '';
        this.id = "8";

    };
    game.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                        personimg: "img/testimg.jpg",
                        id: "1",
                        name: "融合堂大厅及东门至隧道主干道",
                        school: "融合堂大厅及东门至隧道主",
                        lvl: "2015",
                        isadd: true
                    }
                );
            }
            this.busy = false;
        }.bind(this));
    };
    return game;
});

PuWebApp.controller('puindex', function ($scope) {
    $scope.index = "111";
});

PuWebApp.controller('integrity', function ($scope) {
    $scope.index = "111";
});
PuWebApp.controller('mygift', function ($scope) {
    $scope.index = "111";
});



PuWebApp.controller('SchoolEventctrl', function ($scope, SchoolEvent) {
    $scope.SchoolEvent = new SchoolEvent();
    $scope.show1 = false;//是否显示
    $scope.show2 = false;//是否显示
    $scope.show3 = false;//是否显示
    $scope.BackIsShow = false //背景是否显示
    //切换显示
    $scope.show = function (type) {
        if(type=='1'){
            $scope.show1 = !$scope.show1;
            $scope.show2 = false;
            $scope.show3 = false;
            if(!$scope.show1){
                $scope.BackIsShow = false;
            }else{
                $scope.BackIsShow = true;
            }
        }else if(type=='all'){
            $scope.show1 = false;
            $scope.show2 = false;
            $scope.show3 = false;
            $scope.BackIsShow = false;
        }else if(type=='2'){
            $scope.show1 = false;
            $scope.show3 = false;
            $scope.show2 = !$scope.show2;
            if(!$scope.show2){
                $scope.BackIsShow = false;
            }else{
                $scope.BackIsShow = true;
            }
        }
        else if(type=='3'){
            $scope.show1 = false;
            $scope.show2 = false;
            $scope.show3 = !$scope.show3;
            if(!$scope.show3){
                $scope.BackIsShow = false;
            }else{
                $scope.BackIsShow = true;
            }
        }

    }
});

PuWebApp.animation('.h-back-cover', function () {
    return {
        beforeAddClass : function(element, className, done) {
            if (className === 'ng-hide') {
                element.animate({
                    opacity: 0
                },500, done);
            } else {
                done();
            }
        },
        removeClass : function(element, className, done) {
            if (className === 'ng-hide') {
                element.css('opacity',0);
                element.animate({
                    opacity: 0.5
                }, 500, done);
            } else {
                done();
            }
        }
    };
});
PuWebApp.animation('.h-scheve-show1', function () {
    return {
        beforeAddClass : function(element, className, done) {
            if (className === 'ng-hide') {
                element.animate({
                    opacity: 0
                },500, done);
            } else {
                done();
            }
        },
        removeClass : function(element, className, done) {
            if (className === 'ng-hide') {
                element.css('opacity',0);
                element.animate({
                    opacity: 1
                }, 500, done);
            } else {
                done();
            }
        }
    };
});
PuWebApp.factory('SchoolEvent', function ($http) {
    var SchoolEvent = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    SchoolEvent.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        getnext('post', 'json/rankAssnThisWeek.json', {}, '', this, $http);

    };
    return SchoolEvent;
});

//----------------公共方法--------------------------//
//获取微博
function getweibo(token, param, $http, callback) {
    var promise = $http({
            //method: 'post',
            url: 'json/weibo.json'
        },
        {
            "token": token,
            "param": param
        }
    );
    promise.then(function (resp) {
        var data = resp.data.content;
        callback.push(data);
        console.log(callback);
    }.bind(callback), function (resp) {
        console.log(resp);
    });
    return callback;
}

//获取下页
function getnext(type, url, param, token, callback, $http) {
    var promise = $http({
            //method: type,  //todo 暂时不要
            url: url
        },
        {
            "token": token,
            "param": param
        }
    );
    promise.then(function (resp) {
        var data = resp.data.content;
        for (var i = 0; i < data.length; i++) {
            callback.items.push(data[i]);

        }
        callback.busy = false;
    }.bind(callback), function (resp) {
        console.log(resp);
    });
    return callback;
}

//发现首页获取
function discover(type, url, param, token, callback, $http, length, flag) {
    //红人
    var promise = $http({
           // method: type, //todo 暂时不要
            url: url
        },
        {
            "token": token,
            "param": param
        }
    );
    promise.then(function (resp) {
        var data = resp.data.content;
        if (length == "") {
            for (var i = 0; i < data.length; i++) {
                callback.push(data[i]);
            }
        } else {
            for (var i = 0; i < length; i++) {
                callback.push(data[i]);
            }
        }

    }, function (resp) {
        console.log(resp);
    });
    return callback;
}

//不知道是干啥的 v2 大概是处理json格式的
function setswiper(type, url, param, token, callback, $http){
    var promise = $http({
            //method: type, todo 暂时不要
            url: url
        },
        {
            "token": token,
            "param": param
        }
    );
    promise.then(function (resp) {
        var data = resp.data.content;
        for (var i = 0; i < data.length; i = i + 3) {
            var call = {};
            var call1 = [];
            for (var j = 0; j < 3; j++) {
                call1.push (data[i + j]);
            }
            call["itmes"] = call1;
            callback.push(call);
        }
    }, function (resp) {
        console.log(resp);
    });
    return callback;
}

