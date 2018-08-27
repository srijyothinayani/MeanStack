challenge.directive('type', function() {
    return {
        restrict: 'E',
        template: '<span class="btn btn-primary btn-sm ts-common-button"><i class="fa fa-check-square-o ts-icon" aria-hidden="true"></i></i>&nbsp;&nbsp;<span id="ts-icon-text" class="ng-binding">{{quiz_type}}</span> </span>',
        link: function (scope, element, attrs){
            scope.quiz_type = attrs.type;
            if(attrs.type === 'coding'){
                scope.icon_type = 'fa fa-code';
            } else if(attrs.type === 'choice'){
                scope.icon_type = 'fa fa-check-square-o';
            } else {
                scope.icon_type = 'fa fa-video-camera';
            }
        }
    };
})
    .directive('level', function() {
        return {
            restrict: 'E',
            template: '<span class="btn btn-primary btn-sm ts-common-button"><i class="fa fa-signal ts-icon" aria-hidden="true"></i>&nbsp;&nbsp;<span id="ts-icon-text" class="ng-binding">{{lName}}</span></span>',
            link: function (scope, element, attrs){
                scope.lName = attrs.name;
            }
        };
    })
    .directive('subject', function() {
        return {
            restrict: 'E',
            template: '<span class="btn btn-primary btn-sm ts-common-button"><i class="fa fa-book ts-icon" aria-hidden="true"></i>&nbsp;&nbsp;<span id="ts-icon-text" class="ng-binding">{{sName}}</span></span>',
            link: function (scope, element, attrs){
                scope.sName = attrs.name;
            }
        };
    })
    .directive('startDate', function() {
        return {
            restrict: 'E',
            template: '<span class="btn label-info ts-common-date"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;<span id="ts-date-text" class="ng-binding">{{startDate}}</span></span>',
            link: function (scope, element, attrs){
                scope.startDate = attrs.name;
            }
        };
    })
    .directive('endDate', function() {
        return {
            restrict: 'E',
            template: '<span class="btn label-default ts-common-date"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;<span id="ts-date-text" class="ng-binding">{{endtDate}}</span></span>',
            link: function (scope, element, attrs){
                scope.endtDate = attrs.name;
            }
        };
    }) .filter('secToMin', function () {
        return function (timeInSeconds) {
            if (isNaN(timeInSeconds)) {
                return '0';
            } else {
                var minuteValue = parseInt(timeInSeconds / 60), secondsValue = timeInSeconds % 60;
            }
            if (minuteValue === 0) {
                return secondsValue + 's';
            } else {
                return minuteValue + 'm ' + secondsValue + 's';
            }
        };
    });
