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

const ImportantContainer = styled.div`
  margin-bottom: 30px;
`;

const ImportantHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ImportantText = styled.p`
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

const SubPage2 = () => {
  return (
    <Container>
      <Heading>Nurturing Healthy Smiles in Babies: 6 Months to 1 Year</Heading>

      <InfoContainer>
        <InfoHeading>Info - Key points:</InfoHeading>
        <InfoText>
          - Schedule a dental check-up when your baby's first tooth appears.
          <br />
          - Begin brushing their teeth with a soft toothbrush once their teeth start to emerge.
          <br />
          - Use a fluoride toothpaste specifically designed for young children.
          <br />
          - Try to avoid using a dummy (pacifier) for soothing.
          <br />
          - Start cleaning your baby's gums with a wet cloth after feedings before their teeth appear.
        </InfoText>
      </InfoContainer>

      <ImportantContainer>
        <ImportantHeading>Important:</ImportantHeading>
        <ImportantText>
          Consult a doctor if your child has a fever, as it is not a symptom of teething.
        </ImportantText>
      </ImportantContainer>

      <TailContainer>
        <TailHeading>Why are my child's gums red?</TailHeading>
        <TailText>
          Teething usually starts around six months, causing red, sore, and painful gums.
          <br />
          Signs of teething include increased chewing, swollen gums, flushed cheeks, increased drooling, and irritability.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Tips to ease teething discomfort:</TailHeading>
        <TailText>
          - Spend extra time with your child, engaging them in games and activities.
          <br />
          - Keep the area around their mouth clean and dry to prevent a sore chin.
          <br />
          - Offer chilled teething rings to soothe their irritated gums.
          <br />
          - Consider using sugar-free teething gel or pain relief medicine, like Calpol or Nurofen for Children.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Will a dummy affect my baby's teeth?</TailHeading>
        <TailText>
          Using dummies can cause teeth misalignment due to pressure on the mouth.
          <br />
          If a dummy is necessary, encourage them to be dummy-free as early as possible and avoid dipping it in sugary substances, especially before bedtime.
          </TailText>
      </TailContainer>
      <TailContainer>
    <TailHeading>Did you know?</TailHeading>
    <TailText>
      Tooth development is hereditary, so early teeth eruption in parents may indicate the same for their baby.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>What's the best way to brush my baby's teeth?</TailHeading>
    <TailText>
      - Position your child facing away from you for easy brushing.
      <br />
      - Use gentle circular motions, focusing on the gum-tooth junction.
      <br />
      - Be extra gentle when their gums are sore during teething.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>How long should I spend brushing?</TailHeading>
    <TailText>
      Allocate around two minutes to gently brush your baby's teeth.
      <br />
      Brush their teeth in the morning and before bedtime, after their last drink.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Top Tip:</TailHeading>
    <TailText>
      Brush your own teeth in front of your child to encourage imitation and establish a healthy brushing habit.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Can I use regular toothpaste on my baby's teeth?</TailHeading>
    <TailText>
      Regular toothpaste is too strong for babies.
      <br />
      Choose toothpaste specifically formulated for young children, containing fluoride (1,000-1,350ppm).
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>When should I bring my baby to their first dental appointment?</TailHeading>
    <TailText>
      Bring your baby along to your own dental appointments to familiarize them with the dental environment.
      <br />
      Schedule their first dental check-up when their first teeth begin to emerge.
    </TailText>
  </TailContainer>
</Container>
);
};

export default SubPage2;