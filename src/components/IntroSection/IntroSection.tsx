import React from 'react'
import { BrandImage, BrandText, IntroSectionContainer } from './style';
import CatLg from '../../images/image_cat/Spaniel01_gradient@2x.png'
import { HeaderLevel2, HeaderLevel3, HeaderLevel4, Paragraph } from '../../styles';

export const IntroSection = () => {

  return (
    <IntroSectionContainer>
        <BrandText>
            <HeaderLevel4>Brand , Dev , Ecom, Marketing</HeaderLevel4>
            <HeaderLevel3>We Unleash</HeaderLevel3>
            <HeaderLevel2>business Potential</HeaderLevel2>
            <Paragraph>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</Paragraph>
            <p><a href='/'>Let's talk</a></p>
        </BrandText>
        <BrandImage image={CatLg}></BrandImage>
    </IntroSectionContainer>
  )
}
