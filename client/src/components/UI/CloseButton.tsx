import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler;
  className: string;
}

const CloseButton = ({ onClick, className }: Props) => {
  return (
    <div className={className}>
      <IconButton
        className="w-[3rem] h-[3rem]"
        onClick={onClick}
        size="small"
        aria-label="delete"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default CloseButton;
