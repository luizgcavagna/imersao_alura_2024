function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("compo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = 'Campo de busca vazio.'
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    for (let dado of atletas) {
        
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informacoes</a>
                </div>
            `;
        }
        
    }

    if (!resultados) 
        resultados += 'Nada foi encontrado.';
    

    section.innerHTML = resultados
}
