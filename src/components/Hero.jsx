import styled from "styled-components";
import heroImage from "../assets/hero-image.jpeg";
import { IoLocationSharp } from "react-icons/io5";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Паралакс-ефект */
  padding-bottom: 5rem; /* Додаємо відступ знизу */

  @media (max-width: 768px) {
    background-attachment: scroll; /* Вимкнення паралакс-ефекту на мобільних пристроях */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Напівпрозоре затемнення */
`;

const HeroContent = styled.div`
  position: relative;
  color: #543404;
  text-shadow: 2px 2px 4px rgba(205, 148, 5, 0.595);
  text-align: center;
  z-index: 1;
  max-width: 80%;
  margin-top: 18%; /* Додаємо відступ зверху для великих екранів */

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    margin-top: 1rem;
    color: white;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 13%;
    margin-top: 0; /* Вимикаємо відступ зверху для мобільних пристроїв */

    h1,
    h2 {
      font-size: 2.5rem; /* Зменшення розміру тексту на мобільних пристроях */
    }

    h1 {
      transform: translate(-10px, 10px);
    }

    h2 {
      transform: translate(30px, -15px);
    }
    span {
      color: white;
    }

    h3 {
      font-size: 1.4rem;
      color: #e2bc84;
      text-shadow: 2px 2px 4px rgba(229, 103, 45, 0.752);
    }

    h4 {
      padding-bottom: 1rem;
      font-size: 1.4rem;
      margin-top: 8rem;
      color: #e2bc84;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: -1rem;
    }
  }

  @media (max-width: 375px) {
    h1,
    h2 {
      font-size: 2rem; /* Додаткове зменшення розміру тексту для дуже малих екранів */
    }
    h2 {
      transform: translate(0px, 0px);
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const PhoneLink = styled.a`
  font-size: 1.8rem; /* Розмір шрифту */
  font-weight: bold; /* Жирний шрифт */
  color: #e2bc84; /* Колір тексту */
  text-decoration: underline; /* Прибрати підкреслення */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  &:active {
    color: #f0c741;
    transform: scale(1.1); /* Легке збільшення при натисканні */
  }

  @media (max-width: 426px) {
    font-size: 1.9rem;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const StyledList = styled.ul`
  color: #e2bc84;
  list-style-type: none; /* Прибираємо стандартний маркер */
  padding: 0;
  text-align: left; /* Вирівнюємо текст списку до лівого краю */
  margin: 0 auto; /* Центруємо сам список */

  li {
    position: relative;
    padding-left: 30px; /* Відступ для тире */
    margin-bottom: 8px; /* Проміжок між пунктами */

    &::before {
      content: "-"; /* Додаємо тире перед кожним пунктом */
      position: absolute;
      left: 10px; /* Вирівнюємо тире по лівому краю */
      color: #e2bc84; /* Колір тире */
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="main">
      <Overlay />
      <HeroContent>
        <h1>Дрова</h1>
        <h2>Дубові</h2>
        <h2>
          <span>
            <IoLocationSharp />
            Бердичів
          </span>
        </h2>
        <h3>За найкращими цінами на ринку</h3>
        <p>Натисніть на номер, щоб зателефонувати</p>
        <PhoneLink href="tel:+3800678747499">+38 (067) 874-74-99</PhoneLink>
        <h4>Чому варто обрати саме нас?</h4>
        <StyledList>
          <li> Біьше 10 років продуктивної роботи на ринку</li>
          <li>Гнучкі умови оплати</li>
          <li>Індивідуальний підхід</li>
          <li>Швидка доставка</li>
        </StyledList>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
