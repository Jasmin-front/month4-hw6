import './App.css';
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import {useEffect, useState} from "react";
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const App = () => {
    const [pocemonImg, setPocemonImg] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(baseUrl)
              .then((response) => response.json())
              .then(response => {
                const dataInfo =  response.results
                  setData(dataInfo)
                  dataInfo.forEach((item) => {
                      const pocemondetalis = fetch(item.url)
                          .then((pocemondetalis) => pocemondetalis.json())
                  })
              })
        }catch (error){
          console.error(error)
        }
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <PokemonCard data={data} />
    </div>
  );
}

export default App;
