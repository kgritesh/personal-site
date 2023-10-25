import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { PostWrap, StyledProject, StyledSummary } from '../components/styles/projects';
import SEO from '../components/SEO';
import PostFooter from '../components/PostFooter';
import { ArrowRight } from '../components/Icons';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Layout location={this.props.location} title="Projects">
        <SEO frontmatter={{ title: 'Projects', slug: '/projects' }} />
        <h1>Projects</h1>
        <p>
          I love to build stuff. This is the list of some of the interesting projects that i have
          hacked on over the years
        </p>

        <PostWrap>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <StyledProject key={node.fields.slug}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  <h3>
                    {title}
                    {/* <ArrowRight className="arrow" /> */}
                  </h3>
                  <small>{node.frontmatter.period}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description }} />
                </Link>
              </StyledProject>
            );
          })}
        </PostWrap>
        <PostFooter />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false }, type: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            period
            title
            published
            description
          }
        }
      }
    }
  }
`;
