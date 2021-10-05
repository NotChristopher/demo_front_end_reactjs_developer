import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function SignIn() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form">
      <TextField id="standard-basic" label="User Name / Email address" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button href="#text-buttons">sign in</Button>
      <Button href="#text-buttons">sign up</Button>
      </div>

    </Box>
  );
}
export default SignIn;