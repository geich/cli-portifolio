import React from 'react'

import { TerminalBox, TerminalCli, TerminalHead } from './terminal.style'

const Terminal:React.FC = () => {
  return (
    <TerminalBox>
      <TerminalCli>
        <TerminalHead/>
      </TerminalCli>
    </TerminalBox>
  )
}

export default Terminal