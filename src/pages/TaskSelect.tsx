import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskTable from '../components/TaskTable';


function TaskSelect() {

    const [toggleSelect, setToggleSelect] = useState('left-0')
    const [taskList, setTaskList] = useState([]);
    const [currentCat, setCurrentCat] = useState('mind');
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

    const loadPersonTasks = () => {
        return (
            personTasks.map((task: any) => (
                <div className='taskCard py-2 mx-5 px-220 border-none rounded-full h-250 
                xsm:px-16' key={task.taskId}>
                    {task.taskName}
                </div>

            ))
        )
    }

    useEffect(() => {
        getTasks(currentCat);
        getPersonTasks();
    }, [currentCat])



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
                // getTasks("spirit")
                break
            }
        }
        getTasks(currentCat)
    }



    return (
        <React.Fragment>

            <div className='taskBanner bg-gray-800 mt-4'>
                <div className={' grid ' +
                    'xsm:grid-cols-2 ' +
                    'sm:grid-cols-3 '}>

                    {loadPersonTasks()}

                </div>
            </div>

            <div className='ml-2'>

                <div className='w-full max-w-sm rounded m-auto shadow flex flex-col '>


                    <div className="mx-0 shadow rounded-full h-10 mt-4 flex py-1 px-0 relative items-center toggleBar bg-purple-800">
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
                <div className='mt-4 min-'>
                    <TaskTable tList={taskList} currentCat={currentCat}></TaskTable>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TaskSelect;