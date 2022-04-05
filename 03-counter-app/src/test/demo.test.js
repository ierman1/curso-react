describe('First test group', () => {

    test('strings must be equal', () => { 
        const msg = 'Hello, world!';
        const expected = 'Hello, world!';
    
        expect(msg).toBe(expected);
    });

});