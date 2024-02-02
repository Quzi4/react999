const Simpson = ({arr}) => {
    const {name, surname, age, info, photo} = arr
    return (
        <div>
            <p><b>Name:</b> {name} <b>Surname:</b> {surname}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Information: </b>{info}</p>
            <p><b>Photo:</b> </p>
            <img src={photo} alt={photo}/>

        </div>
    );
};

export {Simpson};