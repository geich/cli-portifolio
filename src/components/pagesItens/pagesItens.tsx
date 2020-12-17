import Link from 'next/link'
import { ItemIcon, Item } from './pagesItens.style'

interface IItem {
    name: string
    link: string
    iconText: string
    color: string
}


const PagesItens:React.FC<IItem> =  ({ link, iconText, name, color }) => {
    return (
        <Link href={link}>
           <Item><ItemIcon id={color}>{iconText}</ItemIcon> {name}</Item>
        </Link>
    )
}


export default PagesItens
