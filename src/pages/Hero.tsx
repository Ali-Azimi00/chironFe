import React, { useEffect, useState } from 'react';
// import HeroCards from '../components/HeroCards';
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
type categories = {
    mind: number;
    physical: number;
    spirit: number;
}

function Hero() {

    const [progress, setProgress] = useState(0);
    const [xpList, setXpList] = useState<XP[]>([]);
    const [catProg, setCatProg] = useState<categories>({ mind: 0, physical: 0, spirit: 0 });



    useEffect(() => {
        updateProgress()
        catProgCounter()
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
                // catProgCounter(xp.task.taskCategory[0].categoryType);
                progressCounter++;
            }
        })
        return progressCounter
    }

    function catProgCounter() {

        let mindCat = 0;
        let physicalCat = 0;
        let spiritCat = 0;

        xpList.forEach((xp: XP) => {
            if (xp.task.taskMinCount <= xp.expCount) {
                // catProgCounter(xp.task.taskCategory[0].categoryType);
                switch (xp.task.taskCategory[0].categoryType) {
                    case "mind":
                        mindCat++;
                        break;
                    case "physical":
                        physicalCat++
                        break;
                    case "spirit":
                        spiritCat++;
                        break;
                }
            }
        })
        setCatProg({ mind: mindCat, physical: physicalCat, spirit: spiritCat })
    }


    const loadProgBar = () => {

        return (
            <div className='progressGroove w-full bg-gray-200  h-4 dark:bg-gray-700 mb-0 cursor-pointer'>
                {/* <div className={`cursor-pointer transition-all ease-out duration-1000 
                                h-full bg-purple-600 h-3 rounded-r-3xl`} */}
                <div className={` cursor-pointer transition-all ease-out duration-1000 
                                h-full bg-purple-600 h-3 rounded-r-3xl progressBar`}
                    style={{ width: progress.toString() + "%" }}
                >
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>

            {loadProgBar()}

            <div className='mt-0 pb-12'>

                <div className='mx-auto '>
                    <div>
                        <HeroBanner setXpList={setXpList} catProg={catProg}></HeroBanner>
                    </div>
                </div>
                {/* 
                <div className='cardContainer'>
                    <div>
                        <HeroCards setXpList={setXpList}></HeroCards>
                    </div>
                </div> */}
            </div>

        </React.Fragment >
    )
}

export default Hero;