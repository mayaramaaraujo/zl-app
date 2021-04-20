import { NavbarContainer, NavBarListItem, NavBarLogo } from '../../style/style';
import Logo from '../../assets/logo_estrela_grande.png';
import { useHistory } from 'react-router-dom';
import { goToPage } from '../../utils/goToPages';

function Navbar() {
  const history = useHistory();

  return (
    <NavbarContainer>
      <NavBarLogo src={Logo} alt="Logo da dupla Zé e Leandro." />      
      <NavBarListItem onClick={() => goToPage(history, "/")}>home</NavBarListItem>
      <NavBarListItem onClick={() => goToPage(history, "/photos")}>fotos</NavBarListItem>
      <NavBarListItem onClick={() => goToPage(history, "/videos")}>vídeos</NavBarListItem>
      <NavBarListItem onClick={() => goToPage(history, "/diary")}>agenda</NavBarListItem>
      <NavBarListItem onClick={() => goToPage(history, "/biography")}>biografia</NavBarListItem>
      <NavBarListItem onClick={() => goToPage(history, "/contact")}>contato</NavBarListItem>
    </NavbarContainer>
  )
}

export default Navbar;