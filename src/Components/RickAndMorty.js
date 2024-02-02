import {OnePersone} from './OnePersone'

let persons=[
    {
    id: 102,
    name: "Donna Gueterman",
    status: "Dead",
    species: "Robot",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/102.jpeg",
    },

    {
        id: 291,
        name: "Rick J-22",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/291.jpeg",
    },
    {
        id: 40,
        name: "Beth's Mytholog",
        status: "Dead",
        species: "Mythological Creature",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
    },

    {
        id: 276,
        name: "Rat Boss",
        status: "Dead",
        species: "Animal",
        gender: "unknown",
        image: "https://rickandmortyapi.com/api/character/avatar/276.jpeg",
    },
    {
        id: 754,
        name: "Coop",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/754.jpeg",
    },
    {
        id: 680,
        name: "Adam",
        status: "Dead",
        species: "Humanoid",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/680.jpeg",
    }
]
const RickFriends = () => {
    return(
        <div>
            {persons.map(person => <OnePersone key={person.id} arr={person}/>)}
        </div>
    )
}

export {RickFriends};