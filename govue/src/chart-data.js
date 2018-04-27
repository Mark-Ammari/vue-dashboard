

export var planetChartData = {  
  type: 'line',
    data: {
      labels: ['2018-01-28','2018-02-08','2018-02-18','2018-02-22',
      '2018-03-02','2018-03-04','2018-03-10','2018-03-24','2018-04-18',
      '2018-04-28',],
      datasets: [
        { // one line graph
          label: 'Low',
          data: [1,2,3,4,5,6,7,8,9,10],
          backgroundColor: [
            'rgba(54,73,93,.5)', 
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)', 
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)', 
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)', 
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)', 
            'rgba(54,73,93,.5)',
           
          ],
          borderColor: [
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 3,
          fill: true,
        },
        { // another line graph
          label: 'High',
          data: [10,20,50,30,60,100,22,44,66, 27],
          backgroundColor: [
            'rgba(71, 183,132,.5)', // Green
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            
          ],
          borderColor: [
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',

          ],
          borderWidth: 3,
          fill: true,
        }
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