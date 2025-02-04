import styled from "styled-components";
import logo from "../assets/logo1.png";
import Menu from "./Menu";
import { useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #56440553;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 50px; /* Ширина логотипу */
  margin-top: 10px;
  margin-bottom: -10px;
  height: auto; /* Автоматичне масштабування */
  cursor: pointer; /* Зроби курсор у вигляді руки для клікабельності */

  @media (min-width: 768px) {
    width: 30px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #e3cdad;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #e3cdad;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <a href="/">
          <Logo src={logo} alt="Логотип" />
        </a>
        <Nav>
          <NavLink href="#smart-heat">Розумне тепло</NavLink>
          <NavLink href="#gallery">Галерея</NavLink>
          <NavLink href="tel:+380123456789">Зателефонувати нам</NavLink>
        </Nav>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </HeaderContainer>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
