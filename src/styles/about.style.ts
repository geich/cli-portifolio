import styled from 'styled-components'

interface Tabs {
    space?: number
}

export const Const = styled.span`
    color: #569cd6;
`
export const ConstName = styled.span`
    color: #4fc1f1;
`
export const Attribute = styled.span`
    color: #7bdcfe;
`
export const AttributeString = styled.span`
    color: #ce916a;
`
export const TabSpace = styled.span`
    margin-left: ${(props: Tabs) => props.space * 30}px;
`
