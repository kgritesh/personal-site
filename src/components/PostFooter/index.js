import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { StyledSummary } from './styles';
import { rhythm, scale } from '../../utils/typography';

const query = graphql`
  query {
    about: mdx(frontmatter: { title: { eq: "About Me" } }) {
      id
      fields {
        slug
      }
      frontmatter {
        githubURL
      }
    }

    resume: file(relativePath: { eq: "resume.pdf" }) {
      publicURL
    }
  }
`;

const PostFooter = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <StyledSummary>
        <hr />
        <i>Check out my </i>
        <a href={data.about.frontmatter.githubURL} target="_blank">
          Github
        </a>{' '}
        <i>
          for a list of other open source projects that i have worked on. My complete work
          experience can be found
        </i>{' '}
        <a href={data.resume.publicURL} target="_blank">
          here
        </a>
        <i>.</i>
      </StyledSummary>
    )}
  />
);

export default PostFooter;
