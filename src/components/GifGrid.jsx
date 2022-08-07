import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
  
    return (
      <>
          <h3>{ category }</h3>

          {/* FORMAS DE PINTAR UN LOADING... */}

          {/* {
            isLoading 
            ? <h2>Cargando...</h2> 
            : null
          } */}

          {/* {
            isLoading && <h2>Cargando...</h2>
          } */}

          {
            isLoading && (<h2>Cargando...</h2>)
          }

          {/* <LoadingMessage isLoading={ isLoading }/> */}

          {/* TAREA */}
          <div className='card-grid'>
            {/* {
              images.map((image) => (
                <GifItem 
                  title={image.title}
                  url={image.url}
                />
              ))
            } */}

            {
              images.map( (image) => (
                <GifItem 
                    key={ image.id }
                    // para pasar todo el obj como props
                    { ...image }
                />
              ))
            }
          </div>
      </>
    )
}
