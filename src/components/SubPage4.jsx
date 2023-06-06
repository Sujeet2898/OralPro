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

const SubPage4 = () => {
  return (
    <Container>
      <Heading>Nurturing Dental Habits in Preschoolers: 3 to 5 Years</Heading>

      <InfoContainer>
        <InfoHeading>Info - Key points:</InfoHeading>
        <InfoText>
          - Red or swollen gums can be signs of gum disease.
          <br />
          - Most children will outgrow teeth grinding.
          <br />
          - Discourage thumb sucking to prevent teeth misalignment.
          <br />
          - Making brushing fun with exciting toothbrushes or reward charts can motivate children.
          <br />
          - Sticky sweets are more harmful than sweet drinks, as they can stick between teeth.
        </InfoText>
      </InfoContainer>

      <TailContainer>
        <TailHeading>What can I do if my child refuses to brush?</TailHeading>
        <TailText>
          Make brushing fun by using a toothbrush with their favorite cartoon character or switching to an electric toothbrush.
          <br />
          Use a timer, timed toothbrush, or tooth brushing chart with stickers as rewards for brushing for the full two minutes.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Top Tip:</TailHeading>
        <TailText>
          Sticky sweets pose a higher risk to your child's oral health than sweet drinks, as they can easily stick between their teeth and cause damage over time.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>What should I do if my child has a toothache?</TailHeading>
        <TailText>
          Check for food particles trapped between teeth and use dental floss to remove them.
          <br />
          Rinse their mouth with warm water and salt to clean it.
          <br />
          Apply an ice pack to any swelling on the face.
          <br />
          Over-the-counter painkillers can be used, following the instructions carefully and avoiding products containing Aspirin for children under 16 years old.
          <br />
          If the pain lasts longer than two hours, take your child to the dentist or doctor for a professional evaluation.
        </TailText>
      </TailContainer>

      <TailContainer>
        <TailHeading>Why does my child have a cavity?</TailHeading>
        <TailText>
          Children have 50% less enamel than adults, making them more susceptible to enamel damage and the formation of cavities.
          <br />
          Protect your child's teeth by maintaining a balanced diet, establishing a good tooth brushing routine, regular dental visits, and avoiding prolonged bottle or sippy cup use, especially at night.
          </TailText>
      </TailContainer>
      <TailContainer>
    <TailHeading>Did you know?</TailHeading>
    <TailText>
      The ages between three and five are an ideal time to establish healthy eating behaviors that can have a lasting impact on your child's dental health.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Why are my child's gums red and swollen?</TailHeading>
    <TailText>
      Red and swollen gums can indicate teething or gum disease.
      <br />
      If your child is past the teething stage, red and swollen gums may be a sign of gum disease, caused by plaque build-up.
      <br />
      Schedule a dental visit as soon as possible if you suspect gum disease.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Can medicine harm my child's teeth?</TailHeading>
    <TailText>
      Some medicines contain high amounts of sugar, which can harm teeth.
      <br />
      Opt for sugar-free versions whenever possible.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Why does my child grind their teeth?</TailHeading>
    <TailText>
      Teeth grinding is common in preschoolers and usually does not require treatment.
      <br />
      If the behavior persists and causes symptoms such as headaches, tooth or jaw pain, or tooth wear, consult a dentist for further evaluation.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Can thumb sucking harm my child's teeth?</TailHeading>
    <TailText>
      Thumb sucking can affect teeth alignment and should be discouraged.
      <br />
      Communicate with your child about the habit and explain why they should try to stop.
      <br />
      Avoid forcefully removing their thumb from their mouth and instead ask if they're aware they're sucking their thumb, reminding them of the reasons to stop.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>When can my child start using mouthwash?</TailHeading>
    <TailText>
      Children under six years old should not use mouthwash, as they are more likely to swallow it.
      <br />
      Once your child is old enough, supervise their use of mouthwash, as it helps remove plaque and promotes oral hygiene.
    </TailText>
  </TailContainer>

  <TailContainer>
    <TailHeading>Does my child need to floss?</TailHeading>
    <TailText>
      Yes, flossing is important for removing food and plaque between teeth.
      <br />
      Introduce flossing when the spaces between your child's teeth have narrowed, typically around four years old.
      <br />
      Use soft and flexible floss to avoid hurting their gums.
      <br />
      Encourage your child to floss every day, or at least twice a week.
    </TailText>
  </TailContainer>
</Container>
);
};

export default SubPage4;
