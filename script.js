
    var chartArea = document.getElementById("chart-area");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var birdsData = {
        labels: ["Anger", "Disgust", "Joy", "Surprise"],
        datasets: [{
            data: [10, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 0, 0, 0.6)",
                "rgba(0, 255,200, 0.6)",
                "rgba(200, 0, 200, 0.6)",
                "rgba(0, 255, 0, 0.6)"
            ],
            borderColor: "rgba(0, 0, 0, 0.8)",
            hoverBackgroundColor: [
                "rgba(255,0,0,1)"
            ],
            borderWidth: 0


        }]
    };

    var chartOptions = {
        startAngle: -Math.PI / 4,
        legend: {
            position: 'left',
            display: false
        },
        animation: {
            animateRotate: false
        }
    };

    var polarAreaChart = new Chart(chartArea, {
        type: 'polarArea',
        data: birdsData,
        options: {
            scale: {
                display: false
            },
            legend: {
                display: false
            }
        }

    });
