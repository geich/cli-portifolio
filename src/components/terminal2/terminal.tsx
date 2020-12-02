import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import {
  TerminalBox,
  TerminalCli,
  TerminalHead,
  WindowButton,
  TerminalBody,
  TerminalInput,
  TerminalParagraph
} from './terminal.style'

interface ITerminal {
    commands: {
        [key: string]: {
            action: () => any
            description: string
        }
    }
}

const Terminal:React.FC<ITerminal> = ({ commands }) => {
  const input = useRef(null)
  const router = useRouter()
  const [terminalId, setTerminalId] = useState('minimized')

  useEffect(() => input.current.focus())

  const cmds = {
    ...commands,
    help: {
      action: () => Object.keys(cmds).map(c => `${c}: ${cmds[c].description} \n`).join('\n'),
      description: 'Lista todos os comandos'
    }
  }

  const handleClose = () => router.push('/about')
  const handleMaximise = () => terminalId === 'minimized' ? setTerminalId('maximized') : setTerminalId('minimized')
  const handleSetFocus = () => input.current.focus()
  const handleInput = (e:React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const elem = e.target as HTMLInputElement
      const text = elem.value
      const cmd = cmds[text]
      if (!cmd) {
        alert('Comando não encontrado')
        return false
      }
      const cmdResult = cmd.action()
      alert(cmdResult)
    }

    return false
  }
  return (
    <TerminalBox onClick={handleSetFocus}>
      <TerminalCli id={terminalId}>
        <TerminalHead>
          <WindowButton id='red' onClick={handleClose} />
          <WindowButton id='yellow' />
          <WindowButton id='green' onClick={handleMaximise} />
        </TerminalHead>
        <TerminalBody>
          <TerminalParagraph>&gt; <TerminalInput ref={input} onKeyDown={handleInput} /></TerminalParagraph>
        </TerminalBody>
      </TerminalCli>
    </TerminalBox>
  )
}

export default Terminal
