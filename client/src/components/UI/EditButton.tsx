import { ButtonBaseProps, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { MouseEventHandler } from 'react';

interface Props extends ButtonBaseProps {
  onClick: MouseEventHandler;
  color?: "primary";
  displayValue?: string;
}

const EditButton = ({ onClick , color, displayValue, ...rest}: Props) => {
  const buttonStyle = displayValue ? { display: displayValue } : {};

  return (
    <IconButton onClick={onClick} size="small" aria-label="edit" {...rest} style={buttonStyle}>
      <EditIcon fontSize='small' color={color ? "primary" : "inherit"} sx={{fontSize: "18px", color: '#193CB9'}}/>
    </IconButton>
  );
};

export default EditButton;