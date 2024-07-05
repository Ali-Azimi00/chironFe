import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskTable from '../components/TaskTable';
import TaskBanner from '../components/TaskBanner';


function TaskSelect() {

    const [toggleSelect, setToggleSelect] = useState('left-0')
    const [taskList, setTaskList] = useState([]);
    const [currentCat, setCurrentCat] = useState('mind');
    const [taskListSize, setTaskListSize] = useState(6);


    const [personTasks, setPersonTasks] = useState([]);


    const togglePosition = {
        'mind': 'left-0',
        'physical': 'left-1/3',
        'spirit': 'left-2/3'
    }

    const getTasks = async (cat: string) => {
        const response = await axios.get(
            `http://localhost:8080/task/category/${cat}`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            }
        );
        setTaskList(response.data)
    }


    const getPersonTasks = async () => {
        const response = await axios.get(
            // TODO change to person ID to a literal
            `http://localhost:8080/person/1/task_list`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            });
        setPersonTasks(response.data)
    }

    useEffect(() => {
        getTasks(currentCat);
        getPersonTasks();
    }, [currentCat, taskListSize])



    const switchToggle = (selection: String) => {
        switch (selection) {
            case 'mind': {
                setToggleSelect(togglePosition.mind)
                setCurrentCat('mind')
                break

            }
            case 'physical': {
                setToggleSelect(togglePosition.physical)
                setCurrentCat('physical')
                break
            }
            case 'spirit': {
                setToggleSelect(togglePosition.spirit)
                setCurrentCat('spirit')
                break
            }
        }
        getTasks(currentCat)
    }



    return (
        <React.Fragment>
            <div className='xl:flex ' style={{ justifyContent: "space-evenly" }}>
                <div className=' '>

                    <div>
                        <TaskBanner personTaskList={personTasks}></TaskBanner>
                    </div>

                </div>
                <div className=' '>
                    <div className=''>
                        <div className='w-full max-w-sm rounded mx-auto shadow flex flex-col '>
                            <div className="shadow rounded-full h-10 mt-4 flex py-1 px-0 relative items-center toggleBar bg-purple-800">
                                <div onClick={() => { switchToggle('mind') }}
                                    className="w-full flex justify-center rounded-full cursor-pointer">
                                    <p>mind</p>
                                </div>
                                <div onClick={() => { switchToggle('physical') }}
                                    className="w-full flex justify-center rounded-full cursor-pointer ">
                                    <p>physical</p>
                                </div>
                                <div onClick={() => { switchToggle('spirit') }}
                                    className="w-full flex justify-center rounded-full cursor-pointer ">
                                    <p>spirit</p>
                                </div>
                                <span
                                    className={`h-10 cursor-pointer toggle ${toggleSelect}` +
                                        ' items-center justify-center w-1/3 rounded-full ' +
                                        ' transition-all absolute  ' +
                                        ' border-gray-100 border-solid border-2 '}
                                // +    // bg-indigo-600 shadow text-white flex 
                                >
                                </span>
                            </div>
                        </div>


                        <div className='mt-4 max-h-2'>
                            <TaskTable taskSizer={setTaskListSize} tList={taskList} currentCat={currentCat}></TaskTable>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TaskSelect;