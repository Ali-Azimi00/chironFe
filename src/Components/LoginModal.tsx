import React from 'react';
import '../index.css'



function LoginModal(props: any) {


    return (
        <React.Fragment>
            <div id="modalId" tabIndex={1} aria-hidden="true" className={` content-center justify-content-center overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-[calc(100%-rem)] max-h-full`}
                style={{ backdropFilter: "blur(5px)" }}
            >
                <div className="mx-auto p-4  max-h-full max-w-[400px] min-w-[400px]">
                    <div className="relative  bg-white rounded-lg shadow dark:bg-secondary modal ">
                        <div className="flex items-center justify-between p-4 pt-6 pb-0 rounded-t">

                            <h3 className="modalText text-2xl font-semibold hover:tracking-wide text-gray-900 dark:text-white">
                                LogIn
                            </h3>


                        </div>
                        <div className="px-4 pt-2 ">
                            <div className="mb-4">
                                <input className='w-full p-1 pl-2 rounded' placeholder='Name' />
                            </div>
                            <div className="m-0">
                                <input type="password" className='w-full p-1 pl-2 rounded' placeholder='Password' />
                            </div>
                            <div className='m-1'>
                                <div className='clickLink hover:cursor-pointer'>Register Here</div>
                            </div>


                        </div>
                        <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600 justify-right">
                            <button onClick={() => { console.log("submite pressed") }}
                                data-modal-show="modalId"
                                type="submit"
                                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-white-800">
                                Submit
                            </button>

                            <button onClick={() => { props.setOpenLogin(false) }}
                                data-modal-hide="modalId"
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default LoginModal;