import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostFooter from '../components/PostFooter';
import {
  StyledDate,
  StyledNextPrev,
  StyledTech,
  StyledPost,
  StyledImgCaption,
  StyledCompany,
  StyledLink,
} from '../components/styles/post';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <SEO isBlogPost frontmatter={{ ...post.frontmatter, slug: post.fields.slug }} />
        <h1>{post.frontmatter.title}</h1>
        <StyledDate>{post.frontmatter.period}</StyledDate>
        {post.frontmatter.technologies && (
          <StyledTech>
            <h4>Tech used </h4>
            <div className="wrapper">
              {post.frontmatter.technologies.split(',').map((tech, i) => (
                <span key={`${tech.trim()}-${i}`}>{tech.trim()}</span>
              ))}
            </div>
          </StyledTech>
        )}
        {post.frontmatter.company && (
          <StyledCompany>
            <h4> Company</h4>
            {': '}
            <a target="_blank" href={post.frontmatter.companyURL} rel="noopener" aria-label="">
              {post.frontmatter.company}
            </a>
          </StyledCompany>
        )}
        {post.frontmatter.link && (
          <StyledLink>
            <h4>Link</h4>
            {': '}
            <a target="_blank" href={post.frontmatter.link} rel="noopener" aria-label="">
              {post.frontmatter.link}
            </a>
          </StyledLink>
        )}
        <StyledPost>
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledPost>
        <PostFooter />
        <StyledNextPrev>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </StyledNextPrev>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostById($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      parent {
        ... on File {
          sourceInstanceName
        }
      }
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        technologies
        link
        company
        period
      }
      fields {
        slug
      }
    }
  }
`;
