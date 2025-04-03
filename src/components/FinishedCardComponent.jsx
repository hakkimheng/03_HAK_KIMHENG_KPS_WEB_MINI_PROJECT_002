import React from 'react'
import CardComponent from './CardComponent'
import { getAllTaskAction } from '@/action/WorkSpaceAction'

async function FinishedCardComponent({workSpaceId}) {
  const {data} = await getAllTaskAction(workSpaceId);
  return (
    <section>
    <section>
      <div className="flex flex-col gap-2 text-green-700">
        <h2 className="text-xl">Finished</h2>
        <hr />
      </div>
      {
                data.map((task) => {
                        if(task.status === 'FINISHED'){
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

export default FinishedCardComponent