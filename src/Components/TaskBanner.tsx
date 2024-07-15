import React, { useEffect, useState } from 'react';
import { tasks } from '../constants';
import Card from './Card';

function TaskBanner(props: any) {

    const [tasksData, setTasksData] = useState(props.personTaskList);
    const [currentPg, setCurrentPg] = useState<number>(1);
    const [postsPerPg] = useState<number>(4);
    const [lastPg, setLastPg] = useState(3);

 

    function pageTotal() {

        if (tasksData.length > 8) {
            setLastPg(3)
            console.log("data > 8")
            console.log(lastPg)
        }
        else if (tasksData.length > 4) {
            setLastPg(2)
            console.log("data > 4")
        }
        else {
            setLastPg(1)
            console.log("data <=4")
        }
    }

    useEffect(() => {
        setTasksData(props.personTaskList)
    }, [props.personTaskList])

    useEffect(()=>{
        pageTotal()
    },[tasksData])

    const getTaskIcon = (taskName: string) => {
        let list: any = []
        tasks.filter((t: any) => t.name.toLowerCase() == taskName.toLowerCase() ? list.push(t.icon) : null);
        return list[0];
    }

    const lastPostIndex = currentPg * postsPerPg;
    const firstPostIndex = lastPostIndex - postsPerPg;
    const currentPosts = tasksData.slice(firstPostIndex, lastPostIndex)

    const loadPersonTasks = () => {
        return (
            currentPosts.map((task: any) => (
                <div className='text-center hover:scale-x-105 hover:scale-y-105 hover:cursor-pointer' key={task.taskId}>
                    <Card
                        cssProp={''}
                        fade={false}
                        taskName={task.taskName}
                        icon={getTaskIcon(task.taskName)}>
                    </Card>
                </div>
            ))
        )
    }

    const changeChevrons = (page: string) => {
        switch (page) {
            case "first": { return currentPg === 1 ? "transparent" : "currentColor" }
            case "last": { return currentPg === lastPg ? "transparent" : "currentColor" }

        }
    }

    return (
        <React.Fragment>
            <div className='taskBanner bg-transparent mt-4 justify-center'>

                {/* <button onClick={() => { currentPg > 1 ? setCurrentPg(currentPg - 1) : null }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={changeChevrons("first")} className="size-4">
                        <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button> */}
                <div>
                    
                </div>
                <button onClick={() => { currentPg > 1 ? setCurrentPg(currentPg - 1) : null }} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={changeChevrons("first")} className="size-4">
                        <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button>

                <div>
                    <h1 className='mb-2 ml-2 font-bold '>
                        Current Tasks
                    </h1>
                    <div className={'grid ' +
                        'xsm:grid-cols-2 ' +
                        'sm:grid-cols-2 ' +
                        'md:grid-cols-4 ' +
                        'lg:grid-cols-4 ' +
                        'xl:grid-cols-4 ' +
                        '2xl:grid-cols-4 ' +
                        'gap-6'}>
                        {loadPersonTasks()}
                    </div>
                </div>


                {/* <button onClick={() => { currentPg < lastPg ? setCurrentPg(currentPg + 1) : null }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={changeChevrons("last")} className="size-4">
                        <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button> */}
                <button onClick={() => { currentPg < lastPg ? setCurrentPg(currentPg + 1) : null }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={changeChevrons("last")} className="size-4">
                        <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>

            </div>
        </React.Fragment>
    )
}

export default TaskBanner;