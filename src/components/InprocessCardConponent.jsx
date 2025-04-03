import React from 'react'
import CardComponent from './CardComponent'
import { getAllTaskAction } from '@/action/WorkSpaceAction'
async function InprocessCardConponent( {workSpaceId}) {
  const { data } = await getAllTaskAction(workSpaceId);
  return (
    <section>
    <section>
      <div className="flex flex-col gap-2 text-blue-500">
        <h2 className="text-xl">In Progress</h2>
        <hr />
      </div>
      {
                data.map((task) => {
                        if(task.status === 'IN_PROGRESS'){
                           return  <CardComponent
                           task={task}
                           />
                        }
                })
            }
    </section>
  </section>
  )
}

export default InprocessCardConponent