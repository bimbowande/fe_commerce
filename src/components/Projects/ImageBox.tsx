import React from 'react'
import { GallerycardItem } from './styles'

export interface ImageBoxI{
    lgImage?: string,
    smImage?: string,
    flexWidth?:string
}

export const ImageBox: React.FC<ImageBoxI> = (ImageBoxI) => {
  return (
    <GallerycardItem flexWidth={ImageBoxI?.flexWidth && ImageBoxI?.flexWidth} >
        <source media="(min-width:650px)" srcSet={ImageBoxI?.lgImage }/>
        <source media="(min-width:465px)" srcSet={ImageBoxI?.smImage }/>
        <img src={ImageBoxI?.lgImage} alt="Flowers" />
    </GallerycardItem>
  )
}
