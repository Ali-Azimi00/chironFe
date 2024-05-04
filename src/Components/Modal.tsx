import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Modal(props: any) {


    const [currentValue, setCurrentValue] = useState(0);

    const handleChange = (e: any) => {
        const newValue = e.target.value;
        setCurrentValue(newValue);
        // onChange(newValue);
    };

    useEffect(()=>{
        setCurrentValue(props.currentCount)
    },[props.currentCount])


    const addExperience = async (taskId: Int16Array) => {
        const response = await axios.post(
            `http://localhost:8080/exp/1/`, {
            expCount: currentValue,
            task: {
                "taskId": taskId
            }
        }
        )
        
    }

    return (
        <React.Fragment>

            <div id="modalId" tabIndex={1} aria-hidden="true" className={` content-center justify-content-center overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-[calc(100%-rem)] max-h-full`}
                style={{ backdropFilter: "blur(5px)" }}
            >
                <div className="mx-auto  p-4 w-full xxsm:w-128 md:w-128 max-w-2xl max-h-full min-w-[400px]">
                    <div className="relative  bg-white rounded-lg shadow dark:bg-secondary modal">
                        <div className="flex items-center justify-between p-4 pt-6 pb-0 rounded-t">

                            <h3 className="modalText text-2xl font-semibold hover:tracking-wide text-gray-900 dark:text-white">
                                {props.selectedTask.taskName}
                            </h3>

                            {/* <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button> */}
                        </div>
                        <div className="p-4 pt-2 space-y-4">
                            <p className="modalText  text-left leading-relaxed text-gray-500 dark:text-gray-400">
                                Requirement : {props.selectedTask.taskMinCount} {props.selectedTask.taskUnit}
                            </p>
                            <p className="absolute top-[-8px] right-10 text-6xl font-bold leading-relaxed  dark:text-white">
                                {currentValue}
                            </p>
                            <div className="pt-4">
                                <input onChange={handleChange} type="range" min={0} max={props.selectedTask.taskMinCount} value={currentValue}
                                    className="w-full cursor-pointer rounded-2xl h-2" color='red'
                                />
                            </div>

                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={() => { addExperience(props.selectedTask.taskId);props.setOpenModal(false) }} data-modal-show="modalId" type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-white-800">Submit</button>
                            <button onClick={() => {  props.setOpenModal(false)}} data-modal-hide="modalId" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}
