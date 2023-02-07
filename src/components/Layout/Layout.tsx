import React from 'react';
import { LayoutContainer} from './style';
import { LayoutContainerProps } from '../../interface';

export const Layout: React.FC<LayoutContainerProps> = ({children})  => {
  return (
    <LayoutContainer >
        {children}
    </LayoutContainer>
   
  )
}
