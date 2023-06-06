import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

const FeatureItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const AboutPage = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <Subheading>Our Story - Revolutionizing Dental Care for Children</Subheading>

      <Text>
        Dental caries, also known as tooth decay, is a global concern affecting nearly 100% of the adult population in most countries. It is the most prevalent oral disease in permanent teeth, impacting 2.4 billion adults worldwide. The prevalence of dental caries among children is also alarming, with over 50% of children in the United States having at least one cavity or restoration. In India, dental caries is particularly prevalent among adults aged 65-74 years and is a primary cause of edentulism in senior citizens.
      </Text>

      <Text>
        At Oral Pro, we have developed Oralscope, an innovative dental device and mobile app designed to tackle the problem of dental caries in children aged 2-14 years. Our solution goes beyond traditional intraoral cameras by integrating cutting-edge machine learning algorithms and gamification techniques to ensure better oral hygiene practices and promote long-term dental health.
      </Text>

      <Subheading>Key Features and Benefits</Subheading>

      <FeatureList>
        <FeatureItem>Advanced Imaging Technology: Oralscope features a high-resolution 2.0-megapixel camera that captures clear images of a child's teeth and oral cavity. This allows parents and dentists to monitor dental health with precision and accuracy.</FeatureItem>
        <FeatureItem>Real-Time Oral Health Monitoring: The accompanying mobile app provides real-time feedback on a child's oral health status. Parents can instantly visualize their child's dental condition, helping them stay informed and proactive in maintaining oral hygiene.</FeatureItem>
        <FeatureItem>Personalized Prompts and Suggestions: Oralscope's machine learning algorithm generates tailored prompts and suggestions to encourage good oral hygiene habits. The app guides children through interactive games, brushing techniques, and reminders, making dental care a fun and engaging experience.</FeatureItem>
        <FeatureItem>Seamless Integration with Dental Practices: Oralscope seamlessly integrates with dental practices, allowing dentists to access crucial information about a child's oral health. This enables them to develop effective treatment plans tailored to each patient's specific needs.</FeatureItem>
        <FeatureItem>Wireless and User-Friendly: Oralscope operates wirelessly on a Wi-Fi network, providing convenience and flexibility for both parents and dentists. The device is easy to use, with a simple one-touch button that activates the camera and illuminates the six LED lights for optimal imaging.</FeatureItem>
        <FeatureItem>Quick Charging and Long Working Time: Oralscope comes with a USB 2.0 charging cable, ensuring fast and efficient charging in just 30 minutes. Once fully charged, the device provides a continuous working time of 30 minutes, ensuring uninterrupted dental examinations.</FeatureItem>
    </FeatureList>

    <Subheading>Challenges and Opportunities in the Oral Health Technology Industry:</Subheading>

    <Text>
    The oral health technology industry presents significant growth potential, with the oral care market projected to reach USD 85.21 billion by 2028. However, startups in this industry face challenges from established companies and substitutes like traditional dental practices and mobile apps.
  </Text>

  <Text>
    To succeed in this competitive landscape, OralPro aims to differentiate itself by offering an integrated solution with advanced features, including machine learning-based feedback and suggestions. By focusing on cost-effectiveness and continuous innovation, we strive to provide a unique value proposition to customers and gain a strong foothold in the oral health technology industry.
  </Text>
</Container>
);
};

export default AboutPage;
