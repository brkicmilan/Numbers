import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavItems';

const Nav = (props) => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: '#242424',
        maxWidth: '270px'
      }}
    >
      <SidenavItems />
    </SideNav>
  );
};

export default Nav;