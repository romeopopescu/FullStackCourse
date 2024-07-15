const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
const Content = ({parts}) => {
  return (
      <div>
        <Part part={parts[0].part} exercise={parts[0].exercise}/>
        <Part part={parts[1].part} exercise={parts[1].exercise}/>
        <Part part={parts[2].part} exercise={parts[2].exercise}/>
      </div>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    {part: part1, exercise: exercises1},
    {part: part2, exercise: exercises2},
    {part: part3, exercise: exercises3}
  ] 

   return (
    <div>
      <Header course={course}/> 
      <Content parts={parts} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    </div>
  )
}

export default App