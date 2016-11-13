(function () {
    'use strict';

    var module = angular.module('ae-datetimepicker', []);

    module.directive('datepicker', [
        '$timeout',
        function ($timeout) {
            return {
                restrict: "A",
                require: 'ngModel',
                scope: {
                    defaultdate: "@defaultdate"
                },
                link: function(scope,element,attr,ngModel){
                    
                    scope.$watch('defaultdate', function (newValue) {

                        if(newValue){
                            element.datetimepicker({
                                inline: true,
                                locale: 'tr',
                                format: 'YYYY-MM-DD',
                                defaultDate: newValue,
                                showTodayButton: true,
                                keepOpen : true,
                                allowInputToggle : false,
                                icons: {
                                    time: 'fa fa-clock-o',
                                    date: 'fa fa-calendar',
                                    up: 'fa fa-chevron-up',
                                    down: 'fa fa-chevron-down',
                                    previous: 'fa fa-chevron-left',
                                    next: 'fa fa-chevron-right',
                                    today: 'fa fa-calendar-check-o',
                                    clear: 'fa fa-trash-o',
                                    close: 'fa fa-close'
                                },
                                widgetPositioning: {
                                    horizontal: 'left',
                                    vertical: 'bottom'
                                },
                            });

                        }

                    });
                    

                    element.on("dp.change",function(e){
                        var tarih = moment(e.date._d).format("DD/MM/YYYY");
                        
                        ngModel.$setViewValue(tarih);
                        
                    });
                    
                }

            };
        }
    ]);
})();
