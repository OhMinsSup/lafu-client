import React, { useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { actions as writeActions } from '../../store/modules/write';
import { RootStore } from '../../store/modules';
import MarkdownEditor from '../../components/write/MarkdownEditor';
import { bindActionCreators } from 'redux';
import TagInput from '../../components/write/TagInput';
import WriteFooter from '../../components/write/WriteFooter';

interface MarkdownEditorContainerProps {}

const MarkdownEditorContainer: React.FC<MarkdownEditorContainerProps> = () => {
  const { initialBody, title, tags } = useSelector(
    (state: RootStore) => state.write,
  );

  const dispatch = useDispatch();
  const actionCreators = useMemo(
    () => bindActionCreators(writeActions, dispatch),
    [dispatch],
  );

  return (
    <React.Fragment>
      <MarkdownEditor
        title={title}
        initialBody={initialBody}
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
    </React.Fragment>
  );
};

export default MarkdownEditorContainer;
