import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuBox = styled.ul`
    background-color:#252526;
    max-width: 250px;
    height: 100vh;
    padding: 20px;
    list-style-type: none;
`

export const SMenuItem = styled.li`
    margin: 20px 0;
    & a {
        text-decoration: none;
        color: white
    }
`

export const MenuItemIcon = styled.span`
    font-weight: 600;
`
