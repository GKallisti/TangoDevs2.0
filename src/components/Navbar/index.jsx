import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#Inicio">Inicio</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#projects'>Proyectos</NavLink>
          <NavLink href='#Aboutus'> Nosotros</NavLink>
        </NavItems>
        
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#Inicio" onClick={() => {
              setIsOpen(!isOpen)
            }}>Inicio</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Proyectos</MobileLink>
            <MobileLink href='#Aboutus' onClick={() => {
              setIsOpen(!isOpen)
            }}> Nosotros </MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar