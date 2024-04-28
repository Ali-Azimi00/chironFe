import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";
import './component.css'
import axios from 'axios';


function HeroCards() {

    // const [catState, setCatState] = useState('')
    // const [showCats, setShowCats] = useState(true)
    // const [fadeStat, setFadeStat] = useState("")
    const [fadeInStat, setFadeInStat] = useState("")
    const [personTasks, setPersonTasks] = useState([]);


    useEffect(() => {
        getPersonTasks()
        // loadStatCards();
        // loadCatCards();
        // loadPersonTasks()
    }, [])

    const getTaskIcon = (taskName: string) => {
        let list: any = []
        tasks.filter((t) => t.name.toLowerCase() == taskName.toLowerCase() ? list.push(t.icon) : null);
        return list[0];
    }

    const getPersonTasks = async () => {
        const response = await axios.get(
            `http://localhost:8080/person/1/task_list`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            });
        setPersonTasks(response.data)
    }

    const addExperience = async (taskId: Int16Array) => {
        const response = await axios.post(
            `http://localhost:8080/exp/1/`, {
            expCount: 2,
            task: {
                "taskId": taskId
            }
        }
        )

    }


    const loadPersonTasks = () => {
        return (
            personTasks.map((task: any) => (
                <div className='text-center' key={task.taskId}
                    onClick={() => { addExperience(task.taskId) }}
                >
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


    // const loadStatCards = () => {
    //     return (
    //         tasks.filter((task) => task.category === catState).map((task) => (
    //             <Card fade={false} key={task.icon} taskName={task.name} icon={task.icon}></Card>
    //         ))
    //     )
    // }

    // const loadCatCards = () => {
    //     return (
    //         tasks.filter((task) => task.category === 'category').map((task) => (
    //             <div className='delay-100 mx-auto ' key={task.icon} onClick={() => { categoryFork(task) }} >
    //                 <Card fade={true} taskName={task.name} icon={task.icon}></Card>
    //             </div>
    //         ))
    //     )
    // }

    // const categoryFork = (task: any) => {
    //     setTimeout(() => { setShowCats(false) }, 2500)
    //     setCatState(task.name)
    // }



    return (
        <React.Fragment>
            <div className='mx-auto flex'
                style={{ justifyContent: "center" }}
            >
                {/* <div 
                    className={fadeInStat + 
                        ' grid ' +
                        'xsm:grid-cols-2 ' +
                        'sm:grid-cols-3 ' +
                        'md:grid-cols-4 ' +
                        'lg:grid-cols-5 ' +
                        'xl:grid-cols-6 ' +
                        'gap-6'}
                        style={{ opacity: "0%"}}
                >

                    {showCats ? null : loadStatCards()}
                    { personTasks.length == 0 ? loadPersonTasks(): null}

                </div> */}

                <div onClick={() => { }}
                    // className={'grid grid-cols-3 xsm:grid-cols-1 gap-6  '
                    className={fadeInStat +
                        ' grid ' +
                        'xsm:grid-cols-2 ' +
                        'sm:grid-cols-3 ' +
                        'md:grid-cols-4 ' +
                        'lg:grid-cols-5 ' +
                        'xl:grid-cols-6 ' +
                        'gap-6'
                        // + fadeStat
                    }
                >
                    {/* {showCats ? loadCatCards() : null} */}
                    {loadPersonTasks()}

                </div>

            </div>

        </React.Fragment>
    )
}

export default HeroCards;
