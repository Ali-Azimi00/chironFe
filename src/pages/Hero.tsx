import React from 'react';
import HeroCards from '../components/HeroCards';
import HeroBanner from '../components/HeroBanner';



function Hero() {

    return (
        <React.Fragment>
            <div className='mt-0'>

                <div className='ccLg'>
                    <div>
                        <HeroBanner></HeroBanner>

                    </div>

                </div>

                <div className='cardContainer'
                // className='flex justify-center items-center'
                // style={{margin:'0 auto'}}
                >
                    <div>
                        <HeroCards></HeroCards>

                    </div>
                </div>





            </div>

        </React.Fragment >
    )
}

export default Hero;