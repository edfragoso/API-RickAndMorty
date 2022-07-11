<h1>API - Rick And Morty</h1>
<p>Projeto 03 do 3º módulo de estudos do curso de desenvolvedor full stack da escola BlueEdTech.</p>

<h2>📝Descrição</h2>

<p>Essa API consiste em suprir o frontEnd com tela de listar todos os personagens cadastrados em um banco de dados, tela de busca por um único personagem utilizando um ID(chave de identificação), tela para cadastro, tela para editar e deletar um personagem.</p>

<p>API estruturada seguindo parão MVC-(Model-View-Controller)</p>

**MODEL**   |           **VIEW**                  | **CONTROLLER**
:----------:| :---------------------------------: | :-------------------:
Gerencia dados e lógica de negócios | Controla o layout e a exibição | Encaminha comandos para o modelo e exibe as peças. 
        
**[Link Heroku Swagger-ui](https://api-rickandmort.herokuapp.com/characters/api-docs/)**

<h2>🖥Tecnologias Utilizadas</h2>

**[NodeJs](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)**

**[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**

**[Express](https://expressjs.com/pt-br/)**

**[MongoDb-Atlas](https://www.mongodb.com/atlas)**

**<h2>🎯EndPoints</h2>**
* **GET**    --> _Busca de todos os personagens de uma lista._
* **GET**    --> _Busca de um personagem por ID._
* **POST**   --> _Adicionar um novo personagem a lista._
* **PUT**    --> _Editar um personagem selecionado por ID._
* **DELETE** --> _Excluir um personagem selecionado por ID._

<h2>⚙Configurações</h2>
<p>Caso deseje copiar esse projeto é necessário antes fazer algumas intalações e configurações, para isso siga o passo-a-passo a seguir.</p>
<p>Após fazer o download dos arquivos deste repositório, abra seu terminal e digite.</p>

`npm init -y`

<p>Agora, instale o express, através do comando:</p>

`npm i express`

<p>Você irá precisar também da biblioteca nodemon para desenvolvimento</p>

`npm nodemon -D`

<p>Instalando as dependências para banco de dados utilizando o mogoose</p>

`npm i mongoose`

<p>Instalando o dotenv para conexão com o banco de dados</p>

`npm i dotenv`

<p>Após isso, crie um arquivo na raiz do projeto com o nome .env e adicione uma variável de ambiente com a URL de conexao com mongoDB.</p>
<p>Exemplo no arquivo .env.example deste projeto</p>

<p>Instale a biblioteca do swagger para o express em seu projeto com o comando:</p>

`npm i swagger-ui-express`

<p>Essa biblioteca é necessário para documentar nosso projeto backEnd para os dev's frontEnd, você poderá visualizar o resultado clicando <a href="https://api-rickandmort.herokuapp.com/characters/api-docs/">aqui</a></p>

<p>Com isso você já poderá rodar sua aplicação através do comando...</p>

`npn run dev`

❗ **[Linceça](https://github.com/edfragoso/API-RickAndMorty/blob/main/LICENSE)** 

<h2>🎬TEMA</h2>
<p align ="justify-all">Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</p>
<p>A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra Rick e seu neto Morty, que divide seu tempo entre a vida familiar e viagens interdimensionais. Em 2016, suas duas primeiras temporadas foram lançadas na Netflix com a dublagem brasileira realizada pelo estúdio Dubbing Company, de Campinas, com tradução de Carlos Freires, e também foi transmitida nos canais pagos TBS, I.Sat e TNT Séries, atualmente é exibida no Brasil pelo canal Warner Channel desde 4 de maio de 2020 com a estreia do bloco do Adult Swim no canal. Em agosto de 2015, o Adult Swim renovou a série para uma terceira temporada de 10 episódios, que estreou no dia 1 de abril de 2017 com o resto da temporada programada para ir ao ar durante o verão do mesmo ano.</p>

🔎*Fonte:*[wikipedia](https://pt.wikipedia.org/wiki/Rick_and_Morty)

<h3>Contatos</h3>
📩 ednilson.fragoso@hotmail.com

[linkDin](https://www.linkedin.com/in/ednilsonfragoso/)

<h3>🙏Agradecimentos</h3>
👨‍🏫 Professores:

* [Marcus Silva](https://www.linkedin.com/in/marcusvinysilva)
* [Renato Nakamura](https://www.linkedin.com/in/renato-nakamura/)
* [Thiago Lima (ThiCode)]( https://www.linkedin.com/in/thicode/)
* [Maria Eduarda(DUDA)](https://www.linkedin.com/in/maria-eduarda-de-ara%C3%BAjo-cardoso)
* [Leonardo Fleck]( https://www.linkedin.com/in/leonardo-kf/)
* [Bruno Sallum](https://www.linkedin.com/in/bruno-sallum/) 


