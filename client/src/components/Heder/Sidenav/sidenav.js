import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavItems';

const Nav = (props) => {
  return (
    <div
      onClick={props.onHideNav}
    >
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '270px'
        }}
      >
        <SidenavItems hide={props.onHideNav} />
      </SideNav>
    </div>
  );
};

export default Nav;