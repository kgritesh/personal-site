import styled from 'styled-components';
import { rhythm, scale } from '../../utils/typography';
import { colors } from '../../utils/theme';

export const StyledDate = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
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
  margin-bottom: 5px;
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
    padding: 8px;
  }

  span {
    margin-right: 10px;
    border: 1px solid ${colors.purple};
    padding: 0px 8px;
    border-radius: 10px;
    color: ${colors.purple};

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
    text-decoration: underline;
    text-decoration-color: ${colors.red};

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
