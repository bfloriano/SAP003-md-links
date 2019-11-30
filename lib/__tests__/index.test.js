const mdLinks = require('../index');
const teste = 'teste.md';
const erro = 'tetse.md';
const empty = 'empty.md';

describe("mdLinks", () => {
    test('Expect to be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });

    test('Correct return of function', () => {
        return mdLinks(teste).then(data => {
          expect(data).toStrictEqual([
            {href: 'https://www.hostinger.com.br/tutoriais/o-que-e-npm', text: 'O que é npm'},
            {href: 'http://docs.npmjs.com/getting-started/what-is-npm', text: 'NPM'}]);
        });
    });
    
    // test('the fetch fails with an error', () => {
    //     return mdLinks(erro).catch(data => {
    //         expect(data).toMatch(['Error: ENOENT: no such file or directory, open `C:\Users\Bruna\OneDrive\Laboratoria\codigos\SAP003-md-links\tetse.md`']);
    //     });
    // });

    test('no matches', () => {
        return mdLinks(empty).then(data => {
            expect(data).toStrictEqual([]);
        });
    });
    
    // test('path not found', () => {
    //     return expect(mdLinks('')).rejects.toStrictEqual(["Error: ENOENT: no such file or directory, open ''"]);
    //   });
    
});