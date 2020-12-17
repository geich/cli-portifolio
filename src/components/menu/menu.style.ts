import styled from 'styled-components'

export const MenuBox = styled.div`
    background-color:#252526;
    max-width: 300px;
    min-width: 250px;
    height: 100vh;

    & .menuItem {
        padding: 12px;
    }

    & .active {
        background-color: #37373d
    }
`
