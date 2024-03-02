import { useState } from "react";

export default function Player(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(props.name);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleSaveClick() {
        setIsEditing(false);
    }
    
    function handleChangeName(e) {
        setEditName(e.target.value);
    }
    return(
        <li>
            <span className="player">
                {isEditing ?
                    (<input 
                    type="text"
                    value={editName}
                    onChange={handleChangeName}
                    required
                 />) :
                 (<span className="player-name">{editName}</span>)}
                 <span className="player-symbol">{props.symbol}</span>
                 <button onClick={isEditing ? handleSaveClick:  handleEditClick}>
                    {isEditing ? 'Save' : 'Edit'}
                 </button>
            </span>
        </li>
    )
}