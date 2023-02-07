import styled from "styled-components";
import { colors } from "../../styles/colors";


export const ServiceContainer = styled.section`
    background-color: ${colors?.grey_bg};
    height: 780px;
    
  
`

export const ServiceContent =  styled.div`
   margin: 0 auto;
   width:70%;
   display:flex;
   height:inherit;
   justify-content: center;
   align-items:center;
   flex-direction: row;
`

export const FlexItem = styled.div`
    flex:1;
`

export const FlexContainer = styled.div`
    display:flex;
    flex-flow:wrap;
    padding-left:50px;
    margin-top:40px
`


export const ListHeader = styled.div`
    width:50%;
    margin-bottom:30px;
    font-size:1.10rem;
   

`

export const ListContainer = styled.ul`

`

export const ListData = styled.li`
    list-style:none;
    font-size:1.14rem;
    color: ${colors?.greyColor};
    padding-bottom:20px

`