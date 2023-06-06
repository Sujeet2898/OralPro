import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const PricePage = () => {
  return (
    <Container>
      <Heading>Join the OralPro Revolution - Pricing and Purchase</Heading>
      <Subheading>Embrace Better Oral Hygiene with OralScope</Subheading>
      <Features>
        <FeatureCard>
          <FeatureTitle>Transform dental care into a fun and engaging experience for children</FeatureTitle>
          <FeatureDescription>Our innovative approach makes oral care enjoyable, helping children develop healthy habits.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Prevent tooth decay and promote long-term dental health</FeatureTitle>
          <FeatureDescription>Our products are designed to effectively prevent tooth decay and maintain optimal dental health.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Make dental visits stress-free and enjoyable</FeatureTitle>
          <FeatureDescription>We provide a relaxing and child-friendly environment to ensure stress-free dental visits.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Create a brighter, cavity-free future for children worldwide</FeatureTitle>
          <FeatureDescription>By promoting good oral hygiene, we aim to create a world without dental cavities in children.</FeatureDescription>
        </FeatureCard>
      </Features>
    </Container>
  );
};

export default PricePage;
