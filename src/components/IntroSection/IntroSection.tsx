import React from 'react'
import { BrandImage, BrandText, BrandTextContent, IntroSectionContainer } from './style';
import CatLg from '../../images/image_cat/Spaniel01_gradient@2x.png'
import { HeaderLevel2, HeaderLevel4, LinkText, Paragraph } from '../../styles';
import { colors } from '../../styles/colors';

export const IntroSection = () => {

  return (
    <IntroSectionContainer>
        <BrandText>
            <BrandTextContent>
                <HeaderLevel4 color={colors?.red_color} className='header_text'>Brand , Dev , Ecom, Marketing</HeaderLevel4>
                <HeaderLevel2 color={colors?.darkColor}>We unleash</HeaderLevel2>
                <HeaderLevel2 color={colors?.greyColor}>business potential</HeaderLevel2>
                <Paragraph className='p_graph'>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</Paragraph>
                <Paragraph className='link_bottom' color={colors?.darkColor}><LinkText color={colors?.darkColor} href='/'>Let's talk</LinkText></Paragraph>
                </BrandTextContent>
            </BrandText>
        <BrandImage image={CatLg}></BrandImage>
    </IntroSectionContainer>
  )
}
