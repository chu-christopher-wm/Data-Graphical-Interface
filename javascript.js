/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {
    packages: ['corechart', 'bar']
});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Deaths', '2010 Males', '2010 Females'],
        ['Malignant Neoplasms', 1540, 3438],
        ['Peptic Ulcer', 13, 15],
        ['Diabetes Mellitus', 245, 219],
        ['Septicemia', 36, 107],
        ['Atherosclerosis', 46, 74]
    ]);

    var options = {
        title: 'Cause of Deaths in 2010',
        chartArea: {
            width: '30%'
        },
        hAxis: {
            title: 'Amount of Deaths',
            minValue: 0
        },
        vAxis: {
            title: 'Cause of Death'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}