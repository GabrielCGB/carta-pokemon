function Pokecard(){
    const [Pokemon, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await
          axios.get('https://pokeapi.co/api/v2/pokemon/cyndaquil');
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
      getData(),[Pokemon];
      }, {});

      return(Pokemon, loading, error);