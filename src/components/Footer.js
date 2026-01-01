import React from 'react';
import styled from 'styled-components';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17 2h-2a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.63-2.32A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  position: relative;
  border-top: 2px solid #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const FooterTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 15px;
  font-size: 16px;
  text-transform: uppercase;
  color: #999;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Technology = styled.span`
  color: #14b8a6;
  font-size: 14px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #ef4444;
  transition: transform 0.2s, color 0.2s;
  &:hover {
    color: #f87171;
    transform: translateY(-3px);
  }
`;

const CreditContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #333;
`;

const DeveloperLink = styled.a`
  color: #14b8a6;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LogoWrapper>
          <Logo src="/favicon.ico" alt="Addis Song Logo" />
          <FooterTitle>Addis Song</FooterTitle>
        </LogoWrapper>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Discover and manage your favorite melodies.
        </p>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Stack</SectionTitle>
        <TechList>
          <Technology>React & Redux Saga</Technology>
          <Technology>Styled Components</Technology>
          <Technology>Emotion & Polished</Technology>
        </TechList>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Connect</SectionTitle>
        <SocialIcons>
          <SocialLink href="#" aria-label="Facebook"><FacebookIcon /></SocialLink>
          <SocialLink href="#" aria-label="Instagram"><InstagramIcon /></SocialLink>
        </SocialIcons>
      </FooterSection>

      <CreditContainer>
        <p>
          Developed by{' '}
          <DeveloperLink href="https://gebrie.netlify.app" target="_blank" rel="noopener noreferrer">
            Gebre
          </DeveloperLink>
        </p>
        <CopyrightText>&copy; {new Date().getFullYear()} Addis Song. All rights reserved.</CopyrightText>
      </CreditContainer>
    </FooterContainer>
  );
};

export default Footer;
