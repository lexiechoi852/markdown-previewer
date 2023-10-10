import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #4B4453;
`;

const Button = styled.button`
  background-color: #9EBCBF;
  border-color: #9EBCBF;
  color: white;
  margin-left: auto;
  &:hover {
    background-color: #3A6571;
    border-color: #3A6571;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void
}

export default function Header({ onToggleGuide }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  )
}
