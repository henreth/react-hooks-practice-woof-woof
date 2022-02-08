import React,{useEffect,useState} from "react";

function Filter({filter, onFilterChange}){

    return (
        <div id="filter-div">
            <button onClick={onFilterChange} id="good-dog-filter">Filter good dogs: {filter ? "ON":"OFF"}</button>
        </div>
    )
}

export default Filter;