import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdTrendingUp, MdAccessTime, MdSortByAlpha } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const MenuItem = styled(NavLink)`
  display: flex;
  color: ${palette.gray8};
  text-decoration: none;
  height: 48px;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.125rem;
  border-left: 3px solid transparent;
  transition: 0.125s all ease-in;
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  &.active {
    background: ${palette.teal0};
    border-color: ${palette.teal20};
    color: ${palette.teal20};
    font-weight: bold;
  }
`;

interface SideMenuContentsProps {}

const SideMenuContents = ({  }: SideMenuContentsProps) => {
  return (
    <React.Fragment>
      <MenuItem
        to="/reviews?order=recent"
        activeClassName="active"
        isActive={(match, location) => {
          return ['', '?order=recent'].indexOf(location.search) !== -1;
        }}
      >
        <MdAccessTime />
        최신 리뷰
      </MenuItem>
      <MenuItem
        to="/reviews?order=trending"
        activeClassName="active"
        isActive={(match, location) => {
          return ['?order=trending'].indexOf(location.search) !== -1;
        }}
      >
        <MdTrendingUp />
        인기 리뷰
      </MenuItem>
      <MenuItem
        to="/reviews?order=alpha"
        activeClassName="active"
        isActive={(match, location) => {
          return ['?order=alpha'].indexOf(location.search) !== -1;
        }}
      >
        <MdSortByAlpha />
        이름순 리뷰
      </MenuItem>
    </React.Fragment>
  );
};

export default SideMenuContents;
