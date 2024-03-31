import React from 'react';
import { tasks } from '../constants';
import Card from './Card';

function TaskBanner(props: any) {



    const getTaskIcon = (taskName: string) => {
        let list: any = []
        tasks.filter((t) => t.name.toLowerCase() == taskName.toLowerCase() ? list.push(t.icon) : null);
        return list[0];
    }

    const loadPersonTasks = () => {
        return (
            props.personTaskList.map((task: any) => (
                <div className='text-center' key={task.taskId}>
                    <Card
                        cssProp={''}
                        fade={false}
                        taskName={task.taskName}
                        icon={getTaskIcon(task.taskName)}>
                    </Card>
                </div>
            ))
        )
    }


    return (
        <React.Fragment>
            <div className='taskBanner bg-transparent mt-16 justify-center'>
                <div className={'grid ' +
                    'xsm:grid-cols-2 ' +
                    'sm:grid-cols-3 ' +
                    'md:grid-cols-3 ' +
                    'lg:grid-cols-4 ' +
                    'xl:grid-cols-4 ' +
                    '2xl:grid-cols-5 ' +

                    'gap-6'}>
                    {loadPersonTasks()}
                </div>
            </div>
        </React.Fragment>
    )
}

export default TaskBanner;