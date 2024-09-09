function pesquisar() {
  // Variável para armazenar a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(campoPesquisa);

  if (campoPesquisa == "") {
    section.innerHTML =
      "<p>Nada foi encontrado. É necessário digitar algo sobre os planeswalkers.</p>";
    return;
  }

  // Variável para armazenar a string com os resultados formatados

  let resultados = "";
  campoPesquisa = campoPesquisa.toLowerCase();
  let nome = "";
  let descricao = "";
  let tags = "";

  // Loop para iterar sobre os dados e construir o HTML dos resultados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // caso o nome esteja incluso no campo Pesquisa
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa || tags.includes(campoPesquisa))
    ) {
      // crie um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descrição-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
