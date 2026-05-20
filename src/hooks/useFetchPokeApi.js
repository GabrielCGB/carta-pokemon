import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useFetchPokeApi(Pokemon){
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await
          axios.get(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
            setPokemons(res.data);
            console.log('Sucess:', res.data);
            setLoading(false);
    
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
         setLoading(false)
         setError(true) 
        }
      };
      getData();
    }, [pokemons]);
      return{pokemons, loading, error}};

      export default useFetchPokeApi;
