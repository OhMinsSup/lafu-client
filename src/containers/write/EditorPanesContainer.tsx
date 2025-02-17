import React from 'react';
import EditorPanes from '../../components/write/EditorPanes';
import MarkdownEditorContainer from './MarkdownEditorContainer';
import MarkdownPreviewContainer from './MarkdownPreviewContainer';

interface EditorPanesContainerProps {}

const EditorPanesContainer: React.FC<EditorPanesContainerProps> = () => {
  return (
    <EditorPanes
      left={<MarkdownEditorContainer />}
      right={<MarkdownPreviewContainer />}
    />
  );
};

export default EditorPanesContainer;
