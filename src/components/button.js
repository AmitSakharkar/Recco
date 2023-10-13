import React from 'react';
import { OutlinedButton, FilledButton } from '../styles/Navbar';

const button = (props) => {
  const structure = props.isOutlined ? OutlinedButton :  FilledButton;
  return (
        <structure
          onClick={props.handleClick(props.operation)}
        >
          {props.title}
        </structure>
    );
};

export default button;