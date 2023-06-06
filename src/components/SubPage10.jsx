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

const SubPage10 = () => {
  return (
    <Container>
      <Heading>Smart Swaps for a Healthier Diet</Heading>

      <InfoContainer>
        <InfoText>
          Reduce sugar intake for a healthier lifestyle and promote better oral health.
        </InfoText>
        <InfoText>
          Discover Change4life's Sugar Swaps program, offering helpful resources and ideas to replace unhealthy food choices with smile-friendly alternatives.
        </InfoText>
        <InfoText>
          Sign up online to access a free pack containing a Sugar Swaps Guide, shopping pad, swap idea cards, stickers, and money-off vouchers.
        </InfoText>
      </InfoContainer>

      <InfoContainer>
        <Heading>Recommended Swaps:</Heading>
        <InfoText>
          For Breakfast:
          <ul>
            <li>Choose plain porridge instead of sugary cereals.</li>
            <li>Opt for plain whole wheat biscuits over sweetened breakfast cereals.</li>
            <li>Consider plain shredded whole grain options for a healthier breakfast.</li>
          </ul>
        </InfoText>
        <InfoText>
          For Drinks:
          <ul>
            <li>Encourage water consumption as a sugar-free alternative.</li>
            <li>Select no added sugar drinks or sugar-free options.</li>
            <li>Choose lower-fat milks for a healthier beverage choice.</li>
          </ul>
        </InfoText>
        <InfoText>
          For Snacks:
          <ul>
            <li>Offer fresh fruit as a nutritious and tooth-friendly snack.</li>
            <li>Replace sugary snacks with rice cakes for a low-sugar option.</li>
            <li>Enjoy whole wheat toast with a spread low in fat.</li>
            <li>Opt for whole wheat biscuits instead of high-sugar alternatives.</li>
            <li>Consider unsalted nuts for a satisfying and healthy snack.</li>
            <li>Try fruit teacakes as a tasty, lower-sugar treat option.</li>
          </ul>
        </InfoText>
      </InfoContainer>

      <InfoText>
        Remember to visit <a href="https://smarttools.change4life.co.uk">smarttools.change4life.co.uk</a> for more information on the Sugar Swaps program and access helpful resources.
      </InfoText>

      <InfoText>
        Did you know? Reducing sugar intake in your child's diet not only promotes overall health but also contributes to healthier teeth and gums.
      </InfoText>
    </Container>
  );
};

export default SubPage10;
