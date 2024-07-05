import React, { useEffect, useState } from 'react';
import Card from './Card';
import { tasks } from "../constants";
import './component.css'
import axios from 'axios';
import Modal from './Modal';
// import { redirect } from 'react-router-dom';

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

function HeroCards(props: any) {

    const [personTasks, setPersonTasks] = useState<Task[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task>();
    const [currentCount, setCurrentCount] = useState(0);
    const [xpList, setXpList] = useState<XP[]>([]);


    useEffect(() => {
        getPersonTasks()
    }, [])

    const getTaskIcon = (taskName: string) => {
        let list: any = []
        tasks.filter((t) =>
            t.name.toLowerCase() == taskName.toLowerCase() ?
                list.push(t.icon) : null);
        return list[0];
    }


    const getTodayExp = async () => {
        const response = await axios.get(
            `http://localhost:8080/exp/person/1/Today`
        )
        let todayExp = response.data
        setXpList(todayExp)
        props.setXpList(todayExp)
    }

    const getSelectedXp = (taskId: number) => {
        let currentXp: XP[] = xpList.filter((xp: XP) => {
            return xp.task.taskId === taskId ?
                xp : null
        })
        if (currentXp.length != 0) {
            setCurrentCount(currentXp[0].expCount)
            return currentXp[0].expCount;
        }
        else {
            setCurrentCount(0)
            return 0
        }
    }


    const openCardModal = (task: Task) => {
        getSelectedXp(task.taskId)
        setSelectedTask(task);
        setOpenModal(true)
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
        let taskList: Task[] = response.data;
        setPersonTasks(taskList)
    }

    const loadPersonTasks = () => {
        getTodayExp()
        return (
            personTasks.map((task: any) => (
                <button className='buttonClear text-center  cursor-pointer hover:scale-105 ' key={task.taskId}
                    onClick={() => { openCardModal(task) }}
                >
                    <Card
                        cssProp={''}
                        fade={false}
                        taskName={task.taskName}
                        icon={getTaskIcon(task.taskName)}>
                    </Card>
                </button>
            )
            )
        )
    }

    return (
        <React.Fragment>
            <div className='mx-auto flex'
                style={{ justifyContent: "center" }}
            >
                <div
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
