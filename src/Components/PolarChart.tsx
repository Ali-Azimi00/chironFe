import React from "react";
import { PolarArea } from 'react-chartjs-2';
import { Chart, PolarAreaController, ArcElement, RadialLinearScale } from 'chart.js';



Chart.register(PolarAreaController, ArcElement, RadialLinearScale);


function PolarChart() {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 24],
            backgroundColor: [
                'rgba(107, 33, 168, .9)',
                'rgba(107, 33, 168, .7)',
                'rgba(107, 33, 168,.5)',
                'rgba(107, 33, 168,.3)',
                'rgba(107, 33, 168,.1)',
            ]
        }]
    };

    const config = {
        type: 'polarArea',
        data: data,
        options: {}
    };

    const options = {
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        plugins: {
          tooltip: {
            // Tooltip will only receive click events
            events: ['click']
          }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'white'

                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.17)',
                },
                min: 0,
                max: 30,
                ticks: {
                    stepSize: 20,
                    color: 'transparent',
                    display: false
                },
                pointLabels: {
                    color: 'white'
                }
            }
        }
    }


    return(
        <React.Fragment >
            <div className="">
                <PolarArea data={data} options={options}></PolarArea>
            </div>
        </React.Fragment >
    )
}

export default PolarChart;