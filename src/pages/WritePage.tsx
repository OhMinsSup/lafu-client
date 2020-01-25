import React from 'react';
import styled from 'styled-components';
import ActiveEditor from '../containers/write/ActiveEditor';

const WritePageBlock = styled.div`
  width: 100%;
  height: 100vh;
`;

interface WritePageProps {}

const WritePage: React.FC<WritePageProps> = () => {
  return (
    <WritePageBlock>
      <ActiveEditor />
    </WritePageBlock>
  );
};

export default WritePage;
