

export var barChartData = {  
    type: 'bar',
      data: {
        labels: ['2018-01-28'],
        datasets: [
          { // one line graph
            label: 'Blocked IP-Address',
            data: [20],
            backgroundColor: [
              'rgba(255, 0, 0, 1)',
             
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 2,
            fill: true,
          },
          { // another line graph
            label: 'Unblocked IP-Address',
            data: [20],
            backgroundColor: [
              'rgba(71, 183,132,.5)'
            ],
            borderColor: [
              'black'
  
            ],
            borderWidth: 2,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        lineTension: 0,
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
  
  
    export default barChartData;