import React from 'react';
import Card from './Card'


function Hero() {



    return (
        <React.Fragment>
            <div className='w-full '>
                <div className='grid flex items-center justify-center
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-5
                  xl:grid-cols-5
                  
                    gap-4'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>


                </div>

            </div>

        </React.Fragment>
    )

}

export default Hero;