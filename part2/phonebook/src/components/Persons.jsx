import Person from './Person'
const Persons = ({ namesToShow, namesDeleted }) => {
    
    return (
        <div>
            {namesToShow.map(person  => <Person key={person.name} person={person} namesDeleted={namesDeleted}/>)}
        </div>
    )
}

export default Persons