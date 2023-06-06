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

const SubPage7 = () => {
  return (
    <Container>
      <Heading>Understanding Fluoride</Heading>

      <InfoContainer>
        <InfoText>
          - Fluoride is a natural mineral that strengthens tooth enamel and helps prevent tooth decay.
        </InfoText>
        <InfoText>
          - It reduces the amount of acid bacteria can produce and can even reverse damage caused by acid attacks.
        </InfoText>
        <InfoText>
          - Fluoride added to water has been shown to reduce tooth decay by 40-60%.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoText>
          - As soon as they get their first tooth, children should use toothpaste with a fluoride level of at least 1000ppm (parts per million).
        </InfoText>
        <InfoText>
          - After three years of age, toothpaste with a fluoride level of 1350ppm to 1500ppm is recommended.
        </InfoText>
        <InfoText>
          - Supervise their brushing until they are around seven years old, as children tend to swallow toothpaste.
        </InfoText>
      </InfoContainer>

      <TailText>
        Fun Fact: Research into fluoride dates back to 1901 when a communal water source in Colorado Springs was found to affect the color of people's teeth.
      </TailText>

      <InfoContainer>
        <InfoText>
          - Fluoride varnish is a treatment where a dentist or nurse applies a concentrated fluoride varnish onto the surface of a child's tooth.
        </InfoText>
        <InfoText>
          - It strengthens tooth enamel and helps protect teeth from decay.
        </InfoText>
        <InfoText>
          - Children aged three and older should receive fluoride varnish application at least twice a year, or more frequently if necessary.
        </InfoText>
        <InfoText>
          - At mydentist, all children over three years old can receive free fluoride varnishes.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoText>
          - Numerous studies have shown fluoride to be beneficial for dental health, reducing tooth decay without causing harmful side effects to general health.
        </InfoText>
        <InfoText>
          - Swallowing excessive fluoride over long periods can cause white spots on teeth, but the risk is very low with fluoride varnish application.
        </InfoText>
      </InfoContainer>
    </Container>
  );
};

export default SubPage7;
