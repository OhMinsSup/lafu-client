import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLoginButtonBlock = styled(Link)`
  cursor: pointer;
  height: 2.25rem;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  border: 1px solid white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 800;
  border-radius: 1.125rem;
  opacity: 0.8;
  margin-left: 1rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.02) none repeat scroll 0% 0%;
    opacity: 1;
    color: rgb(107, 255, 183, 1);
  }
`;

interface HeaderLoginButtonProps {}

const HeaderLoginButton = ({  }: HeaderLoginButtonProps) => {
  return (
    <HeaderLoginButtonBlock to="/auth/login">로그인/회원가입</HeaderLoginButtonBlock>
  );
};

export default HeaderLoginButton;
