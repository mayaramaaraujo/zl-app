import { NavbarContainer, NavBarListItem, NavBarLogo } from '../../style/style';
import Logo from '../../assets/logo_estrela_grande.png';

function Navbar() {
  return (
    <NavbarContainer>
        <NavBarLogo src={Logo} alt="Logo da dupla Zé e Leandro."/>
        <NavBarListItem href="/">home</NavBarListItem>
        <NavBarListItem href="/photos">fotos</NavBarListItem>
        <NavBarListItem href="/videos">vídeos</NavBarListItem>
        <NavBarListItem href="/diary">agenda</NavBarListItem>
        <NavBarListItem href="/biography">biografia</NavBarListItem>
        <NavBarListItem href="/contact">contato</NavBarListItem>
    </NavbarContainer>
  )
}

export default Navbar;