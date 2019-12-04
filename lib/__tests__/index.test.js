const mdLinks = require("../index.js");
const teste = "./lib/__tests__/teste.md";
const erro = "./lib/__tests__/tetse.md";
const empty = "./lib/__tests__/empty.md";

describe("mdLinks", () => {
  it("Expect to be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("Correct return of function", (done) => {
    mdLinks(teste).then(data => {
      expect(data).toStrictEqual([
        {href: "www.hostinger.com.br/tutoriais/o-que-e-npm", text: "O que é npm"},
        {href: "community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175", text: "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?"},  
        {href: "medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298", text: "JavaScript assíncrono: callbacks, promises e async functions"},
        {href: "docs.npmjs.com/getting-started/what-is-npm", text: "NPM"},
        {href: "docs.npmjs.com/getting-started/publishing-npm-packages", text: "Publicar package"}]);
      done();
    });
  });
    
  it("the fetch fails with an error", (done) => {
    mdLinks(erro).catch(data => {
      expect(data).toMatch("Error: ENOENT: no such file or directory, open 'C:\\Users\\Bruna\\OneDrive\\Laboratoria\\codigos\\SAP003-md-links\\lib\\__tests__\\tetse.md'");
      done();
    });
  });

  it("no matches", (done) => {
    mdLinks(empty).then(data => {
      expect(data).toStrictEqual([]);
      done();
    });
  });
    
  it("path not found", (done) => {
    mdLinks("").catch(data => {
      expect(data).toMatch("Error: ENOENT: no such file or directory, open ''");
      done();
    });
  });
    
});