import styled from "styled-components";


export interface imgProps {
  flexWidth ?: string 
}

export const CaseContainer =  styled.section`
 
  height: auto;
  min-height:500px;
`

export const CaseStudyContent =  styled.div`
  width:100%;
  margin: 0 auto;
  
`

export const TextContainer =  styled.div`
  width:40%;
  margin: 0 auto;
  text-align:center;
  & h2{
    margin-top:20px;
    margin-bottom:10px;
  }


`

export const CaseStudyGallery  = styled.div`
  height:auto;
  margin-top:40px;
  gap:3px;
  display:flex;
`


export const GalleryContainer  = styled.div<imgProps>`
  flex: ${(props)=> props?.flexWidth || '1'};
  height:500px;

`

export const GalleryImage = styled.img`
 max-width:100%;
 max-height:100%;
 width:100%;
 object-fit:contain;

`

export const BottomTextContent = styled.div`
  margin: 0 auto;
  margin-top:50px;
  width:80%;

`