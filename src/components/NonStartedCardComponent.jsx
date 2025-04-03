import React from 'react'
import CardComponent from './CardComponent'
import { getAllTaskAction, getAllWorkSpaceAction } from '@/action/WorkSpaceAction'
async function NonStartedCardComponent(  {workSpaceId} ) {
    const {data} = await getAllTaskAction(workSpaceId);
    return (
        <section>
            <div className="flex flex-col gap-2 text-red-500">
                <h2 className="text-xl">Not Started</h2>
                <hr />
            </div>
            {
                data.map((task) => {
                        if(task.status === 'NOT_STARTED'){
                           return  <CardComponent 
                           task={task}
                           />
                        }
                })
            }
        
        </section>
    )
}

export default NonStartedCardComponent