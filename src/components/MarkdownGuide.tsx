import styled from "styled-components"

const GuideContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
`;

const H2 = styled.h2`
  font-size: 1.2em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Table = styled.table`
  border-spacing: 0;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  padding: 5px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MarkdownGuide() {
  return (
    <GuideContainer>
      <H2>Markdown Cheat Sheet</H2>
      <Table>
        <tbody>
          <tr>
            <Th>Element</Th>
            <Th>Markdown Syntax</Th>
          </tr>
          <tr>
            <Td>Headers</Td>
            <Td>
              <StyledDiv>
                <code># H1</code>
                <code>## H2</code>
                <code>### H3</code>
              </StyledDiv>
            </Td>
          </tr>
          <tr>
            <Td>Bold</Td>
            <Td>
              <code>**bold text**</code>
            </Td>
          </tr>
          <tr>
            <Td>Italic</Td>
            <Td>
              <code>*italicized text*</code>
            </Td>
          </tr>
          <tr>
            <Td>Blockquote</Td>
            <Td>
              <code>&gt; blockquote</code>
            </Td>
          </tr>
          <tr>
            <Td>Ordered List</Td>
            <Td>
              <StyledDiv>
                <code>1. First Item</code>
                <code>2. Second Item</code>
                <code>3. Third Item</code>
              </StyledDiv>
            </Td>
          </tr>
          <tr>
            <Td>Unordered List</Td>
            <Td>
              <StyledDiv>
                <code>- First Item</code>
                <code>- Second Item</code>
                <code>- Third Item</code>
              </StyledDiv>
            </Td>
          </tr>
          <tr>
            <Td>Code</Td>
            <Td>
              <code>`code`</code>
            </Td>
          </tr>
          <tr>
            <Td>Horizontal Rule</Td>
            <Td>
              <code>---</code>
            </Td>
          </tr>
          <tr>
            <Td>Link</Td>
            <Td>
              <code>[title](https://www.example.com)</code>
            </Td>
          </tr>
          <tr>
            <Td>Image</Td>
            <Td>
              <code>![alt text](image.jpg)</code>
            </Td>
          </tr>
        </tbody>
      </Table>
    </GuideContainer>
  )
}
