import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

export const NavWrapper = styled('nav')`
  width: 100%;
  margin: 0;
  padding: 2px;
`;

export const Nav = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function NavBar() {
  const items = [{ icon: 'test' }, { icon: 'test1' }, { icon: 'test2' }, { icon: 'test3' }];
  return (
    <NavWrapper>
      <Nav>
        {items.map(({ icon }, i) => (
          <NavItem icon={icon} key={i} />
        ))}
      </Nav>
    </NavWrapper>
  );
}

export default NavBar;
