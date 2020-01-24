import React from 'react';
import styled, { css } from 'styled-components';
import transitions from '../../lib/styles/transitions';

const EditorPanesBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  animation: ${transitions.fadeIn} 0.5s forwards;
`;

const EditorPane = styled.div<{ shadow?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  ${props =>
    props.shadow &&
    css`
      z-index: 1;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.015);
    `}
`;

interface EditorPanesProps {
  theme?: 'LIGHT' | 'DARK';
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const EditorPanes: React.FC<EditorPanesProps> = ({
  theme = 'LIGHT',
  left,
  right,
}) => {
  return (
    <EditorPanesBlock>
      <EditorPane
        shadow
        style={{
          backgroundColor: theme === 'DARK' ? '#263238' : 'white',
        }}
      >
        {left}
      </EditorPane>
      <EditorPane
        style={{
          backgroundColor: theme === 'DARK' ? 'white' : '#fbfdfc',
        }}
      >
        {right}
      </EditorPane>
    </EditorPanesBlock>
  );
};

export default EditorPanes;
