import React from "react";
import Dog from "./Dog";

function DogBar({dogs,onSelectDog}){
    let dogsToDisplay= dogs.map((dog)=>{
        return (
            <Dog
                key={dog.id}
                dog={dog}
                onSelectDog={onSelectDog}
            />
        )
    })
    return (
        <div id="dog-bar">
            {dogsToDisplay}
        </div>
    )   
}

export default DogBar;