import React from 'react'
import { SPageContent, PageText, SideLines } from './pageContent.style'

const PageContent:React.FC = ({ children }) => {
    return (
        <SPageContent>
            <SideLines><p>1</p><p>1</p><p>1</p><p>1</p></SideLines>
            <PageText>{ children }</PageText>
        </SPageContent>
    )
}

export default PageContent
