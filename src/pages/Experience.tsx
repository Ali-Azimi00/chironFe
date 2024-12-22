import React from 'react';
import '../components/graphStyles.css'

import Heatmap from '../components/Heatmap'
import RadarChart from '../components/radar';
import PolarChart from '../components/PolarChart'


function Experience() {
    return (
        <React.Fragment>
            <div className='px-10 xCenter'>

                <div>
                    <Heatmap></Heatmap>
                </div>

                <div className={'flex  xCenter graphsContainer '+ 
                'grid grid-cols-2 grid-gap-48'}
                >

                        <div className='radarContainer '>
                            <RadarChart></RadarChart>
                        </div>
                        <div className=' polarContainer '>
                            <PolarChart></PolarChart>
                        </div>

                </div>

            </div>

        </React.Fragment>
    )
}

export default Experience;