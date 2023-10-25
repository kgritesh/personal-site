import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { StyledIndex, ThemeSwitch } from '../components/styles/index-page';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { LinkedinIcon, GithubIcon, TwitterIcon, ResumeIcon, EmailIcon } from '../components/Icons';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const { email, phone, linkedinURL, twitterURL, githubURL } = data.about.frontmatter;

    const resumeURL = data.resume.publicURL;

    return (
      <React.Fragment>
        <StyledIndex>
          <div className="indexIntro">
            <Layout location={this.props.location} title={siteTitle}>
              <SEO />
              <ul className="introSocialLinks">
                <li>
                  <a
                    target="_blank"
                    href={twitterURL}
                    rel="noopener"
                    aria-label="My twitter profile"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={linkedinURL}
                    rel="noopener"
                    aria-label="My linkedin profile"
                  >
                    <LinkedinIcon />
                  </a>
                </li>
                <li>
                  <a target="_blank" href={githubURL} rel="noopener" aria-label="My Github page">
                    <GithubIcon />
                  </a>
                </li>
                <li>
                  <a target="_blank" href={resumeURL} rel="noopener" aria-label="My Resume">
                    <ResumeIcon />
                  </a>
                </li>
                <li>
                  <a target="_blank" href={`mailto:${email}`} rel="noopener" aria-label={email}>
                    <EmailIcon />
                  </a>
                </li>
              </ul>
              <nav>
                <p>
                  <Link to="/projects">Projects</Link>
                </p>
              </nav>
            </Layout>
          </div>
        </StyledIndex>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    about: mdx(frontmatter: { title: { eq: "About Me" } }) {
      id
      fields {
        slug
      }
      frontmatter {
        email
        phone
        twitterURL
        linkedinURL
        githubURL
      }
    }
    resume: file(relativePath: { eq: "resume.pdf" }) {
      publicURL
    }
  }
`;
