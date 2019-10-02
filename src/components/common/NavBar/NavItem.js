import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled('li')`
  width: 55px;
  height: 55px;
  margin-right: 2px;
  padding: 5px;
  display: inline-block;
  border: 1px solid #bbb;
  background-color: #eee;
`;

function NavItem({ icon, to }) {
  return (
    <Li>
      <Link to={to}>{React.createElement(icon)}</Link>
    </Li>
  );
}

NavItem.propTypes = {
  icon: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
