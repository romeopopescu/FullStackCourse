import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const Header1 = "Give feedback"
  const Header2 = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div>
      <h1>{Header1}</h1>

    </div>
    <div>
      <h2>{Header2}</h2>
    </div>
    </>
    
  )
}

export default App