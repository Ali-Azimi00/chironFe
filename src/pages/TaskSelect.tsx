import React, { useState } from 'react';


function TaskSelect() {



    const [toggleSelect, setToggleSelect] = useState('')

    const togglePosition = {
        'left': 'left-1',
        'center': 'left-1/3',
        'right': 'left-2/3'
    }


    const switchToggle = (selection: String) => {
        switch (selection) {
            case 'left': {
                setToggleSelect(togglePosition.left)
                console.log("ToggleSelect: " + toggleSelect)
                break
            }
            case 'center': {
                setToggleSelect(togglePosition.center)
                console.log("ToggleSelect: " + toggleSelect)
                break
            }
            case 'right': {
                setToggleSelect(togglePosition.right)
                console.log("ToggleSelect: " + toggleSelect)
                break
            }
        }



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

            <div className='ml-2'>
                <div>Select Tasks</div>

                <div className="w-full max-w-sm rounded h-16 m-auto shadow flex flex-col bg-purple-800">

                    <div className="mx-0 shadow rounded-full h-10 mt-4 flex py-1 px-0 relative items-center bg-purple-600">

                        <div onClick={() => { switchToggle('left') }}
                            className="w-full flex justify-center rounded-full cursor-pointer">
                            <p>Left</p>
                        </div>
                        <div onClick={() => { switchToggle('center') }}
                            className="w-full flex justify-center rounded-full cursor-pointer ">
                            <p>Center</p>
                        </div>
                        <div onClick={() => { switchToggle('right') }}
                            className="w-full flex justify-center rounded-full cursor-pointer ">
                            <p>Right</p>
                        </div>
                        <span
                            className={`h-10 cursor-pointer ${toggleSelect}` +
                                ' items-center justify-center w-1/3 rounded-full ' +
                                ' transition-all absolute  ' +
                                ' border-gray-100 border-solid border-2 '}
                        // +    // bg-indigo-600 shadow text-white flex 
                        >

                        </span>
                    </div>




                </div>




                {/* <div>
                    <span>
                        Run Test
                        <button onClick={() => { addRun() }}>+</button>
                        <button onClick={() => { removeRun() }}>-</button>
                    </span>
                </div> */}
                <div>
                    <span>

                 

                    </span>
                    {/* <span>

                        <DropDown category={'physical'} ></DropDown>

                    </span>
                    <span>

                        <DropDown category={'spirit'} ></DropDown>

                    </span> */}

                </div>
                {/* <div>
                    <span>
                        Get By Category
                        <button onClick={() => { getTasks('mind') }}> mind </button>
                        <button onClick={() => { getTasks('physical') }}>physical</button>
                        <button onClick={() => { getTasks('spirit') }}>physical</button>
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
                    {taskNull ? null : showTasks(tasks)}
                </div> */}

            </div>

        </React.Fragment>
    )
}

export default TaskSelect;