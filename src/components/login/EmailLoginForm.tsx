import * as React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import palette from '../../lib/styles/palette';

const EmailLoginFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${palette.gray8};
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${palette.gray6};
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: ${palette.teal6};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export interface EmailLoginFormProps {}

const EmailLoginForm = ({  }: EmailLoginFormProps) => {
  return (
    <EmailLoginFormBlock>
      <div>
        <h2 data-testid="title">로그인</h2>
        <section>
          <h4>이메일로 로그인</h4>
          <EmailForm
            value=""
            onChange={() => ({})}
            onSubmit={() => ({})}
            mode="LOGIN"
            disabled={false}
          />
        </section>
      </div>
    </EmailLoginFormBlock>
  );
};

export default EmailLoginForm;
