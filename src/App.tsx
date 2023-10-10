import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'
import './App.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const MarkdownContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`)
  const [showGuide, setShowGuide] = useState(false)

  const onToggleGuide = () => {
    setShowGuide(!showGuide)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value)
  }

  return (
    <Container>
      <Header onToggleGuide={onToggleGuide} />
      {
        showGuide && <MarkdownGuide />
      }
      <MarkdownContainer>
        <MarkdownInput value={markdown} onChange={(e) => handleChange(e)} />
        <MarkdownOutput markdown={markdown} />
      </MarkdownContainer>
    </Container>
  )
}

export default App
