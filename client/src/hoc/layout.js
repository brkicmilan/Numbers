import React from 'react';

import Heder from '../components/Heder/heder';

const Layout = (props) => {
  return (
    <div>
      <Heder />
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;