import React, { useEffect, useState } from 'react';
import HeroCards from '../components/HeroCards';
import HeroBanner from '../components/HeroBanner';

type Task = {
    taskId: number;
    taskMinCount: number;
    taskName: string;
    taskUnit: string;
    taskCategory: any;
}
type XP = {
    expId: number;
    expCount: number;
    date: string;
    task: Task;
}
function Hero() {

    const [progress, setProgress] = useState(0);
    const [xpList, setXpList] = useState<XP[]>([]);

    useEffect(() => {
        updateProgress()
    }, [xpList])


    function updateProgress() {
        let count = progCounter();
        const prog = (count / 12) * 100
        setProgress(prog)
    }

    function progCounter() {
        let progressCounter = 0;
        xpList.forEach((xp: XP) => {
            if (xp.task.taskMinCount <= xp.expCount) {
                progressCounter++;
            }
        })
        return progressCounter
    }


    const loadProgBar = () => {

        return (
            <div className='w-full bg-gray-200  h-3 dark:bg-gray-700 mb-0 cursor-pointer'>
                {/* <div className={`cursor-pointer transition-all ease-out duration-1000 
                                h-full bg-purple-600 h-3 rounded-r-3xl`} */}
                <div className={`cursor-pointer transition-all ease-out duration-1000 
                                h-full bg-purple-600 h-3 rounded-r-3xl`}
                    style={{ width: progress.toString() + "%" }}
                >
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>

            {loadProgBar()}

            <div className='mt-0'>

                <div className='mx-auto'>
                    <div>
                        <HeroBanner></HeroBanner>
                    </div>
                </div>

                <div className='cardContainer'>
                    <div>
                        <HeroCards setXpList={setXpList}></HeroCards>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default Hero;