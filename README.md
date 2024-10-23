Olá, seja bem vindo ao resultado do meu Tech Challenge :v:. Meu nome é João Woigt, meu é rm356898, você pode ler
mais sobre mim no final deste ReadMe na sessão **Sobre o desenvolvedor**

## Iniciando o projeto

Apos clonar o projeto, no terminal dentro da pasta rode o comando para instalar as dependencias:

```bash
npm install
```

Em seguida, crie um arquivo na raiz do projeto chamado **.env**. Neste arquivo, crie uma variavel chamada **MONGODB_URI**. Esta variavel deverá conter sua string de conexão para um cluste no MongoDB. Para isso você vai precisar: <br>
1- criar uma conta no [MongoDB](https://www.mongodb.com/pt-br) <br>
2- Iniciar um cluster <br>
3- Na tela inicial, clique em **connect**<br>
4- No modal que será aberto, clique em **Drivers**<br>
5- Copie sua connection string, ela terá o formato: mongodb+srv://[SEU_USER]:<[SUA_SENHA_DO_DATABASE]><br>
6- Adicione a connection string no arquivo .env substituindo o <Sua connection string aqui>

Caso tenha dificuldades você pode seguir o [tutorial](https://www.mongodb.com/pt-br/developer/languages/javascript/nextjs-with-mongodb/)

Por ultimo, rode o servidor local para iniciar o projeto:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Sobre o projeto <br>

Para a crição deste projeto foram utilizadas as tecnologias

- Next.js
- TypeScript
- Tailwind
- CVA
- MongoDb e Mongoose

Utilizamos os padrão do design system fornecido para criar os componentes. Dentro da pasta **UI** se encontra o resultado deles, nela você encontrará duas outras pastas. **Components**, referentes as minimas unidades de layout, tudo aquilo que foi considerado mais básico e atomico (textos, botões, icones, dropdown). **Patterns**, são conjuntos de componentes que são como regiões nas telas, utilizado para segregar responsabilidades e facilitar a manutenção.

Fora isso, foi utilizado clean architeture para separar as camadas do projeto. Assim temos a pasta de **data** com os models necessarios para a comunicação com o backend, a pasta **domain** responsavel por regras de negocios e transmitir informações entre data e view. E as camadas de **presentation** constituidas pela pasta do proprio Next.Js Pages, contendo o codigo para as paginas do projeto, e a pasta **UI** contendo o designSystem.

Para o backend, foi feito um BFF para tratar os dados do banco e entregar exatamente o que o front necessita, este foi construido com os API routes nativos do Next.js e se encontra na pasta **api**

## Sobre o desenvolvedor

Olá, meu nome é João Woigt, sou desenvolvedor deste 2020 quando decidi fazer a transição da minha area de estudo (Ciências Socias) para a programação a fim de encontrar melhores oportunidades. Participei de diversos bootcamps, em destaque O Santander Bootcampo | Mobile developer e o curso da Ada Tech Web full-stack. Hoje me especializo em desenvolvimento mobile, com foco em Android e Kotlin multiplataforma. Atuo faz 4 anos na area, tendo passado por projetos como Rock in Rio, Banco Pan e Stone, onde me encontro empregado atualmente.
Fique a vontade para se conectar em meu [Linkedin](https://www.linkedin.com/in/joaowoigt/)
