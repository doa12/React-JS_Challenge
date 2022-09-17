import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('---', e.target.checked);
    setToggle(!toggle);
  }
  return (
    <StyledLabel htmlFor='checkbox' checked={toggle}>
      <input
        id='checkbox'
        type='checkbox'
        checked={toggle}
        onChange={handleOnChange} />
    </StyledLabel>
  );
}

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 75px; 
  height: 35px;
  background: ${({ checked }) => (checked ? 'slateblue' : 'orange')};
  display: block;
  border-radius: 100px;
  position: relative;
  margin-left: 90vw;
  margin-top: 1em;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '14px' : 'calc(65% - 1px)')};
    top: 10px;  
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 90px;
    transition: 0.3s;
  }
`