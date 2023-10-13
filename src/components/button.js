import React from 'react';
import { OutlinedButton, FilledButton, PlainButton } from '../styles/Navbar';


const button = (props) => {
  const handleClick = (operation) => {
    console.log('operation ===> ', operation);
  };

  return (
    <>
      {props.isOutlined ? 
        <OutlinedButton onClick={handleClick(props.operation)}> {props.title} </OutlinedButton>
      : props.isFilled ? 
        <FilledButton onClick={handleClick(props.operation)}> {props.title} </FilledButton>
      : <PlainButton onClick={handleClick(props.operation)}> {props.title} </PlainButton>
      }
    </>
  );
};

export default button;