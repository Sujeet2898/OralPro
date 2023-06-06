import React from 'react';
import styled from 'styled-components';
import { FaCamera, FaHeartbeat, FaLightbulb, FaClipboardCheck, FaWifi, FaBatteryFull, FaSearch, FaCalendar } from 'react-icons/fa';
import { Button } from "../styles/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: white;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Tagline = styled.p`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subheading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FeatureList = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #666;
`;

const FeatureIcon = styled.span`
  margin-right: 10px;
  color: #999;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

const HomePage = () => {
  return (
    <Container>
      <ButtonsContainer>
        <Button>
          <FaSearch />&nbsp;&nbsp;
          Find a dentist
        </Button>&nbsp;&nbsp;
        <Button>
          <FaCalendar />&nbsp;&nbsp;
          Book online
        </Button>
      </ButtonsContainer>
      <Heading>Welcome to OralPro - Revolutionize Dental Care for Children</Heading>
      <Tagline>Transforming Smiles, One Brush at a Time</Tagline>
      <Subheading>Introducing OralScope - Your Ultimate Dental Solution</Subheading>
      <FeatureList>
        <FeatureItem>
          <FeatureIcon><FaCamera /></FeatureIcon>
          High-resolution imaging technology for accurate dental assessments
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaHeartbeat /></FeatureIcon>
          Real-time monitoring of a child's oral health
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaLightbulb /></FeatureIcon>
          Personalized prompts and suggestions for better oral hygiene habits
        </FeatureItem>
        <FeatureItem>
        <FeatureIcon><FaClipboardCheck /></FeatureIcon>
      Seamless integration with dental practices
    </FeatureItem>
    <FeatureItem>
      <FeatureIcon><FaWifi /></FeatureIcon>
      Wireless, user-friendly design for convenience
    </FeatureItem>
    <FeatureItem>
      <FeatureIcon><FaBatteryFull /></FeatureIcon>
      Quick charging and long working time for uninterrupted examinations
    </FeatureItem>
  </FeatureList>
</Container>
);
};

export default HomePage;
