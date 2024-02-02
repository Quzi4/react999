
const OnePersone = ({arr}) => {
    const {id,name,status,species,gender,image} = arr
    return (
        <div>
            <p><b>ID:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Status:</b>{status}</p>
            <p><b>Species:</b> {species}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Image:</b></p>
            <img src={image} alt={image}/>
            <hr/>
        </div>
    );
};
export {OnePersone};