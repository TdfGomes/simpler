import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';
import {items} from './config'

export const Nav = styled('nav')`
  width: 100%;
  margin: 0;
  padding: 2px;
`;

export const UL = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function NavBar() {

  return (
    <Nav>
      <UL>
        {items.map((item, i) => (
          <NavItem {...item} key={i} />
        ))}
      </UL>
    </Nav>
  );
}

export default NavBar;
