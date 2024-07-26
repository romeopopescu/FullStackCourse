import App from '../App'
import personService from '../services/persons'
const Person = ({ person, namesDeleted }) => {
  return (
    <div>
      {person.name} {person.number} 
      <button onClick={() => {
          confirm(`Delete ${person.name} ?`)
          namesDeleted(person.id)
          return personService.deleted(person.id)
      }}>
        delete
      </button>
    </div>
  )
}

export default Person