import React from 'react'
import { FlexContainer, FlexItem, ServiceContainer, ServiceContent } from './styles'
import { HeaderLevel2, LinkText, Paragraph } from '../../styles'
import { colors } from '../../styles/colors'
import { ServiceOption } from './ServiceOption'

export const ServiceSection = () => {
  return (
    <ServiceContainer>
        <ServiceContent>
            <FlexItem>
                <HeaderLevel2 color={colors?.darkColor}>What are </HeaderLevel2>
                <HeaderLevel2 color={colors?.greyColor}>we capable of</HeaderLevel2>
                <Paragraph className='service_graph'>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</Paragraph>
                <Paragraph className='link_bottom' color={colors?.darkColor}><LinkText color={colors?.darkColor} href='/'>Our process</LinkText></Paragraph>
            </FlexItem>
            <FlexItem>
                <FlexContainer>
                    <ServiceOption header={`Brand`} listItems= {['Brand Strategy','Logo & Name','Identity & Collateral']} />
                    <ServiceOption header={`Marketing`} listItems= {['Digital','Market Research']}/>
                    <ServiceOption header={`Development`}  listItems= {['eCommerce','Web Development','Mobile Apps']}/>
                </FlexContainer>
            </FlexItem>
        </ServiceContent>
    </ServiceContainer>
  )
}
