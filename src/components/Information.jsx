import React from 'react';
import styled from 'styled-components';
import nurtureImage from "../images/nurture.jpg";
import journeyImage from "../images/journey.png";
import { Link } from 'react-router-dom';
import { Button } from "../styles/Button";
import { FaSearch, FaCalendar } from 'react-icons/fa';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Left align the text */
  text-align: left; /* Left align the text */

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const SubHeadingLink = styled(Link)`
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: left; /* Left align the text */

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

const InformationPage = () => {
  return (
    <Container>
      <ButtonsContainer>
        <Button>
        <FaSearch />&nbsp;&nbsp;
          Find a dentist
        </Button>&nbsp;&nbsp;
        <Button>
        <FaCalendar />&nbsp;&nbsp;
          Book online
        </Button>
      </ButtonsContainer>
      <ContentContainer>
        <LeftSide>
          <Image src={journeyImage} alt="Child journey Image" />
          <Image src={nurtureImage} alt="Nurturing Your Child's Path to Optimal Dental Health" />
        </LeftSide>
        <RightSide>
          <Heading>Nurturing Your Child's Path to Optimal Dental Health</Heading>
          <p>In the whirlwind of early development, your child's body and teeth undergo remarkable changes. To help you navigate this crucial phase, we've curated a comprehensive guide packed with vital insights to safeguard your child's radiant smile.</p>
          <br />
          <SubHeadingLink to="/information/subpage1">
            Making the First Dental Visit a Positive Experience for Your Child
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage2">
            Nurturing Healthy Smiles in Babies: 6 Months to 1 Year
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage3">
            Exploring the Dental Milestones of Toddlers: 1 to 3 Years
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage4">
            Nurturing Dental Habits in Preschoolers: 3 to 5 Years
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage5">
            Growing Independence: Dental Care for Big Kids: 5 to 8 Years
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage6">
            Dental Care for Expectant Mothers
            </SubHeadingLink>
          <SubHeadingLink to="/information/subpage7">
            Understanding Fluoride
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage8">
            Effective Toothbrushing Tips
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage9">
            Importance of Diet for Your Child's Oral Health
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage10">
            Smart Swaps for a Healthier Diet
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage11">
            Common Problems in Children's Dental Health
          </SubHeadingLink>
          <SubHeadingLink to="/information/subpage12">
            Dental Health Activity Pack
          </SubHeadingLink>
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

export default InformationPage;
