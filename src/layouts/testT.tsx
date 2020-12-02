import React from 'react'
import Terminal from '../components/terminal2/terminal'

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
        }
      }}

    />
  )
}

export default Test
