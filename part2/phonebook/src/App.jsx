import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newNumber, setNewNumber] = useState('')  
  const [search, setNewSearch] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  

  //add name event
  const addInfo = (event) => {
    event.preventDefault()
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name ) {
        return alert(`${newName} is already added to phonebook`)
      }
      if (newNumber === persons[i].number) {
        return alert(`${newNumber} is already added to phonebook`)
      }
    }
    const newObject = {
      name: newName,
      number: newNumber,
    }
    setNewName(' ')
    setNewNumber(' ')
    setPersons(persons.concat(newObject))
  }
  //handle the name change in input (takes what you write)
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  //function that shows the names
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  return (
    
    <div>
      <h1>Phonebook</h1>
        <Filter value={search} onChange={handleSearchChange}/>
      <h1>add a new</h1>
       <PersonForm addInfo={addInfo} newName={newName} newNumber={newNumber}
          handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/> 
      <h1>Numbers</h1>
      <div>
        <Persons namesToShow={namesToShow} />
      </div>
    </div>
  )
}

export default App