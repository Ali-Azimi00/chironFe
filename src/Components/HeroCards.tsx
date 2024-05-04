import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";
import './component.css'
import axios from 'axios';
import Modal from './Modal';


function HeroCards() {

    const [personTasks, setPersonTasks] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [selectedTask, setSelectedTask] = useState([]);
    const [currentCount, setCurrentCount] = useState(0)


    useEffect(() => {
        getPersonTasks()
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


    const openCardModal = (task: any) => {
        setSelectedTask(task);
        getTodayExp(task.taskId)
        setOpenModal(true)
    }


    const loadPersonTasks = () => {
        return (
            personTasks.map((task: any) => (
                <div className='text-center cursor-pointer' key={task.taskId}
                    onClick={() => { openCardModal(task) }}
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

    const getTodayExp = async (tId: Int16Array) => {
        const response = await axios.get(
            `http://localhost:8080/exp/person/1/Today`
        )

        let todayExp = response.data
        let count = todayExp.filter((xp: any) => xp.task.taskId === tId)

        if (count.length) {
            setCurrentCount(count[0].expCount)
        }
        else {
            setCurrentCount(0)
        }
    }


    return (
        <React.Fragment>
            <div className='mx-auto flex'
                style={{ justifyContent: "center" }}
            >
                <div onClick={() => { }}
                    className={
                        ' grid ' +
                        'xxsm:grid-cols-1 ' +
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

            <div className={openModal ? "" : "hidden"}>
                <Modal setOpenModal={setOpenModal}
                    selectedTask={selectedTask}
                    currentCount={currentCount}

                />

            </div>

        </React.Fragment>
    )
}

export default HeroCards;
