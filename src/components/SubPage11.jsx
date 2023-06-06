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

const SubPage11 = () => {
  return (
    <Container>
      <Heading>Common Problems in Children's Dental Health</Heading>

      <InfoContainer>
        <InfoText>
          During your child's development, they may face various dental health challenges. Understanding and addressing these common issues is crucial for maintaining their oral health. Here are some of the most prevalent problems in children's dental health and tips on prevention.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Tongue-Thrusting:</Heading>
        <InfoText>
          Tongue-thrusting is the habit of pressing the top of the tongue against the lips during swallowing. It can lead to misalignment of the front teeth, overbite, and speech development issues. Consult a speech pathologist for a treatment plan if you suspect your child is tongue-thrusting.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Thumb-Sucking:</Heading>
        <InfoText>
          Thumb-sucking is a normal behavior in infants, providing comfort and support. However, prolonged thumb-sucking can cause dental problems. Encourage your child to stop thumb-sucking to prevent dental issues.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Baby Bottle Tooth Decay:</Heading>
        <InfoText>
          Allowing prolonged bottle or sippy cup use exposes teeth to continuous acid attacks. Acid from the drink combines with oral bacteria, eroding tooth enamel and increasing the risk of decay. To prevent tooth decay:
          <ul>
            <li>Avoid giving sugary drinks in bottles; offer water instead.</li>
            <li>Avoid dipping pacifiers in sugary substances.</li>
            <li>Don't let your baby sleep with a bottle of sugary liquid; provide water instead.</li>
            <li>Limit continuous nursing during sleep, as breast milk can also cause decay.</li>
            <li>Avoid adding sugar to your child's food.</li>
            <li>Clean your child's mouth and gums with a wet cloth after feeding.</li>
            <li>Introduce cup drinking at an early age.</li>
          </ul>
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Early Tooth Loss:</Heading>
        <InfoText>
          Premature loss of baby teeth can occur due to decay, injury, or lack of jaw space. If the adult tooth is not ready to emerge, adjacent teeth may shift, causing the adult tooth to grow at an angle. Dentists may recommend a "space saver" appliance to prevent neighboring teeth from shifting.
        </InfoText>
      </InfoContainer>

      <InfoText>
        Remember, regular dental check-ups and early intervention are essential for maintaining your child's oral health and addressing these common problems.
      </InfoText>
    </Container>
  );
};

export default SubPage11;
