import 'codemirror/lib/codemirror.css';
import React, { Component } from 'react';
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import styled from 'styled-components';
import { detectJSDOM, checkEmbed } from '../../lib/utils';
import palette from '../../lib/styles/palette';
import zIndexes from '../../lib/styles/zIndexes';
import TitleTextarea from './TitleTextarea';
import Toolbar from './Toolbar';
import AddLink from './AddLink';
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/addon/display/placeholder');

const MarkdownEditorBlock = styled.div`
  height: 100%;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    border-radius: 3px;
    width: 6px;
    &:hover {
      width: 16px;
    }
    background: ${palette.gray1};
  }
  &::-webkit-scrollbar-thumb {
    z-index: 100;
    background: ${palette.gray9};
    /* -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75); */
  }
  & > .wrapper {
    padding-top: 3rem;
    padding-bottom: 10rem;
  }
  .CodeMirror {
    height: auto;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${palette.gray8};
    font-family: 'Fira Mono', 'Spoqa Han Sans', monospace;
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
    .cm-header {
      line-height: 2;
      color: ${palette.gray9};
    }
    .cm-header-1 {
      font-size: 2.5rem;
    }
    .cm-header-2 {
      font-size: 2rem;
    }
    .cm-header-3 {
      font-size: 1.5rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.3125rem;
    }
    .cm-strong,
    .cm-em {
      color: ${palette.gray9};
    }
    .CodeMirror-placeholder {
      color: ${palette.gray5};
      font-style: italic;
    }
  }
`;

const HorizontalBar = styled.div`
  background: ${palette.gray7};
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const PaddingWrapper = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: ${zIndexes.WriteFooter};
`;

interface MarkdownEditorProps {
  title: string;
  initialBody: string;
  markdown: string;
  tagInput: React.ReactNode;
  footer: React.ReactNode;
  onUpload: () => void;
  onChangeTitle: (title: string) => void;
  onChangeMarkdown: (markdown: string) => void;
}

interface MarkdownEditorState {
  shadow: boolean;
  addLink: {
    top: number;
    left: number;
    visible: boolean;
    stickToRight: boolean;
  };
  clientWidth: number;
}

class MarkdownEditor extends Component<
  MarkdownEditorProps,
  MarkdownEditorState
> {
  toolbarTop = 0;
  codemirror: EditorFromTextArea | null = null;
  block = React.createRef<HTMLDivElement>();
  toolbarElement = React.createRef<HTMLDivElement>();
  editorElement = React.createRef<HTMLTextAreaElement>();

  constructor(props: MarkdownEditorProps) {
    super(props);
    this.state = {
      shadow: false,
      addLink: {
        top: 0,
        left: 0,
        visible: false,
        stickToRight: false,
      },
      clientWidth: 0,
    };
  }

  initialize = () => {
    if (!this.editorElement.current) return;
    this.codemirror = CodeMirror.fromTextArea(this.editorElement.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder: '당신의 이야기를 적어보세요...',
      viewportMargin: Infinity,
      lineWrapping: true,
    });

    // React Unit Testing
    if (detectJSDOM()) return;
    this.codemirror.setValue(this.props.initialBody);
    this.codemirror.on('change', cm => {
      this.props.onChangeMarkdown(cm.getValue());
      this.stickToBottomIfNeeded();
    });
    this.codemirror.on('paste', ((editor: any, e: any) => {
      const clipboardData = e.clipboardData || e.originalEvent.clipboardData;
      if (!clipboardData) return;

      // replace text for embedding youtube, twitte, etc
      const text = clipboardData.getData('Text');
      const check = checkEmbed(text);
      if (check) {
        const selection = editor.getSelection();
        e.preventDefault();
        if (selection.length > 0) {
          editor.replaceSelection(check);
        } else {
          const doc = editor.getDoc();
          const cursor = doc.getCursor();
          const pos = {
            line: cursor.line,
            ch: cursor.ch,
          };
          doc.replaceRange(check, pos);
        }
        return;
      }

      const { items } = clipboardData;
      if (!items) return;
      if (items.length !== 2) return;
      if (items[1].kind === 'file') {
        e.preventDefault();
      }
    }) as any);
  };

  addImageToEditor = (image: string) => {
    if (!this.codemirror) return;
    this.codemirror.getDoc().replaceSelection(`![](${encodeURI(image)})`);
  };

  stickToBottomIfNeeded = () => {
    if (!this.block.current) return;
    const { scrollHeight, scrollTop, clientHeight } = this.block.current;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    if (scrollBottom < 192) {
      this.block.current.scrollTo(0, scrollHeight);
    }
  };

  componentDidMount() {
    this.initialize();
    setTimeout(() => {
      if (this.toolbarElement.current) {
        this.toolbarTop = this.toolbarElement.current.getBoundingClientRect().top;
      }
    });

    if (this.block.current) {
      this.setState({
        clientWidth: this.block.current.clientWidth,
      });
    }

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { shadow, addLink, clientWidth } = this.state;
    const { title, tagInput, footer } = this.props;
    return (
      <MarkdownEditorBlock ref={this.block}>
        <div className="wrapper">
          <PaddingWrapper>
            {/* TODO SSR TextArea */}
            <TitleTextarea
              placeholder="제목을 입력하세요"
              value={title}
              onChange={this.handleTitleChange}
            />
            <HorizontalBar />
            {tagInput}
            {/* TODO Tag Input */}
          </PaddingWrapper>
          <Toolbar
            shadow={shadow}
            forMarkdown={true}
            onClick={this.handleToolbarClick}
            innerRef={this.toolbarElement}
          />
          <PaddingWrapper>
            {addLink.visible && (
              <AddLink
                defaultValue=""
                left={addLink.left}
                top={addLink.top}
                stickToRight={addLink.stickToRight}
                onConfirm={this.handleConfirmAddLink}
                onClose={this.handleCancelAddLink}
              />
            )}
            <textarea ref={this.editorElement} style={{ display: 'none' }} />
          </PaddingWrapper>
        </div>
        <FooterWrapper style={{ width: clientWidth || '50%' }}>
          {/* TODO Footer */}
          {footer}
        </FooterWrapper>
      </MarkdownEditorBlock>
    );
  }

  handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { shadow } = this.state;
    const nextShadow = e.currentTarget.scrollTop > this.toolbarTop;
    if (shadow !== nextShadow) {
      this.setState({
        shadow: nextShadow,
      });
    }

    if (this.block.current) {
      const { clientWidth } = this.block.current;
      if (clientWidth !== this.state.clientWidth) {
        this.setState({
          clientWidth,
        });
      }
    }
  };

  handleResize = () => {
    if (this.block.current) {
      this.setState({
        clientWidth: this.block.current.clientWidth,
      });
    }
  };

  handleOpenAddLink = () => {
    if (!this.codemirror) return;
    const doc = this.codemirror.getDoc();
    const cursor = doc.getCursor();
    const cursorPos = this.codemirror.cursorCoords(cursor);
    if (!this.block.current) return;
    const stickToRight = cursorPos.left > this.block.current.clientWidth - 341;

    this.setState({
      addLink: {
        visible: true,
        top:
          this.block.current.scrollTop +
          cursorPos.top +
          this.codemirror.defaultTextHeight() / 2 +
          1,
        left: cursorPos.left,
        stickToRight,
      },
    });
  };

  handleConfirmAddLink = (link: string) => {
    // 링크삽입하는 내용
    this.setState({
      addLink: {
        ...this.state.addLink,
        visible: false,
      },
    });
    if (!this.codemirror) return;
    const doc = this.codemirror.getDoc();
    const selection = doc.getSelection();
    const cursor = doc.getCursor('end');
    this.codemirror.focus();
    if (selection.length === 0) {
      doc.replaceSelection(`[링크텍스트](${link})`);
      doc.setSelection(
        {
          line: cursor.line,
          ch: cursor.ch + 1,
        },
        {
          line: cursor.line,
          ch: cursor.ch + 6,
        },
      );
      return;
    }
    doc.replaceSelection(`[${selection}](${link})`);
    doc.setCursor({
      line: cursor.line,
      ch: cursor.ch + link.length + 4,
    });
  };

  handleCancelAddLink = () => {
    this.setState({
      addLink: {
        ...this.state.addLink,
        visible: false,
      },
    });
  };

  handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChangeTitle(e.target.value);
  };

  handleToolbarClick = (mode: string) => {
    const codemirror = this.codemirror;

    if (!codemirror) return;
    const doc = codemirror.getDoc();

    const cursor = doc.getCursor();
    const selection = {
      start: doc.getCursor('start'),
      end: doc.getCursor('end'),
    };

    const line = doc.getLine(cursor.line);

    const selectWholeLine = () => {
      doc.setSelection(
        {
          line: cursor.line,
          ch: 0,
        },
        {
          line: cursor.line,
          ch: line.length,
        },
      );
    };

    const removeHeading = (text: string) => {
      return text.replace(/#{1,6} /, '');
    };

    const handlers: {
      [key: string]: Function;
    } = {
      ...[1, 2, 3, 4] // creates handlers for heading1, heading2, heading3, heading4
        .map(number => () => {
          // create handler function
          const characters = '#'.repeat(number);
          const plain = removeHeading(line);
          selectWholeLine();
          doc.replaceSelection(`${characters} ${plain}`);
        })
        .reduce((headingHandlers, handler, index) => {
          // reduce into handlers object
          return Object.assign(headingHandlers, {
            [`heading${index + 1}`]: handler,
          });
        }, {}),
      bold: () => {
        const selected = doc.getSelection();
        if (selected === '텍스트') {
          const isBold = /\*\*(.*)\*\*/.test(
            doc.getRange(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch + 2 },
            ),
          );

          if (isBold) {
            doc.setSelection(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch + 2 },
            );
            doc.replaceSelection('텍스트');
            doc.setSelection(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch - 2 },
            );
            return;
          }
        }
        if (/\*\*(.*)\*\*/.test(selected)) {
          // matches **string**
          doc.replaceSelection(selected.replace(/\*\*/g, ''));
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 4 },
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`**${selected}**`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 4 },
          );
          return;
        }
        doc.replaceSelection('**텍스트**');
        doc.setSelection(
          {
            line: cursor.line,
            ch: cursor.ch + 2,
          },
          {
            line: cursor.line,
            ch: cursor.ch + 5,
          },
        );
      },
      italic: () => {
        let selected = doc.getSelection();

        if (selected.length === 0) {
          doc.replaceSelection(`_텍스트_`);
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 1,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 4,
            },
          );
          return;
        }

        if (selected === '텍스트') {
          const selectLeftAndRight = doc.getRange(
            {
              line: selection.start.line,
              ch: selection.start.ch - 1,
            },
            {
              line: selection.end.line,
              ch: selection.end.ch + 1,
            },
          );
          if (/_(.*)_/.test(selectLeftAndRight)) {
            selected = selectLeftAndRight;
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch - 1,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 1,
              },
            );
            selection.start = {
              line: selection.start.line,
              ch: selection.start.ch - 1,
            };
            selection.end = {
              line: selection.end.line,
              ch: selection.end.ch + 1,
            };
          }
        }

        if (/_(.*)_/.test(selected)) {
          const plain = selected
            .replace(/^_/, '') // remove starting _
            .replace(/_$/, ''); // remove ending _
          doc.replaceSelection(plain);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 2 },
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`_${selected}_`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 2 },
          );
        }
      },
      strike: () => {
        let selected = doc.getSelection();

        if (selected.length === 0) {
          doc.replaceSelection(`~~텍스트~~`);
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 2,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 5,
            },
          );
          return;
        }

        if (selected === '텍스트') {
          const selectLeftAndRight = doc.getRange(
            {
              line: selection.start.line,
              ch: selection.start.ch - 2,
            },
            {
              line: selection.end.line,
              ch: selection.end.ch + 2,
            },
          );
          if (/~~(.*)~~/.test(selectLeftAndRight)) {
            selected = selectLeftAndRight;
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              },
            );
            selection.start = {
              line: selection.start.line,
              ch: selection.start.ch - 2,
            };
            selection.end = {
              line: selection.end.line,
              ch: selection.end.ch + 2,
            };
          }
        }

        if (/~~(.*)~~/.test(selected)) {
          const plain = selected
            .replace(/^~~/, '') // remove starting ~~
            .replace(/~~$/, ''); // remove ending ~~
          doc.replaceSelection(plain);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 4 },
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`~~${selected}~~`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 4 },
          );
        }
      },
      blockquote: () => {
        const matches = /^> /.test(line);
        doc.setSelection(
          { line: cursor.line, ch: 0 },
          { line: cursor.line, ch: line.length },
        );
        if (matches) {
          doc.replaceSelection(line.replace(/^> /, ''));
          doc.setCursor({
            line: cursor.line,
            ch: cursor.ch - 2,
          });
        } else {
          doc.replaceSelection(`> ${line}`);
          doc.setCursor({
            line: cursor.line,
            ch: cursor.ch + 2,
          });
        }
      },
      link: () => {
        this.handleOpenAddLink();
      },
      image: () => {
        this.props.onUpload();
      },
      codeblock: () => {
        const selected = doc.getSelection();
        if (selected.length === 0) {
          doc.replaceSelection('```\n코드를 입력하세요\n```');
          doc.setSelection(
            {
              line: cursor.line + 1,
              ch: 0,
            },
            {
              line: cursor.line + 1,
              ch: 9,
            },
          );
          return;
        }
        doc.replaceSelection(`\`\`\`
${selected}
\`\`\``);
      },
    };

    const handler = handlers[mode];
    if (!handler) return;

    handler();
    codemirror.focus();
  };
}

export default MarkdownEditor;
