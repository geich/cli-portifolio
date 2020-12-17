import React from 'react'
import { SPageContent, PageText, SideLines, Line } from './pageContent.style'

const PageContent:React.FC = ({ children }) => {
    const lines = children as Array<React.ReactNode>

    return (
        <SPageContent>
            <SideLines>{lines && lines.map((c, i) => <Line key={i}>{i + 1}</Line>)}</SideLines>
            <PageText>{children}</PageText>
        </SPageContent>
    )
}

export default PageContent
