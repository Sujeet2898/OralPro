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

const SubPage8 = () => {
  return (
    <Container>
      <Heading>Effective Toothbrushing Tips</Heading>

      <InfoContainer>
        <InfoText>
          - Fluoride is a natural mineral that strengthens tooth enamel and reduces the risk of tooth decay.
        </InfoText>
        <InfoText>
          - Brushing every surface of the teeth using a soft, small-headed toothbrush is important.
        </InfoText>
        <InfoText>
          - Encourage children to spit out excess toothpaste without rinsing to maintain the fluoride's preventive effect.
        </InfoText>
        <InfoText>
          - Brush your child's teeth for at least two minutes twice a day, especially before bedtime.
        </InfoText>
        <InfoText>
          - Avoid brushing immediately after meals as the acid in food and drinks can soften tooth enamel.
        </InfoText>
        <InfoText>
          - Find a comfortable position to brush your child's teeth, such as standing or sitting behind them.
        </InfoText>
        <InfoText>
          - Lead by example and brush your teeth in front of your child to encourage them to do the same.
        </InfoText>
        <InfoText>
          - Make brushing fun with colorful brushes, ones that change color, or feature their favorite characters.
        </InfoText>
        <InfoText>
          - Provide positive reinforcement and praise your child for allowing you to brush their teeth.
        </InfoText>
        <InfoText>
          - Use timers, timed toothbrushes, or toothbrushing charts to ensure your child brushes for the recommended two minutes.
        </InfoText>
      </InfoContainer>

      <TailText>
        Fun Fact: Fluoride reduces the amount of acid bacteria can produce, reversing the damage caused by acid attacks. The addition of fluoride to water has been proven to reduce tooth decay by 40-60%.
      </TailText>
    </Container>
  );
};

export default SubPage8;
