import React from 'react'
import { tasks } from "../constants";


function TaskTable(props: any) {

    console.log("T-List")
    console.log(props.tList)



    const loadRow = () => {
        return (
            props.tList.map((t: any) => (
                <tr className="bg-white border-b bg-transparent" key={t.taskName}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {t.taskName}
                    </th>
                    <td className="px-6 py-4 flex">
                        {t.taskCategory
                            .filter((cat: any) => cat.categoryType === 'physical')
                            .map((cat: any) => (
                                <div className='h-8 w-6 m-1' key={cat.categoryId}>
                                    <img className='' alt="tempImage" src={tasks[1].icon}></img>
                                </div>
                            ))
                        }

                        <span>
                            {t.taskCategory
                                .filter((cat: any) => cat.categoryType === 'mind')
                                .map((cat: any) => (
                                    <div className='h-6 w-6 m-1' key={cat.categoryId}>
                                        <img className='' alt="tempImage" src={tasks[2].icon}></img>
                                    </div>
                                ))
                            }
                        </span>
                        <span>
                            {t.taskCategory
                                .filter((cat: any) => cat.categoryType === 'spirit')
                                .map((cat: any) => (
                                    <div className='h-6 w-6 m-1' key={cat.categoryId}>
                                        <img className='' alt="tempImage" src={tasks[3].icon}></img>
                                    </div>
                                ))
                            }
                        </span>



                    </td>
                    <td className="px-6 py-4">
                        {t.taskMinCount} <span>{t.taskUnit}</span>
                    </td>
                    <td className="px-6 py-4">
                        <button className='rounded-r-none'>+</button>
                        <button className='rounded-l-none'>-</button>
                    </td>
                </tr>

            ))
        )


    }


    return (
        <React.Fragment>

            <div className="relative overflow-x-auto mx-auto max-w-xl min-w-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Task name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Minimum
                            </th>
                            <th scope="col" className="px-6 py-3">
                                +/-
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {loadRow()}

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

}

export default TaskTable;