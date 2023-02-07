import React from 'react'
import { HeaderLevel3 } from '../../styles'
import { ListContainer, ListData, ListHeader } from './styles'
import { colors } from '../../styles/colors'

export interface ServiceOptionI{
    header?:string,
    iconPointer?: string,
    listItems?: Array<string>
}

export const ServiceOption:React.FC<ServiceOptionI> = (ServiceOptionI) => {
  return (
    <ListHeader>
        <HeaderLevel3 color={colors?.darkColor} className='bottom_margin'>{ServiceOptionI?.header}</HeaderLevel3>
        <ListContainer>
        {
            ServiceOptionI?.listItems && ServiceOptionI?.listItems.map((item:string, index:number) => <ListData key={index}>{item}</ListData>)
        }
        </ListContainer>
           
    </ListHeader>
  )
}
