import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('///// Pruebas en <AddCategory /> /////', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        // se crea el sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {} } /> );

        // se extrae el input
        const input = screen.getByRole('textbox');

        // disparamos el evento (dándole un valor al input)
        fireEvent.input( input, { target: {value: 'Goku'} } );
        
        // hacemos la aserción de lo que esperamos que ocurra
        expect(input.value).toBe('Goku');

        // screen.debug();
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        // Mock --> simulación, ej: simula una fn
        // Mock: imitar
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // disparo evento del form --> establecer un valor
        fireEvent.input( input, { target: { value: inputValue } } );
        // disparo evento del form --> submit
        fireEvent.submit( form );
        // caja de texto tiene que ser --> string vacío
        expect( input.value ).toBe('');
        // onNewCategory es llamado con el valor de la caja de texto
            // que se llame
        expect( onNewCategory ).toHaveBeenCalled();
            // que se llame x veces
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
            // que se llame con el valor esperado
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('NO debe llamar onNewCategory si el input es <= 1', () => {

        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory } /> )
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});