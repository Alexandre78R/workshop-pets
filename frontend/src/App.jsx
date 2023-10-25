import { useEffect, useState } from "react";
import "./App.css";
// import pets from "./data/pets.json";
import PetCard from "./components/PetCard";
// https://wild.creativebrain.fr/pets

function App() {

  const [pets, setPets] = useState(null);

  useEffect(() => {
    fetch("https://wild.creativebrain.fr/pets")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPets(data);
    });
  }, [])
  
  return (
    <>
    <h1>Coucou</h1>
    {
      pets ? 
      pets.map((pet, index) => {
        return (
          <div key={index}>
            <PetCard
              name={pet.name}
              weight={pet.weight} 
              photo={pet.photo} 
              sleepAmount={pet.sleepAmount}
              curious={pet.curious}
            />
          </div>
        )
      })
      :
      "Chargement ..."
    }

    
    </>
  );
}

export default App;
