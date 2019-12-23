import React from 'react';
import styled, { css } from 'styled-components';
import { MdLockOutline } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const LabelInputBlock = styled.fieldset<{ focus: boolean }>`
  margin-bottom: 15px !important;
  border: none;
  margin: 0;
  padding: 0;
  .input-group {
    position: relative;
    .input-group-title {
      font-weight: 400 !important;
      font-family: medium-content-sans-serif-font, 'Lucida Grande',
        'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif !important;
      font-style: normal !important;
      letter-spacing: 0 !important;
      font-size: 15px !important;
      line-height: 20px !important;
      transform: translateY(1.8px);
      color: rgba(0, 0, 0, 0.54) !important;
      fill: rgba(0, 0, 0, 0.54) !important;
    }
    .input-group-input {
      width: 100%;
      text-align: center;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0;
      background: 0 0;
      font-family: medium-content-sans-serif-font, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
      letter-spacing: 0;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
      -moz-appearance: none;
      outline: 0;
      padding: 0 5px;
      height: 35px;
      font-size: 20px !important;
      ${props =>
        props.focus &&
        css`
          color: ${palette.teal7};
          border-color: ${palette.teal7};
        `}
    }
  }
`;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface LabelInputProps extends InputProps {
  label: string;
  name: string;
  value: string;
  placeHolder: string;
  onChange: React.ChangeEventHandler;
}

const LabelInput = ({
  label,
  name,
  value,
  onChange,
  disabled,
}: LabelInputProps) => {
  const [focus, setFocus] = React.useState(false);

  const onFocus = React.useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = React.useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <LabelInputBlock focus={focus}>
      <div className="input-group">
        <label htmlFor={name} className="input-group-title">
          {label}
        </label>
        <input
          className="input-group-input"
          type="text"
          name={name}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
        />
        {disabled && <MdLockOutline />}
      </div>
    </LabelInputBlock>
  );
};

export default LabelInput;
