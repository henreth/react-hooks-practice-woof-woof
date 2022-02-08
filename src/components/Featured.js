import React,{useEffect,useState} from "react";

const dogURL='http://localhost:3001/pups'


function Featured({dog,onUpdateDog}) {

    function handleClickDog(){
        fetch(`${dogURL}/${dog.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDog:!dog.isGoodDog,
            }),
            })
            .then(r=>r.json())
            .then(onUpdateDog)
    }

    if (!dog) return null;
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={dog.image} alt={dog.name} />
                <h2>{dog.name}</h2>
                <button onClick={handleClickDog}>{dog.isGoodDog?"Good Dog!":"Bad Dog!"}</button>
            </div>
      </div>
    )
}

export default Featured;