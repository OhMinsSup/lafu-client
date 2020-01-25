import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as writeActions } from '../../store/modules/write';
import { RootStore } from '../../store/modules';
import MarkdownEditor from '../../components/write/MarkdownEditor';
import { bindActionCreators } from 'redux';
import TagInput from '../../components/write/TagInput';
import WriteFooter from '../../components/write/WriteFooter';
import DragDropUpload from '../../components/common/DragDropUpload';
import PasteUpload from '../../components/common/PasteUpload';
import useUpload from '../../lib/hooks/useUpload';

interface MarkdownEditorContainerProps {}

const MarkdownEditorContainer: React.FC<MarkdownEditorContainerProps> = () => {
  const { initialBody, title, tags, markdown } = useSelector(
    (state: RootStore) => state.write,
  );

  const dispatch = useDispatch();
  const actionCreators = useMemo(
    () => bindActionCreators(writeActions, dispatch),
    [dispatch],
  );

  const [upload, file] = useUpload();
  const onDragDropUpload = useCallback((file: File) => {
    console.log(file);
  }, []);

  return (
    <React.Fragment>
      <MarkdownEditor
        title={title}
        initialBody={initialBody}
        markdown={markdown}
        onUpload={upload}
        onChangeMarkdown={actionCreators.changeMarkdown}
        onChangeTitle={actionCreators.changeTitle}
        tagInput={<TagInput tags={tags} onChange={actionCreators.changeTags} />}
        footer={
          <WriteFooter
            onPublish={() => {}}
            onTempSave={() => {}}
            edit={false}
          />
        }
      />
      <DragDropUpload onUpload={onDragDropUpload} />
      <PasteUpload onUpload={onDragDropUpload} />
    </React.Fragment>
  );
};

export default MarkdownEditorContainer;
