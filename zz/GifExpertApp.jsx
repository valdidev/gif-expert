const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        // console.log(newCategory);
        /* FORMAS DE AÑADIR DATOS A UN ARREGLO, EVITAR EL PUSH, NO MUTAR */
        // setCategories(['Hola Mundo']);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
        // setCategories([ ...categories, 'Valorant' ]);
        // setCategories([ 'Valorant', ...categories ]);
        setCategories([newCategory, ...categories]);
    }
    
    return(
        <>
            {/* 1.- titulo */}
            <h1>GifExpertApp</h1>

            {/* 2.- input */}
            {/* 2 formas comunes de comunicación
            entre componentes */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) }
            />

            {/* 3.- listado de gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            <ol>
                   {/* 
                        no usar el índice de map como key
                        (React lo utiliza para saber cuando que se ha 
                        eliminado un elemento)
                 */}

                { categories.map( category => (
                        <div key={ category }>
                            <h3>{ category }</h3>
                            <li>{ category }</li>
                        </div>
                    )) 
                }

            </ol>
                {/* gif item */}
        </>
    )
}