import styled from 'styled-components';
import { rhythm } from '../../utils/typography';
import { colors } from '../../utils/theme';

export const StyledProject = styled.div`
  animation-name: fadeIn;
  animation-duration: 0.5s;
  padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    a{
      text-decoration:none;
    }
  h3,p {
    // margin-bottom: ${rhythm(1 / 4)};
    margin:0;
  }
  h3 {
width:fit-content;    display: flex;
    align-items: center;
    gap:5px;
    flex-direction: row;
}
    .arrow{
      display : inline ;
    }}

  small {
    color: ${colors.blue};
  }
  h3:hover {
    
    text-decoration: underline;
    text-decoration-color: ${colors.red};
    .arrow{
      display : inline;
    }}
  :hover {
    border:1px solid ${colors.lightBlack};
    border-radius: 8px;
  }
`;

export const StyledArticle = styled.div`
  animation-name: fadeIn;
  animation-duration: 0.5s;
  h3 {
    margin-bottom: ${rhythm(1 / 4)};
  }
  p {
    margin-bottom: 0;
  }
  small {
    color: ${colors.blue};
    margin-bottom: ${rhythm(1 / 2)};
  }
`;

export const StyledSummary = styled.p`
  color: ${colors.palered};
`;
export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
