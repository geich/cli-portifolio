import styled from 'styled-components'
import media from 'styled-media-query'
import Item from '../pagesItens/pagesItens'

export const HeaderBox = styled.div`
    background-color:#252526;
    width: 100%;
    height: 45px;
    display: flex;

    & .menuItem {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
    }

    & .active {
        background-color: #1e1e1e
    }
`
