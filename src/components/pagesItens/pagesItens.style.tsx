import styled from 'styled-components'

export const ItemIcon = styled.span`
    font-weight: 600;
    margin-right: 10px;

    &#yellow {
        color: #cbbe31
    }
    &#orange {
        color: #d14e28
    }
    &#blue {
        color: #3f9aba
    }

`
export const Item = styled.div`
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #2a2d2e
    }

    & a {
        text-decoration: none;
        color: #cccccc
    }

`
