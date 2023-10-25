import React from 'react';
import styled from 'styled-components';
import { scale } from '../utils/typography';
import { colors } from '../utils/theme';

const StyledFooter = styled.footer`
  text-align: center;
  color: ${colors.lightBlack};
  ${scale(-0.5)}
  a {
    color: ${colors.lightBlack};
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Copyright whenever. This site is{' '}
      <a href="https://github.com/kgritesh/personal-site" target="_blank">
        opensource
      </a>
      .
      <br />
      <a href="mailto:ritesh+website@vertexcover.io" rel="me">
        mail
      </a>{' '}
      |{' '}
      <a href="https://twitter.com/krg85" rel="me">
        twitter
      </a>{' '}
      | <a href="https://vertexcover.dev/rss.xml">rss</a>
    </p>
  </StyledFooter>
);

export default Footer;
