# bbox

Você vai precisar das seguintes ferramentas e tecnologias:

- Node JS: https://nodejs.org/en/
- Visual Code: https://code.visualstudio.com/download


#### Via terminal, rode os seguintes comandos:
```
git clone https://github.com/maridoqa/bbox

```
#### Para instalar as dependencias:
```
npm install 
```
#### Para executarVia Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Gerando relatórios

```
npm run cy:report  
```

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 
