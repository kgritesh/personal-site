// @ts-nocheck
import styled, { createGlobalStyle } from 'styled-components';
import { rhythm, scale } from '../../utils/typography';
import { colors, themeVariables } from '../../utils/theme';

/**
 * Global styles are placed here instead of gatsby-browser.js
 * beacuse, we make use of the power of styled-components
 * and can change the theme easyly.
 */
export const GlobalStyle = createGlobalStyle`
  ${themeVariables}

  body {
    background: ${colors.background};
    color: ${colors.text};
    font-display: auto;
    transition: background 0.2s ease;
  }

  h1,h2,h3 {
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1)};
    color: ${colors.headings};
      a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;

      &:hover {
        // text-decoration: none;
        text-decoration: underline;
        text-decoration-color: ${colors.red};
     
      }
    }
  }

  a {
    color: ${colors.headings};
    text-decoration: none;

    &:hover {
      color: ${colors.text};
      text-decoration: underline;
      text-decoration-color: ${colors.red};
    }
  }

  hr {
    background: gray;
  }

  .gh-card-wrap {
    margin-top: 20px;
    .github-card {
      .card {
        margin: 0 auto;
        max-width: 400px;
        border-radius: 5px;
        border: 1px solid ${colors.gray500};
        .main {
          border-bottom: 1px solid ${colors.gray500};
          padding: 0 10px;
          .user {
            display: flex;
            .avatar {
              margin: 10px;
              border-radius: 50%;
              border: 2px solid ${colors.inverseBg};
            }
            .user-details {
              margin: 10px;
              h3 {
                margin: 10px 0px;
              }
              p {
                margin: 0;
              }
            }

          }
        }
        .stats {
          padding: 0 10px;
          margin: 10px;
          text-align: right;
          .summary {
            font-size: 0.9em;
          }
        }
      }
      .card-caption {
        text-align: center;
        font-size: 0.8em;
        font-weight: 200;
        margin: 0;
        a {
          color: ${colors.blue};
          font-weight:400

        }
      }
    }
  }

  blockquote {
    background: ${colors.gray700};
    border-left: 4px solid ${colors.text};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px;
    font-size: 1.2em;
    font-style: italic;
  }

  :not(pre) > code {
    border-radius: .3em;
    color: ${colors.palered};
    padding: .1em;
    background: ${colors.gray700};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .indexIntro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 0;

    .headline {
      font-size: 4rem;
      margin: 0 0 13px;
      letter-spacing: 0.5px;
      text-align: center;
    }

    .description {
      font-size: 1.85rem;
      font-weight: 500;
      font-style: normal;
      color: #000;
      margin: 0 auto 30px;
      text-align: center;

    }
  }
  @media (max-width: 600px) {
    .headline {
      font-size:      2.5rem !important;
    }
    .description {
      font-size: 1.2rem !important;
    }

  }
  @media (min-width: 880px) {
    .indexIntro {
      /* margin-left: -10vw; */
      position: relative;
      left: 0px;
      max-width: 1000px;
      h1 {
        font-size: 3rem;
      }
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
  }
`;

export const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 860px;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  ${({ isIndex }) => (isIndex ? '' : `min-height: calc(100vh - 88px);`)}
`;

export const StyledCrumb = styled.h2`
  a:hover {
    text-decoration: none;
  }
  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  span {
    text-transform: capitalize;
    margin-right: ${rhythm(1 / 4)};
  }
`;
