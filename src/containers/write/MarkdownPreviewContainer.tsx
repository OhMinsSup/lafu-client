import React from 'react';
import { useSelector } from 'react-redux';
import MarkdownPreview from '../../components/write/MarkdownPreview';
import { RootStore } from '../../store/modules';

interface MarkdownPreviewContainerProps {}

const MarkdownPreviewContainer: React.FC<
  MarkdownPreviewContainerProps
> = () => {
  const { markdown, title } = useSelector((state: RootStore) => state.write);
  return <MarkdownPreview title={title} markdown={markdown} />;
};

export default MarkdownPreviewContainer;
