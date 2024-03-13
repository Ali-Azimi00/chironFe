import React, { useState, useCallback } from 'react';
import axios from 'axios';





function TaskSelect() {

    const [cat, setCat] = useState('mind');

    const addRun = async () => {
        const response = await axios.put(
            `http://localhost:8080/person/1/task_add/3`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            }
        );
        console.log('Response:', response.data);
    }

    const removeRun = async () => {
        const response = await axios.put(
            `http://localhost:8080/person/1/task_remove/3`,
            {
                headers: {
                    // Authorization: `Bearer ${accessToken}`,
                    // 'Content-Type': 'application/json',
                },
            }
        );
        console.log('Response:', response.data);
    }


        const getTasks =async (cat:string) => {
            const response = await axios.get(
                `http://localhost:8080/task/category/${cat}`,
                {
                    headers: {
                        // Authorization: `Bearer ${accessToken}`,
                        // 'Content-Type': 'application/json',
                    },
                }
            );
            console.log('hello')
            console.log(response.data)
            console.log(response.data[0].taskCategory[0].categoryType)
        }
    


    return (
        <React.Fragment>

            <div className='taskBanner '>
                <div className={' grid ' +
                    'xsm:grid-cols-2 ' +
                    'sm:grid-cols-3 '}>

                    <div className='taskCard py-2 px-220 border-none rounded-3xl h-250 
                                xsm:px-16'>
                        1
                    </div>
                    <div className='taskCard py-2 px-220 border-none rounded-3xl h-250 
                                xsm:px-16'>
                        1
                    </div>
                    <div className='taskCard py-2 px-220 border-none rounded-3xl h-250 
                                xsm:px-16'>
                        1
                    </div>
                </div>
            </div>

            <div className='ml-96'>
                <div>Select Tasks</div>

                <div>
                    <span>
                        Run Test
                        <button onClick={() => { addRun() }}>+</button>
                        <button onClick={() => { removeRun() }}>-</button>
                    </span>
                </div>
                <div>
                    <span>
                        Get By Category
                        <button onClick={() => { getTasks('mind') }}> mind </button>
                        <button onClick={() => { getTasks('physical') }}>physical</button>
                    </span>
                </div>
                <div>
                    <span>
                        Run
                        <button onClick={() => { addRun() }}>+</button>
                        <button onClick={() => { removeRun() }}>-</button>
                    </span>
                </div>

            </div>

        </React.Fragment>
    )
}

export default TaskSelect;