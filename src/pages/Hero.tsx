import React from 'react';
import HeroCards from '../components/HeroCards';
import HeroBanner from '../components/HeroBanner';
import axios from 'axios';



function Hero() {

    const getTodayExp = async()=>{
        const response = await axios.get(
            `http://localhost:8080/exp/person/1/Today`
        )

        console.log("Response:: " + response.data)
    }


    return (
        <React.Fragment>
            <button onClick={()=>{getTodayExp()}}>adf</button>
            <div className='mt-0'>

                <div className='mx-auto'>
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