import { ChangeEvent } from "react";
import styled from "styled-components"

const InputContainer = styled.div`
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: calc(100vh - 70px - 30px);
  padding: 12px 20px;
  box-sizing: border-box;
  border-right: 2px solid #ccc;
  border: 0;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MarkdownInput({ value, onChange }: MarkdownInputProps) {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={(e) => onChange(e)} />
    </InputContainer>
  )
}
