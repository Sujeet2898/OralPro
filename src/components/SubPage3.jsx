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
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-bottom: 30px;
`;

const InfoHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const TailContainer = styled.div`
  margin-bottom: 30px;
`;

const TailHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TailText = styled.p`
  font-size: 16px;
`;

const SubPage3 = () => {
  return (
    <Container>
      <Heading>Exploring the Dental Milestones of Toddlers: 1 to 3 Years</Heading>

      <InfoContainer>
        <InfoHeading>Info - Key points:</InfoHeading>
        <InfoText>
          - Stains on your child's teeth indicate inadequate brushing.
          <br />
          - Don't worry if your child's teeth take longer to emerge than average.
          <br />
          - Schedule check-ups for your toddler every six months.
          <br />
          - Assist your toddler in brushing their teeth until around seven or eight years old.
          <br />
          - Fluoride varnishes are offered for free to children over three years old, recommended twice a year.
        </InfoText>
      </InfoContainer>

      <TailContainer>
        <TailHeading>How regularly should my toddler's teeth be checked?</TailHeading>
        <TailText>
          Like adults, toddlers should have dental check-ups every six months, or more frequently if necessary, to address any ongoing issues or help them acclimate to the dentist.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>At what age can my toddler brush their own teeth?</TailHeading>
        <TailText>
          Your assistance will be needed until your child is around seven or eight years old, but their toddler years present an opportunity to let them try with supervision.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Did you know?</TailHeading>
        <TailText>
          At our clinic, children over three years old receive free fluoride varnishes twice a year to strengthen enamel and protect against decay.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>How can I make my toddler less scared of the dentist?</TailHeading>
        <TailText>
          - Early visits and rehearsal can help normalize dental appointments.
          <br />
          - Pretend play as a dentist and read books about dental visits.
          <br />
          - Avoid bribing your child, as it can increase anxiety.
          <br />
          - Allow them to bring a favorite toy for comfort.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Can sippy cups or bottles harm my child's teeth?</TailHeading>
        <TailText>
          Yes, sippy cups and bottles, especially when used with sugary drinks, can lead to tooth decay.
          <br />
          - Avoid giving sweetened drinks in a bottle and remove the bottle after drinking.
          </TailText>
    </TailContainer>  
          <TailContainer>
            <TailHeading>Top Tip:</TailHeading>
            <TailText>
            Limiting fruit juice to meal times greatly reduces sugar exposure and protects your toddler's teeth.
            </TailText>
         </TailContainer>

  <TailContainer>
    <TailHeading>What should I do if my child's teeth are slow to emerge?</TailHeading>
    <TailText>
      Every child's development is unique, and teeth will come through at their own pace.
      <br />
      If concerned, schedule a check-up to address any worries or questions.
    </TailText>
  </TailContainer>
  
</Container>
);
};

export default SubPage3;
