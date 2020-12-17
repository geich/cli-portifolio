import React from 'react'
import Link from 'next/link'
import { ItemIcon, Item } from './pagesItens.style'
import { withRouter, Router } from 'next/router'
interface IItem {
    name: string
    link: string
    iconText: string
    color: string
    router: Router
}

const PagesItens:React.FC<IItem> = ({ link, iconText, name, color, router }) => {
    console.log(router)
    return (
        <Link href={link}>
            <Item className={`menuItem ${link === router.pathname ? 'active' : ''}`}><ItemIcon id={color}>{iconText}</ItemIcon>{name}</Item>
        </Link>
    )
}

export default withRouter(PagesItens)
