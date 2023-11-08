import { useState, useEffect } from "react";
function PetCard (props) {
    const [display, setDisplay] = useState(false);
    const { name, weight, photo, sleepAmount, curious } = props;

    function togleDisplay () {
        setDisplay(!display)
    }

    return (
        <>
            <p>{name}</p>
            {
                display ?
                <>
                    <img src={photo.thumb} alt={name} />
                    <p>{sleepAmount}</p>
                    <p>{weight}</p>
                </>
                :
                // ""
                    null
            }
            {/* {
                !display ?
                null
                :
                <>
                <img src={photo.thumb} alt={name} />
                <p>{sleepAmount}</p>
                <p>{weight}</p>
                </>
            } */}
            <button onClick={togleDisplay}>{display ? "-" : "+"}</button>
        </>
    )
}

export default PetCard;