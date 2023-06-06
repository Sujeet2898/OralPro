import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-bottom: 30px;
`;

const InfoHeading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const TailText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const SubPage5 = () => {
  return (
    <Container>
      <Heading>Growing Independence: Dental Care for Big Kids: 5 to 8 Years</Heading>

      <InfoContainer>
        <InfoHeading>Adult teeth typically appear around six years old.</InfoHeading>
        <InfoText>
          Allowing your child to practice brushing from an early age encourages independence.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoHeading>If your child knocks out an adult tooth, store it in milk until it can be reattached.</InfoHeading>
        <InfoText>Avoid removing wobbly teeth from your child's mouth.</InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoHeading>How can I encourage my child to brush their own teeth?</InfoHeading>
        <InfoText>
          Start teaching your child to brush on their own from a young age.
          <br />
          Brush your teeth alongside them to ensure they brush for the recommended duration and show them the correct technique.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoHeading>What should I do if my child knocks out a tooth?</InfoHeading>
        <InfoText>
          Losing a baby tooth is not an emergency as a permanent tooth will grow in its place.
          <br />
          Make an appointment with a dentist as the permanent tooth may take some time to emerge, and a space saver may be necessary.
          <br />
          If it is a permanent tooth, make an emergency appointment with a dentist for reattachment.
          <br />
          Rinse the tooth with milk or salt water, avoid scrubbing or brushing it, and place it back in the socket or store it in milk or saliva if reinsertion is not possible.
          <br />
          Handle the tooth by the white top to keep the root clean and prevent infection.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoHeading>When will my child's adult teeth come through?</InfoHeading>
        <InfoText>
          The timing of adult teeth eruption varies for each child.
          <br />
          Most children have their first adult teeth come through around six years old.
          <br />
          If you have concerns, consult a dentist for guidance.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <InfoHeading>Is it safe to pull out a wobbly tooth?</InfoHeading>
        <InfoText>
          Never try to remove your child's tooth; let them do it themselves.
          <br />
          Your child knows how attached the tooth is and can determine the pain level during removal.
          <br />
          Advise your child to wiggle the tooth with their tongue until it naturally comes loose.
<br />
Minimal bleeding is expected.
</InfoText>
</InfoContainer>

<TailText>
  Did you know? Sometimes, a child may accidentally swallow a tooth that unexpectedly comes out. If this happens, there's no need to panic; it may just disappoint the tooth fairy.
</TailText>
<InfoContainer>
  <InfoHeading>How can I ensure my child brushes regularly?</InfoHeading>
  <InfoText>
    Check if your child's toothbrush is wet after they've finished in the bathroom.
    <br />
    Letting your child know that you're aware of their brushing habits can motivate them to stick to their routine.
  </InfoText>
</InfoContainer>
<InfoContainer>
  <InfoHeading>Should my child change their brushing technique for their new adult teeth?</InfoHeading>
  <InfoText>
    Your child should already be familiar with proper brushing technique.
    <br />
    They should continue brushing as they have been, being gentle around the areas where adult teeth are coming through.
  </InfoText>
</InfoContainer>
</Container>
);
};
export default SubPage5;
