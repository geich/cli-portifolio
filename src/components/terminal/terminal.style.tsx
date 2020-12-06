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
    max-width: 700px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: green;
    transition: max-height 1s ease-out,  max-width 1s ease-out;

    &#maximized {
        max-width: 100%;
        max-height: 100%;
    }

    ${media.lessThan('small')`
        max-width: 100%;
        max-height: 70%;
    `}
`

export const TerminalHead = styled.div`
    width: 100%;
    height: 30px;
    background-color: #3c3d3f;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    padding: 0 15px;
`
export const WindowButton = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    cursor: pointer;

    &#red {
        background-color:#ff0000
    }

    &#yellow {
        background-color:#ffa500
    }

    &#green {
        background-color:#008000
    }
`
export const TerminalBody = styled.div`
    width: 100%;
    height: 95%;
    padding: 20px;
    overflow-x: auto;
    scrollbar-width: thin;
`

export const TerminalInput = styled.input`
    background-color: transparent;
    border: none;
    color: green;
    margin-top: 30px;
    outline: none;
`

export const TerminalParagraph = styled.p`
    width: 100%;
    background-color: transparent;
    font-size: 13px;
    margin: 20px 0px;
    white-space: pre-wrap;
`
