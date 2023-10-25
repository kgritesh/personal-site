import styled from 'styled-components';
import { rhythm, scale } from '../../utils/typography';
import { colors } from '../../utils/theme';

export const StyledDate = styled.p`
  display: block;
  margin-bottom: 10px;
  margin-top: -25px;
  color: ${colors.blue};
`;

export const StyledNextPrev = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  a {
    color: ${colors.yellow};
  }
`;

export const StyledCompany = styled.div`
  font-weight: 500;
  margin-top: 10px;
  h4 {
    display: inline;
  }
`;

export const StyledLink = styled.div`
  margin-bottom: 5px;
  h4 {
    display: inline;
  }
  a {
    color: ${colors.blue};
  }
`;

export const StyledTech = styled.div`
  h4 {
    margin-bottom: 5px;
  }

  .wrapper {
    padding: 8px 8px 8px 0px;
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
  }

  span {
    border: 1px solid var(--purple, #8a65aa);
    padding: 2px 8px;
    line-height: normal;
    border-radius: 15px;
    color: var(--purple, #8a65aa);
    cursor: pointer;

    &:hover {
      color: magenta;
      border-color: magenta;
    }
  }
`;

export const StyledPost = styled.div`
  margin-top: 10px;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  .gatsby-image-wrapper {
    margin-bottom: 20px;
  }
  a {
    color: ${colors.headings};

    &:hover {
      color: ${colors.text};
    }
  }
`;

export const StyledImgCaption = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  font-style: italic;
  opacity: 0.4;
  ${scale(-1 / 5)}
`;
