import React from 'react';
import Heatmap from '../components/Heatmap'
import RadarChart from '../components/radar';
import PolarChart from '../components/PolarChart'


function Experience() {
    return (
        <React.Fragment>
            <div className='px-10'>

                <div>
                    <Heatmap></Heatmap>
                </div>

                <div className='flex'>

                    <div className='p-10 radarContainer'>
                        <RadarChart></RadarChart>
                    </div>
                    <div className='p-10 polarContainer'>
                        <PolarChart></PolarChart>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Experience;