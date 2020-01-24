import React from 'react';
import styled from 'styled-components';

const SideMenuBlock = styled.div`
  position: fixed;
  background: #fff;
  height: calc(100% - 80px);
  width: 264px;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.05), -1px 1px 0 0 rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  .sidemenu {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .sidemenu-scroller {
      position: absolute;
      width: 6px;
      transition: opacity 200ms ease 0s;
      opacity: 0;
      right: 2px;
      bottom: 2px;
      top: 2px;
      border-radius: 3px;
      .scroller {
        position: relative;
        display: block;
        width: 2px;
        background-color: white;
        left: 6px;
        border-left: 2px solid rgb(27, 233, 148);
        height: 233px;
        transform: translateY(150.108px);
      }
    }
    .sidemenu-wrapper {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      overflow: scroll;
      margin-right: -25px;
      margin-bottom: -25px;
      .sidemenu-padding {
        padding: 2rem 0;
      }
    }
  }
`;

interface SideMenuProps {
  children: React.ReactNode;
}

const SideMenu = ({ children }: SideMenuProps) => {
  return (
    <SideMenuBlock>
      <div className="sidemenu">
        <div className="sidemenu-wrapper">
          <div className="sidemenu-padding">{children}</div>
        </div>
        {/* <div className="sidemenu-scroller">
          <div className="scroller" />
        </div> */}
      </div>
    </SideMenuBlock>
  );
};

export default SideMenu;
