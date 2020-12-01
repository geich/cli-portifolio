import styled from 'styled-components'
import media from 'styled-media-query'

export const TerminalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const TerminalCli = styled.div`
    box-shadow: #040404 7px 7px 10px 0px;
    background-color: #000000;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    height: 100%; 
    border-radius: 15px;
    
    ${media.lessThan('small')`
        max-width: none;
        max-height: none;
    `}
`

export const TerminalHead = styled.div`
    width: 100%;
    height: 30px; 
    background-color: #3c3d3f;
    border-radius: 15px 15px 0 0;
`