import Markdown from 'react-markdown'
import styled from "styled-components"

const OutputContainer = styled.div`
  width: 100%;
`;

const MarkdownContainer = styled.div`
  padding: 20px 20px;
`;

interface MarkdownOutputProps {
  markdown: string;
}

export default function MarkdownOutput({ markdown }: MarkdownOutputProps) {
  return (
    <OutputContainer>
      <MarkdownContainer>
        <Markdown>{markdown}</Markdown>
      </MarkdownContainer>
    </OutputContainer>
  )
}
