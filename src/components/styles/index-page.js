import styled from 'styled-components';
import { rhythm, scale } from '../../utils/typography';
import { colors } from '../../utils/theme';

export const StyledIndex = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  strong {
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation-name: fadeIn;
    animation-duration: 0.5s;
    margin-top: 40px;

    p {
      font-size: 2em;
      font-weight: 500;
      color: white;
      padding: 0px 15px;
      background: black;
      border-radius: 8px;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .introSocialLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;

    li {
      list-style-type: none;
      height: 45px;
      width: 45px;
      transition: 0.2s;
      background-color: '#f9f9f9';
      transition: '0.37s';
    }

    li:hover {
      transform: translateY(-10px);
    }

    .icon {
      transition: '0.37s';
      height: 15px;
      width: auto;
      background-color: '#f9f9f9';
      fill: '#080708';
    }
  }
  @media (max-width: 600px) {
    nav p {
      font-size: 1.5em !important;
    }
  }

  @media (min-width: 880px) {
    .introSocialLinks {
      margin-bottom: 25px;
      li {
        height: 55px;
        width: 55px;
      }
      .icon {
        height: 25px;
      }
    }
  }
`;
