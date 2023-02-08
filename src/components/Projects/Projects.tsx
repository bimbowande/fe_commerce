import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {  CarouselPointer, GallerySection1,NavContainer, NavItem, ProjectAction, ProjectContainer, ProjectContent, ProjectGallery, ProjectHeader, ProjectLink } from './styles'
import { HeaderLevel2, LinkText, Paragraph } from '../../styles'
import { colors } from '../../styles/colors'
import whilLg from '../../images/whellies/whellies01@2x.png'
import whilSm from '../../images/whellies/whellies01.png'
import { ImageBox } from './ImageBox'
import newspaperLg from '../../images/newspaper/newspaper@2x.png';
import newspaperSm from '../../images/newspaper/newspaper.png';
import newspaper2Lg from '../../images/newspaper02/newspaper02@2x.png';
import newspaper2Sm from '../../images/newspaper02/newspaper02.png';
import sardineLg from '../../images/makerek/makerek@2x.png';
import sardineSm from '../../images/makerek/makerek.png';
import riderLg from '../../images/rider01/rider01@2x.png';
import riderSm from '../../images/rider01/rider01.png';
import { FlexItem } from '../ServicesSection/styles'

export const Projects = () => {
  return (
    <ProjectContainer>
        <ProjectContent>
            <ProjectHeader>
                <HeaderLevel2 color={colors?.darkColor}>Some of our </HeaderLevel2>
                <HeaderLevel2 color={colors?.greyColor}>recent projects</HeaderLevel2>
            </ProjectHeader>
            <ProjectLink>
                <NavContainer>
                    <NavItem>All</NavItem>
                    <NavItem>Branding</NavItem>
                    <NavItem>Web Design</NavItem>
                    <NavItem>Digital Marketing</NavItem>
                </NavContainer>
            </ProjectLink>
            <ProjectGallery>
                <GallerySection1>
                    <ImageBox lgImage={whilLg} smImage={whilSm}/>
                    <ImageBox lgImage={newspaper2Lg} smImage={newspaper2Sm}/>
                    <ImageBox lgImage={sardineLg} smImage={sardineSm}/>
                </GallerySection1>
                <GallerySection1>
                    <ImageBox flexWidth='2' lgImage={newspaperLg} smImage={newspaperSm}/>
                    <ImageBox lgImage={riderLg} smImage={riderSm}/>
                </GallerySection1>
            </ProjectGallery>
            <ProjectAction>
                <FlexItem className='flex_item_text'>
                    <Paragraph className='link_bottom' color={colors?.darkColor}><LinkText color={colors?.darkColor} href='/'>See all work</LinkText></Paragraph>
                </FlexItem>
                <FlexItem className='carousel_container'>
                    <CarouselPointer bgColor={colors?.carousel1}> <FontAwesomeIcon color={colors?.greyColor}  icon={faAngleLeft}/> </CarouselPointer> 
                    <CarouselPointer bgColor={colors?.carousel2}><FontAwesomeIcon color='#fff' icon={faAngleRight}/> </CarouselPointer> 
                </FlexItem>
            </ProjectAction>

        </ProjectContent>
    </ProjectContainer>
  )
}
