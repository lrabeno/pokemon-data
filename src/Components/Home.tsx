import { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePokemon from './SinglePokemon';

function Home() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState([]);
  const [editMode, setEditMode] = useState(false);

  //here i am editing a line to test pushing to github on new comp

  const fetchPokeInfo = async () => {
    try {
      // const fetch20Pokemon = await axios.get(
      //   'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      // );
      const fetch20Pokemon = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      );

      setPokeData(fetch20Pokemon);
      setIsLoaded(true);
      console.log('fetchedPokemon?', fetch20Pokemon);
    } catch (err) {
      console.error('Error fetching poke info:', err);
    }
  };
  const loggedPokemon = pokeData?.data?.results.map((pokemon) => pokemon);
  const pokeMap = pokeData?.data?.results.map((pokemon) => (
    <>
      <p>{pokemon.name}</p>
      <p>{pokemon.url}</p>
      {/* <button onClick={() => setEditMode(false)}>more info</button> */}
      {editMode ? (
        <SinglePokemon
          pokeUrl={pokemon.url}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ) : (
        <button onClick={() => setEditMode(true)}>see more</button>
      )}
    </>
  ));

  console.log('logged?', loggedPokemon);

  useEffect(() => {
    fetchPokeInfo();
  }, []);

  return (
    <>
      <div>
        <h1>HIIII</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {pokeMap}
    </>
  );
}

export default Home;
