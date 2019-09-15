import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <p>
        If you'd like to see my other work or get in touch with me, you can visit my GitHub or Linkedin. 
      </p>
      <p> 
        Thanks for taking the time to look through my portfolio.
      </p>
      <div className='footer-pic-container'>
        <img href={require('../images/linkedin-logo.png')} 
          alt='Linkedin Logo' />
        <img href={require('../images/github-logo.svg')} 
          alt='GitHub Logo' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #555;
  border: 1px solid #555;

  p {
    color: white;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: red;
  }

  .footer-pic-container {
    display: flex;
    z-index: 5;
  }

  .footer-pic-container img {
    height: 75px;
  }
`;