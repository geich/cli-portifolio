import React from 'react'
import { HeaderBox } from './header.style'
import { itens } from '../../helpers/menuItens'
import Item from '../pagesItens/pagesItens'

const Menu:React.FC = () => {
    return (
        <HeaderBox>
            {itens.map((item, i) => <Item key={i} {...item} />)}
        </HeaderBox>
    )
}

export default Menu
