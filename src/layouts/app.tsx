import React from 'react'
import Terminal from '../components/terminal/terminal'

const Test:React.FC = () => {
    return (
        <Terminal
            commands = {{
                init: {
                    action: () => 'test',
                    description: 'Apenas para teste'
                },
                test2: {
                    action: () => 'test2',
                    description: 'Teste 2'
                },
                whoisgabriel: {
                    action: () => 'Olá, Meu nome é Gabriel Eich, tenho 25 anos e trabalho com programação há 3 anos, com foco em js e cloud.',
                    description: 'Open Gabriel resume'
                },
                gabrielskills: {
                    action: () => `
Frontend:
    - Javascript
    - React
    - Typescript
    - Nextjs
    - Apollo
    - GraphQL
    - HTML
    - CSS

Backend:
    - Node.js
    - Express.js
    - AdonisJs
    - SQL
    - NoSQL
    - Typescript
    - Python
    - Um pouquito de Machine Learning/Deep Learning`,
                    description: 'Open Gabriel skills'
                },
                gabrielworks: {
                    action: () => 'Atualmente trabalho como CTO na ZAPLY',
                    description: 'Open actual Gabriel´s work'
                }
            }}

            initialMessage = {`
Olá, me chamo Gabriel e esse é meu portifólio.

comandos rápidos:

    - para entrar no portifolio completo digite init ou feche o terminal no botão vermelho.

    - para ver um breve resumo digite whoisgabriel

    - para ver minhas skills digite gabrielskills

    - para ver meu trabalho atual digite gabrielswork

    - para outros comandos digite help
            `}
        />
    )
}

export default Test
