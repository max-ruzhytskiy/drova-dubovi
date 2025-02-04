import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 1000;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: #564405ea;
  color: #fff;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const MenuLink = styled.a`
  margin: 1rem 0;
  color: #e3cdad;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #e3cdad;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Menu = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <MenuContainer $isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <MenuLink href="#main" onClick={onClose}>
          Головна
        </MenuLink>
        <MenuLink href="#smart-heat" onClick={onClose}>
          Розумне тепло
        </MenuLink>
        <MenuLink href="#gallery" onClick={onClose}>
          Галерея
        </MenuLink>
        <MenuLink href="tel:+3800678747499" onClick={onClose}>
          Зателефонувати нам
        </MenuLink>
      </MenuContainer>
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Menu;
