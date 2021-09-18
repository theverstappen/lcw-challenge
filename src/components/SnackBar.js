import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

 const  SnackBar = ({ isOpen, text, handleClick }) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: isOpen, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={1600}
        open={isOpen}
        onClose={handleClose}
        handleClick={handleClick}
        message={text}
        key={vertical + horizontal}
      />
    </div>
  );
}

export default SnackBar;