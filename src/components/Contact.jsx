import React from "react";
import styled from "styled-components";
import { FaSearch, FaCalendar } from 'react-icons/fa';
import { Button } from "../styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    
    .closing-statement {
      margin-top: 4rem;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }
  `;

    const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    `;

  return (
    <Wrapper>
      <ButtonsContainer>
        <Button>
        <FaSearch />&nbsp;&nbsp;
          Find a dentist
        </Button>&nbsp;&nbsp;
        <Button>
        <FaCalendar />&nbsp;&nbsp;
          Book online
        </Button>&nbsp;&nbsp;
      </ButtonsContainer>
      <h2 className="common-heading">Contact OralPro - Let's Create Healthy Smiles Together</h2>

      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1690037925237!2d78.1204651743456!3d17.594707796801195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefdc136bffbb%3A0x73414ff6594c9191!2sIndian%20Institute%20of%20Technology%20Hyderabad!5e0!3m2!1sen!2sin!4v1685854805682!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgebdgvw"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>

        <p className="closing-statement">
          OralPro is committed to revolutionizing dental care for children.
        </p>
      </div>
    </Wrapper>
  );
};

export default Contact;
