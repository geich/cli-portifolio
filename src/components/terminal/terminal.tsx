import React, { useEffect, useRef, useState } from 'react'
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
            action: () => string | void
            description: string
        }
    },
    initialMessage: string,
    buttons?: { red?: () => void, yellow?: () => void, green?: ()=> void}
}

const Terminal:React.FC<ITerminal> = ({ commands, initialMessage, buttons = {} }) => {
    const input = useRef(null)
    const router = useRouter()

    const [terminalId, setTerminalId] = useState('minimized')
    const [cliTexts, setCliTexts] = useState([])

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
    const handle = () => false
    const handleInput = (e:React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const elem = e.target as HTMLInputElement
            const text = elem.value
            const cmd = cmds[text]

            elem.value = ''

            if (!cmd) {
                alert('Comando não encontrado')
                return false
            }
            const cmdResult = cmd.action()

            if (typeof cmdResult === 'string') {
                setCliTexts([...cliTexts, { text: cmdResult, command: text }])
            } else {
                return
            }
        }

        return false
    }

    return (
        <TerminalBox onClick={handleSetFocus}>
            <TerminalCli id={terminalId}>
                <TerminalHead>
                    <WindowButton id='red' onClick={buttons.red || handleClose} />
                    <WindowButton id='yellow' onClick={buttons.yellow || handle }/>
                    <WindowButton id='green' onClick={buttons.green || handleMaximise} />
                </TerminalHead>
                <TerminalBody>
                    <TerminalParagraph>{initialMessage}</TerminalParagraph>
                    {cliTexts.map(ct =>
                        <>
                            <TerminalParagraph > $ {ct.command} </TerminalParagraph>
                            <TerminalParagraph> {ct.text} </TerminalParagraph>
                        </>
                    )}
                    <TerminalParagraph>$ <TerminalInput ref={input} onKeyDown={handleInput} /></TerminalParagraph>
                </TerminalBody>
            </TerminalCli>
        </TerminalBox>
    )
}

export default Terminal
