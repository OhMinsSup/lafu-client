import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EmailInputBlock = styled.form`
  width: 100%;
  display: flex;
  height: 3rem;
  margin-bottom: 1rem;
  input {
    flex: 1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${palette.gray3};
    &::placeholder {
      color: ${palette.gray6};
    }
    &:disabled {
      background: ${palette.gray1};
    }
  }
  button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background: ${palette.teal20};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 5rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: ${palette.teal5};
    }
    &:disabled {
      background: ${palette.gray5};
      color: ${palette.gray3};
      cursor: default;
    }
  }
`;

interface EmailInputProps {
  value: string;
  mode: 'REGISTER' | 'LOGIN';
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (value: string) => void;
}

const EmailInput = ({
  onChange,
  value,
  onSubmit,
  mode,
  disabled,
}: EmailInputProps) => {
  return (
    <EmailInputBlock
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        onChange={onChange}
        value={value}
        tabIndex={2}
        placeholder="이메일을 입력하세요."
        disabled={disabled}
      />
      <button tabIndex={3} disabled={disabled}>
        {mode === 'REGISTER' ? '회원가입' : '로그인'}
      </button>
    </EmailInputBlock>
  );
};

export default EmailInput;
