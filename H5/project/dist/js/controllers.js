/**
 * Created by huqiwen on 16/3/1.
 */
var PuWebApp = angular.module('pucontroller', []);


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


PuWebApp.controller('discoverctrl', ['$scope', function ($scope) {
    $scope.test = "user";

    $scope.showapp = function () {
        $('#discover-app').modal('show');
    }

}]);


PuWebApp.controller('eventctrl', function ($scope, Reddit) {
    $scope.reddit = new Reddit();
});
PuWebApp.factory('Reddit', function ($http) {
    var Reddit = function () {
        this.items = [
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
            {name: "电流学院“猜谜送福”迎新年猜灯谜活动", id: "1", addr: "融合堂大厅及东门至隧道主干道", time: "2016.12.31-2016.12.31"},
        ];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                    name: "电流学院“猜谜送福”迎新年猜灯谜活动",
                    id: "1",
                    addr: "融合堂大厅及东门至隧道主干道",
                    time: "2016.12.31-2016.12.31"
                });
            }
            this.busy = false;

        }.bind(this));
    };
    return Reddit;
});


PuWebApp.controller('weektribectrl', function ($scope, weektribe) {
    $scope.tribe = new weektribe();
});

PuWebApp.factory('weektribe', function ($http) {
    var tribe = function () {
        this.items = [
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "1"},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "2"},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "3"},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
        ];
        this.tribeimgs = [
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
        ];
        this.busy = false;
        this.after = '';
        this.id = "8";
    };
    tribe.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                        school: "电流学院",
                        id: "1",
                        hobbies: "融合堂大厅及东门至隧道主干道",
                        counts: "2016",
                        point: "123",
                        name: "tests"
                    }
                );
            }
            this.busy = false;
        }.bind(this));
    };
    return tribe;
});



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
                isfirend : "true",
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
                isfirend : "false",
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
                isfirend : "true",
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
                name : "测试测试测试测试测试测测试",
                describe : "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
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
                isfirend : "true",
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
                isfirend : "false",
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
                isfirend : "true",
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



PuWebApp.controller('weiboctrl', function ($scope, $routeParams, $location) {
    var id = $routeParams.id;
    console.log($routeParams);
    if (id == "1") {
        console.log("ok");
    } else {
        console.log("no");
        //$location.path('/event');
    }
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
        this.items = [
            {school: "电流1学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "1"},
            {school: "电流1学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "2"},
            {school: "电流1学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: "3"},
            {school: "电流2学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流2学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流2学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
            {school: "电流3学院", id: "1", hobbies: "融合堂大厅及东门至隧道主干道", counts: "2016", point: "123", name: "tests", no: ""},
        ];
        this.busy = false;
        this.after = '';
        this.id = "8";
        this.tribeimgs = [
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
            {img: "http://pocketuniv.com/data/upthumb/2015/1230/16/56838f882c68d_125x125f.jpg"},
        ];
    };
    tribe.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        $http.post("#").success(function (data) {
            //var items = data.data.children;
            for (var i = 0; i < 10; i++) {
                this.items.push({
                        school: "电流学院",
                        id: "1",
                        hobbies: "融合堂大厅及东门至隧道主干道",
                        counts: "2016",
                        point: "123",
                        name: "tests"
                    }
                );
            }
            this.busy = false;
        }.bind(this));
    };
    return tribe;
});


PuWebApp.controller('starctrl', function ($scope, $routeParams, $location, star) {
    $scope.star = new star();

})

PuWebApp.factory('star', function ($http) {
    var star = function () {
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
    return star;
});


PuWebApp.controller('entertainmentctrl', function ($scope, $routeParams, $location, game) {
    $scope.game = new game();
    $scope.search = false;
    $scope.setsearch = function(){
        if( $scope.search){
            $scope.search  = false;
        }else{
            $scope.search  = true;
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

