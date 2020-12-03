import React from 'react'
import TerminalReact from 'terminal-in-react'

import { TerminalBox } from './terminal.style'

const Terminal:React.FC = () => {
    return (
        <TerminalBox>
            <TerminalReact
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '#040404 7px 7px 10px 0px', height: '650px' }}
                commandPassThrough={cmd => `-PassedThrough:${cmd}: command not found`}
                commands={{
                    init: () => 'Portifólio em construção',
                    whoisgabriel: () => 'Olá, Meu nome é Gabriel Eich, tenho 25 anos e trabalho com programação há 3 anos, com foco em js e cloud.',
                    gabrielskills: () =>
                        `
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
                    gabrielworks: () => 'Atualmente trabalho como CTO na ZAPLY'
                }}
                // Components without descriptions type https://github.com/nitin42/terminal-in-react/pull/71
                // @ts-ignore
                descriptions={{
                    init: 'Open portifolio details',
                    whoisgabriel: 'Open Gabriel resume',
                    gabrielskills: 'Open Gabriel skills',
                    gabrielworks: 'Open actual Gabriel´s work'
                }}

                msg={
                    `Olá, me chamo Gabriel e esse é meu portifólio.

comandos rápidos:

- para entrar no portifolio completo digite init ou feche o terminal no botão vermelho.

- para ver um breve resumo digite whoisgabriel

- para ver minhas skills digite gabrielskills

- para ver meu trabalho atual digite gabrielswork

- para outros comandos digite help`
                }
            />
        </TerminalBox>
    )
}

export default Terminal
