

// useEffect --> es un hook que sirve para disparar efectos secundarios
// efecto secundario: un proceso a ejecutar cuando algo suceda
// ej.: cuando counter o la category cambien, cuando se renderiza el componente
// por primera vez, etc...

 const GifGrid = ({ category }) => {
    /* 
      usando el estado para mantener los gifs
    */
    const [images, setImages] = useState([]);

    // const [counter, setCounter] = useState(10);

    /* 
    2 argumentos:
    · Callback              --> Efecto a disparar
    · Lista de dependencias --> Condiciones para volver a ejecutar el cb
    
    */
   
   /* 
   ejemplo:
   cuando componente se carga por PRIMERA VEZ, solo ahí,
   quiero disparar la petición HTTP
   */
    useEffect( () => {
        getGifs(category)
          .then( newImages => setImages(newImages) );
    }, []);

    /* 
        ahora el estado cambia, pero solo se ejecuta
        la peticion la primera vez, gracias a:
        [] como argumento, para que solo se ejecute la primera vez
    */


  return (
    <>
        <h3>{ category }</h3>
        
        {/* <h5>{counter}</h5>
        <button onClick={() => setCounter(counter + 1)}>+1</button> */}

        {/* TAREA */}

        <ol>
            {/* images.map... */}
            <li>titulo</li>
            <li>titulo</li>
            <li>titulo</li>
            <li>titulo</li>
        </ol>
    </>
  )
}
