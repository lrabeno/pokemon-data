import { useEffect, useState } from 'react';
import axios from 'axios';

function SinglePokemon({ pokeUrl, editMode, setEditMode }) {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState([]);

  console.log('this is from single', pokeUrl);
  //   const fetchPokeInfo = async () => {
  //     try {
  //       const fetch20Pokemon = await axios.get(
  //         'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  //       );
  //       setPokeData(fetch20Pokemon);
  //       setIsLoaded(true);
  //       console.log('fetchedPokemon?', fetch20Pokemon);
  //     } catch (err) {
  //       console.error('Error fetching poke info:', err);
  //     }
  //   };
  //   const loggedPokemon = pokeData?.data?.results.map((pokemon) => pokemon);
  //   const pokeMap = pokeData?.data?.results.map((pokemon) => (
  //     <>
  //       <p>{pokemon.name}</p>
  //       <p>{pokemon.url}</p>
  //     </>
  //   ));

  //   console.log('logged?', loggedPokemon);

  //   useEffect(() => {
  //     fetchPokeInfo();
  //   }, []);

  return (
    <>
      <button onClick={() => setEditMode(false)}>back</button>
      <p>props here</p>
    </>
  );
}

export default SinglePokemon;
