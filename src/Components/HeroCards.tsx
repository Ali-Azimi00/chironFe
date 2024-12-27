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

type Person = {
    userId: number;
    level: number;
    name: string;
    // stats:object;
}
// type categories = {
//     mind: number;
//     physical: number;
//     spirit: number;
// }

function HeroCards(props: any) {

    const [person, setPerson] = useState<Person>({
        userId: 1,
        level: 1,
        name: "Olli"
    }); const [personTasks, setPersonTasks] = useState<Task[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task>();
    const [currentCount, setCurrentCount] = useState(0);
    const [xpList, setXpList] = useState<XP[]>([]);
    // const [catProg, setCatProg] = useState<categories>(props.catProg);
    // const [loadAnimation, setLoadAnimation] = useState(" animatePie2 ")
    const [loadAnimation, setLoadAnimation] = useState(" animatePie ");



    //TODO Temp write a Get call later to replace
    let p: Person = {
        userId: 1,
        level: 1,
        name: "Olli"
    };




    useEffect(() => {

        getTodayExp()
        getPersonTasks()
        setTimeout(() => {
            setLoadAnimation(" animatePie2 ")
        }, 1300)
        setTimeout(() => {
            setLoadAnimation(" transition-all ease-out duration-4000 ")
        }, 3600)

    }, [])

    const pieCounter = (category: string) => {
        let cat = 0;
        switch (category) {
            case 'mind': cat = props.catProg.mind; break
            case 'physical': cat = props.catProg.physical; break;
            case 'spirit': cat = props.catProg.spirit; break;
        }

        switch (cat) {
            case 0: return 0
            case 1: return 25
            case 2: return 50
            case 3: return 75
            default: return 100;
        }
    }

    const getTaskIcon = (taskName: string) => {
        let list: any = []
        tasks.filter((t) =>
            t.name.toLowerCase() == taskName.toLowerCase() ?
                list.push(t.icon) : null);
        return list[0];
    }


    const getTodayExp = async () => {
        const response = await axios.get(
            `http://localhost:8080/exp/person/${person.userId}/Today`
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
            `http://localhost:8080/person/${person.userId}/task_list`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            });
        let taskList: Task[] = response.data;
        setPersonTasks(taskList)


    }
    //  const handleIncrement = useCallback((id) => {

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

    const icon = (category: string) => {
        let list: any = []
        tasks.filter((t) =>
            t.name.toLowerCase() == category.toLowerCase() ?
                list.push(t.icon) : null);
        return list[0];
    }


    const loadCats = () => {
        return (
            <div className='mt-12 mx-auto flex justify-center  space-x-7 xsm:hidden'>

                <div className={` pie ${loadAnimation}  h-[100px] w-[100px] flex p-6  `}
                    style={{ "--p": pieCounter('mind') }}>
                    <div>
                        <img alt='catimage' src={icon("mind")}></img>
                    </div>
                </div>
                <div className={` pie ${loadAnimation} h-[100px] w-[100px] flex p-6  `}
                    style={{ "--p": pieCounter('physical') }}>
                    <div>
                        <img alt='catimage' src={icon("physical")}></img>
                    </div>
                </div>
                <div className={` pie ${loadAnimation}  h-[100px] w-[100px] flex p-6  `}
                    style={{ "--p": pieCounter('spirit') }}>
                    <div>
                        <img alt='catimage' src={icon("spirit")}></img>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {/* <div>
                mind: {props.catProg.mind}
            </div>
            <div>
                physical: {props.catProg.physical}
            </div>
            <div>
                spirit: {props.catProg.spirit}
            </div> */}
            {loadCats()}
            {/* <div className='mt-4 mx-auto flex justify-center  space-x-7 xsm:hidden'>
                <div className=' pie animatePie h-[100px] w-[100px] flex p-6 transition-all ease-out duration-1000   '
                    style={{ "--p": pieCounter('mind') }}>
                    <div>
                        <img alt='catimage' src={icon("mind")}></img>
                    </div>
                </div>
                <div className=' pie animatePie h-[100px] w-[100px] flex p-6'
                    style={{ "--p": pieCounter('physical') }}>                    <div>
                        <img alt='catimage' src={icon("physical")}></img>
                    </div>
                </div>
                <div className=' pie animatePie h-[100px] w-[100px] flex p-6'
                    style={{ "--p": pieCounter('spirit') }}>                    <div>
                        <img alt='catimage' src={icon("spirit")}></img>
                    </div>
                </div>
            </div> */}



            <div className='mx-auto flex mt-12'
                style={{ justifyContent: "center" }}
            >

                <div
                    className={
                        ' grid ' +
                        'xxsm:grid-cols-1 ' +
                        'xsm:grid-cols-2 ' +
                        'sm:grid-cols-3 ' +
                        'md:grid-cols-4 ' +
                        'lg:grid-cols-4 ' +
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
