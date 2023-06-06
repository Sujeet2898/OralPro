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

const DownloadButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #ff6b6b;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4f4f;
  }
`;

const SubPage12 = () => {
  return (
    <Container>
      <Heading>Dental Health Activity Pack</Heading>

      <InfoContainer>
        <InfoText>
          Enjoy a fun-filled activity pack to engage children in learning about dental health. Download the PDF activity pack below, which includes Tanu's Tooth's Maze, Space Word Search, and Colouring Sheets. Let your child have a great time while also promoting oral health awareness!
        </InfoText>
      </InfoContainer>

      <DownloadButton href="../invoice.pdf" download>
        Download Activity Pack (PDF)
      </DownloadButton>
    </Container>
  );
};

export default SubPage12;
