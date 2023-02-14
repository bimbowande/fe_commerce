import  styled from "styled-components";
import { BrandImg } from "../../interface";
import { css } from "styled-components";


const BgImageModify = css`
  background-size:100%;
  background-repeat:none;

`

export const IntroSectionContent = styled.div`
  display:flex;
  height:787px;
`

export const IntroSectionContainer = styled.section`
  position:relative;
   
`

export const BrandText = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`

export const BrandTextContent = styled.div`
  width:40%;
  margin: 0 auto;
`

export const BrandImage = styled.div<BrandImg>`
  background-image: url(${(props:any)=> props.image});
  height:inherit;
  flex:1;
  box-sizing:border-box;
  ${BgImageModify}
`


