import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #e4eb17, #243b55);
  color: white;
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>All rights reserved.</h2>
    </FooterWrapper>
  );
};

export default Footer;
