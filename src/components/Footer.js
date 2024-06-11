import React from 'react';
import styled from 'styled-components';

// Facebook icon SVG
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M17 2h-2a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
  </svg>
);

// Instagram icon SVG
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 0 1-4 4M12 6V4" />
  </svg>
);

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`;

const FooterTitle = styled.h1`
  margin: 0;
  font-size: 20px;
`;

const TechnologiesContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const TechnologiesTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 16px;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 1rem;
`;

const Technology = styled.li`
  margin-bottom: 2px;
  color: #14b8a6;
`;

const SocialMediaContainer = styled.div``;

const SocialMediaTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 14px;
  margin-bottom: 4px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaIcon = styled.a`
  color: #ef4444;
  text-decoration: none;
  font-size: 24px;
  margin-right: 10px;
`;

const CopyRight = styled.p`
  margin: 0;
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #dc2626;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src="../favicon.ico" alt="App Logo" />
        <FooterTitle>Addis Song</FooterTitle>
      </FooterContent>
      <TechnologiesContainer>
        <TechnologiesTitle>Technologies Used</TechnologiesTitle>
        <TechnologiesList>
          <Technology>React</Technology>
          <Technology>Redux</Technology>
          <Technology>@Emotion</Technology>
          {/* Add more technologies as needed */}
        </TechnologiesList>
      </TechnologiesContainer>
      <SocialMediaContainer>
        <SocialMediaTitle>Connect with Us</SocialMediaTitle>
        <SocialMediaIcons>
          <SocialMediaIcon href="#" aria-label="Facebook">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="#" aria-label="Instagram">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </SocialMediaContainer>
      <CopyRight>&copy; 2024 Addis Song. All rights reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
