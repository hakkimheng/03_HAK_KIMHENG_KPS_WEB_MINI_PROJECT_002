import React from 'react'
import CardComponent from './CardComponent'
function NonStartedCardComponent() {
    return (
        <section>
            <div className="flex flex-col gap-2 text-red-500">
                <h2 className="text-xl">Not Started</h2>
                <hr />
            </div>
            <CardComponent />
        </section>
    )
}

export default NonStartedCardComponent