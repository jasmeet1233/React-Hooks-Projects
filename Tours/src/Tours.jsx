import React from 'react'
import Tour from './Tour'

function Tours({toursArr, deleteTour}) {
    console.log(toursArr)
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {toursArr.map((tourObj) => {
            return (<Tour key={tourObj.id} tourObj={tourObj} deleteTour = {deleteTour} />)
          })}
        </div>
      </section>
    );
}

export default Tours
