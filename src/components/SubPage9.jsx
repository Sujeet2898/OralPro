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

const SubPage9 = () => {
  return (
    <Container>
      <Heading>Importance of Diet for Your Child's Oral Health</Heading>

      <InfoContainer>
        <InfoText>
          - Tooth decay, the main cause of toothache, is often caused by excessive sugar consumption in the diet.
        </InfoText>
        <InfoText>
          - Sugar combines with bacteria in the mouth, leading to acid production that attacks the teeth and can result in cavities.
        </InfoText>
        <InfoText>
          - Reducing sugar intake can minimize the damage caused by acid attacks.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Foods to avoid or consume in moderation for good oral health:</Heading>
        <InfoText>
          - Sweets, chocolate, biscuits, cakes, and fizzy drinks are high in sugar and contribute to tooth decay.
        </InfoText>
        <InfoText>
          - Starchy foods like crisps, white bread, and pretzels can get stuck between teeth, prolonging acid exposure.
        </InfoText>
        <InfoText>
          - Fruit smoothies, fruit juice, and dried fruit, although considered healthy, contain high sugar content that can harm teeth if consumed between meals.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Tooth-friendly snack options:</Heading>
        <InfoText>
          - Fresh fruit, fresh vegetables, toast with a savory topping, brown bread, breadsticks, crackers, cheese, milk, water, rice cakes, pita bread, plain yogurt, plain popcorn, and cottage cheese.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Top tips:</Heading>
        <InfoText>
          - Prepare healthy snacks in advance, such as chopped cheese, carrot sticks, grapes, or tangerine segments, for quick and convenient options.
        </InfoText>
        <InfoText>
          - Get creative with tooth-friendly snacks by shaping fruits or vegetables into fun and appealing forms.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Snack guidelines:</Heading>
        <InfoText>
          - Sugary snacks should be limited, and it is best to consume them during mealtimes when saliva production is higher and helps neutralize acid.
        </InfoText>
        <InfoText>
          - Consuming sugary snacks between meals reduces saliva production, making teeth more susceptible to acid damage and increasing the risk of tooth decay.
        </InfoText>
        <InfoText>
          - Opt for tooth-friendly snacks for in-between meal snacking.
        </InfoText>
      </InfoContainer>

      <TailText>
        Important note: With the exception of water, no food or drink should be given to your child within an hour before bedtime to protect their oral health.
      </TailText>

      <TailText>
        Fun fact: Many popular snacks and beverages contain high amounts of sugar, exceeding the World Health Organization's recommended daily intake in a single serving.
        Making tooth-friendly snacks more visually appealing by creating shapes or designs can make them more enticing to children.
      </TailText>
    </Container>
  );
};

export default SubPage9;
