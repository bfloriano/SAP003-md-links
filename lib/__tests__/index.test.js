const mdLinks = require('../index');
const teste = './lib/__tests__/teste.md';
const erro = './lib/__tests__/tetse.md';
const empty = './lib/__tests__/empty.md';

describe('mdLinks', () => {
    test('Expect to be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });

    test('Correct return of function', () => {
        return mdLinks(teste).then(data => {
            expect(data).toStrictEqual([
              {href: 'www.hostinger.com.br/tutoriais/o-que-e-npm', text: 'O que é npm'},
              {href: 'community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175', text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?'},  
              {href: 'medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298', text: 'JavaScript assíncrono: callbacks, promises e async functions'},
              {href: 'docs.npmjs.com/getting-started/what-is-npm', text: 'NPM'},
              {href: 'docs.npmjs.com/getting-started/publishing-npm-packages', text: 'Publicar package'}])
        });
    });
    
    test('the fetch fails with an error', () => {
        return mdLinks(erro).catch(data => {
            expect(data).toMatch("Error: Error: ENOENT: no such file or directory, open 'C:\\Users\\Bruna\\OneDrive\\Laboratoria\\codigos\\SAP003-md-links\\lib\\__tests__\\tetse.md'");
        });
    });

    test('no matches', () => {
        return mdLinks(empty).then(data => {
            expect(data).toStrictEqual([]);
        });
    });
    
    test('path not found', () => {
        return expect(mdLinks('')).rejects.toStrictEqual("Error: Error: ENOENT: no such file or directory, open ''");
      });
    
});