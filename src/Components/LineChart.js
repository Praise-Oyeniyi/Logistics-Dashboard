import React, {useState} from 'react'
import {Line} from 'react-chartjs-2';



const LineChart = () => {
    return (
        <div>
            <Line
            data={{
              labels: ['Oct 22', 'Oct 23','Oct 24','Oct 25','Oct 26','Oct 27','Oct 28','Oct 29',],
              datasets: [
                {
                  label: 'Shipments',
                  data: [10, 15, 13, 55, 50, 30, 40, 60],
                  backgroundColor: '#2CD9C5',
                  borderColor: '#2CD9C5',
                  borderWidth: 1.2,
                },
                {
                  label: 'Vehicles',
                  data: [0, 5, 10, 8, 20, 9, 20, 30],
                  backgroundColor: '#6672fb3b',
                  borderColor: '#6672FB',
                  borderWidth: 1.2,
                },
              ],
            }}
            height={195}
            options={{
              maintainAspectRatio: false,
              // scales: {
              //   yAxes: [
              //     {
              //       ticks: {
              //         beginAtZero: true,
              //       },
              //     },
              //   ],
              // },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
        />
        </div>
    )
}

export default LineChart
