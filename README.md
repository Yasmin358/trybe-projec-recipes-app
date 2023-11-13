<h1 align="center"> Recipes App </h1>
<h4 align="center"> Site para explorar as mais variadas Receitas de Comidas e Bebidas! <br/>
</h4>

<p align="center">
<img alt="Static Badge" src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=blue&style=for-the-badge">
<img alt="Static Badge" src="https://img.shields.io/static/v1?label=COVERAGE&message=68.53%&color=yellow&style=for-the-badge">
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#atualizações">Futuras Atualizações</a> •
  <a href="#demostração">Demostração</a> •
  <a href="#tecnologias-habilidades">Tecnologias e Habilidades</a> •
  <a href="#acesso-ao-projeto">Acesso ao projeto</a> •
  <a href="#creditos">Creditos</a> •
</p>

<h3 id="funcionalidades"> 🔨 Funcionalidades </h3>
- Fazer Login <br/>
- Visualizar todas Receitas <br/>
- Filtrar Receitas por Categoria <br/>
- Buscar receitas por nome, ingrendientes ou primeira letra <br/>
- Visualizar detalhes de uma receita. <br/>
- Favoritar uma Receita. <br/>
- Acompanhar o progresso da preparação de uma receita <br/>

<h3 id="atualizações"> Futuras Atualizações </h3>
  • Terminar CSS de todo o site <br/>
  • Refatorar Codigos <br/>
  • Finaliar Requisitos: 1, 12, 15, 20, 23, 39, 43, 62<br/>


<h3 id="demostração"> 🔭 Demostração </h3>
  <p>Em Construção</p>
  
<h3 id="tecnologias-habilidades"> 💻 Tecnologias e Habilidades usadas no Projeto </h3>
   <ul>
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>React-16</li>
     <li>React Hooks</li>
     <li>Context API</li>
     <li>RTL(React Testing Library)</li>
     <li>Trello</li>
   </ul>

  <h3 id="acesso-ao-projeto"> 📁 Acesso ao projeto </h3>
     <h4>Remotamente</h4>
       <p>Clique no link a seguir para abrir o projeto no navegador: <br/>
       <a href="https://trybe-projec-recipes-app.vercel.app/"/>https://trybe-projec-recipes-app.vercel.app/</a>
       </p>
       <p>Clique no link a seguir para acessar os arquivos do projeto: <br/>
       <a href="https://github.com/Yasmin358/trybe-projec-recipes-app/"/>
         https://github.com/Yasmin358/trybe-projec-recipes-app/ </a>
       </p>
     <h4>Localmente</h4>
  
    # Clone este repositório
    $ git@github.com:Yasmin358/trybe-projec-recipes-app.git
  
    # Acesse a pasta do projeto no terminal/cmd
    $ cd trybe-projec-recipes-app

    # Instale as dependencias (node 18.x)
    $ npm install

    # Rode o projeto 
    $ npm start

    # Ou abra no seu editor de texto favorito. 

  <h3 id="creditos"> ✍️ Creditos </h3>
    
  O Projeto Recipes App foi desenvolvido em grupo no curso Desenvolvimento Fullstack da TRYBE, no final do modulo de Frontend. <br />
  Membros: <a href="https://www.linkedin.com/in/yasminamorins/">Yasmin Amorin</a> , <a href="https://www.linkedin.com/in/elieloliveira-dev/">Eliel Oliveira</a>, <a href="https://www.linkedin.com/in/ricardo-caselati/">Ricardo Caselati</a>, <a href="https://www.linkedin.com/in/andersonfpcorrea/">Anderson Corrêa</a>
  
  <h3>Requisitos do projeto: </h3>
  <br/><strong>Testes unitários</strong> <br/>
  1. Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90% ✖️ <br/>
  <br/><strong>Tela de login</strong> <br />
  2. Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login ✔️ <br/>
  3. Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha ✔️ <br/>
  4. Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos ✔️ <br/>
  5. Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user` e os tokens nas chaves `mealsToken` e `cocktailsToken` ✔️ <br/>
  6. Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login ✔️ <br/>
  <br/><strong>Header</strong> <br /> 
  7. Implemente o header de acordo com a necessidade de cada tela ✔️ <br/>
  8. Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil ✔️ <br/>
  9. Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la ✔️ <br/>
  <br/><strong>Barra de busca - Header</strong> <br /> 
  10. Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo ✔️ <br/>
  11. Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter ✔️ <br/>
  12. Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas ✖️ <br/>
  13. Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL ✔️<br />
  14. Mostre as receitas em cards, caso mais de uma receita seja encontrada. ✔️ <br/>
  15. Exiba um `alert` caso nenhuma receita seja encontrada ✖️ <br/>
  <br/> <strong>Menu inferior</strong> <br/> 
  16. Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas ✔️ <br/>
  17. Exiba o menu inferior apenas nas telas indicadas pelo protótipo ✔️<br/>
  18. Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior ✔️<br/>
  <br/><strong>Tela principal de receitas</strong> <br/> 
  19. Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card ✔️<br/>
  20. Implemente os botões de categoria para serem utilizados como filtro ✖️<br/>
  21. Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria ✔️<br/>
  22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro ✔️<br/>
  23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL ✖️<br/>
  <br/><strong>Tela de detalhes de uma receita</strong> <br/> 
  24 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL ✔️<br/>
  25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações ✔️<br/>
  26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida ✔️<br/>
  27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel` ✔️<br/>
  28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo ✔️<br/>
  29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça ✔️<br/>
  30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe" ✔️<br/>
  31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso ✔️<br/>
  32 - Implemente um botão de compartilhar e um de favoritar a receita ✔️<br/>
  33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer na tela em uma tag HTML ✔️<br/>
  34 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes` ✔️<br/>
  35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário ✔️<br/>
  36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa ✔️<br/>
  <br/><strong>Tela de receita em progresso</strong> <br/> 
  37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções ✔️<br/>
  38 - Desenvolva um checkbox para cada item da lista de ingredientes ✔️<br/>
  39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista ✖️<br/>
  40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita ✔️<br/>
  41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui ✔️<br/>
  42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados) ✔️<br/>
  43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes` ✖️<br/>
  <br/><strong>Tela de receitas feitas</strong> <br/>
  44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo ✔️<br/>
  45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar ✔️<br/>
  46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar ✔️<br/>
  47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard ✔️<br/>
  48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros ✔️<br/>
  49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita ✔️<br/>
  <br/><strong>Tela de receitas favoritas</strong> <br/>
  50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo ✔️<br/>
  51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar" ✔️<br/>
  52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar" ✔️<br/>
  53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard ✔️<br/>
  54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela ✔️<br/>
  55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros ✔️<br/>
  56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita ✔️<br/>
  <br/><strong>Tela de perfil</strong> <br/>
  57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo ✔️<br/>
  58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível ✔️<br/>
  59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout" ✔️<br/>
  60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas ✔️<br/>
  61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas ✔️<br/>
  62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login ✖️<br/>
    
