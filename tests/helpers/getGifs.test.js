import { getGifs } from "../../src/helpers/getGifs";

describe('*** Pruebas en fn getGifs ***', () => {
    test('Debe retornar un array de gifs', async() => {
        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});