import { Radar } from 'react-chartjs-2';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement);


function RadarChart() {
  const data1 = {
    labels: [
      'Mental',
      'Spirit',
      'Physical'
    ],
    datasets: [{
      label: 'My Second Dataset',
        data: [48, 98, 80],
        fill: true,
        backgroundColor: 'rgb(107, 33, 168)',
        borderColor:'rgb(107, 33, 168)',
        pointBackgroundColor: 'rgb(107, 33, 168)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: 'rgb(255, 255, 255)',
        pointHoverBorderColor: 'rgb(107, 33, 168)'
     
    }
      // ,{
      //   label: 'My Second Dataset',
      //   data: [28, 48, 40],
      //   fill: true,
      //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
      //   borderColor: 'rgb(54, 162, 235)',
      //   pointBackgroundColor: 'rgb(54, 162, 235)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgb(54, 162, 235)'
      // }
    ]
  };


  // const config = {
  //   type: 'radar',
  //   data: data,
  //   options: {
  //     elements: {
  //       line: {
  //         borderWidth: 3
  //       }
  //     }
  //   },
  // };

  const options = {
    plugins: {
    
      title: {
        display: false,
        text: 'Character Profile',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color:'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.57)',
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          display:false
        },
        pointLabels: {
          color: 'white'
      }
      },
    },
  };


  return (
    <div className=''>
      <Radar data={data1} options={options}></Radar>
    </div>
  )
}

export default RadarChart;