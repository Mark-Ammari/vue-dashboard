

export var planetChartData = {  
  type: 'pie',
    data: {
      labels: ['Blocked IP-Address','Unblocked IP-Address'],
      datasets: [
        { // one line graph
          label: 'Blocked IP-Address',
          data: [],
          backgroundColor: [
            'rgba(255, 0, 0, 1)', 
            'rgba(71, 183,132,.5)'
          ],
          borderColor: [
            'black',
            'black'
          ],
          borderWidth: 2,
          fill: true,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }


  export default planetChartData;