import  styled from "styled-components";
import { BrandImg } from "../../interface";
import { css } from "styled-components";


const BgImageModify = css`
background-size:100%;
background-repeat:none;

`



export const IntroSectionContainer = styled.section`
    display:flex;
    height:800px;
`

export const BrandText = styled.div`
  flex:1;
  border:1px solid green;
`



export const BrandImage = styled.div<BrandImg>`
  background-image: url(${(props:any)=> props.image});
  height:inherit;
  flex:1;
  box-sizing:border-box;
  ${BgImageModify}
`