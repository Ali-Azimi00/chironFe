import React from 'react';
import HeroCards from '../components/HeroCards';
import HeroBanner from '../components/HeroBanner';



function Hero() {

    return (
        <React.Fragment>
            <div className='mt-0'>

                <div className=''>
                    <div>
                        <HeroBanner></HeroBanner>
                    </div>
                </div>

                <div className='cardContainer'>
                    <div>
                        <HeroCards></HeroCards>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default Hero;