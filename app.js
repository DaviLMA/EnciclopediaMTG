function pesquisar() {
  // Variável para armazenar a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Variável para armazenar a string com os resultados formatados
  let resultados = "";

  // Loop para iterar sobre os dados e construir o HTML dos resultados
  for (let dado of dados) {
    // Cria um div para cada item do resultado
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

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
