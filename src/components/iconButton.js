import React from 'react';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const IconButtons = (props) => {
  const handleClick = (operation) => {
    console.log('operation ===> ', operation);
  };
  let DisplayIcon
  switch (props.iconButtonFor) {
    case 'shop':
        DisplayIcon = <PrintOutlinedIcon />
    break;
    case 'approve':
    case 'select':
        DisplayIcon = <CheckIcon />
    break;
    case 'missing':
    case 'close':  
        DisplayIcon = <CloseIcon />
    break;
    default:
        DisplayIcon = ''
    break;
  }

  return <>
    {DisplayIcon ? <IconButton onClick={handleClick(props.operation)}> {DisplayIcon} </IconButton> : ''}
  </>
};

export default IconButtons;