import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Info = styled.p`
  margin-bottom: 10px;
`;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tip = styled.p`
  margin-bottom: 5px;
`;

const SubPage1 = () => {
  return (
    <Container>
      <ContentContainer>
        <Heading>Making the First Dental Visit a Positive Experience for Your Child</Heading>
        <Info>
          At OralPro, we adore kids and believe in the importance of seeing them as frequently as adults. From the moment your child's first tooth appears, you can bring them to the dentist, not only for a thorough examination but also to familiarize them with the dental environment, helping them overcome any fear of dentists as they grow up.
        </Info>
        <TipsContainer>
          <Tip>Schedule a free check-up once their teeth emerge and begin brushing them with a gentle toothbrush.</Tip>
          <Tip>Lead by example and brush your teeth in front of your child, as they love imitating their parents.</Tip>
          <Tip>If your child or you are nervous, inform our team in advance for extra special care.</Tip>
          <Tip>Use toothpaste specifically formulated for young children containing fluoride.</Tip>
          <Tip>To foster a positive association, avoid mentioning pain or discomfort during dental visits.</Tip>
          <Tip>If you're personally anxious about the dentist, consider having another family member take your child to their appointment to prevent them from developing similar fears.</Tip>
        </TipsContainer>
      </ContentContainer>
    </Container>
  );
};

export default SubPage1;
