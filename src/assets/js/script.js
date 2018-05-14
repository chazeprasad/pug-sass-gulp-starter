$(()=> {
    var includes = $('[data-include]');
    $.each(includes, function () {
        var file = './' + $(this).data('include');
        $(this).load(file);
    });

})


function ChartJsController($scope, $window) {

    var charts = [];
    $scope.$on('chart-create', function (event, chart) {
        charts.push(chart);
    });

    $scope.resize = function () {
        charts.forEach(function (chart) {
            // chart.resize(chart.render, true);
            chart.resize();
        })
    };

    angular.element($window).bind('resize', function () {
        console.log('resize')
        $scope.resize();
    });



    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['New Users', 'Unsubscribed Users'];
    $scope.data = [
        [10, 30, 12, 80, 20, 15, 60],
        [20, 10, 44, 15, 60, 20, 25]

    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    var gridColor = 'rgba(222, 222, 222, 1)';
    var color1 = '40, 178, 148';
    var color2 = '66, 133, 266';
    // var color2 = '255, 53, 71';

    $scope.datasetOverride = [{
            yAxisID: 'y-axis-1',
            borderWidth: 1,
            borderColor: `rgba(${color1}, 1)`,
            backgroundColor: `rgba(${color1}, .4)`,

            pointBorderColor: `rgba(${color1}, 1)`,
            pointBackgroundColor: `rgba(${color1}, .4)`,
            pointRadius: 3,
            pointHoverBorderColor: `rgba(${color1}, 1)`,
            pointHoverBackgroundColor: `rgba(${color1}, .4)`,
            pointHoverRadius: 5,
        },
        {
            yAxisID: 'y-axis-2',
            borderWidth: 1,
            borderColor: `rgba(${color2}, 1)`,
            backgroundColor: `rgba(${color2}, .4)`,

            pointBorderColor: `rgba(${color2}, 1)`,
            pointBackgroundColor: `rgba(${color2}, .4)`,
            pointRadius: 3,
            pointHoverBorderColor: `rgba(${color2}, 1)`,
            pointHoverBackgroundColor: `rgba(${color2}, .4)`,
            pointHoverRadius: 5,

        }

    ];
    $scope.options = {
        tooltips: {
            backgroundColor: 'rgba(245, 166, 35, .6)',
            borderColor: 'rgba(245, 166, 35, 1)',

            borderWidth: 1
        },
        scales: {

            yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    gridLines: {
                        display: true,
                        color: gridColor
                    },
                    ticks: {
                        suggestedMin: 0,
                        // beginAtZero: true,
                        stepSize: 20,
                        max: 100
                    }
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: false,
                    position: 'left',
                    gridLines: {
                        display: false,
                        color: gridColor
                    },
                    ticks: {
                        suggestedMin: 0,
                        // beginAtZero: true,
                        stepSize: 20,
                        max: 100
                    }

                }
            ]
        }
    };

};


let moduleList = [

    'chart.js'
];

const app = angular.module('app', moduleList);
app.config(function (ChartJsProvider) {
    ChartJsProvider.setOptions({
        colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        // colors: ['#28b294', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
});







