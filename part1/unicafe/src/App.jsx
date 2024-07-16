import { useState } from 'react'
const Header = ({ header }) => <div><h1>{ header }</h1></div> 

const Button = ({ text, onClick }) => {
  return (
    <span>
      <button onClick={onClick}>
        {text}
      </button>
    </span>
  )
}
const StatisticLine = (props) => {
  return (
    <>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value} {props.percentage}
      </td>
    </>
    
  )
}
const Statistics = ({ good, neutral, bad}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>No feedback given</div>
      )
    }
    
    return (
      <div>
          <table>
            <tbody>
              <tr><StatisticLine text='good' value={good}/></tr>  
              <tr><StatisticLine text='neutral' value={neutral}/></tr>
              <tr><StatisticLine text='bad' value={bad}/></tr>
              <tr><StatisticLine text='all' value={good+neutral+bad}/></tr>
              <tr><StatisticLine text='average' value={(good - bad) / (good+neutral+bad)}/></tr>
              <tr><StatisticLine text='positive' value={good/(good+neutral+bad)*100} percentage='%'/></tr>
            </tbody>
          </table>
      </div>
    )
    
}

const App = () => {
  // save clicks of each button to its own state
  const headers = {
    header1 : 'Give feedback',
    header2 : 'Statistics'
  }   
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header header={headers.header1}/>
      
      <Button text='good' onClick={() => setGood(good + 1)}/> 
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)}/>
      <Button text='bad' onClick={() => setBad(bad + 1)}/>
      
      <Header header={headers.header2}/>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App