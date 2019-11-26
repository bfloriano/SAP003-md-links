const mdLinks = () => {

    const regex = /http[s]?:\/\/([^\/]*)/mg;
    const str = `banana, caqui html tentando várias coisas aleatórias www
        [link](http://laboratoria.com/) banana
        [link](https://tec-noz.com.br/aulas)
        [link](https://www.mundocanibal.com.br/)

        aula teste aleatorio bla bla bla
        [link](http://aula.com.br/ e esse é mais um site)
    `;

    let m;
    while ((m = regex.exec(str)) !== null) {
        m.forEach((match, groupIndex) => {
        console.log(groupIndex, match);
        });
    };
};



mdLinks();