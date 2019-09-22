import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

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
  const items = [
    {
      to: '/edit',
      icon: 'Edit',
    },
    {
      to: '/efxs',
      icon: 'Efxs',
    },
    {
      to: '/record',
      icon: 'Record',
    },
    {
      to: '/settings',
      icon: 'Settings',
    },
  ];
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
