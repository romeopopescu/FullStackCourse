import { useState } from 'react'
const Person = ({ person }) => {
  return (
    <div>
      {person.name}
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    setNewName(' ')
    setPersons(persons.concat(nameObject))
    
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const namesToShow = showAll
    ? persons
    : persons.filter(person => person.name)
  return (
    
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <div>
        {namesToShow.map((person, index) => <Person key={index} person={person}/>)}
      </div>
    </div>
  )
}

export default App