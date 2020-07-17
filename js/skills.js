new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["High School Diploma or GED", "Bachelor's Degree", "EuAssociate's Degreerope", "Latin America", "North America"],
      datasets: [
        {
          backgroundColor: ["#1497ff", "#1497ff","#1497ff","#1497ff","#1497ff"],
          data: [94,3,1,2,0,0]
        }
      ]
    },
    options: {
      legend: { display: false },
    }
});

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [0,4,8,12,16,20,24,],
      datasets: [{ 
          data: [22000,22700,23500,24200,24300,24500],
          label: "Annual salary in USD",
          borderColor: "#1497ff",
          fill: false
        }
      ]
    },
  });
