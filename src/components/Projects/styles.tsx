import styled from "styled-components";
import { colors } from "../../styles/colors";

export interface PictureI{
    flexWidth?:string
}

export interface CarouselPointerI{
    bgColor?: string
}



export const ProjectContainer = styled.section`
    height:auto;
    padding : 70px 0;
`

export const ProjectContent = styled.div`
    width:70%;
    margin: 0 auto;

`
export const ProjectHeader = styled.div`
`

export const ProjectLink = styled.div`
    margin-top:30px;
`

export const NavContainer = styled.ul`

`
export const NavItem =  styled.li`
    list-style:none;
    color: ${colors?.darkColor};
    text-align:center;
    display:inline-block;
    padding-bottom:10px;
    border-bottom:1px solid ${colors?.greyColor};
    width:180px;
    font-size: 1.17rem;
    font-weight:400;
    margin-top:30px;
    &:first-child{
        border-bottom: 2px solid red;
        font-weight:700;
    }
`

export const ProjectGallery = styled.div `

 margin-top:80px;
 min-height:400px
`

export const GallerySection1 = styled.article`
    display: flex;
    gap:20px;
    margin-bottom:30px;
`
export const GallerycardItem = styled.picture<PictureI>`
    height:350px;
    flex:  ${(props)=> props.flexWidth || '1'};
    & img{
        object-fit:cover;
        max-height: 100%;
        min-width: 100%;
        border-radius:10px;
    }

`

export const GallerySection2 =  styled.article`

`

export const ProjectAction  = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:50px;
`

export const CarouselPointer = styled.span<CarouselPointerI>`
    background-color: ${(props)=> props.bgColor || 'unset' };
    width:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:50px;
`