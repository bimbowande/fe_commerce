
import { BottomTextContent, CaseContainer, CaseStudyContent, CaseStudyGallery, GalleryContainer, GalleryImage, TextContainer } from './styles'
import { HeaderLevel2,  Paragraph } from '../../styles';
import lab01 from '../../images/lab01/lab01@2x.png';
import dashboard from '../../images/dashboard01/dashboard01@2x.png';
import socks from '../../images/socks/socks@2x.png';
import { colors } from '../../styles/colors';


export const CaseStudy = () =>{
    return(
       <CaseContainer>
            <CaseStudyContent>
                <TextContainer>
                    <HeaderLevel2>Case Studies</HeaderLevel2>
                    <Paragraph style={{fontSize:'1.2rem'}}>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.</Paragraph>
                </TextContainer>
                <CaseStudyGallery>
                    <GalleryContainer flexWidth='2'>
                        <GalleryImage src={lab01}/>
                    </GalleryContainer>

                    <GalleryContainer flexWidth='7'>
                        <GalleryImage src={dashboard}/>
                    </GalleryContainer>

                    <GalleryContainer flexWidth='4'>

                    </GalleryContainer>
                    <GalleryContainer flexWidth='2'>
                        <GalleryImage src={socks}/>
                    </GalleryContainer>
                </CaseStudyGallery>
                <BottomTextContent>
                    <HeaderLevel2 color={colors?.darkColor}>What are </HeaderLevel2>
                    <HeaderLevel2 color={colors?.greyColor

                    }>we all about?</HeaderLevel2>
                </BottomTextContent>
            </CaseStudyContent>
       </CaseContainer>
    )
}