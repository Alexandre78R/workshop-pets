import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPets(data);
      });
  }, []);

  return (
    <>
      {/* <h1>{pets.length != 0 ? `${pets[2].name}` : "Chargement..."}</h1> */}
      <h1>Liste : </h1>


      {pets.map((pet) => {
        return <p>{pet.name}</p>;
      })}
    </>
  );

  // if (pets.length != 0) {
  //   return (
  //     <>
  //       <h1>{pets[2].name}</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>Chargement...</h1>
  //     </>
  //   );
  // }
}

export default App;
