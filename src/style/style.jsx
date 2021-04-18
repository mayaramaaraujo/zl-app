import styled from 'styled-components';

// COLORS:
const orangeColor = "#de7904";
const blackColor = "#010101";
const whiteColor = " #f1f1f1";

// APP CONTAINER:
export const AppContainer = styled.div `
  width: 100%;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`
// NAVBAR COMPONENT
export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 10px 0px;
  background-color: ${blackColor};
`

export const NavBarListItem = styled.a `
  text-transform: uppercase;
  text-decoration: none;
  color: ${whiteColor};
 
  :active ::after {
    text-decoration: none;
  }

  :hover {
    color: ${orangeColor};
    border-bottom: 2px solid ${orangeColor};
  }
`
export const NavBarLogo = styled.img `
  width: 150px;
  cursor: pointer;
`