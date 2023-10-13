import React from 'react';
import { OutlinedButton, FilledButton } from '../styles/Navbar';

const button = (props) => {
  const handleClick = (operation) => {
    console.log('operation ===> ', operation);
  };

  return (
    <>
      {props.isOutlined ? 
        <OutlinedButton onClick={handleClick(props.operation)}> {props.title} </OutlinedButton>
      : <FilledButton onClick={handleClick(props.operation)}> {props.title} </FilledButton>}
    </>
  );
};

export default button;