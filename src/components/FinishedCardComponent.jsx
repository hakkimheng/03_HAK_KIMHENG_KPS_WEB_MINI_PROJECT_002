import React from 'react'
import CardComponent from './CardComponent'

function FinishedCardComponent() {
  return (
    <section>
    <section>
      <div className="flex flex-col gap-2 text-green-700">
        <h2 className="text-xl">Finished</h2>
        <hr />
      </div>
      <CardComponent/>
    </section>
  </section>
  )
}

export default FinishedCardComponent