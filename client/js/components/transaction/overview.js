function renderOverview() {
  document.querySelector('#page').innerHTML = `
    <div id="piechart"></div>
  `
}
google.charts.load('current', {'packages':['corechart']});

// Draw the chart and set the chart values
function drawChart() {
  // var data = google.visualization.arrayToDataTable([
  // ['Task', 'Hours per Day'],
  // ['Work', 8],
  // ['Friends', 2],
  // ['Eat', 2],
  // ['TV', 2],
  // ['Gym', 2],
  // ['Sleep', 8]
  // ]);

  var arrayOfUserExpenses = [];

  // fetch('/api/transactions')
  // .then(res => res.json())
  // .then(transactions => {
  //   console.log(transactions)
  // })
  
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Friends', 2],
    ['Eat', 2],
    ['TV', 2],
    ['Gym', 2],
    ['Sleep', 8]
  ]);



  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}



