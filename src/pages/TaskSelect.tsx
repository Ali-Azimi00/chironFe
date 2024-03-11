import React from 'react';
import axios, { AxiosError } from 'axios';





function TaskSelect() {

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


            <div>
                <div>Select Tasks</div>

                <div>
                    <span>
                        Run
                        <button onClick={() => { addRun() }}>+</button>
                        <button onClick={() => { removeRun() }}>-</button>
                    </span>
                </div>
                <div>
                    <span>
                        Run
                        <button onClick={() => { addRun() }}>+</button>
                        <button onClick={() => { removeRun() }}>-</button>
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