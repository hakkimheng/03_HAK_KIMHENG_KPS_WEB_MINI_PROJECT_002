import React from 'react'
import CardComponent from './CardComponent'
function InprocessCardConponent() {
  return (
    <section>
    <section>
      <div className="flex flex-col gap-2 text-blue-500">
        <h2 className="text-xl">In Progress</h2>
        <hr />
      </div>
      <CardComponent />
    </section>
  </section>
  )
}

export default InprocessCardConponent