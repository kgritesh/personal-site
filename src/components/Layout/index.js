import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Footer from '../Footer';
import mdxComponents from '../Mdx';
import { StyledLayout, StyledCrumb, GlobalStyle } from './styles';
import UpdatePrompt from '../UpdatePrompt';

const renderBreadcrumb = (pathname) => {
  // TODO: refactor this!
  const parts = pathname.match(/[^\/]+/g);
  const crumbs = [<Link to={'/'}>Home /</Link>];
  let link = '/';
  for (let i = 0; i < parts.length - 1; ++i) {
    link = link + parts[i] + '/';
    crumbs.push(<Link to={link}>{` ${parts[i]} /`}</Link>);
  }
  return (
    <div>
      {crumbs.map((crumb, index) => (
        <span key={index}>{crumb}</span>
      ))}
    </div>
  );
};

const Layout = ({ children, title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  console.log('Location: ', location.pathname);
  if (location && location.pathname === rootPath) {
    header = (
      <div>
        <h1 className="headline">Ritesh Kadmawala</h1>
        <h2 className="description">Problem Solver | Engineering Leader | 2x Entrepreneur</h2>
      </div>
    );
  } else {
    header = <StyledCrumb>{renderBreadcrumb(location.pathname)}</StyledCrumb>;
  }
  return (
    <React.Fragment>
      <StyledLayout isIndex={location.pathname === rootPath}>
        <GlobalStyle />
        {header}
        <MDXProvider components={mdxComponents}>
          <React.Fragment>{children}</React.Fragment>
        </MDXProvider>
      </StyledLayout>
      {location.pathname !== rootPath && <Footer />}
      <UpdatePrompt />
    </React.Fragment>
  );
};

export default Layout;
