import styled from "styled-components"
import { colors } from "./colors"

export interface TextProps{
    color?: string,
    fontSize?: string
}

export const  HeaderLevel4 =  styled.h4<TextProps>`
    color: ${props=>props.color || colors?.greyColor}

`

export const HeaderLevel3 = styled.h3<TextProps>`
    color: ${props=>props.color || colors?.greyColor}
`

export const HeaderLevel2 = styled.h2<TextProps>`
    color: ${props=>props.color || colors?.greyColor};
    font-size: 2.5rem;
    line-height: 50px;
`

export const HeaderLevel1 =  styled.h1<TextProps>`
    color: ${props=>props.color || colors?.greyColor};
`

export const LinkText =  styled.a<TextProps>`
    color: ${props=>props.color || colors?.greyColor};
    font-weight:500
`

export const Paragraph =  styled.p`
    color: ${props=>props.color || colors?.greyColor};
    line-height: 30px;
    font-size: 1.1rem
`