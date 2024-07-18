const Header = ({ text }) => {
    return (
      <h2>{text}</h2>
    )
}
const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}  </p>
    )
}
const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)} 
      </div>
    )
}
const Total = ({ parts }) => {
    let initialValue = 0
    let sum = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises , initialValue)
    // let initialValue = 0;
    // let sum = parts.reduce((accumulator, currentPart) => {
    //   return accumulator + currentPart.exercises;
    //   }, initialValue);
  
    // map() method
    // parts.map(part => sum+=part.exercises)
    return (
      <div>
        <b>
         total of {sum} exercises 
        </b>
      </div>
    )
}
const Course = ({ course }) => {
    return (
      <div>
          <Header text={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
      </div>
    )
}

export default Course