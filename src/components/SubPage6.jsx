import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const TailText = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #888;
`;

const SubPage6 = () => {
  return (
    <Container>
      <Heading>Dental Care for Expectant Mothers</Heading>

      <InfoContainer>
        <InfoText>
          - Hormone changes and increased blood flow during pregnancy can increase the risk of dental problems.
        </InfoText>
        <InfoText>
          - Gum disease is a common concern, but regular dental check-ups can help identify and treat it early.
        </InfoText>
        <InfoText>
          - Routine dental treatments are generally safe during pregnancy, but dental X-rays are usually avoided unless necessary.
        </InfoText>
        <InfoText>
          - The Department of Health advises against amalgam (silver) fillings during pregnancy; alternative options can be discussed with your dentist.
        </InfoText>
        <InfoText>
          - Pregnancy does not cause tooth loss; maintaining good oral hygiene and regular dental visits can prevent dramatic dental problems.
        </InfoText>
      </InfoContainer>

      <TailText>
        Fun Fact: Your baby's sense of taste begins to develop in the womb, and their mouth, tongue, and taste buds start forming as early as nine weeks into pregnancy.
      </TailText>

      <InfoContainer>
        <InfoText>
          - Smoking and drinking during pregnancy can lead to underweight babies, increasing the risk of dental problems.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoText>
          - After vomiting due to morning sickness, wait for about an hour before brushing your teeth to avoid weakening tooth enamel from stomach acid.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoText>
          - NHS dental care is free for pregnant women or those who have had a baby in the last 12 months. Obtain a Maternity Exemption Certificate from your GP to claim this benefit.
        </InfoText>
      </InfoContainer>

      <TailText>
        Fun Fact: Your baby's teeth begin to develop as early as the sixth week of prenatal development, and adult teeth start forming around the 20th week.
      </TailText>
    </Container>
  );
};

export default SubPage6;
