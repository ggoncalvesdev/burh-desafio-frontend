> # Wishlist - Application for Organization of Goals and Desires

## Test resolution
Durante o desenvolvimento da aplicação Lista de Desejos, foram tomadas algumas decisões de design e arquitetura com base nos requisitos fornecidos. A seguir, descrevo as principais decisões e como organizei e separei o código:

* Componentização: Para promover a reutilização de código e facilitar a manutenção, o código foi organizado em componentes. Cada parte funcional da aplicação foi encapsulada em componentes individuais, como o componente "Card" para exibir os desejos, o componente "Header" para ser reaproveitado em toda a aplicação.

* Estilização: A estilização dos componentes foi feita utilizando a biblioteca styled-components. Isso permite que o CSS seja escrito diretamente no código JavaScript, tornando-o mais modular e fácil de gerenciar. Os estilos foram definidos tanto inline nos componentes quanto em arquivos separados para facilitar a organização.

* Gerenciamento de Estado: Para lidar com o estado da aplicação e permitir a interação do usuário, foi utilizado o React Hooks. O estado da aplicação, como a lista de desejos e as informações inseridas pelos usuários, foi gerenciado no componente "Card" e compartilhado com os demais componentes conforme necessário.

* Responsividade: A aplicação foi projetada para ser responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos. Foram utilizadas técnicas de design responsivo e media queries para garantir uma experiência de usuário consistente em diferentes plataformas.

### Importante: Não consegui terminar a aplicação porque a API expirou, e não sabia que ela tinha limites de tempo. Eu só conseguia trabalhar na aplicação após as 18h30 e tinha planejado terminá-la no sábado. Portanto, a aplicação está incompleta. Peço desculpas por não ter prestado atenção ao tempo. Caso precise de mais esclarecimentos, estou à disposição para conversar!

# Tools
* [Axios](https://www.npmjs.com/package/axios/v/0.27.2) for integration with the api.
* [Styled-Component](https://www.npmjs.com/package/@types/styled-components) library that makes it possible to write CSS code inside JavaScript.
* [React-Router](https://www.npmjs.com/package/@types/react-router) popular standard library for routing between various display components in React apps.
* [React-Router-Dom](https://www.npmjs.com/package/@types/react-router-dom) implements dynamic routing in component-based web applications.
* [Crypto-Js](https://www.npmjs.com/package/crypto-js) allows access to a cryptographic random number generator and primitive cryptography.

## Files

-   `index.tsx` responsible for starting the application.
-   `App.tsx` application global class.
-   `pages/index.tsx` contains the logic and structure of the pages.
-   `pages/styles.ts` contains the style of the pages.
-   `styles/global` contains the global style.
-   `styles/themes/default` responsible for containing the styles used in the application

And the code is organized as this:
1. `components` stores application components.
2. `model` stores application properties.
3. `routes` stores navigation between application pages.
4. `pages` stores application pages.
5. `services` stores all utility services of the application.
6. `service/api/Request` stores the methods responsible for making requests to the API
7. `styles` stores themes and styles global the application.
 

# Getting started

You'll need Node: 16.18.32 installed.

## Setup

* Clone this repository to your local environment.

* Open the terminal in the root folder of the project.

* Run the `npm install` command to install the project's dependencies.

## Running

* running on http port `http://localhost:3000` with `react`: 18.2.0 and `@types/react`: 18.2.6.

* for running `npm start`.
