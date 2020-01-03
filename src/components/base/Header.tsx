import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSearchButton from './HeaderSearchButton';

const LogoArea = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .logo-area {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    text-decoration: none;
    .logo {
      font-size: 2.2rem;
      color: ${palette.gray8};
    }
  }
`;

const HeaderDesktop = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 1200px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 5rem;
  color: rgb(40, 42, 53);
  margin: 0px auto;
  .header-links {
    margin-left: 2.5rem;
    display: flex;
    a {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-weight: 800;
      color: inherit;
      text-decoration: none;
    }

    a + a {
      margin-left: 2rem;
    }
  }

  .right {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    margin-left: auto;
    color: rgb(40, 42, 53);
  }
`;

const HeaderMobile = styled.div`
  display: none;
  height: 4.25rem;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 15;
  background: white;
`;

const HeaderBlock = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
  .main-header-wrapper {
    position: relative;
    box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
    background: white;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <div className="main-header-wrapper">
        <HeaderDesktop>
          <LogoArea>
            <Link className="logo-area" to="/">
              <span className="logo">Lafu</span>
            </Link>
          </LogoArea>
          <div className="header-links">
            <Link to="/tags">태그검색</Link>
            <Link to="/thems">테마추천</Link>
            <Link to="/daily">요일별 신작</Link>
            <Link to="/voucher">멤버십</Link>
          </div>
          <div className="right">
            <HeaderSearchButton />
            <HeaderLoginButton />
          </div>
        </HeaderDesktop>
        <HeaderMobile>sdsds</HeaderMobile>
      </div>
    </HeaderBlock>
  );
};

export default Header;
