import React, { ReactElement } from 'react';
import './index.css';

const Layout = (props: { children: React.ReactChild[] | React.ReactChild }): ReactElement => {
  return <div>{props.children}</div>;
};

export default Layout;
