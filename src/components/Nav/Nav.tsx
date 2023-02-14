import React, { useEffect, useState } from 'react'
import { LogoContainer, LogoImg, MenuContainer, MenuItems, NavContainer, NavContent } from './styles';
import logo from '../../images/digital_logo.png'

export const Nav:React.FC = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     // find current scroll position
//     const currentScrollPos = window.pageYOffset;

//     // set state based on location info 
//     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 100);

//     // set state to new scroll position
//     setPrevScrollPos(currentScrollPos);
//   };

    useEffect(() => {
        const handleScroll = () => {
            // find current scroll position
            const currentScrollPos = window.pageYOffset;
        
            // set state based on location info 
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 100);
        
            // set state to new scroll position
            setPrevScrollPos(currentScrollPos);
          };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible]);

  return (
    <NavContainer style={{top: visible ? '40px' : '-60px' }}>
        <NavContent>
            <LogoContainer>
                <LogoImg src={logo}/>
            </LogoContainer>
            <MenuContainer>
                <MenuItems>Services</MenuItems>
                <MenuItems>Work</MenuItems>
                <MenuItems>About</MenuItems>
                <MenuItems>Blog</MenuItems>
                <MenuItems>Contact</MenuItems>
            </MenuContainer>
        </NavContent>
    </NavContainer>
  )
}
