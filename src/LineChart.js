import React from 'react';
import Chart from 'chart.js';

export default function LineChart({xAxis, yAxis, sourceName}) {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    function chartIt() {
      if (chartRef.current) {
        const myChart = new Chart(chartRef.current, {
          type: 'line',
          data: {
            labels: xAxis,
            datasets: [
              {
                label: sourceName,
                data: yAxis,
                borderWidth: 2,
                backgroundColor: 'rgba(6, 167, 125, 0.1)',
                borderColor: 'rgba(6, 167, 125, 1)',
                pointBackgroundColor: 'rgba(225, 225, 225, 1)',
                pointBorderColor: 'rgba(6, 167, 125, 1)',
                pointHoverBackgroundColor: 'rgba(6, 167, 125, 1)',
                pointHoverBorderColor: '#fff'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true
          }
        });
      }
    }
    chartIt();
  }, [xAxis,yAxis]);

  return (
    <React.Fragment>
      <canvas ref={chartRef}/>
    </React.Fragment>
  );
};

/**
 *
 *
 *

 */
