import { useEffect, useState } from "react";
import "./App.css";
// import pets from "./data/pets.json";
import PetCard from "./components/PetCard";
// https://wild.creativebrain.fr/pets

function App() {

  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionPerPage = 5;

  useEffect(() => {
    fetch("https://wild.creativebrain.fr/pets")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPets(data);
    });
  }, [])

  const pagination = () => {
    let indexLast = currentPage * questionPerPage;
    let indexFirst = indexLast - questionPerPage;
    return pets.slice(indexFirst, indexLast);
  }


  
  return (
    <>
    {
      pets ? 
      <>
      <h1>Page {currentPage} - {Math.ceil(pets.length / questionPerPage)} </h1>
      {pagination().map((pet, index) => {
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
      })}
      </>
      :
      "Chargement ..."
    }
    {
      currentPage <= 1 ? null : <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
    }
    {
      currentPage < Math.ceil(pets.length / questionPerPage)  ? <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> : null
    }
    </>
  );
}

export default App;