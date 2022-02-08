import React from "react";

function Dog({dog,onSelectDog}){
    function handleClick(event){
        onSelectDog(dog)
    }
    return (
        <span onClick={handleClick}>{dog.name}</span>
    )
}

export default Dog;