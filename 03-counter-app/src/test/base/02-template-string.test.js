import { getSaludo } from "../../base/02-template-string";

describe('template-strings', () => {

    test('test method getSaludo must return "Hola { name }"', () => { 
        const name = 'Germán';
        const msg = getSaludo(name);

        expect(msg).toBe('Hola ' + name);
    });

    test('test method getSaludo must return "Hola Carlos" if no arguments are given', () => { 
        const msg = getSaludo();

        expect(msg).toBe('Hola Carlos');
    });

});