import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'
import './index.css'

function App() {
  const [questions, setQuestions] = useState(data)

  return(
  <main>
    <div className = 'container'>
      <h3>questions and answers abt login</h3>
      <section>
        {
          questions.map((question) => {
            return <SingleQuestion key = {question.id} questionObj = {question} />
          })
        }
      </section>
    </div>
  </main>
  )
}

export default App
