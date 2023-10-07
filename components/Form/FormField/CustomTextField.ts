import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomTextField = styled(TextField)({
  label: {
    zIndex: 20,
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
  },
  'label.Mui-focused': {
    color: 'white',
  },
  'label.Mui-focused.Mui-error': {
    color: 'red',
  },
  '.MuiOutlinedInput-root': {
    backgroundColor: 'rgba(0,0,0,0.35)',
    fontFamily: 'Open Sans, sans-serif',
    '.MuiOutlinedInput-input': {
      zIndex: 10,
      color: 'white',
    },
    fieldset: {
      borderWidth: 2,
      borderColor: 'white',
    },
    ':hover fieldset': {
      borderColor: 'white',
      backgroundColor: null,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      backgroundColor: null,
    },
    '&.Mui-error fieldset': {
      borderColor: 'red',
      backgroundColor: null,
    },
  },
});
