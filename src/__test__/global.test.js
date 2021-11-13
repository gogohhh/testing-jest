const text = 'Hola Mundo';

const frutas = ['Manzana', 'Melon', 'Banana'];

test('Debe traer un texto', () =>{
    expect(text).toMatch(/Mundo/);
});

test('¿Es una banana?', () =>{
    expect(frutas).toContain('Banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
}

test('Probar un callback', ()=>{
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});