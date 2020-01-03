import React from 'react';
import styled from 'styled-components';
import { MdSearch as SearchIcon } from 'react-icons/md';

const HeaderSearchButtonBlock = styled.div`
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.024) none repeat scroll 0% 0%;
    color: rgb(107, 255, 183, 1);
  }

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

interface HeaderSearchButtonProps {}

const HeaderSearchButton = ({  }: HeaderSearchButtonProps) => {
  return (
    <HeaderSearchButtonBlock>
      <SearchIcon />
    </HeaderSearchButtonBlock>
  );
};

export default HeaderSearchButton;
