import { ButtonBaseProps, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { MouseEventHandler } from 'react';

interface Props extends ButtonBaseProps {
  onClick: MouseEventHandler;
  color?: 'primary';
  displayValue?: string;
}

const TrashButton = ({ onClick, color, displayValue, ...rest }: Props) => {
  const buttonStyle = displayValue ? { display: displayValue } : {};

  return (
    <IconButton onClick={onClick} size="small" aria-label="delete" {...rest} style={buttonStyle}>
      <DeleteIcon fontSize="small" color={color ? 'error' : 'inherit'} />
    </IconButton>
  );
};

export default TrashButton;
