import React,{useEffect,useState} from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import Featured from "./Featured";

const dogURL='http://localhost:3001/pups'

function App() {
  let [dogs,setDogs]=useState([]);

  useEffect(()=>{
    fetch(dogURL)
    .then(r=>r.json())
    .then(dogItems=>setDogs(dogItems))
  },
  [])

  let [selectedDog,setSelectedDog] = useState(null)
  
  function handleChangeSelectedDog(chosenDog){
    setSelectedDog(chosenDog);
  }

  function handleUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
      );
    setSelectedDog(updatedDog);
    setDogs(updatedDogs);
  }

  let [filter,setFilter] = useState(false);
  function handleFilterChange(){
    setFilter(!filter)
  }

  let filteredDogs = dogs.filter((dog)=>{
    if (filter===true){
      return dog.isGoodDog ===true 
    } else {
      return true
    }
  })


  return (
    <div className="App">
      <Filter
        filter ={filter}
        onFilterChange={handleFilterChange}
        />
      <DogBar 
        dogs={filteredDogs}
        onSelectDog={handleChangeSelectedDog}
        />
      <Featured
        dog={selectedDog}
        onUpdateDog={handleUpdateDog}
        />
    </div>
  );
}

export default App;
