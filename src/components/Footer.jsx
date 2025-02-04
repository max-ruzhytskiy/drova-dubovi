import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Всі питання за телефоном</h2>
      <FooterText>
        Телефон:{" "}
        <a
          href="tel:+3800678747499"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          +380 67 874-74-99
        </a>
      </FooterText>
      <FooterText>Графік роботи: 7:00 - 21:00</FooterText>
      <FooterText>© 2024 DPOBA-DУБОВІ. Усі права захищені.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
