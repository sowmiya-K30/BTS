/*global $, document*/
$(document).ready(function () {

    'use strict';

    Chart.defaults.global.defaultFontColor = '#75787c';

    // ------------------------------------------------------- //
    // Line Chart Custom 1
    // ------------------------------------------------------ //
    var LINECHARTEXMPLE   = $('#lineChartCustom1');
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        options: {
            legend: {labels:{fontColor:"#777", fontSize: 12}},
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 60,
                        min: 0
                    },
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }]
            },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Data Set One",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(81, 9, 191, 0.88)",
                    borderColor: "rgba(134, 77, 217, 088)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(22, 214, 54, 0.88)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(102, 13, 236, 0.88)",
                    pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 20, 17, 40, 30, 22, 30],
                    spanGaps: false
                },
                {
                    label: "Data Set Two",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(998,998,98,0.5)",
                    borderColor: "rgb(248, 11, 248)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(13, 204, 23, 0.5)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(1, 1, 245, 0.5)",
                    pointHoverBorderColor: "rgba(19, 13, 187, 0.24)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 30, 22, 20, 35, 25, 50],
                    spanGaps: false
                }
            ]
        }
    });



    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    var BARCHART1 = $('#barChartCustom1');
    var barChartHome = new Chart(BARCHART1, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: true,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 0
                    },
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                     ],
                    borderColor: [
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",

                    ],
                    borderWidth: 0.3,
                    data: [35, 55, 65, 85, 40, 30, 50, 35, 50, 70, 60, 50]
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Bar Chart Example 2
    // ------------------------------------------------------ //
    var BARCHART1 = $('#barChartCustom2');
    var barChartHome = new Chart(BARCHART1, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: true,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 0
                    },
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9'
                    ],
                    borderColor: [
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9',
                        '#CF53F9'
                    ],
                    borderWidth: 0.2,
                    data: [30, 40, 45, 55, 70, 45, 60, 35, 50, 63, 40, 70]
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Line Chart Custom 2
    // ------------------------------------------------------ //
    var LINECHART1 = $('#lineChartCustom2');
    var myLineChart = new Chart(LINECHART1, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 40,
                        min: 10,
                        stepSize: 0.1
                    },
                    display: false,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
            datasets: [
                {
                    label: "Team Drills",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: '#EF8C99',
                    pointBorderColor: '#EF8C99',
                    pointHoverBackgroundColor: '#EF8C99',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#EF8C99",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22],
                    spanGaps: false
                },
                {
                    label: "Team Drills",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: 'rgb(242, 9, 9)',
                    pointBorderColor: 'rgb(242, 9, 9)',
                    pointHoverBackgroundColor: 'rgba(238, 139, 152, 0.24)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(238, 139, 152, 0.24)",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
                    spanGaps: false
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Line Chart Custom 3
    // ------------------------------------------------------ //
    var LINECHART1 = $('#lineChartCustom3');
    var myLineChart = new Chart(LINECHART1, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 40,
                        min: 10,
                        stepSize: 0.1
                    },
                    display: false,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
            datasets: [
                {
                    label: "Team Drills",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: '#CF53F9',
                    pointBorderColor: '#CF53F9',
                    pointHoverBackgroundColor: '#CF53F9',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#CF53F9",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
                    spanGaps: false
                },
                {
                    label: "Team Drills",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: 'rgba(207, 83, 249, 0.24)',
                    pointBorderColor: 'rgba(207, 83, 249, 0.24)',
                    pointHoverBackgroundColor: 'rgba(207, 83, 249, 0.24)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(207, 83, 249, 0.24)",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22],
                    spanGaps: false
                }
            ]
        }
    });



    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTEXMPLE    = $('#barChartCustom3');
    var barChartExample = new Chart(BARCHARTEXMPLE, {
        type: 'bar',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }]
            },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        
                    ],
                    hoverBackgroundColor: [
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                    ],
                    borderColor: [
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                        "#17A2B8",
                    ],
                    borderWidth: 0.5,
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
                {
                    label: "Data Set 2",
                    backgroundColor: [
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",

                    ],
                    hoverBackgroundColor: [
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)"
                    ],
                    borderColor: [
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)",
                        "rgb(255,105,180)"
                    ],
                    borderWidth: 0.5,
                    data: [35, 40, 60, 47, 88, 27, 30],
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Pie Chart Custom 1
    // ------------------------------------------------------ //
    var PIECHARTEXMPLE    = $('#pieChartCustom1');
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'pie',
        options: {
            legend: {
                display: true,
                position: "left"
            }
        },
        data: {
            labels: [
                "A",
                "B",
                "C",
                "D"
            ],
            datasets: [
                {
                    data: [300, 50, 100, 80],
                    borderWidth: 0,
                    backgroundColor: [
                        '#75548',
                        "#6F42C1",
                        "#E83E8C",
                        "#FD7E14"
                    ],
                    hoverBackgroundColor: [
                        '#795548',
                        "#6F42C1",
                        "#E83E8C",
                        "#FD7E14"
                    ]
                }]
            }
    });

    var pieChartExample = {
        responsive: true
    };



    // ------------------------------------------------------- //
    // Doughnut Chart Custom
    // ------------------------------------------------------ //
    var PIECHART = $('#doughnutChartCustom1');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 80,
            legend: {
                display: true,
                position: "left"
            }
        },
        data: {
            labels: [
                "A",
                "B",
                "C",
                "D"
            ],
            datasets: [
                {
                    data: [120, 90, 77, 95],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        '#20C997',
                        "#17A2B8",
                        "#C0E218",
                        "#001F3F"
                    ],
                    hoverBackgroundColor: [
                        "#200C997",
                        "#17A2B8",
                        "#C0E218",
                        "#001F3F"
                    ]
                }]
        }
    });



    // ------------------------------------------------------- //
    // Polar Chart
    // ------------------------------------------------------ //
    var chartOptions = {
        scale: {
            gridLines: {
                color: '#3f4145'
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 20
            },
            pointLabels: {
                fontSize: 12
            }
        },
        legend: {
            position: 'left'
        },
        elements: {
            arc: {
                borderWidth: 0,
                borderColor: 'transparent'
            }
        }
    };
    var POLARCHARTEXMPLE  = $('#polarChartCustom');
    var polarChartExample = new Chart(POLARCHARTEXMPLE, {
        type: 'polarArea',
        options: chartOptions,
        data: {
            datasets: [{
                data: [
                    80,
                    70,
                    60,
                    50
                ],
                backgroundColor: [
                    "#007BFF",
                    "#28A745",
                    "#DC3545",
                    "#FFC107"
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "A",
                "B",
                "C",
                "D"
            ]
        }
    });

    var polarChartExample = {
        responsive: true
    };



    // ------------------------------------------------------- //
    // Radar Chart
    // ------------------------------------------------------ //
    var chartOptions = {
        scale: {
            gridLines: {
                color: '#3f4145'
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 20
            },
            pointLabels: {
                fontSize: 12
            }
        },
        legend: {
            position: 'left'
        }
    };
    var RADARCHARTEXMPLE  = $('#radarChartCustom');
    var radarChartExample = new Chart(RADARCHARTEXMPLE, {
        type: 'radar',
        options: chartOptions,
        data: {
            labels: ["A", "B", "C", "D", "E", "C"],
            datasets: [
                {
                    label: "First dataset",
                    backgroundColor: "rgba(23, 167, 220, 0.91)",
                    borderWidth: 2,
                    borderColor: "#7127AC",
                    pointBackgroundColor: "#7127AC",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#7127AC",
                    data: [65, 59, 90, 81, 56, 55]
                },
                {
                    label: "Second dataset",
                    backgroundColor: "rgba(65, 235, 18, 0.4)",
                    borderWidth: 2,
                    borderColor: "#CF53F9",
                    pointBackgroundColor: "#CF53F9",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#CF53F9",
                    data: [50, 60, 80, 45, 96, 70]
                }
            ]
        }
    });
    var radarChartExample = {
        responsive: true
    };







});
