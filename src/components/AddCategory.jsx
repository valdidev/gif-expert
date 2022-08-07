import { useState } from 'react'

// export const AddCategory = ({ setCategories, categories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        // console.log(event.target.value);
        // console.log(target.value);
        // setInputValue('Hola Mundo')
        // setInputValue(event.target.value);
        setInputValue(target.value);
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        // validación
        if ( inputValue.trim().length <= 1 ) return;
        // console.log(inputValue);
        // Tarea
        // setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return(
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                // esto es realmente:
                // onChange={(event) => onInputChange(event) }
            />
        </form>
    )
}

