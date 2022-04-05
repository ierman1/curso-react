import { getUser } from "../../base/05-funciones";

describe('funciones', () => {

    test('test method getUser must return specific object', () => { 
        const expected = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toEqual(expected);
    });

});